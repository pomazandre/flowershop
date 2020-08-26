<?php
    require_once "../config.php";
    $short_name = $_GET["name"];
    $degree = $_GET["degree"];
    $pass = $_GET["pass"];
    $role = $_GET["role"];
    mysql_connect($host,$user, $pwd) or die("Could not connect to MySQL server!"); 
    mysql_select_db($db) or die("Could not select database!"); 

    $query = "SELECT max(id) from teachers";
    $res = mysql_query($query); 
    $row = mysql_fetch_row($res);
    $next_id = $row[0] + 1;
                
    $query = "INSERT INTO teachers (id, name, degree, pass, role) values('$next_id', '$short_name',  '$degree', '$pass', '$role')";
    mysql_query($query); 
    
    $query = "SELECT * FROM teachers";
    $res = mysql_query($query);
    $data = array();
    while($row = mysql_fetch_array($res, MYSQL_ASSOC))
    {
       $data[] = $row;
    }
    mysql_close();
    echo json_encode($data);
?>
