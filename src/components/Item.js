import React from 'react';
import { Link } from 'react-router-dom';

export const Item = ({ id, name, category, image, price}) => {
  return (
    <Link to={`/item/${id}`}>
    <div className="card">
      <p>{name}</p>
      <p>Cat: {category}</p>
      <div>
        <img src={image} alt={name}  className="card-img"/>
      </div>
      <p>${price}</p>
    </div>
    </Link>
  );
};