import React from 'react'
import { MiCarritoLayout } from '../layout/MiCarritoLayout'
import { useFetch } from '../../hooks/useFetch'
import { LoadingMessage } from '../../components/LoadingMessage';
import { ProductCard } from '../../components/ProductCard';

export const HomePage = () => {
  
  const { data, hasError, isLoading } = useFetch('https://fakestoreapi.com/products');
  
  
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
