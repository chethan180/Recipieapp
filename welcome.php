<?php
session_start();
if(!isset($_SESSION['loggedin']) || $_SESSION['loggedin']==false){
  header("location:login.php");
  exit;
}
?>


<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
	
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous" />
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="style.css">

    <title>Welcome <?php echo $_SESSION['username']; ?></title>

    
  </head>
  <body>
    <?php require 'partials/_nav.php' ?>


    <div class="alert bg-success">
      <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
      <strong><?php echo "Welcome ".$_SESSION['username']; ?></strong> 
      <br>
      You successfully logged in as <?php echo $_SESSION['username']; ?>
    </div>


    <!--<div class="container">
      <div class="alert alert-success" role="alert">
        <h4 class="alert-heading"><?php echo "Welcome ".$_SESSION['username']; ?></h4>
        <p>You successfully logged in as <?php echo $_SESSION['username']; ?> </p>
        <hr>
        <p class="mb-0">If you want to logout use <a href="logout.php">this link</a></p>
      </div>
    </div>
    -->


    <div>
      
        <input type="search" class="form-control" id="search" placeholder="Search for a recipe.." />


        <div class="d-none pt-5" id="spinner">
            <div class="d-flex justify-content-center">
                <div class="spinner-border" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            </div>
        </div>

        <div class="container-fluid" id="containerResultAns">
       
        </div>
		
    </div>
    
    <script type="text/javascript" src="javascript.js"></script> 
    
  </body>
</html>