import React, { useState } from 'react';
import { CartContext } from '../context/CartContext';
import Swal from 'sweetalert2';


export const CartProvider = ({ children }) => {
  const [cantItems, setCantItems] = useState(0);

  const [carrito, setCarrito] = useState([]);

  const addToCart = (product) => {
    const existe = carrito.find(item => item.id === product.id);

    let nuevoCarrito;

    if (existe) {
      nuevoCarrito = carrito.map(item =>
        item.id === product.id
          ? { ...item, cantidad: item.cantidad + 1 }
          : item
      );
    } else {
      nuevoCarrito = [...carrito, { ...product, cantidad: 1 }];
    }

    setCarrito(nuevoCarrito);

    const nuevaCantidadTotal = nuevoCarrito.reduce((acc, item) => acc + item.cantidad, 0);
    setCantItems(nuevaCantidadTotal);

    Swal.fire({
      title: '!Agregaste un producto!',
      text: `${product.title} fue agregado al carrito`,
      icon: 'success',
      timer: 4500,
      showConfirmButton: false,
      position: 'bottom-end',
      toast: true
    });
  };

  const removeFromCart = (productId) => {
    const nuevoCarrito = carrito
      .map(item => {
        if (item.id === productId) {
          if (item.cantidad > 1) {
            return { ...item, cantidad: item.cantidad - 1 };
          }
          return null;
        }
        return item;
      })
      .filter(Boolean);

    setCarrito(nuevoCarrito);

    const nuevaCantidadTotal = nuevoCarrito.reduce((acc, item) => acc + item.cantidad, 0);
    setCantItems(nuevaCantidadTotal);

    Swal.fire({
      title: 'Producto actualizado',
      text: 'Se eliminó una unidad del producto',
      icon: 'info',
      timer: 3000,
      showConfirmButton: false,
      position: 'bottom-end',
      toast: true
    });
  };

  return (
    <CartContext.Provider value={{ cantItems, carrito, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  )
}
