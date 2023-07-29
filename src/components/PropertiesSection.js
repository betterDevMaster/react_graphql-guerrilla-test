import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_PROPERTIES } from "../graphql";

import PropertyCard from "./PropertyCard";

const PropertiesSection = () => {
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showAll, setShowAll] = useState(false);

  const { loading, error, data } = useQuery(GET_PROPERTIES);

  useEffect(() => {
    if (data && data.propertyCollection && data.propertyCollection.items) {
      setProperties(data.propertyCollection.items);
    }
  }, [data]);

  useEffect(() => {
    const filtered = selectedCategory
      ? properties.filter((property) => property.category === selectedCategory)
      : properties.slice(0, 3);
    setFilteredProperties(filtered);
  }, [properties, selectedCategory]);

  const handleLoadMore = () => {
    setShowAll(true);
    setFilteredProperties(properties);
  };

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);
    setShowAll(false); // Reset showAll state when category changes
  };

  return (
    <section className="properties-section">
      <div className="properties-header">
        <h2>Properties</h2>
        <p>Turpis facilisis tempor pulvinar in lobortis ornare magna.</p>
        <div className="filter">
          <label htmlFor="category">Filter by category:</label>
          <select
            id="category"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="">All categories</option>
            <option value="Apartment">Apartment</option>
            <option value="House">House</option>
            <option value="Penthouse">Penthouse</option>
            <option value="Villa">Villa</option>
          </select>
        </div>
      </div>

      <div className="property-grid">
        {filteredProperties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>

      {!selectedCategory && !showAll && (
        <div className="load-more-container">
          <button className="load-more" onClick={handleLoadMore}>
            Load More
          </button>
        </div>
      )}
    </section>
  );
};

export default PropertiesSection;
