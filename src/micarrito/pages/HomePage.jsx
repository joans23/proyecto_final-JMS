import React from 'react'
import { MiCarritoLayout } from '../layout/MiCarritoLayout'
import { useFetch } from '../../hooks/useFetch'
import { LoadingMessage } from '../../components/LoadingMessage';
import { ProductCard } from '../../components/ProductCard';

export const HomePage = () => {
  
  const { data, hasError, isLoading } = useFetch('https://68533dfe0594059b23d0765b.mockapi.io/products',"home");
  
  
  return (
    <MiCarritoLayout>
        <h1>Productos</h1>
        <hr/>
        {
          isLoading
          ? <LoadingMessage/>
          :(
            <div className='wrapper-content-products'>
            {data.map( product => (<ProductCard key={product.id} product={product}/>))}
            </div>
          )
        
        }
    </MiCarritoLayout>

  )
}
