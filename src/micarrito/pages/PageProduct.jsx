import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch';
import { MiCarritoLayout } from '../layout/MiCarritoLayout';
import { CarouselPdp, LoadingMessage } from '../../components';
import { Button } from 'react-bootstrap';

export const PageProduct = (props) => {

    const { id } = useParams();

    const { data, hasError, isLoading } = useFetch(`https://fakestoreapi.com/products/${id}`);
 
  return (
    <MiCarritoLayout cantItems={props.cantItems} setCantItems={props.setCantItems} addToCart={props.addToCart} carrito={props.carrito}>
        {
          isLoading
          ? <LoadingMessage/>
          :(
            <div className='wrapper-page-product'>
            <div className='product-media'>
                <CarouselPdp data={data}/>
            </div>
            <div className='product-info-main'>
                <div className='title-product'>
                    <h2>{data.title}</h2>
                    {/*rating*/}

                    <div className='price'>
                        <span>$ {data.price}</span>
                    </div>
                    <div className='description'>
                        <p>{data.description}</p>
                    </div>
                    <div className='add-to-cart'>
                        <Button variant='primary' onClick={()=>props.addToCart(data)}>Agregar al carrito</Button>
                    </div>
                </div>
            </div>
        </div>
         )        
        }
    </MiCarritoLayout>
  )
}
