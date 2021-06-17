<?php
    define('UPLOAD_DIR', 'upload/');
    $date = new DateTime();
    $current_date = $date->getTimestamp();
    define('name', 'rr');
    $image_parts = explode(";base64,", $_POST['file']);
    $image_type_aux = explode("image/", $image_parts[0]);
    $image_type = $image_type_aux[1];
    $image_base64 = base64_decode($image_parts[1]);
    $file = UPLOAD_DIR . $_SERVER['REQUEST_TIME'] . '.png';
    file_put_contents($file, $image_base64);
?>