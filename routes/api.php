<?php

use Illuminate\Http\Request;
use App\Image;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['prefix' => 'v0'], function () {


    Route::post('/request', 'FrontendController@request');
    Route::get('/result/{imageId}', 'FrontendController@result');

    Route::post('/finish', 'WorkerController@finish');

    Route::group(['middleware' => 'auth:api'], function () {


    });
});

