import React from 'react';
import SEO from '../components/SEO';

const About = () => {
  return (
    <div className="about-page">
      <SEO title="About Us | Real Estate" description="Learn more about our team and mission." />
      <section className="about-hero">
        <h1>About Us</h1>
        <p>Your trusted partner in real estate.</p>
      </section>

      <section className="about-content">
        <div className="agent-bio">
          <img src="https://via.placeholder.com/300" alt="Agent" />
          <h2>John Doe</h2>
          <p>
            John Doe is a licensed real estate agent with over 10 years of experience in the industry. He is passionate about helping clients find their dream homes and is committed to providing the highest level of service.
          </p>
        </div>

        <div className="mission-statement">
          <h2>Our Mission</h2>
          <p>
            Our mission is to provide our clients with the best possible real estate experience. We are dedicated to honesty, integrity, and professionalism, and we strive to exceed our clients' expectations in every transaction.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
