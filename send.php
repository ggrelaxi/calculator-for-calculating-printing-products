<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь

$orderName = $_POST['orderName'];
$name = $_POST['name'];
$tel = $_POST['tel'];
$circulation = $_POST['circulation'];
$sides = $_POST['sides'];
$singlePrice = $_POST['singlePrice'];
$cost = $_POST['cost'];

$file = $_FILES['file'];

// Формирование самого письма
$title = "Заказ на сайте suvenirGroupp";
$body = "
<h2>Новый заказ</h2>
<h3>Данные клиента</h3>
<b>Имя:</b> $name<br>
<b>Телефон:</b> $tel<br>

<h3>Данные о заказе:</h3>

<b>Наименование:</b> $orderName.<br>
<b>Тираж:</b> $circulation.<br>
<b>Стороны (при наличии):</b> $sides.<br>
<b>Цена за штуку:</b> $singlePrice.<br>
<span style='color: green; font-size: 16px;'><b>Общая стоимость:</b> $cost</span>. 
";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.yandex.ru'; // SMTP сервера вашей почты
    $mail->Username   = '*****'; // Логин на почте
    $mail->Password   = '*****'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('***@*****', '********'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('destination@mail.com');


    // Прикрипление файлов к письму
if (!empty($file['name'][0])) {
        $uploadfile = tempnam(sys_get_temp_dir(), sha1($file['name']));
        $filename = $file['name'];
        if (move_uploaded_file($file['tmp_name'], $uploadfile)) {
            $mail->addAttachment($uploadfile, $filename);
            $rfile[] = "Файл $filename прикреплён";
        } else {
            $rfile[] = "Не удалось прикрепить файл $filename";
            echo ($_FILES);
        }
}
// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $status]);