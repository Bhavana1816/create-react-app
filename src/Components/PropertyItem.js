import React from 'react';

function PropertyItem({ property, addToCart }) {
  return (
    <div className="property-item">
      <h2>{property.title}</h2>
      <p>Price: ${property.price}/night</p>
      <p>Location: {property.location}</p>
      <p>Bedrooms: {property.bedrooms}</p>
      <button onClick={() => addToCart(property)}>Book Now</button>
    </div>
  );
}

export default PropertyItem;