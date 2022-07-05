import React from 'react';
import { Link } from 'react-router-dom'

export const NavBar = () => {
  const categories = [
    { id: "asfadd", address:'/', text: 'Todos los productos' },
    { id: "123asf", address:'/category/A', text: 'CATEGORIA A' },
    { id: "sgs3q3", address:'/category/B', text: 'CATEGORIA B' },
    { id: "gkl98s", address:'/category/C', text: 'CATEGORIA C' }
  ];

  return (
    <section style={{ background: 'lightgray'}} className="NavBar">
      {categories.map((cat) => {
        return (
          <Link to={cat.address} className="links" key={cat.id}>
            {cat.text}
          </Link>
        );
      })};
    </section>
  );
};