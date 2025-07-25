document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const leadGenForm = document.getElementById('lead-gen-form');
    const modal = document.getElementById('lead-gen-modal');
    const closeButton = document.querySelector('.close-button');

    // Show the modal on page load
    modal.style.display = 'block';

    // Close the modal when the close button is clicked
    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Close the modal when the user clicks outside of it
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        alert(`Thank you for your message, ${name}! We will get back to you at ${email} as soon as possible.`);

        contactForm.reset();
    });

    leadGenForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(leadGenForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const phone = formData.get('phone');

        alert(`Thank you for your interest, ${name}! An agent will contact you at ${phone} or ${email} shortly.`);

        leadGenForm.reset();
        modal.style.display = 'none';
    });
});
