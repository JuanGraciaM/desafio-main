import './ItemCount.css';
import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';


export const ItemCount = ({stock, onAdd}) => {

    let initial = 0

    const [num, setNum] = useState(initial);

    

    useEffect( () => {
        if(num === stock - 2){
            Swal.fire({
                title: 'Atención!',
                text: 'Quedan pocas unidades',
                icon: 'warning',
                timer: 2000
              })
        }
    }, [num])

    const sumar = () => {
        if(num < stock) {
            setNum(num + 1)
        } else {
            Swal.fire({
                title: 'Atención!',
                text: 'Stock máximo alcanzado',
                icon: 'warning',
                timer: 2000
              })
        }
    }

    const resta = () => {
        if(num > initial) {
            setNum(num - 1)
        }
    }

    const addToCart = () => {
        if(num === 0) {
            Swal.fire({
                title: 'Atención!',
                text: 'No has seleccionado una cantidad diferente a 0',
                icon: 'warning',
                timer: 2000
              })
        } else {
        setNum(initial)
        onAdd(num)
        };
    }


    return(
        <div className="itemCount">
            <div className="itemCount-container">
                <button onClick={resta}>-</button>
                <p>{num}</p>
                <button className="btn-plus" onClick={sumar}>+</button>
            </div>
            <button className="itemCount-add" onClick={addToCart}>Agregar al carrito</button>
            <p className="itemCount-units">Unidades disponibles: {stock}</p>
        </div>
    );
}