emailjs.init({
    publicKey: "edpOJ6LDFYPwmpPxu",
});

document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const errorElement = document.getElementById('error');
    const myEMailJSServiceId = 'service_8asz4x1';
    const myEMailJSTemplateId = 'template_12f2bvt';
    errorElement.textContent = '';

    if (!validateEmail(email)) {
        errorElement.textContent = 'Please enter a valid email address.';
        return;
    }

    sendEmail(name, email, message, myEMailJSServiceId, myEMailJSTemplateId);
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function sendEmail(name, email, message, myEMailJSServiceId, myEMailJSTemplateId) {
    const templateParams = {
        to_email: 'dkop@ukr.net',
        from_name: name || 'Anonymous',
        from_email: email,
        message_body: message || 'No message provided',
        subject: '6weeks - Форма заповнена',
    };

    emailjs.send(myEMailJSServiceId, myEMailJSTemplateId, templateParams)
    .then(() => {
        alert('Form submitted successfully!');
    }).catch((error) => {
        console.error('Error:', error);
        alert('Failed to send the form. Please try again later.');
    });
}
