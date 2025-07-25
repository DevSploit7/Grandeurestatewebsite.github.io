import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Home = () => {
  return (
    <div>
      <SEO title="Home | Real Estate" description="Find your dream home with us." />
      <section className="hero">
        <div className="hero-text">
          <h1>Find Your Dream Home</h1>
          <p>Search for properties in your area</p>
          <form>
            <input type="text" placeholder="Enter a city, state, or zip code" />
            <button type="submit">Search</button>
          </form>
        </div>
      </section>

      <section className="properties">
        <h2>Featured Properties</h2>
        <div className="property-grid">
          <div className="property-card">
            <img src="https://via.placeholder.com/300" alt="Property Image" />
            <div className="property-card-content">
              <h3>123 Main St, Anytown, USA</h3>
              <p>A beautiful family home with a large backyard.</p>
              <p className="price">$500,000</p>
              <Link to="/properties/1" className="btn">View Details</Link>
            </div>
          </div>
          <div className="property-card">
            <img src="https://via.placeholder.com/300" alt="Property Image" />
            <div className="property-card-content">
              <h3>456 Oak Ave, Anytown, USA</h3>
              <p>A modern condo in the heart of downtown.</p>
              <p className="price">$300,000</p>
              <Link to="/properties/2" className="btn">View Details</Link>
            </div>
          </div>
          <div className="property-card">
            <img src="https://via.placeholder.com/300" alt="Property Image" />
            <div className="property-card-content">
              <h3>789 Pine Ln, Anytown, USA</h3>
              <p>A cozy cabin in the woods, perfect for a getaway.</p>
              <p className="price">$200,000</p>
              <Link to="/properties/3" className="btn">View Details</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <h2>Ready to find your new home?</h2>
        <p>Browse our listings or contact us today to get started.</p>
        <Link to="/properties" className="btn">View Properties</Link>
        <Link to="/contact" className="btn">Contact Us</Link>
      </section>
    </div>
  );
};

export default Home;
