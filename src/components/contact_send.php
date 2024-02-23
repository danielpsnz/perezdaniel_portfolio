<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = isset($_POST["name"]) ? $_POST["name"] : "";
    $email = isset($_POST["email"]) ? $_POST["email"] : "";
    $message = isset($_POST["message"]) ? $_POST["message"] : "";

    // Validate the data
    if (empty($name) || empty($email) || empty($message)) {
        // Handle validation error
        echo "Please fill in all required fields.";
        exit;
    }

    // Set the email recipient
    $to = "danielperezsanz21@gmail.com";

    // Set the email subject
    $subject = "New contact message from $name";

    // Create the email body
    $body = "Name: $name\n";
    $body .= "Email: $email\n";
    $body .= "Message:\n$message";

    // Set the email headers
    $headers = "From: $email\r\n";

    // Send the email
    mail($recipient, $subject, $body, $headers);
}
?>