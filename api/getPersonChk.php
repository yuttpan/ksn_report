<?php
header('Access-Control-Allow-Origin: * ' );
include_once 'db.php';
// Check connection

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$_POST = json_decode(file_get_contents("php://input"),TRUE);
 $id = isset($_POST['id']) ? $_POST['id'] : null;

switch ($id) {
    case "1":
        $sql = "select hoscode ,hosname ,(select count(pid) from person where hospcode = ch.hoscode) as target,
(select count(pid) from person where hospcode = ch.hoscode and TYPEAREA not in ('1','2','3','4','5')) as result,
(select person_error_name from person_error where person_error_id = '$id') as name
from chospital_amp ch";
        break;
    case "2":
        $sql = "select hoscode ,hosname ,(select count(pid) from person where hospcode = ch.hoscode) as target,
(select count(pid) from person where hospcode = ch.hoscode and ABOGROUP not in('1','2','3','4')) as result,
(select person_error_name from person_error where person_error_id = '$id') as name
from chospital_amp ch";
        break;
    case "3":
       $sql = "select hoscode ,hosname ,(select count(pid) from person where hospcode = ch.hoscode) as target,
(select count(pid) from person where hospcode = ch.hoscode and  DISCHARGE not in('1','2','3','9')) as result,
(select person_error_name from person_error where person_error_id = '$id') as name
from chospital_amp ch";
        break;
    default:
        echo "Your favorite color is neither red, blue, nor green!";
}



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
