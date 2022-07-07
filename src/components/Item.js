import React from 'react';
import { Link } from 'react-router-dom';

export const Item = ({ id, name, category, image, price}) => {
  return (
    <>
    
    <div className="card">
      <p>{name}</p>
      <p>Categoría: {category}</p>
      <div>
        <img src={image} alt={name}  className="card-img"/>
      </div>
      <p>${price}</p>
      <Link to={`/item/${id}`} className="linkeado">
        <button className="btn-link">Ver detalles</button>
      </Link>
    </div>
    </>
  );
};