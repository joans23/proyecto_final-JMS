import React, { useContext } from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { CartContext } from '../micarrito/context/CartContext';

export const ProductCard = ({ product }) => {
  const { title, price, image, id } = product;

  const { addToCart } = useContext(CartContext);

  return (
    <Card className='item-product'>
      <Link className='text-center' to={'/product/' + id}><Card.Img variant='top' src={image} /></Link>
      <Card.Body>
        <Card.Title title={title}>{title}</Card.Title>
        <Card.Text className='price'>$ {price}</Card.Text>
        <Button as={Link} to={'/product/' + id} variant='secondary'>Ver Más</Button>
        <Button className='add-to-cart-item' variant='primary'onClick={()=>addToCart(product)}><AddShoppingCartIcon/></Button>
      </Card.Body>
    </Card>

  )
}
