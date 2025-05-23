import React, { useState } from 'react';
import { CartContext } from '../context/CartContext';
import Swal from 'sweetalert2';


export const CartProvider = ({ children }) => {
    const [cantItems,setCantItems]  = useState(0);

    const [carrito, setCarrito ] = useState([]);

    const addToCart = (product) => {
  
    setCarrito([
        ...carrito,
        product
    ]);
  
    setCantItems(cantItems+1);

    Swal.fire({
      title: '!Agregaste un producto!',
      text: `${product.title} fue agregado al carrito`,
      icon: 'success',
      timer: 4500,
      showConfirmButton: false,
      position: 'bottom-end',
      toast: true
    });
  }
  return (
    <CartContext.Provider value={{ cantItems , setCantItems, carrito, setCarrito, addToCart }}>
        { children }
    </CartContext.Provider>
  )
}
