function updateEmailContent() {
    var emailContent = document.getElementById('email-address');
    if (window.innerWidth <= 569) {
        emailContent.textContent = 'Click to Email';
    } else {
        emailContent.textContent = 'operations@alphasecurityindustries.co.uk';
    }
}

// Call the function when the page loads and whenever the window is resized
window.onload = updateEmailContent;
window.onresize = updateEmailContent;
