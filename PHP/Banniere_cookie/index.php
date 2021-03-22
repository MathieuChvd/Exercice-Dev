<?php
    if(isset($_GET['accepte-cookie'])){
        setcookie('accepte-cookie', 'true', time() + 365*24*3600);
        header('Location:./');
    }

?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="assets/css/body.css">
</head>
<body>


<?php
    if(!isset($_COOKIE['accepte-cookie'])){
?>

    <div class="banniere">
        <div class="text_banniere">
            <p>Notre site utilise les cookies pour une meilleure expérience</p>
        </div>
        <div class="button-banniere">
            <a href="?accepte-cookie">OK, j'accepte</a>
        </div>
    </div>

<?php
    }
?>

    
</body>
</html>
