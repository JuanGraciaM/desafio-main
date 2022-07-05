import React, { useState, useEffect } from 'react';
import { ItemList } from './ItemList';
import { data } from '../data/data';
import { useParams } from 'react-router-dom';

export const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { idcategoria } = useParams();

  useEffect(() => {
    const getItems = new Promise((resolve) => {
      setTimeout(() => {
        const myData = idcategoria 
        ? data.filter((item) => item.category === idcategoria) 
        : data;

        resolve(myData);
      }, 1000);
    });

    getItems.then((res) => {
      setItems(res);
    })
    .finally(() => setIsLoading(false));
  }, [idcategoria]);


  return isLoading ? (
    <h1 className="loading">Cargando...</h1>
  ) : ( 
    <>
      <h3 style={{textAlign:'center'}}>{greeting}</h3>
      <ItemList items={items} />
    </>
  );
}
