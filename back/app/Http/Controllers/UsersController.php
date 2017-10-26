<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class UsersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }


    /// Are da API
    ///
    ///



    

    public function getAllUsers()
    {
        $usuarios = User::all();
        return response()->json(['usuarios' => $usuarios, 'status' => 200]);
    }



     public function getUser($id)
     {
         $usuario = User::find($id);
        if(!$usuario)
            return response()->json(['mensagem' => 'Usuario nao encontrado'], 404);
        else
            return response()->json(['usuario' => $usuario]);
     }



    public function saveUser(Request $request)
    {
         $usuario=User::create($request->all());
         return response()->json(['usuario' => $usuario], 201);
    }





   public function updateUser(Request $request, $id)
    {
        $usuario = User::find($id);
        if (!$usuario) {
            return response()->json(['mensagem'=>'Usuario Nao encontrado'], 404);
        }else{

        $usuario->update($request->all());
            return response()->json(['usuario'=>$usuario]);


        }



    }

    public function deleteUser()
    {
        $usuario = User::find($id);
         if(!$usuario)
            return response()->json(['mensagem' => 'Usuario nao  encontrado'], 404);
        $usuario->delete();
        return response()->json(['mensagem', 'Usuario removido com sucesso'], 200);
    }

}
