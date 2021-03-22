<?php

$url = "http://api.openweathermap.org/data/2.5/weather?q=81000&lang=fr&units=metric&appid=ff74652bf8c08c7b1c138d7eaca7df85";

$raw = file_get_contents($url);

$json = json_decode($raw);

$name = $json->name;

$weather = $json->weather[0]->main;
$desc = $json->weather[0]->description;

$temp = $json->main->temp;
$feel_like = $json->main->feels_like;

$speed = $json->wind->speed;
$deg = $json->wind->deg;

?>


<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <!-- bootstrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
    <link rel="stylesheet" href="styles.css">

</head>

<body>
    <div class="container text-center py-5">
        <h1>Météo du jour à <strong><?php echo $name; ?></strong></h1>

        <div class="row justify-content-center align-items-center">
            <?php
            switch ($weather) {
                case "Clear":
            ?>
                    <div class="icon sunny">
                        <div class="sun">
                            <div class="rays"></div>
                        </div>
                    </div>
                <?php
                    break;

                case 'Drizzle':
                ?>
                    <div class="icon sun-shower">
                        <div class="cloud"></div>
                        <div class="sun">
                            <div class="rays"></div>
                        </div>
                        <div class="rain"></div>
                    </div>
                <?php
                    break;

                case 'Rain':
                ?>
                    <div class="icon rainy">
                        <div class="cloud"></div>
                        <div class="rain"></div>
                    </div>
                <?php
                    break;

                case 'Clouds':
                ?>
                    <div class="icon cloudy">
                        <div class="cloud"></div>
                        <div class="cloud"></div>
                    </div>
                <?php
                    break;

                case 'Thunderstorm':
                ?>
                    <div class="icon thunder-storm">
                        <div class="cloud"></div>
                        <div class="lightning">
                            <div class="bolt"></div>
                            <div class="bolt"></div>
                        </div>
                    </div>
                <?php
                    break;

                case 'Snow':
                ?>
                    <div class="icon flurries">
                        <div class="cloud"></div>
                        <div class="snow">
                            <div class="flake"></div>
                            <div class="flake"></div>
                        </div>
                    </div>

            <?php
                    break;
            }
            ?>

            <div class="meteo_desc text-left">
                <h2>
                    <?php echo $temp; ?> °C / Ressenti <?php echo $feel_like; ?> °C <br />
                    <?php echo $speed; ?> Km/h - <?php echo $deg; ?> ° <br />
                    <?php echo $desc; ?>
                </h2>
            </div>
        </div>
    </div>


    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous"></script>

</body>


</html>
