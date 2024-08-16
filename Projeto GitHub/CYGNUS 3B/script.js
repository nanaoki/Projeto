document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission action

    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Basic validation
    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Here you can add AJAX to send the form data to a server
    // For demonstration, we'll just display a success message
    document.getElementById('formResponse').innerHTML = '<p>Obrigada pela mensagem!</p>';
});