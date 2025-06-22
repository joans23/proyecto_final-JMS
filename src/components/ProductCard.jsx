import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom';

export const ProductCard = ({ product }) => {
  const { title, price, image, id } = product;

  return (
    <Card className='item-product'>
      <Link className='text-center' to={'/product/' + id}><Card.Img variant='top' src={image} /></Link>
      <Card.Body>
        <Card.Title title={title}>{title}</Card.Title>
        <Card.Text className='price'>$ {price}</Card.Text>
        <Button as={Link} to={'/product/' + id} variant='primary'>Ver Más</Button>
      </Card.Body>
    </Card>

  )
}
