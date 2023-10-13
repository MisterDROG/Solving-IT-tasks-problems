<?php

$user_answ = [1,2,3];
$corr_answ = [3, 2, 1];
function check_answer($user_answ, $corr_answ) {
    sort($user_answ);
    sort($corr_answ);
    if ($user_answ != $corr_answ) {
        return 0;
    }
    return 1;
}



echo check_answer($user_answ, $corr_answ)
?>