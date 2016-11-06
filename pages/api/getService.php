<?php
include_once 'db.php';
// Check connection

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

//$_POST = json_decode(file_get_contents("php://input"),TRUE);
//$hn = isset($_POST['hn']) ? $_POST['hn'] : null;
//$hn = "%$hn";
 $sql = "select count(hn) as v,count(DISTINCT hn) as p,HOSPCODE,(select hosname from chospital_amp where hoscode = s.HOSPCODE) as hosname  from service s
where DATE_SERV between '2016-10-01' and '2016-10-31'
group by HOSPCODE";
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
