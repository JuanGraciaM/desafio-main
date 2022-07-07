import React from 'react';
import './style.css';
import  { NavBar }  from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Footer } from './components/Footer.js';


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting={'¡Bienvenido a nuestra tienda Online!'}/>} />
        <Route path="/category/:idcategoria" element={<ItemListContainer greeting={'Selección'} />} />
        <Route path="/item/:iditem" element={<ItemDetailContainer />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;