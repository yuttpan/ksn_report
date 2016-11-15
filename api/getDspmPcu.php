<?php

include_once 'db.php';
// Check connection

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$_POST = json_decode(file_get_contents("php://input"),TRUE);
//$json_data = file_get_contents("php://input");
//$php_data = json_decode($json_data);

 $hospcode = isset($_POST['hospcode']) ? $_POST['hospcode'] : null;
 $month = isset($_POST['month']) ? $_POST['month'] : null;
//$hn = "%$hn";
$date = '2015';
 $sql = "select t.pid,concat(name,'  ',lname) as fname,age,village_name,village_moo ,
 (select DISTINCT max(DATE_SERV) from specialpp where pid = t.pid and TIMESTAMPDIFF(month,'$month',DATE_SERV) between '0' and  '2' ORDER BY DATE_SERV desc limit 1  ) as date_serv
 from t_dspm t
LEFT OUTER JOIN person p on t.pid = p.pid and p.HOSPCODE = '$hospcode'
LEFT OUTER JOIN home h on p.hid = h.hid and p.HOSPCODE = h.HOSPCODE
LEFT OUTER JOIN village_name v on village_code = concat(h.CHANGWAT,h.AMPUR,h.TAMBON,h.VILLAGE)
where t.HOSPCODE = '$hospcode' and  month = month('$month')";
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
