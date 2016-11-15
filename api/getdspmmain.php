<?php

include_once 'db.php';
// Check connection

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$_POST = json_decode(file_get_contents("php://input"),TRUE);
//$json_data = file_get_contents("php://input");
//$php_data = json_decode($json_data);

// $year = isset($_POST['year']) ? $_POST['year'] : null;
 $m = isset($_POST['month']) ? $_POST['month'] : null;
//$hn = "%$hn";
// $month = $m ;
  $sql = "select hoscode,hosname,
(select count(pid) from t_dspm where month = month('$m') and HOSPCODE = c.hoscode) as target,
(SELECT  count(DISTINCT pid) from specialpp 
where pid in (select LPAD(pid,6,'0') from t_dspm where month =  month('$m')and HOSPCODE = c.hoscode )
and TIMESTAMPDIFF(month,'$m',DATE_SERV) between '0' and  '2' and DATE_SERV >= '$m') as result,(select '$m') as month,

(select (SELECT  count(DISTINCT pid) from specialpp 
where pid in (select LPAD(pid,6,'0') from t_dspm where month =  month('$m')and HOSPCODE = c.hoscode )
and TIMESTAMPDIFF(month,'$m',DATE_SERV) between '-1' and  '2' and DATE_SERV >= '$m') * 100 / (select count(pid) from t_dspm where month = month('$m') and HOSPCODE = c.hoscode) ) as percent


 from chospital_amp c";
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
