<?php 
$server="localhost";
$username="root";
$password="";
$name="users";

$con=mysqli_connect($server,$username,$password,$name);
if(!$con){
    echo "error ".mysqli_connect_error();
}
//echo "successfully connected <br>";
?>