<?php
/**
 * Created by PhpStorm.
 * User: umadurai
 * Date: 2019-02-02
 * Time: 09:14
 */
/***
echo $_SERVER['REQUEST_METHOD'];
echo $_SERVER["CONTENT_TYPE"];
*/
//echo $HTTP_RAW_POST_DATA;


if(strcasecmp($_SERVER['REQUEST_METHOD'], 'POST') != 0){

    throw new Exception('Request method must be POST! ' .$_SERVER['REQUEST_METHOD'] );
    http_response_code(403);
    exit;
}

//Make sure that the content type of the POST request has been set to application/json
$contentType = isset($_SERVER["CONTENT_TYPE"]) ? trim($_SERVER["CONTENT_TYPE"]) : '';


 if(strcasecmp($contentType, 'application/json') != 0){
    throw new Exception('Content type must be: application/json  ' .$contentType );
    http_response_code(402);
    exit;
 }

$req = explode('/', trim($_SERVER['PATH_INFO'],'/'));
$data1 = json_decode(file_get_contents('php://input'));
$request= json_decode($data1->myData);
//echo $data2->name;

if (!empty($request)) {

    $name =$request->name;
    $date =$request->date;

    $arr = array("empName" => $name,
        "empDate" => $date);

    header('Content-Type: application/json');
    http_response_code(200);

    sleep(1); // to test spinner
    echo json_encode($arr);
} else {
    echo "There was a problem with your submission";
    http_response_code(400);
}
 ?>
