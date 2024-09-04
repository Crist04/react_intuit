// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const registerLink = document.getElementById('register-link');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent form submission
        alert('Login form submitted');
    });

    registerLink.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Registration link clicked');
        // You can add functionality here to show a registration form or redirect to a registration page
    });
});
