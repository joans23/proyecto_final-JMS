import React from 'react'
import { MiCarritoLayout } from '../layout/MiCarritoLayout'

export const Cart = (props) => {
  return (
    <MiCarritoLayout cantItems={props.cantItems} setCantItems={props.setCantItems} addToCart={props.addToCart}>
      <div>Cart</div>
    </MiCarritoLayout>

  )
}
