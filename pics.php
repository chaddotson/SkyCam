
<?php

function jsonResponse($param, $print = false, $header = true) {
    if (is_array($param)) {
        $out = array(
            'success' => true
        );
 
        if (is_array($param['data'])) {
            $out['data'] = $param['data'];
            unset($param['data']);
            $out = array_merge($out, $param);
        } else {
            $out['data'] = $param;
        }
 
    } else if (is_bool($param)) {
        $out = array(
            'success' => $param
        );
    } else {
        $out = array(
            'success' => false,
            'errors' => array(
                'reason' => $param
            )
        );
    }
 
    $out = json_encode($out);
 
    if ($print) {
        if ($header) header('Content-type: application/json');
 
        echo $out;
        return;
    }
 
    return $out;
}


function jsonResponse2($param, $print = false, $header = true) {
    if (is_array($param)) {
        $out = array(
            'success' => true
        );
 
        if (is_array($param['data'])) {
            $out['data'] = $param['data'];
            unset($param['data']);
            $out = array_merge($out, $param);
        } else {
            $out['data'] = $param;
        }
 
    } else if (is_bool($param)) {
        $out = array(
            'success' => $param
        );
    } else {
        $out = array(
            'success' => false,
            'errors' => array(
                'reason' => $param
            )
        );
    }
 
    $out = json_encode($out);
 
    if ($print) {
        if ($header) header('Content-type: application/json');
 
        echo $out;
        return;
    }
 
    return $out;
}


$directory    = 'images\*.jpg';
//$files1 = scandir("images");
//$scanned_directory = array_diff(scandir($directory), array('..', '.'));
//$files2 = scandir($dir, 1);

//print_r(json_encode(glob($directory)));
//print_r(json_encode($files1));

array_multisort(array_map('filemtime', ($files = glob($directory))), SORT_DESC, $files);

$listing = array_slice($files, 0, 97);

$results = array();


$id = 0;
foreach( $listing as &$filename )
{
//    printf( "%s %s <br>", date("c", filemtime($filename)), $filename);
    $entry = new StdClass();
    $entry->id = $id;
    $entry->timestamp = date("c", filemtime($filename));
    $entry->file = $filename;
    
    $results[] = $entry;
    
    $id++;
}

$myresponse = new StdClass();

$myresponse->Images=$results;

print_r(json_encode($myresponse));



?>
