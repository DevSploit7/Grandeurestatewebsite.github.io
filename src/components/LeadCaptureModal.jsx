import React, { useState, useEffect } from 'react';

const LeadCaptureModal = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 10000); // 10 seconds

    const handleScroll = () => {
      if (window.scrollY / document.body.scrollHeight > 0.5) {
        setShowModal(true);
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!showModal) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close-button" onClick={() => setShowModal(false)}>&times;</span>
        <h2>Interested in a Property?</h2>
        <p>Fill out the form below and one of our agents will be in touch with you shortly.</p>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="tel" placeholder="Your Phone" required />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default LeadCaptureModal;
