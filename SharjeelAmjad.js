// JavaScript for handling the contact form submission

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;
    
    // Add your form handling logic here
    // For example, send data to an email service or API

    alert(`Thank you for your message, ${name}! We will get back to you soon.`);
    e.target.reset();
    
    
});
