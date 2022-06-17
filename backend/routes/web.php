<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
Route::resource('/orders', 'OrdersController');
Route::resource('/products', 'ProductController');
Route::delete('/products/{id}', 'ProductController@destroy');
Route::put('/products/{id}', 'ProductController@update');
Route::resource('/supplier', 'SupplierController');
Route::resource('/users', 'UserController');
Route::delete('/users/{id}', 'UserController@destroy');
Route::put('/users/{id}', 'UserController@update');
Route::resource('/companies', 'CompanyController');
Route::resource('/transactions', 'TransactionController');
