<?php
if(isset($_POST['email'])) {
    $to = "info@corpyrenaei.cz";
    // $message = "Byl odeslán nový formulář";
    $message = "Jméno: " . $_POST['name'] . "\nPříjmení: " . $_POST['surname'] . "\nE-mail: " . $_POST['email'] . "\nPředmět: " . $_POST['subject'] . "\nZpráva: " . $_POST['message'];
    $headers = "From: dotaz@corpyrenaei.cz\r\n";
    


    mail($to, 'Novy formular', $message, $headers);
    header('Location: success.html#formular');
} else {
    header('Location: error.html#formular');
}
?>