import React from 'react'
import { Minicart } from './Minicart'
import { ItemMinicart } from './ItemMinicart';

export const MinicartSidebar = ({carrito, cantItems}) => {

  return (
    <>  
    <div className='nav-link'>
        <div className='minicart-link wrapper-minicart-sidebar'>
            <Minicart/><span className='counter'>{cantItems}</span>
        </div>
        <div className='minicart-sidebar'>
            <div className='title-minicart'>
                <h4>Mi carrito</h4>
                <hr/>
                <div>
                    {
                        carrito.map((item, index) => 
                            <ItemMinicart key={index} item={item}/>
                        )

                    }
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
