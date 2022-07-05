import React from 'react';

export const ItemDetail = ({
  id,
  name,
  category,
  image,
  description,
  price,
}) => {
  return (
    <div className="item-detail">
      <div className="divcontainer">
      <div className="item-dail__div">
        <img src={image} alt={`${id}-${name}`} className="item-detail__img"/>
      </div>
      <section className="item-detail__container">
        <h1>{name}</h1>
        <p>{description}</p>
        <h2>${price}</h2>
      </section>
      </div>
    </div>
  );
}