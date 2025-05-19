import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { AboutPage, Cart, ContactPage, DestacadoPage, HomePage, OfertasPage } from '../pages'
import { PrivateRouter } from '../../router'
import { Account, AdminUser } from '../../auth/pages'
import { PageProduct } from '../pages/PageProduct'

export const MiCarritoRoutes = ({ setCantItems, cantItems, addToCart, carrito}) => {
  return (
    <Routes>

        {/* HomePage */}
        <Route path='/' element={<HomePage  setCantItems={setCantItems} cantItems={cantItems} addToCart={addToCart} carrito={carrito}/>} />

        {/* AboutPage */}
        <Route path='/about' element={<AboutPage  setCantItems={setCantItems} cantItems={cantItems} addToCart={addToCart} carrito={carrito}/>} />

        {/* DestacadoPage */}
        <Route path='/destacado' element={<DestacadoPage  setCantItems={setCantItems} cantItems={cantItems} addToCart={addToCart} carrito={carrito}/>} />

        {/* OfertasPage */}
        <Route path='/ofertas' element={<OfertasPage  setCantItems={setCantItems} cantItems={cantItems} addToCart={addToCart} carrito={carrito}/>} />

        {/* User Account */}
        <Route path='perfil/:id' element={
          <PrivateRouter> <Account setCantItems={setCantItems} cantItems={cantItems} addToCart={addToCart} carrito={carrito}/></PrivateRouter>
        }/>

        {/* Page Product */}
        <Route path='/product/:id' element={<PageProduct  setCantItems={setCantItems} cantItems={cantItems} addToCart={addToCart} carrito={carrito}/>}/>
        
        {/* Contact */}
         <Route path='/contact' element={<ContactPage setCantItems={setCantItems} cantItems={cantItems} addToCart={addToCart} carrito={carrito}/>}/>

        {/* Admin User */}
        <Route path='admin' element={
          <PrivateRouter><AdminUser setCantItems={setCantItems} cantItems={cantItems} addToCart={addToCart} carrito={carrito}/></PrivateRouter>
        }/>

        {/* Cart */}
        <Route path='/cart' element={<Cart  setCantItems={setCantItems} cantItems={cantItems} addToCart={addToCart} carrito={carrito}/>} />

        {/* Default */}
        <Route path='/*' element={<HomePage  setCantItems={setCantItems} cantItems={cantItems} addToCart={addToCart} carrito={carrito}/>} />

    </Routes>
  )
}
