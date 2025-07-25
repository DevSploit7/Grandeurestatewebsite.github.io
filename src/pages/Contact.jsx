import React from 'react';
import SEO from '../components/SEO';

const Contact = () => {
  return (
    <div className="contact-page">
      <SEO title="Contact Us | Real Estate" description="Get in touch with us." />
      <h1>Contact Us</h1>
      <div className="contact-info">
        <p>Email: info@realestate.com</p>
        <p>Phone: (123) 456-7890</p>
        <p>Address: 123 Main St, Anytown, USA</p>
      </div>
      <div className="contact-form">
        <h2>Send us a message</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
      <div className="map-placeholder">
        <h2>Our Location</h2>
        <img src="https://via.placeholder.com/800x400" alt="Map placeholder" />
      </div>
    </div>
  );
};

export default Contact;
