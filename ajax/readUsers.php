<?php
header("Access-Control-Allow-Origin: *");
header("Content-type: application/json; charset=UTF-8");

$conn = new mysqli("localhost", "root", "admin", "prueba");
$conn->set_charset('utf8');

$result = $conn->query("SELECT * FROM users");

$outp = "";
while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
    if ($outp != "") {$outp .= ",";}
    $outp .= '{"first_name":"'  . $rs["first_name"] . '",';
    $outp .= '"last_name":"'   . $rs["last_name"] . '",';
    $outp .= '"email":"'   . $rs["email"] . '",';
    $outp .= '"id":"'. $rs["id"] . '"}'; 
}
$outp ='{"records":['.$outp.']}';

$conn->close();

echo($outp);
?>