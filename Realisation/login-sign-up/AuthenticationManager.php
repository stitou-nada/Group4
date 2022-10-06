<?php 
include 'user.php';

class AuthenticationManager{
   

    private $Connection = Null;

    private function getConnection(){
      
        $this->Connection = mysqli_connect('localhost', 'root', '','fastmotes'); 
        return $this->Connection;
        
    }
}