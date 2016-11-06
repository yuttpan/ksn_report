<?php
include_once 'db.php';
// Check connection

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

//$_POST = json_decode(file_get_contents("php://input"),TRUE);
//$hn = isset($_POST['hn']) ? $_POST['hn'] : null;
//$hn = "%$hn";
 $sql = "select hoscode ,hosname ,(select count(pid) from person where hospcode = ch.hoscode) as target,
(select count(pid) from person where hospcode = ch.hoscode and TYPEAREA not in ('1','2','3','4','5')) as result
from chospital_amp ch";
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
