<?php
$site_login= 0;
$site_url= 1;
$author_id =1;
if ($_SESSION['we can'] !=$author_id) {
    setcookie($site_login . '_next', $_SERVER['REQUEST_URI'], time() + 68 * 68 * 24 * 30, '/');
    header("Location: " . $site_url."/asdsad");
    exit();
}
