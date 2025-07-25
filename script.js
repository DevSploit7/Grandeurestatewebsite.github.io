document.addEventListener('DOMContentLoaded', function() {
    const propertyGrid = document.getElementById('property-grid');

    if (propertyGrid) {
        properties.forEach(property => {
            const propertyCard = `
                <div class="col-md-4 mb-4">
                    <div class="card">
                        <img src="${property.image}" class="card-img-top" alt="Property Image">
                        <div class="card-body">
                            <h5 class="card-title">${property.name}</h5>
                            <p class="card-text">${property.description}</p>
                            <p class="card-text font-weight-bold">${property.price}</p>
                            <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#lead-gen-modal">Inquire</button>
                        </div>
                    </div>
                </div>
            `;
            propertyGrid.innerHTML += propertyCard;
        });
    }

    const contactForm = document.getElementById('contact-form');
    const leadGenForm = document.getElementById('lead-gen-form');
    const leadGenModal = new bootstrap.Modal(document.getElementById('lead-gen-modal'));

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');

            alert(`Thank you for your message, ${name}! We will get back to you at ${email} as soon as possible.`);

            contactForm.reset();
        });
    }

    if (leadGenForm) {
        leadGenForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const formData = new FormData(leadGenForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const phone = formData.get('phone');

            alert(`Thank you for your interest, ${name}! An agent will contact you at ${phone} or ${email} shortly.`);

            leadGenForm.reset();
            leadGenModal.hide();
        });
    }
});
