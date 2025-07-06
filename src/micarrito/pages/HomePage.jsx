import React, { useEffect, useState } from 'react'
import { MiCarritoLayout } from '../layout/MiCarritoLayout'
import { useFetch } from '../../hooks/useFetch'
import { LoadingMessage } from '../../components/LoadingMessage';
import { ProductCard } from '../../components/ProductCard';
import { Paginador } from '../../components';

export const HomePage = () => {

  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(false);

  const [paginaActual, setPaginaActual] = useState(1);

  const cargarProductos = async () => {
    try {
      const respuesta = await fetch('https://68533dfe0594059b23d0765b.mockapi.io/products');
      const datos = await respuesta.json();
      setProductos(datos);
    } catch (error) {
      setError(true);
    } finally {
      setCargando(false);
    }
  };

  useEffect(() => {
    cargarProductos();
  }, []);

  const productosPorPagina = 8;


  const indiceUltimoProducto = paginaActual * productosPorPagina;
  const indicePrimerProducto = indiceUltimoProducto - productosPorPagina;
  const productosVisibles = productos.slice(indicePrimerProducto, indiceUltimoProducto);
  const totalPaginas = Math.ceil(productos.length / productosPorPagina);

  return (
    <MiCarritoLayout>
      <h1>Productos</h1>
      <hr />

      {cargando ? (
        <LoadingMessage />
      ) : error ? (
        <p style={{ color: 'red' }}>Hubo un error al cargar los productos.</p>
      ) : (
        <>
          {Array.isArray(productosVisibles) && productosVisibles.length > 0 ? (
            <div className='wrapper-content-products'>
              {productosVisibles.map((product, index) => (
                <ProductCard key={product.id + index} product={product} />
              ))}
            </div>
          ) : (
            <p>No hay productos disponibles.</p>
          )}
          <Paginador
            totalPaginas={totalPaginas}
            paginaActual={paginaActual}
            cambiarPagina={setPaginaActual}
          />
        </>
      )}
    </MiCarritoLayout>
  );
}
