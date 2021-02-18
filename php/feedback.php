<?php
require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$data = $_POST;
$name = $_POST['name'];
$phone = $_POST['phone'];

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.yandex.ru';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'medical-site-order@yandex.ru'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'order4321'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

// Ваш любимый киногерой
// Тони старк

$mail->setFrom('medical-site-order@yandex.ru'); // от кого будет уходить письмо?
$mail->addAddress('sotskovmaksim385@gmail.com');     // Кому будет уходить письмо 
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Заявка на обратный звонок';
$mail->Body    = $name . ' оставил(а) заявку,<br>Телефон: ' .$phone. '.';
$mail->AltBody = '';


if(!$mail->send()) {
    echo 'Some error... Повторите попытку.';
} else {
  echo $data['name'] . ', Ваша форма отправлена.';
}
?>
