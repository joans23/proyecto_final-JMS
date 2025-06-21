import React, { useContext } from 'react'
import { Minicart } from './Minicart'
import { ItemMinicart } from './ItemMinicart';
import { CartContext } from '../../micarrito/context/CartContext';
import CloseIcon from '@mui/icons-material/Close'
import { SubtotalMinicart } from '../SubtotalMinicart';

export const MinicartSidebar = () => {

    const { carrito, cantItems } = useContext(CartContext);

    const handleOpenSidebar = () => {
        const sidebarMinicart = document.getElementsByClassName('minicart-sidebar')[0];
        if(sidebarMinicart){
            sidebarMinicart.classList.add('_active');
        }
    
    }

    const handleCloseMinicart = () => {
        const sidebarMinicart = document.getElementsByClassName('minicart-sidebar')[0];
        if(sidebarMinicart){
            sidebarMinicart.classList.remove('_active');
        }
    }

  return (
    <>  
    <div className='nav-link minicart-icon'>
        <div className='minicart-link wrapper-minicart-sidebar' onClick={()=>handleOpenSidebar()}>
            <span><Minicart/><span className='counter'>{cantItems}</span></span>
        </div>
        <div className='minicart-sidebar'>
            <div className='title-minicart'>
                <h4>Mi carrito <CloseIcon className='close-minicart' onClick={()=>handleCloseMinicart()} /></h4>
                <hr/>
                 <div className='wrapper-item-minicart'>
                    {
                        carrito.map((item, index) => 
                            <ItemMinicart key={index} item={item}/>
                        )

                    }
                </div>
            </div>
            <SubtotalMinicart/>
        </div>
    </div>
    </>
  )
}
