<?php

include_once 'db.php';
// Check connection

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$_POST = json_decode(file_get_contents("php://input"),TRUE);
//$json_data = file_get_contents("php://input");
//$php_data = json_decode($json_data);

 $year = isset($_POST['year']) ? $_POST['year'] : null;
 $month = isset($_POST['month']) ? $_POST['month'] : null;
//$hn = "%$hn";

 $sql = "select count(hn) as v,count(DISTINCT hn) as p,HOSPCODE,(select hosname from chospital_amp where hoscode = s.HOSPCODE) as hosname  from service s
where month(DATE_SERV) = '$month' and year(DATE_SERV) = '$year'
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


//$resultArray = ["name","mode"] ;
   // print_r($resultArray) ;
	mysqli_close($conn);

echo json_encode($resultArray) ;

?>
