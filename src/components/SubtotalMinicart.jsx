import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../micarrito/context/CartContext';

export const SubtotalMinicart = () => {

    const { carrito } = useContext(CartContext);

    const [total, setTotal] = useState(0);

    useEffect(() => {
        let sumaTotal = 0;
        carrito.map(item => {
            sumaTotal += item.price * item.cantidad;
        });

        setTotal(sumaTotal);

    }, [carrito]);

    return (
        <div className='wrapper-subtotal'>
            <strong>TOTAL:</strong>
            <span className='price-total'>$ {total}</span>

        </div>
    )
}
