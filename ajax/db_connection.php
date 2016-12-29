<?php

// Connection variables 
$host = "localhost"; // MySQL host name eg. localhost
$user = "root"; // MySQL user. eg. root ( if your on localserver)
$password = "admin"; // MySQL user password  (if password is not set for your root user then keep it empty )
$database = "prueba"; // MySQL Database name

// Connect to MySQL Database 
$db = mysqli_connect($host, $user, $password,$database);

?>