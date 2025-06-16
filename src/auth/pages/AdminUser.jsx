import React, { useEffect, useState } from 'react'
import { MiCarritoLayout } from '../../micarrito/layout/MiCarritoLayout'
import AddIcon from '@mui/icons-material/Add';
import Swal from 'sweetalert2';
import { useMobileView } from '../../hooks/useMobileView';

export const AdminUser = () => {

  const [productos, setProductos] = useState([]);

  const isMobile = useMobileView();

  const listaDeProductos = JSON.parse(localStorage.getItem("home"));

  useEffect(()=>{
    const productosGuardados = localStorage.getItem("home");
    if(productosGuardados){
      setProductos(JSON.parse(productosGuardados));
    }
  },[]);

    const guardarEnLocalStorage = (nuevosProductos) => {
    localStorage.setItem("home", JSON.stringify(nuevosProductos));
    setProductos(nuevosProductos);
  };

  const handleAddProduct = ( setProductos ) => {
    Swal.fire({
      title: 'Agregar un nuevo producto',
      html: `
        <div class="form-container">
            <input id="imagen" class="swal2-input" placeholder="URL de la imagen">
            <input id="titulo" class="swal2-input" placeholder="Título">
            <input id="category" class="swal3-input" placeholder="Categoria">
            <input id="precio" class="swal4-input" placeholder="Precio" type="number">
            <textarea id="descripcion" class="swal2-textarea" placeholder="Descripción"></textarea>
        </div>
      `,
      showCancelButton: true,
      confirmButtonText: 'Agregar',
      cancelButtonText: 'Cancelar',
      focusConfirm: false,
      preConfirm: ()=>{
        let image = document.getElementById('imagen').value;
        const title = document.getElementById('titulo').value;
        const category = document.getElementById('category').value;
        const price = parseFloat(document.getElementById('precio').value);
        const description = document.getElementById('descripcion').value.trim();

        if(!title || isNaN(price) || !category ){
          Swal.showValidationMessage('El título, el precio y la categoria son obligatorios.');
          return false;
        }

        if( !image ){
          image = 'https://dummyimage.com/600x400/000/fff';
        }

        return {image, title, category, price, description }; 

      }
    }).then((result)=>{
      if(result.isConfirmed) {
        const nuevosProductos = JSON.parse(localStorage.getItem('home')) || [];

        const ultimoId = nuevosProductos.length > 0
        ? Math.max(...nuevosProductos.map(p => p.id ))
        : 0;
        
        const nuevoProducto = {
          id: ultimoId + 1,
          rating:{
            rate:3.9,count:120
          },
          ...result.value
        };

        nuevosProductos.push(nuevoProducto);

        localStorage.setItem('home', JSON.stringify(nuevosProductos));
        setProductos(nuevosProductos);
        Swal.fire('Producto agregado','','success');
      }
    });

  }
 
  const handleEliminar = (id) => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "Esta acción no se puede deshacer",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6'
    }).then((result) => {
      if (result.isConfirmed) {
        const nuevosProductos = productos.filter(producto => producto.id !== id);
        guardarEnLocalStorage(nuevosProductos);
        Swal.fire('Eliminado', 'El producto ha sido eliminado.', 'success');
      }
    });
  };

  const handleEditar = (producto) => {
    Swal.fire({
      title: 'Editar producto',
      html:`
      <div class="form-container">
        <input id="swal-input1" class="swal2-input" placeholder="Título" value="${producto.title}">
        <input id="swal-input2" class="swal2-input" type="number" placeholder="Precio" value="${producto.price}">
        <textarea id="swal-input3" class="swal2-textarea" placeholder="Descripción">${producto.description || ""}</textarea>
      </div>
      `,
      focusConfirm: false,
      showCancelButton: true,
      confirmButtonText: 'Guardar',
      preConfirm: () =>{
        const title = document.getElementById('swal-input1').value.trim();
        const price = parseFloat(document.getElementById('swal-input2').value);
        const description = document.getElementById('swal-input3').value.trim();

        if(!title || isNaN(price)){
          Swal.showValidationMessage('El título y precio son obligatorios.');
          return false;
        }
        return { title, price, description };
      }

    }).then(
      result => {
        if ( result.isConfirmed ){
          const { title, price, description } = result.value;
          const nuevosProductos = productos.map( p => p.id === producto.id ? { ...p, title, price, description } : p );
          guardarEnLocalStorage(nuevosProductos);
          Swal.fire('Actualizado','El producto fue actualizado correctamente', 'success');
        }
      }
    );
  }

  return (
    <MiCarritoLayout >
        <section className='wrapper_form_admin'>
          <div className="container mt-4">
            <h1>Lista de Productos</h1>
            <button className="btn btn-primary btn-sm me-2 mb-2" onClick={() => handleAddProduct( setProductos )}>Agregar un nuevo producto <AddIcon/></button>
            {
              isMobile ? 
              (
                <div className="d-flex flex-column gap-3">
          {listaDeProductos.map(producto => (
            <div key={producto.id} className="card">
              <div className="card-body d-flex">
                <img src={producto.image} alt={producto.title} style={{ width: '80px', height: '80px', objectFit: 'contain' }} className="me-3" />
                <div className="flex-grow-1">
                  <h5 className="card-title">{producto.title}</h5>
                  <p className="card-text"><strong>${producto.price}</strong></p>
                  <div className="d-flex gap-2">
                    <button className="btn btn-primary btn-sm w-100" onClick={() => handleEditar(producto)}>Editar</button>
                    <button className="btn btn-danger btn-sm w-100" onClick={() => handleEliminar(producto.id)}>Eliminar</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
              ):(
 <table className="table table-bordered table-hover align-middle">
        <thead className="table-dark">
          <tr>
            <th scope="col">Imagen</th>
            <th scope="col">Título</th>
            <th scope="col">Precio</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>

          {productos.length === 0 ? (
            <tr>
              <td colSpan={"4"} className='text-center'>No hay Productos</td>
            </tr>
          ):(
            listaDeProductos.map((producto) => (
            <tr key={producto.id}>
              <td>
                <img src={producto.image} alt={producto.title} className="img-thumbnail" style={{ width: '80px' }} />
              </td>
              <td>{producto.title}</td>
              <td>${producto.price}</td>
              <td>
                <button className="btn btn-primary btn-sm me-2" onClick={() => handleEditar(producto)}>Editar</button>
                <button className="btn btn-danger btn-sm" onClick={() => handleEliminar(producto.id)}>Eliminar</button>
              </td>
            </tr>
          ))
          )}
        </tbody>
        </table>
          )}
        </div>
        </section>
    </MiCarritoLayout>

  )
}
