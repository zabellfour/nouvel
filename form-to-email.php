<?php 
if($_POST)
{
    $to = "info@efolix.com"; 
    $nom_du_contact = $_POST['nom_du_contact'];
    $nom_de_la_societe = $_POST['nom_de_la_societe'];
    $type_dactivite = $_POST['type_dactivite'];
    $domaine_dactivite = $_POST['domaine_dactivite'];
    $ville = $_POST['ville'];
    $pays = $_POST['pays'];
    $tel = $_POST['tel'];

    $email = $_POST['email'];
    $message_text = $_POST['message'];

    $message = "Nom du contact: " .  $nom_du_contact . "<br />\n" .
               "Nom de la société: " . $nom_de_la_societe .  "<br />\n" .
               "Type d’activité: " . $type_dactivite .  "<br />\n" . 
               "Domaine d’activité: " . $domaine_dactivite .  "<br />\n" . 
               "Ville: " .  $ville .  "<br />\n" . 
               "Pays: " . $pays .  "<br />\n" . 
               "Tél: " . $tel .  "<br />\n" . 
               "E-Mail: " . $email .  "<br />\n" . 
               "Votre messag: " . $message_text .  "<br />\n"  ;
              $subject = "INCRIPTION";

    $headers .= "Content-type: text/html; charset=\"utf-8\"";
    $mail_sent = mail($to, $subject, $message , $headers);
    if ($mail_sent){
        echo  "<div class='send'>Votre message a été bien envoyé</div>?" ;
    }
}
?>