import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'; 
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { MiCarritoRoutes } from '../micarrito/routes/MiCarritoRoutes';

export const AppRouter = () => {
   const [cantItems,setCantItems]  = useState(0);

  const [carrito, setCarrito ] = useState([]);

  const addToCart = (product) => {
  
      setCarrito([
        ...carrito,
        product
      ]);
  
      setCantItems(cantItems+1);
  }
  return (
    <Routes>
        {/* Login */}

        <Route path='/auth/*' element={<AuthRoutes />}/>

        {/* App Carrito */}
        <Route path='/*' element={ <MiCarritoRoutes setCantItems={setCantItems} cantItems={cantItems} addToCart={addToCart} carrito={carrito}/>}/>


    </Routes>
  )
}
