import React, { useContext } from 'react'
import { Minicart } from './Minicart'
import { ItemMinicart } from './ItemMinicart';
import { CartContext } from '../../micarrito/context/CartContext';

export const MinicartSidebar = () => {

    const { carrito, cantItems } = useContext(CartContext);

    const handleOpenSidebar = () => {
        const sidebarMinicart = document.getElementsByClassName('minicart-sidebar')[0];
        if(sidebarMinicart){
            sidebarMinicart.classList.add('_active');
        }
    
    }

  return (
    <>  
    <div className='nav-link'>
        <div className='minicart-link wrapper-minicart-sidebar' onClick={()=>handleOpenSidebar()}>
            <span><Minicart/><span className='counter'>{cantItems}</span></span>
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
