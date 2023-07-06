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
    
    // Query to check if the username and password exist in the database
    $sql = "SELECT * FROM students WHERE username = '$username' AND password = '$password'";
    $result = $conn->query($sql);

    // If a matching record is found, login successful
    if ($result->num_rows == 1) {
        echo "Login successful!";
        // Perform any necessary actions for a successful login (e.g., redirect to a dashboard page)
        // Replace "dashboard.php" with your desired destination page
        header("Location: mdcat.html");
        exit();
    } else {
        echo "Invalid username or password";
    }
}

// Close the database connection
$conn->close();
?>
