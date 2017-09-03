<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Intervention\Image\ImageManagerStatic as Img;
use App\Image;
use App\Worker;
use TCG\Voyager\Models\User;
use GuzzleHTTP\Exception\ConnectException;

class FrontendController extends Controller
{
    public function request(Request $request)
    {
        $key = 'image';
        if (!$request->hasFile($key) or !$request->file($key)->isValid()) {
            return response()->json([
                'status' => 'fail',
                'errorMessage' => 'no image'
            ], 400);
        }


        // take file from inpu
        $file = $request->file($key);
        $path = $file->path();

        // resize image
//        Img::make($path)->resize(244, 244)->save();
        Img::make($path)->resize(300, null, function ($constraint) {
            $constraint->aspectRatio();
        });

        // store to public storage
        $path = $file->store('public/img');

        // prepare parameters
        $filename = basename($path);
        $imageUrl = $request->root() . "/storage/img/$filename";
        $imageId = str_random(60);
        $jobId = str_random(60);

        // image object
        $img = new Image;
        $img->user_id = User::where('name', 'public')->first()->id;
        $img->image_id = $imageId;
        $img->job_id = $jobId;
        $img->status = 'pending';
        $img->image_url = $path;

        // send the file to ml server
        $worker = Worker::inRandomOrder()->first();
        if ($worker) {
            try {
                $client = new \GuzzleHttp\Client();
                $response = $client->post($worker->endpoint, [
                    'json' => [
                        'job_id' => $jobId,
                        'image_url' => $imageUrl,
                    ]
                ]);
                if ($response->getStatusCode() == 200) {
                    $img->status = 'processing';
                }
            } catch (ConnectException $e){

            }
        }
        $img->save();

        return response()->json([
            'status' => $img->status,
            'image_url' => $imageUrl,
            'image_id' => $imageId,
        ]);
    }

    public function result(Request $request, $imageId)
    {
//        $imageId = $request->input('image_id');

        $img = Image::where('image_id', $imageId)->first();
        if ($img) {
            $res = [
                'status' => $img->status,
                'image_id' => $imageId
            ];
            if ($img->result) $res['result'] = json_decode($img->result);
            return response()->json($res);
        } else {
            return response()->json([
                'status' => 'failed',
                'errorMessage' => 'no image found'
            ], 404);
        }
    }
}
