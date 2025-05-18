import React from 'react'
import { Button, Card } from 'react-bootstrap'

export const ProductCard = ({ product }) => {
    const { title, price, image} = product;

  return (
    <Card style={{ width: '18rem'}}>
        <Card.Img variant='top' src={ image }/>
        <Card.Body>
            <Card.Title title={title}>{ title }</Card.Title>
            <Card.Text className='price'>$ { price }</Card.Text>
            <Button variant='primary'>Agregar al carrito</Button>
        </Card.Body>
    </Card>

  )
}
