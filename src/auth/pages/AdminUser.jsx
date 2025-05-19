import React from 'react'
import { MiCarritoLayout } from '../../micarrito/layout/MiCarritoLayout'

export const AdminUser = (props) => {
  return (
    <MiCarritoLayout cantItems={props.cantItems} setCantItems={props.setCantItems} addToCart={props.addToCart}>
        <div>AdminUser</div>
    </MiCarritoLayout>

  )
}
