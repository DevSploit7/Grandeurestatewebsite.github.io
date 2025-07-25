document.addEventListener('DOMContentLoaded', function() {
    const leadCaptureModal = document.getElementById('lead-capture-modal');
    const leadCaptureForm = document.getElementById('lead-capture-form');

    // Show the modal on page load
    leadCaptureModal.classList.remove('hidden');

    leadCaptureForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(leadCaptureForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const phone = formData.get('phone');

        alert(`Thank you for your interest, ${name}! An agent will contact you at ${phone} or ${email} shortly.`);

        leadCaptureForm.reset();
        leadCaptureModal.classList.add('hidden');
    });

    // Fade-in animation
    const sections = document.querySelectorAll('section');
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});
