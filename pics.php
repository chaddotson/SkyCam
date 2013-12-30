
<?php
$directory    = 'images\*.jpg';
//$files1 = scandir("images");
//$scanned_directory = array_diff(scandir($directory), array('..', '.'));
//$files2 = scandir($dir, 1);

print_r(json_encode(glob($directory)));
//print_r(json_encode($files1));




?>
