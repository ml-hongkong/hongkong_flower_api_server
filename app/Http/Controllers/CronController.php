<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Worker;
use App\Image;

class CronController extends Controller
{

    public function sendAllPending()
    {
        $worker = Worker::inRandomOrder()->firstOrFail();
        $client = new \GuzzleHttp\Client();

        $images = Image::where('status', 'pending')
            ->orWhere(function($q){
                $q->where('status', 'processing');
            })
            ->get();
        foreach ($images as $img) {
            echo '<div>sending <a href="' . $img->image_url . '">' . $img->image_id . '</a> ... ';
            try {
                $response = $client->post($worker->endpoint, [
                    'json' => [
                        'job_id' => $img->job_id,
                        'image_url' => $img->image_url,
                    ]
                ]);
                if ($response->getStatusCode() == 200) {
                    $img->status = 'processing';
                    $img->save();
                    echo 'success';
                } else {
                    echo 'rejected';
                }
            } catch (ConnectException $e) {
                echo 'failed';
            }
            echo '</div>';
        }


    }

}
