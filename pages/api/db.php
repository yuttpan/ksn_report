<?php

$servername = "localhost";
$username = "sa";
$password = "sa";
$dbname = 'dhdc';
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection


if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 