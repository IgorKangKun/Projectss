<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $game = $_POST["game"];
    $NumerosAlunos = $_POST["NumerosAlunos"];
    
    $dbHost = "localhost"; // Replace with your database host
    $dbUser = "root"; // Replace with your database username
    $dbPass = ""; // Replace with your database password
    $dbName = "epeddb"; // Replace with your database name

    $conn = new mysqli($dbHost, $dbUser, $dbPass, $dbName);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    if ($game === "FIFA") {
        $NomeEquipasFIFA = $_POST["NomeEquipasFIFA"];

        // Insert data into the database
        $sql = "INSERT INTO form_data (game, NumerosAlunos, NomeEquipasFIFA) 
                VALUES ('$game', '$NumerosAlunos', '$NomeEquipasFIFA')";

        if ($conn->query($sql) === TRUE) {
            echo "Data saved successfully.";
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
    } else {
        $sql = "INSERT INTO form_data (game, NumerosAlunos) 
                VALUES ('$game', '$NumerosAlunos')";

        if ($conn->query($sql) === TRUE) {
            echo "Data saved successfully.";
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
    }

    $conn->close();
}
?>