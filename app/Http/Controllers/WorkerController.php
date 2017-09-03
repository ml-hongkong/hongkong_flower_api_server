<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Image;

class WorkerController extends Controller
{
    public function finish(Request $request)
    {
        $jobId = $request->input('job_id');
        $result = $request->input('result');
        $img = Image::where('job_id', $jobId)->first();
        if ($img) {
            if ($request->has('result')) {
                $img->status = 'done';
                $img->result = json_encode($result);
                $img->save();
            } else {
                $img->status = 'failed';
                $img->save();
            }
            return response()->json([
                'status' => 'ok'
            ]);
        } else {
            return response()->json([
                'status' => 'failed',
                'errorMessage' => 'cannot find job'
            ]);
        }
    }
}
