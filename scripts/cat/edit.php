<?php
    require_once "../config.php";
    mysql_connect($host,$user, $pwd) or die("Could not connect to MySQL server!"); 
    mysql_select_db($db) or die("Could not select database!"); 
    
    $query = "SELECT * FROM reports";
    $res = mysql_query($query);
    $data = array();
    while($row = mysql_fetch_array($res, MYSQL_ASSOC))
    {
      $data[] = $row;
    }
    $query = "SELECT * FROM chiefreports";
    $res = mysql_query($query);
    while($row = mysql_fetch_array($res, MYSQL_ASSOC))
    {
      $data[] = $row;
    }
    mysql_close();
    echo json_encode($data);
?>

   