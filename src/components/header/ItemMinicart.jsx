import React, { useContext } from 'react'
import DeleteIcon from '@mui/icons-material/Delete'
import { CartContext } from '../../micarrito/context/CartContext';

export const ItemMinicart = ({item}) => {
  const {image, title, price, cantidad, id} = item;
  const { removeFromCart } = useContext(CartContext);
  return (
   
        <div className='content-item'>
          <div className='content-img'>
              <img srcSet={image} alt={title}/>
          </div>
          <div className='wrapper-details'>
              <h3 className='title-item'>{title}</h3>
              <p className='price-item'>$ {price}</p>
              <p className='cant-item'>Cant: {cantidad}</p>
              <p className='icon-delete' onClick={()=> removeFromCart(id)}>{<DeleteIcon/>}</p>
          </div>
        </div>
  
  )
}
