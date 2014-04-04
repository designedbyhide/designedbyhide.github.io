<?php
if (isset($_REQUEST['email']))
//if "email" is filled out, send email
{
	//send email
	$email = $_REQUEST['email'] ;
	$subject = $_REQUEST['subject'] ;
	$message = $_REQUEST['message'] ;
	mail("4smartus@gmail.com", $subject, $message, "From:" . $email);
	echo "✔ Thank you for using our mail form";
}else{
	echo "You did not supply your email address";
}
?>