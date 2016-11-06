<?php
include_once 'db.php';
// Check connection

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

//$_POST = json_decode(file_get_contents("php://input"),TRUE);
//$hn = isset($_POST['hn']) ? $_POST['hn'] : null;
//$hn = "%$hn";
 $sql = "select person_error_id,person_error_name,target,result,percent,round(percent) as pc from person_error";
$result = mysqli_query($conn, $sql);

	$query = mysqli_query($conn,$sql);
	if (!$query) {
		printf("Error: %s\n", $conn->error);
		exit();
	}
	$resultArray = array();
	while($result = mysqli_fetch_array($query,MYSQLI_ASSOC))
	{
		array_push($resultArray,$result);
	}

   // print_r($resultArray) ;
	mysqli_close($conn);

echo json_encode($resultArray) ;
?>
