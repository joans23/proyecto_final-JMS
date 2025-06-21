import React from 'react'

export const ItemMinicart = ({item}) => {
  const {image, title, price} = item;
  return (
   
        <div className='content-item'>
          <div className='content-img'>
              <img srcSet={image} alt={title}/>
          </div>
          <div className='wrraper-details'>
              <h3 className='title-item'>{title}</h3>
              <p className='price-item'>$ {price}</p>
          </div>
        </div>
  
  )
}
