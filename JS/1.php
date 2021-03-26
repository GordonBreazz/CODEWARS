<?php
$st = '<table style="text-align: left; width: 100%;" border="0" cellpadding="2" cellspacing="2"> <tbody>';

$arr = array('email' => 'E-mail',
            'name'=> 'Фамилия Имя Отчество постановщика',
            'experience' => 'Стаж работы',
            'name_group' => 'Название коллектива (Ф.И. сольных исполнителей)',
            'ur_address' => 'Юридический адрес коллектива для подписи дипломов',
            'post_address' => 'Почтовый адрес (с указанием индекса)',
            'nomination' => 'Конкурсная программа. Номинация',
            'phone' => 'Контактный телефон',
            'category' => 'Конкурсная программа. Категория исполнителей',
            'competitive_number_name' => 'Конкурсная программа. Название конкурсного номера',
            'time_study' => 'Конкурсная программа. Хронометраж конкурсного номера',
            'chbox1' => 'ЗАЯВКА НА УЧАСТИЕ В ОБЩЕЙ КАТЕГОРИИ КОНКУРСА');

   foreach ($_POST as $key => $value) {
        $st = $st . "<tr>";
        $st = $st . "<td>";
        $st = $st .  $arr[$key];
        $st = $st . "</td>";
        $st = $st .  "<td>";
        $st = $st .  $value;
        $st = $st .  "</td>";
        $st = $st .  "</tr>";
    }
//ob_start();
//header("Location: prestige2021/success/");
//ob_end_flush();
$st= $st. '</tbody></table>';
echo($st);


// $mail1 = new PHPMailer;

// $mail1->isSMTP();
// $mail1->CharSet = "utf-8";
// $mail1->Host = 'smtp.mail.ru';
// $mail1->SMTPAuth = true;
// $mail1->Username = 'prestigvsgik2021@mail.ru';
// $mail1->Password = '4032021prestig2021';
// $mail1->SMTPSecure = 'ssl';
// $mail1->Port = 465;

// $mail1->setFrom('prestigvsgik2021@mail.ru', 'Оргкомитет Всероссийского конкурса "Престиж 2021"');
// $mail1->addAddress('prestigvsgik2021@mail.ru', 'Участник');
// $mail1->isHTML(true);

// if(isset($_POST['name']))
//   $name_user=$_POST['name'];

// if(isset($_POST['name']))
//   $name_user=$_POST['name_head'];

// $subject="Заявка на сайте проекта Престиж 2021";
// $email_text="<p>Здравствуйте $name_user!</p><p>Вы оставили заявку на сайте проекта Престиж 2021</p>";
// $email_text.="<p>Дата поступление заявки: ".date("d-m-Y")."</p>";
// $email_text.="<p>В ближайшее время с вами свяжутся наши специалисты. Спасибо за ваш выбор.</p>";
// $email_text.='<p>Это уведомление создано автоматически и отвечать на него не нужно.</p>';

// $email = 'konnov@vsgaki.ru';

// if(isset($_POST['email']))
//   $email=$_POST['email'];//mb_convert_encoding($_POST['email'], "windows-1251", "utf-8");

// if (!filter_var($email, FILTER_VALIDATE_EMAIL)){
//   error_output(2);
//   exit;
// }

// $mail1->Sender= $email;
// $mail1->Subject = $subject;
// $mail1->Body  = $st;
// $mail1->AltBody = $alt_st;

// if(!$mail1->send()) {
//    echo 'Message could not be sent.';
//    echo 'Mailer Error: ' . $email->ErrorInfo;
// } 

?>
