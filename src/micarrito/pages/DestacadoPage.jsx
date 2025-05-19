import React from 'react'
import { MiCarritoLayout } from '../layout/MiCarritoLayout'
import { LoadingMessage } from '../../components/LoadingMessage'

export const DestacadoPage = (props) => {
  return (
    <MiCarritoLayout cantItems={props.cantItems} setCantItems={props.setCantItems} addToCart={props.addToCart}>
        <LoadingMessage/>
    </MiCarritoLayout>
  )
}
