import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <header>
        <nav>
          <div className="logo">
            <Link to="/">Real Estate</Link>
          </div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/properties">Properties</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <div className="footer-content">
          <div className="contact-info">
            <h3>Contact Us</h3>
            <p>Email: info@realestate.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
          <div className="social-media">
            <h3>Follow Us</h3>
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
            <a href="#">Instagram</a>
          </div>
          <div className="newsletter-signup">
            <h3>Sign up for our newsletter</h3>
            <form>
              <input type="email" placeholder="Enter your email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
        <p>&copy; 2025 Real Estate</p>
      </footer>
    </div>
  );
};

export default Layout;
