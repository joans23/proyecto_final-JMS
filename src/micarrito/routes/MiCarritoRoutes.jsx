import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { AboutPage, Cart, ContactPage, DestacadoPage, HomePage, OfertasPage } from '../pages'
import { PrivateRouter } from '../../router'
import { AdminUser } from '../../auth/pages'
import { PageProduct } from '../pages/PageProduct'

export const MiCarritoRoutes = () => {
  return (
    <Routes>

        {/* HomePage */}
        <Route path='/' element={<HomePage/>} />

        {/* AboutPage */}
        <Route path='/about' element={<AboutPage/>} />

        {/* DestacadoPage */}
        <Route path='/destacado' element={<DestacadoPage/>} />

        {/* OfertasPage */}
        <Route path='/ofertas' element={<OfertasPage/>} />

        {/* Page Product */}
        <Route path='/product/:id' element={<PageProduct />}/>
        
        {/* Contact */}
        <Route path='/contact' element={<ContactPage />}/>

        {/* Admin User */}
        <Route path='admin' element={
          <PrivateRouter><AdminUser /></PrivateRouter>
        }/>

        {/* Cart */}
        <Route path='/cart' element={<Cart/>} />

        {/* Default */}
        <Route path='/*' element={<HomePage/>} />

    </Routes>
  )
}
