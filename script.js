// Sample property data (would normally come from an API)
const properties = [
    {
        id: 1,
        title: "Property",
        type: "For Sale",
        price: "INR450,000",
        location: "123 Park Ave, Springfield",
        beds: 4,
        baths: 3,
        sqft: 2400,
        description: "Beautiful modern home with open floor plan, gourmet kitchen, and spacious backyard.",
        image: "https://picsum.photos/600/400?random=3"
    },
    {
        id: 2,
        title: "Property ",
        type: "For Rent",
        price: "INR2,800/mo",
        location: "456 Main St, Springfield",
        beds: 2,
        baths: 2,
        sqft: 1200,
        description: "Stunning downtown condo with panoramic city views and premium amenities.",
        image: "https://picsum.photos/600/400?random=4"
    },
    {
        id: 3,
        title: "Property",
        type: "For Sale",
        price: "INR325,000",
        location: "789 Oak Lane, Springfield",
        beds: 3,
        baths: 2.5,
        sqft: 1800,
        description: "Charming townhouse in family-friendly neighborhood with community pool.",
        image: "https://picsum.photos/600/400?random=5"
    }
];

// Sample testimonials data
const testimonials = [
    {
        id: 1,
        name: "Client 1",
        role: "Home Buyer",
        rating: 5,
        content: "Sarah made the home buying process so easy. She was patient, knowledgeable, and always available to answer our questions. We found our dream home thanks to her!",
        image: "https://picsum.photos/100?random=6"
    },
    {
        id: 2,
        name: "client 2",
        role: "Home Seller",
        rating: 5,
        content: "We got multiple offers above asking price within days of listing our home with Sarah. Her marketing strategy and negotiation skills are top-notch!",
        image: "https://picsum.photos/100?random=7"
    },
    {
        id: 3,
        name: "Client 3",
        role: "First-Time Buyers",
        rating: 5,
        content: "As first-time home buyers, we were nervous about the process. Sarah guided us every step of the way and found us a perfect starter home in our budget.",
        image: "https://picsum.photos/100?random=8"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Form submission
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                if (!mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                }
            }
        });
    });

    // Lead capture modal
    const leadCaptureModal = document.getElementById('lead-capture-modal');
    const closeModalBtn = document.getElementById('close-modal-btn');
    const leadCaptureForm = document.getElementById('lead-capture-form');

    // Show modal on page load
    setTimeout(() => {
        leadCaptureModal.classList.remove('hidden');
    }, 2000);

    closeModalBtn.addEventListener('click', () => {
        leadCaptureModal.classList.add('hidden');
    });

    leadCaptureForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your interest! We will be in touch shortly.');
        leadCaptureForm.reset();
        leadCaptureModal.classList.add('hidden');
    });

    // Populate property listings
    const propertyListingsContainer = document.getElementById('property-listings');
    properties.forEach(property => {
        const propertyCard = `
            <div class="property-card bg-white rounded-lg overflow-hidden shadow-md transition duration-300">
                <div class="relative">
                    <img src="${property.image}" alt="${property.title}" class="w-full h-64 object-cover" loading="lazy">
                    <div class="absolute top-4 right-4 bg-primary text-white text-sm font-bold px-3 py-1 rounded-full">${property.type}</div>
                </div>
                <div class="p-6">
                    <h3 class="text-xl font-bold mb-2">${property.title}</h3>
                    <p class="text-gray-600 mb-4"><i class="fas fa-map-marker-alt text-primary mr-2"></i>${property.location}</p>
                    <div class="flex justify-between items-center mb-4">
                        <span class="text-2xl font-bold text-primary">${property.price}</span>
                        <div class="flex space-x-2">
                            <span class="text-gray-600"><i class="fas fa-bed text-primary mr-1"></i> ${property.beds}</span>
                            <span class="text-gray-600"><i class="fas fa-bath text-primary mr-1"></i> ${property.baths}</span>
                            <span class="text-gray-600"><i class="fas fa-ruler-combined text-primary mr-1"></i> ${property.sqft} sqft</span>
                        </div>
                    </div>
                    <p class="text-gray-600 mb-4">${property.description}</p>
                    <a href="#" class="block text-center bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded-lg transition duration-300">View Details</a>
                </div>
            </div>
        `;
        propertyListingsContainer.innerHTML += propertyCard;
    });

    // Populate testimonials
    const testimonialCardsContainer = document.getElementById('testimonial-cards');
    testimonials.forEach(testimonial => {
        const testimonialCard = `
            <div class="testimonial-card bg-white p-8 rounded-lg shadow-md">
                <div class="flex items-center mb-4">
                    <div class="flex">
                        ${'<i class="fas fa-star text-yellow-400"></i>'.repeat(testimonial.rating)}
                    </div>
                </div>
                <p class="text-gray-600 mb-6">"${testimonial.content}"</p>
                <div class="flex items-center">
                    <img src="${testimonial.image}" alt="${testimonial.name}" class="w-12 h-12 rounded-full mr-4">
                    <div>
                        <h4 class="font-bold">${testimonial.name}</h4>
                        <p class="text-gray-500 text-sm">${testimonial.role}</p>
                    </div>
                </div>
            </div>
        `;
        testimonialCardsContainer.innerHTML += testimonialCard;
    });
});
