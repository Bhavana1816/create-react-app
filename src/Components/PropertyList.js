import React, { useState } from "react";
import PropertyItem from "./PropertyItem";

const mockProperties = [
  {
    id: 1,
    title: "Luxury Villa",
    price: 300,
    location: "New York",
    bedrooms: 4,
    amenities: ["WiFi", "Pool"],
  },
  {
    id: 2,
    title: "City Apartment",
    price: 150,
    location: "Los Angeles",
    bedrooms: 2,
    amenities: ["Gym"],
  },
  // Add more properties...
];

function PropertyList({ addToCart }) {
  const [filters, setFilters] = useState({
    location: "",
    priceRange: [0, 500],
    bedrooms: 0,
  });

  const filteredProperties = mockProperties.filter((property) => {
    return (
      property.location.includes(filters.location) &&
      property.price >= filters.priceRange[0] &&
      property.price <= filters.priceRange[1] &&
      property.bedrooms >= filters.bedrooms
    );
  });

  return (
    <div>
      <h1>Available Properties</h1>
      <div>{/* Implement filters later */}</div>
      <div className="property-list">
        {filteredProperties.map((property) => (
          <PropertyItem
            key={property.id}
            property={property}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default PropertyList;
