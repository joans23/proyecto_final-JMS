import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch';
import { MiCarritoLayout } from '../layout/MiCarritoLayout';
import { CarouselPdp, LoadingMessage } from '../../components';
import { Button } from 'react-bootstrap';
import { CartContext } from '../context/CartContext';

export const PageProduct = () => {

    const { id } = useParams();

    const { data, hasError, isLoading } = useFetch(`https://68533dfe0594059b23d0765b.mockapi.io/products/${id}`);

    const { addToCart } = useContext(CartContext);

    return (
        <MiCarritoLayout>
            {
                isLoading
                    ? <LoadingMessage />
                    : (
                        <div className='wrapper-page-product'>
                            <div className='product-media'>
                                <CarouselPdp data={data} />
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
                                        <Button variant='primary' onClick={() => addToCart(data)}>Agregar al carrito</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
            }
        </MiCarritoLayout>
    )
}
