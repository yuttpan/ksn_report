<?php
include_once 'db.php';
// Check connection

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

//$_POST = json_decode(file_get_contents("php://input"),TRUE);
//$hn = isset($_POST['hn']) ? $_POST['hn'] : null;
//$hn = "%$hn";
 $sql = "select  HOSPCODE,(select hosname from chospital_amp where hoscode = p.HOSPCODE),SUM(IF(TYPEAREA='1',1,0))  as p1, SUM(IF(TYPEAREA='2',1,0))  as p2,
SUM(IF(TYPEAREA='3',1,0))  as p3,SUM(IF(TYPEAREA='4',1,0))  as p4,count(pid) as total
from person p
GROUP BY HOSPCODE";
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
