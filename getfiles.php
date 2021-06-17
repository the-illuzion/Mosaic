<?php 
$log_directory = 'upload';

$results_array = array();
$results_array_timesatmp = array();

if (is_dir($log_directory))
{
        if ($handle = opendir($log_directory))
        {
                //Notice the parentheses I added:
                while(($file = readdir($handle)) !== FALSE)
                {
                    if($file == '.' || $file == '..'){
                        
                    }else{
                        // date('m/d/Y H:i:s', $file.str_split(".")[0])
                        $ts = $file.str_split(".")[0];
                        $date = new DateTime("@$ts");
                        // var_dump($date->format('Y-m-d H:i:s e'))
                        $results_array_timesatmp[] =$date->format('Y-m-d H:i:s e');
                        $results_array[] = $file;
                    }
                       
                }
                closedir($handle);
        }
}

//Output findings
// $results_Json = array();
// $results_Json[] = $results_array_timesatmp
// $results_Json[] = $results_array
$foo = new stdClass();
$foo->data = $results_array;
$foo->timedata = $results_array_timesatmp;
$encoded_string = json_encode($foo);
echo $encoded_string
// echo json_encode(array($results_array_timesatmp , $results_array));
// echo json_encode($results_array);
// foreach($results_array as $value)
// {
//     echo $value . '<br />';
// }

// $dir = "upload";

// // Open a directory, and read its contents
// if (is_dir($dir)){
//   if ($dh = opendir($dir)){
//     while (($file = readdir($dh)) !== false){
//       echo "filename:" . $file . "#";
//     }
//     closedir($dh);
//   }
// }
?> 