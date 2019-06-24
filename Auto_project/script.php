
<?php
    $gender = htmlspecialchars($_POST["gender"]);
    $name = htmlspecialchars($_POST["name"]);
    $sername = htmlspecialchars($_POST["sername"]); 
    $email = htmlspecialchars($_POST["email"]); 
    $phone = htmlspecialchars($_POST["phone"]);
    $question = htmlspecialchars($_POST["question"]);
    $date_today = date("m.d.y");
    $today[1] = date("H:i:s");
    $data = "Время: $today[1] и дата: $date_today"; 
    $message_to_txt = 
    "$data
    Пол: $gender
    Имя отправителя: $name  $sername
    E-mail: $email
    Телефон: $phone
    Текст вопроса: $question
    
    
    ";
    $fd = fopen("question.txt", 'a') or die("не удалось создать файл");
    fwrite($fd, $message_to_txt);
    fclose($fd);

    // $redirect = isset($_SERVER['HTTP_REFERER'])? $_SERVER['HTTP_REFERER']:'contacts.html';
    // header("Location: $redirect");
    header('Location: contacts.html');
?> 