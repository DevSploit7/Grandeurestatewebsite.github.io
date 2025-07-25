import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import propertiesData from '../data/properties.json';
import SEO from '../components/SEO';

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [locationFilter, setLocationFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [priceSort, setPriceSort] = useState('');

  useEffect(() => {
    setProperties(propertiesData);
    setFilteredProperties(propertiesData);
  }, []);

  useEffect(() => {
    let result = properties;

    if (locationFilter) {
      result = result.filter(property => property.location.toLowerCase().includes(locationFilter.toLowerCase()));
    }

    if (typeFilter) {
      result = result.filter(property => property.type.toLowerCase() === typeFilter.toLowerCase());
    }

    if (priceSort) {
      if (priceSort === 'asc') {
        result = result.sort((a, b) => a.price - b.price);
      } else if (priceSort === 'desc') {
        result = result.sort((a, b) => b.price - a.price);
      }
    }

    setFilteredProperties(result);
  }, [locationFilter, typeFilter, priceSort, properties]);

  return (
    <div className="properties-page">
      <SEO title="Properties | Real Estate" description="Browse our available properties." />
      <h1>Properties</h1>
      <div className="filters">
        <input
          type="text"
          placeholder="Filter by location"
          value={locationFilter}
          onChange={e => setLocationFilter(e.target.value)}
        />
        <select value={typeFilter} onChange={e => setTypeFilter(e.target.value)}>
          <option value="">All Types</option>
          <option value="House">House</option>
          <option value="Condo">Condo</option>
          <option value="Cabin">Cabin</option>
          <option value="Apartment">Apartment</option>
        </select>
        <select value={priceSort} onChange={e => setPriceSort(e.target.value)}>
          <option value="">Sort by Price</option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
      </div>
      <div className="property-grid">
        {filteredProperties.map(property => (
          <div key={property.id} className="property-card">
            <img src={property.images[0]} alt={property.title} />
            <div className="property-card-content">
              <h3>{property.title}</h3>
              <p>{property.description}</p>
              <p className="price">${property.price.toLocaleString()}</p>
              <Link to={`/properties/${property.id}`} className="btn">View Details</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Properties;
