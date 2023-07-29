import React from "react";

const PropertyCard = ({ property }) => {
  const { title, address, category, image } = property;

  return (
    <div className="property-card">
      <img src={image.url} alt={title} />
      <div className="detail">
        <h2>{title}</h2>
        <p>{address}</p>
        <p>Category: {category}</p>
      </div>
    </div>
  );
};

export default PropertyCard;
