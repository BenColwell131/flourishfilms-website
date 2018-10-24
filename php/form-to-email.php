<?php
  $name = $_POST['name'];
  $visitor_email = $_POST['email'];
  $message = $_POST['message'];

  //Validate first
  if(empty($name)||empty($visitor_email))
  {
      echo "Name and email are mandatory!";
      exit;
  }

  $email_from = 'info@flourishfilms.ie';
  $email_subject = "New Form Submission: $name";
  $email_body = "You have received a new message on 'www.flourishfilms.ie' from $name.<br/>".
      "<b>Name:</b> $name <br/>
       <b>Email:</b> $visitor_email <br/>
       <b>Message:</b><br/>
       $message<br/><br.
       <i>Note: Clicking reply will respond to $name</i><br/>
       ----------<br/>".

  $to = "info@flourishfilms.ie";
  $headers = "From: $email_from \r\n";
  $headers .= "Reply-To: $visitor_email \r\n";
  $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

  //Send the email!
  mail($to,$email_subject,$email_body,$headers);

  //Done. redirect to thank-you page.
  header('Location: ../thank-you.html');
?>
