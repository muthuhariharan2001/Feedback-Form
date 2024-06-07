document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    const name = document.getElementsByName('name')[0].value.trim();
    const email = document.getElementsByName('email')[0].value.trim();
    const message = document.getElementsByName('message')[0].value.trim();

    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        event.preventDefault();
    }
});
