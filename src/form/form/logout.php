<?php
 include "config.php";

 include "../server.php";
 

 session_start();

 session_unset();

 session_destroy();

 header("Location: http://".$server_name."/fixbuy/form/login.php")
?>