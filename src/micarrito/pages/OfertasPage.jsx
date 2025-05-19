import React from 'react'
import { MiCarritoLayout } from '../layout/MiCarritoLayout'

export const OfertasPage = (props) => {
  return (
    <MiCarritoLayout cantItems={props.cantItems} setCantItems={props.setCantItems} addToCart={props.addToCart}>
        <div>OfertasPage</div>
    </MiCarritoLayout>
 
  )
}
