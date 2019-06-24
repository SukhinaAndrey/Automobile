<?php
    $gender = htmlspecialchars($_POST["gender"]);
    $name = htmlspecialchars($_POST["name"]);
    $sername = htmlspecialchars($_POST["sername"]); 
    $birthday = htmlspecialchars($_POST["birthday"]); 
    $email = htmlspecialchars($_POST["email"]); 
    $phone = htmlspecialchars($_POST["phone"]);
    $date_order_start = htmlspecialchars($_POST["date_order_start"]);
    $date_order_finish = htmlspecialchars($_POST["date_order_finish"]);
    $carmodel = htmlspecialchars($_POST["carmodel"]);
    $date_today = date("m.d.y");
    $today[1] = date("H:i:s");
    $data = "Время: $today[1] и дата: $date_today";
    $message_to_txt = 
    "$data
    Пол: $gender
    Имя отправителя: $name  $sername
    Дата рождения: $birthday
    E-mail: $email
    Телефон: $phone
    Дата и время аренды: $date_order_start
    Дата и время возврата: $date_order_finish
    Машина: $carmodel
    
    
    ";
    $fd = fopen("order.txt", 'a') or die("не удалось создать файл");
    fwrite($fd, $message_to_txt);
    fclose($fd);
    header('Location: automobile.html');
?>