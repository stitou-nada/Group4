<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\login;

class LoginController extends Controller
{
    function afficher(){
        $data = login::all();
        return $data;
    }
}
