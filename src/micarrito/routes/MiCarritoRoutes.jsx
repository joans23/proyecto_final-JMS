import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { AboutPage, Cart, DestacadoPage, HomePage, OfertasPage } from '../pages'
import { PrivateRouter } from '../../router'
import { Account, AdminUser } from '../../auth/pages'

export const MiCarritoRoutes = () => {
  return (
    <Routes>

        {/* HomePage */}
        <Route path='/' element={<HomePage />} />

        {/* AboutPage */}
        <Route path='/about' element={<AboutPage />} />

        {/* DestacadoPage */}
        <Route path='/destacado' element={<DestacadoPage />} />

        {/* OfertasPage */}
        <Route path='/ofertas' element={<OfertasPage/>} />

        {/* User Account */}
        <Route path='perfil/:id' element={
          <PrivateRouter> <Account/></PrivateRouter>
        }/>

        {/* Admin User */}
        <Route path='admin' element={
          <PrivateRouter><AdminUser/></PrivateRouter>
        }/>

        {/* Cart */}
        <Route path='/cart' element={<Cart/>} />

        {/* Default */}
        <Route path='/*' element={<HomePage />} />

    </Routes>
  )
}
