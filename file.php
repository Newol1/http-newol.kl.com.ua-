<?php
$name = trim($_POST['name']);
$email = trim($_POST['email']);
$message = trim($_POST['message']);
$dt = date('Y-m-d H:i:s');

if ($email == '' || $name == '' || $message == '') {
	echo 'Please, fill in all the fields';
}
elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
	echo 'Please, enter a valid email address';
}
else {
	file_put_contents('file.txt', "\n$dt \n$name \n$email \n$message \n", FILE_APPEND);
	echo '<span class="success">Your form has been submitted.</span>';
}
// exit('<meta http-equiv="refresh" content="0; url=index.html" />')
?>
