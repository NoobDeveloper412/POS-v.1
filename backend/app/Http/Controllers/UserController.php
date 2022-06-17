<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $allUsers = User::all();
        return response()->json($allUsers);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $user = new User;
        $user->name = $request->name;
        $user->email = $request->email;
        $user->isAdmin = $request->isAdmin;
        $user->password = md5($request->pNassword);
        $user->save();
        if ($user) {
            return response()->json(['message' => 'User was created.'], 201);
        }

        return response()->json(['message' => 'User was not created. If the error persist contact the developer.'], 400);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\User  $User
     * @return \Illuminate\Http\Response
     */
    public function show(User $User)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\User  $User
     * @return \Illuminate\Http\Response
     */
    public function edit(User $User)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $users = User::find($id);
        if (!$users) {
            return response()->json(['message' => 'An unknown error occured. If the error persist contact the developer.'], 400);
        }
        $users->update($request->all());
        return response()->json(['message' => 'User updated.'], 204);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $users = User::find($id);
        if (!$users) {
            return response()->json(['message' => 'User not found.'], 200);
        }
        $users->delete();
        return response()->json(['message' => 'User deleted.'], 204);
    }
}
