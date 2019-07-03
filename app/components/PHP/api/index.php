<?php
// ip módosítás
class ipmaskgateway{
    function put($app,$params)
    {
        $data=json_decode($app['BODY']);
        $db=new \DB\Jig('ipmaskgateway/',\DB\Jig::FORMAT_JSON);
        $mapper=new \DB\Jig\Mapper($db,'ipmaskgateway.json');

        $ipmaskgateway=$mapper->load(Array('id=?',$params['id']));
        $ipmaskgateway->ip=$data->ip; //ip
        $ipmaskgateway->mask=$data->mask; //mask
        $ipmaskgateway->gateway=$data->gateway; //gateway
        $ipmaskgateway->save();
        echo "OK";
        @unlink($data);
        @unlink($mapper);
        @unlink($db);
        @unlink($ipmaskgateway);
    }
}
//kártyák mentés
class card{
    function post($app,$params)
    {
        $data=json_decode($app['BODY']);
        echo json_encode($data);
        $db=new \DB\Jig('cards/',\DB\Jig::FORMAT_JSON);
        $mapper=new \DB\Jig\Mapper($db,'cards.json');
        
        $mapper->id=$data->id; //azonosító (generált)
        $mapper->name=$data->name; //név
        $mapper->code=$data->code; //névre szóló kód
        $mapper->status=$data->status; //beosztás
        $mapper->save();
        echo "OK";
        @unlink($data);
        @unlink($mapper);
        @unlink($db);
    }
    function put($app,$params)
    {
        $data=json_decode($app['BODY']);
        $db=new \DB\Jig('cards/',\DB\Jig::FORMAT_JSON);
        $mapper=new \DB\Jig\Mapper($db,'cards.json');

        $card=$mapper->load(Array('id=?',$params['id']));
        $card->name=$data->name; //név
        $card->code=$data->code; //névre szóló kód
        $card->status=$data->status; //beosztás
        $card->save();
        echo "OK";
        @unlink($data);
        @unlink($mapper);
        @unlink($db);
        @unlink($card);
    }
    function delete($app,$params)
    {
        $db=new \DB\Jig('cards/',\DB\Jig::FORMAT_JSON);
        $mapper= new \DB\Jig\Mapper($db,'cards.json');
        $word=$mapper->find(Array('@id=?',$params['id']));
        $word[0]->erase();
        echo "OK";
        @unlink($mapper);
        @unlink($db);
        @unlink($card);
    }
}
$app=require('../../../../../../../fatfree-master/lib/base.php');
$app->map('/ipmaskgateway/@id','ipmaskgateway');
$app->map('/card/@id','card');


$app->route('GET /allcards',function($app){
    $data=file_get_contents('cards/cards.json');
    $data=json_decode($data);
    $resault=[];
    foreach($data as $k=>$v){
        array_push($resault,$v);
    }
    echo json_encode($resault);

    $myfile="D:\csv\cards.csv";
    $file="D:\csv\cards.txt";
    $content="";

    foreach ($data as $row) {
        $content=$content.$row->id.";".$row->name.";".$row->code.";".$row->status.";\r\n";
    }
    file_put_contents($myfile,$content);
    file_put_contents($file,$content);
});

$app->route('GET /ipmask',function($app){
    $data=file_get_contents('ipmaskgateway/ipmaskgateway.json');
    $data=json_decode($data);
    $resault=[];
    foreach($data as $k=>$v){
        array_push($resault,$v);
    }
    echo json_encode($resault);
});
$app->run();
?>