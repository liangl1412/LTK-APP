<?php
$dir = "./img/hero";

// Open a known directory, and proceed to read its contents
if (is_dir($dir)) {
    if ($dh = opendir($dir)) {
        $images = array();

        while (($file = readdir($dh)) !== false) {
            $keyName = str_replace(".jpg","",$file);
            print "$keyName: require('./img/hero/$file'),". "<br />";
        }

        closedir($dh);

    }
}
?>