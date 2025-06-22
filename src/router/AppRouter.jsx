import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { MiCarritoRoutes } from '../micarrito/routes/MiCarritoRoutes';

export const AppRouter = () => {

  return (

    <Routes>
      {/* Login */}

      <Route path='/auth/*' element={<AuthRoutes />} />

      {/* App Carrito */}
      <Route path='/*' element={<MiCarritoRoutes />} />


    </Routes>
  )
}
