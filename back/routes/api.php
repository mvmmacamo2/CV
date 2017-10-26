<?php

use Illuminate\Http\Request;

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

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });


Route::get('/usuarios', ['uses'=>'UsersController@getAllUsers']);
// Route::get('/usuarios', ['uses'=>'UsersController@getAllUsers'])->middleware('auth.jwt');
Route::post('/usuario', ['uses'=>'UsersController@saveUser']);
Route::put('/usuario/{id}', ['uses'=>'UsersController@updateUser']);
Route::delete('/usuario/{id}', ['uses'=>'UsersController@deleteUser']);
Route::get('/usuario/{id}', ['uses'=>'UsersController@getUser'])->middleware('auth.jwt');;
