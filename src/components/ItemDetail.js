import React, { useState } from 'react';
import { ItemCount } from './ItemCount';
import { Link } from 'react-router-dom';

export const ItemDetail = ({
  id,
  name,
  category,
  image,
  description,
  price,
  stock
}) => {

  const [purchaseCompleted, setPurchaseCompleted] = useState(false);

  const onAdd = (count) => {
    setPurchaseCompleted(true);
    if(count > 0) {
    }
  }




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
        {purchaseCompleted ? <div><p>Agregado</p><Link to="/cart">Ir al carrito</Link></div> : (
        <ItemCount stock={stock} price={price} onAdd={onAdd}/> )}
      </section>
      </div>
    </div>
  );
}