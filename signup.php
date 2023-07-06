<?php
// Assuming you have a database connection established
// Replace the database credentials with your own
$servername = "localhost";
$username = "your_username";
$password = "your_password";
$dbname = "your_database_name";

// Create a connection to the database
$conn = new mysqli($servername, $username, $password, $dbname);

// Check for any connection errors
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve the submitted username and password
   $username = $_POST['username'];
    $password = $_POST['password'];
    $student_id = $_POST['student_id'];
    $email = $_POST['email'];
    
    // Query to insert the new user into the database
    $sql = "INSERT INTO students (username, password,student_id,email) VALUES ('$username', '$password','$student_id','$email')";

    if ($conn->query($sql) === TRUE) {
        echo "Sign-up successful!";
        // Perform any necessary actions after a successful sign-up
        // For example, redirecting to a login page
        header("Location: login.html");
        exit();
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

// Close the database connection
$conn->close();
?>
