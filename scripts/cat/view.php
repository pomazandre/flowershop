<?php
    require_once "../config.php";
    $id = $_GET["id"]; 
    mysql_connect($host,$user, $pwd) or die("Could not connect to MySQL server!"); 
    mysql_select_db($db) or die("Could not select database!"); 
    
    $query = "SELECT * FROM reports WHERE IdTeacher=$id";
    $res = mysql_query($query);
    $data = array();
    while($row = mysql_fetch_array($res, MYSQL_ASSOC))
    {
      $data[] = $row;
    }
    mysql_close();
    echo json_encode($data);
?>

   