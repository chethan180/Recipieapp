<?php 

session_start();
session_unset();
session_destroy();
//echo "<h1>this is logout page</h1>";
header("location:login.php");
exit;
?>