import React from 'react';
import { Link } from 'react-router-dom';


export const NavBar = () => {
  const categories = [
    { id: "asfadd", address:'/', text: 'Nuestros Productos' },
    { id: "123asf", address:'/category/A', text: 'Zapatillas' },
    { id: "sgs3q3", address:'/category/B', text: 'Buzos' },
    { id: "gkl98s", address:'/category/C', text: 'Pantalones' }
  ];

  return (
    <section className="NavBar">
      <div>
        <i className="fa-solid fa-biohazard icon"></i>
      </div>
      {categories.map((cat) => {
        return (
          <Link to={cat.address} className="links" key={cat.id}>
            {cat.text}
          </Link>
        );
      })}
    </section>
  );
};