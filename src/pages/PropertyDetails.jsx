import React from 'react';
import { useParams } from 'react-router-dom';
import propertiesData from '../data/properties.json';
import SEO from '../components/SEO';

const PropertyDetails = () => {
  const { id } = useParams();
  const property = propertiesData.find(p => p.id === parseInt(id));

  if (!property) {
    return <div>Property not found</div>;
  }

  return (
    <div className="property-details-page">
      <SEO title={`${property.title} | Real Estate`} description={property.description} />
      <h1>{property.title}</h1>
      <div className="image-gallery">
        {property.images.map((image, index) => (
          <img key={index} src={image} alt={`${property.title} ${index + 1}`} />
        ))}
      </div>
      <div className="property-info">
        <p>{property.description}</p>
        <p className="price">Price: ${property.price.toLocaleString()}</p>
        <p>Location: {property.location}</p>
        <p>Type: {property.type}</p>
      </div>
      <div className="map-placeholder">
        <h2>Location Map</h2>
        <img src="https://via.placeholder.com/800x400" alt="Map placeholder" />
      </div>
      <div className="inquiry-form">
        <h2>Inquire About This Property</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="tel" placeholder="Your Phone" />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Inquiry</button>
        </form>
      </div>
    </div>
  );
};

export default PropertyDetails;
