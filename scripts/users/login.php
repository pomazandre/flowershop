<?php
    require_once "../config.php";
    $name = $_GET["name"];
    $pass = $_GET["pass"];
    
    mysql_connect($host,$user, $pwd) or die("Could not connect to MySQL server!"); 
    mysql_select_db($db) or die("Could not select database!"); 
    
    $query = "SELECT * FROM teachers";
    $res = mysql_query($query);
    $found = FALSE;

    while($row = mysql_fetch_array($res, MYSQL_ASSOC))
    {
        if (strcasecmp ($row["name"], $name ) == 0 && strcasecmp ($row["pass"], $pass ) == 0) {
            $found = TRUE;  
            break;
       }
    }

    if ($found==TRUE) { 
     $resp  = '{"role" : "'.$row["role"].'", "id" : '.$row["id"].'}';
   
   } else {
     $resp = '{"role" : "", "id" : 0}'; 
  }
  mysql_close();
  echo $resp;
?>

   