import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { MiCarritoLayout } from '../../micarrito/layout/MiCarritoLayout';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useMobileView } from '../../hooks/useMobileView';
import { ProductForm } from '../../components';

import DataSample from '../../auth/pages/data/data_sample.json';
import { useFetch } from '../../hooks/useFetch';

const API_URL = 'https://68533dfe0594059b23d0765b.mockapi.io/products';
const MySwal = withReactContent(Swal);
const DATA_SAMPLE = DataSample;

export const AdminUser = () => {
  const [productos, setProductos] = useState([]);
  const isMobile = useMobileView();
  const {data} = useFetch(API_URL,'home');

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error('Error en la carga');
        const data = await res.json();
        setProductos(data);
        localStorage.removeItem('home');
      } catch (err) {
        console.error('Error al cargar productos', err);
        Swal.fire('Error', 'No se pudieron cargar los productos.', 'error');
      }
    };
    fetchProductos();
  }, []);

  const openFormModal = (producto = null) => {
    MySwal.fire({
      title: producto ? 'Editar producto' : 'Agregar producto',
      html: '<div id="react-form"></div>',
      showConfirmButton: false,
      willOpen: () => {
        const root = createRoot(document.getElementById('react-form'));
        root.render(<ProductForm initialData={producto} onSubmit={producto ? handleUpdate : handleCreate} />);
      }
    });
  };

  const handleCreate = async (form) => {
    const { id, ...rest } = form;
    const payload = {
      ...rest,
      price: parseFloat(rest.price)
    };
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (!response.ok) throw new Error('Error al crear');

      const res = await fetch(API_URL);
      if (!res.ok) throw new Error('Error al recargar lista');
      const data = await res.json();
      setProductos(data);
      localStorage.setItem("home",JSON.stringify(data));
      Swal.fire('Agregado', 'Producto creado correctamente', 'success');
    } catch (err) {
      console.error(err);
      Swal.fire('Error', 'No se pudo crear el producto.', 'error');
    }
  };

  const handleUpdate = async (form) => {
    const payload = {
      ...form,
      price: parseFloat(form.price)
    };
    try {
      const response = await fetch(`${API_URL}/${form.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (!response.ok) throw new Error('Error al actualizar');

      const res = await fetch(API_URL);
      if (!res.ok) throw new Error('Error al recargar lista');
      const data = await res.json();
      setProductos(data);
     localStorage.setItem("home",JSON.stringify(data));
      Swal.fire('Editado', 'Producto actualizado correctamente', 'success');
    } catch (err) {
      console.error(err);
      Swal.fire('Error', 'No se pudo actualizar el producto.', 'error');
    }
  };

  const handleEliminar = async (id) => {
    const confirmar = await Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción no se puede deshacer',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    });
    if (confirmar.isConfirmed) {
      try {
        const res = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
        if (!res.ok) throw new Error('Error al eliminar');
        const nuevos = productos.filter(p => p.id !== id);
        setProductos(nuevos);
        localStorage.setItem("home",JSON.stringify(nuevos));
        Swal.fire('Eliminado', 'Producto eliminado correctamente', 'success');
      } catch (err) {
        console.error(err);
        Swal.fire('Error', 'No se pudo eliminar el producto.', 'error');
      }
    }
  };

  const deleteAll = async (id) => {
    const res = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    if (!res.ok) throw new Error('Error al eliminar producto con id: ' + id);
  }

  const createAllSample = async (form) => {
    const { ...rest } = form;
    const payload = {
      ...rest,
      price: parseFloat(rest.price)
    };

    const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!response.ok) throw new Error('Error al crear producto');
  }

  const reloadList = async ()=> {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error('Error al recargar lista');
    const data = await res.json();
    setProductos(data);
    localStorage.setItem("home",JSON.stringify(data));
    Swal.fire('Agregado', 'Los productos fueron creados correctamente', 'success');
  }

  const handleCreateDataSample = async () => {
    try {
      
      if(Array.isArray(data) && data.length > 0){
        await Promise.all(data.map(item => deleteAll(item.id)));
        localStorage.removeItem("home");
        Swal.fire('Eliminado', 'Productos eliminados correctamente', 'success');
      }

      await Promise.all(DATA_SAMPLE.map(item => createAllSample(item)));

      await  reloadList();

    } catch (error) {
      console.error('Error en creación de productos sample', err);
      Swal.fire('Error', 'Hubo un problema al crear los productos.', 'error');
    }
  }

  return (
    <MiCarritoLayout>
      <section className='wrapper_form_admin'>
        <div className='container mt-4'>
          <h1>Lista de Productos</h1>

          <button className="btn btn-primary btn-sm me-2 mb-2" onClick={() => openFormModal(null)}>Agregar producto</button>
          <button className="btn btn-primary btn-sm me-2 mb-2" onClick={() => handleCreateDataSample()}>Agregar Productos sample</button>

          {isMobile ? (
            <div className='d-flex flex-column gap-3'>
              {productos.map(producto => (
                <div key={producto.id} className='card'>
                  <div className='card-body d-flex'>
                    <img src={producto.image} alt={producto.title} style={{ width: '80px', height: '80px', objectFit: 'contain' }} className='me-3' />
                    <div className='flex-grow-1'>
                      <h5 className='card-title'>{producto.title}</h5>
                      <p className='card-text'><strong>${producto.price}</strong></p>
                      <div className='d-flex gap-2'>
                        <button className='btn btn-primary btn-sm w-100' onClick={() => openFormModal(producto)}>Editar</button>
                        <button className='btn btn-danger btn-sm w-100' onClick={() => handleEliminar(producto.id)}>Eliminar</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <table className='table table-bordered table-hover align-middle'>
              <thead className='table-dark'>
                <tr>
                  <th>Imagen</th>
                  <th>Título</th>
                  <th>Precio</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {productos.length === 0 ? (
                  <tr>
                    <td colSpan='4' className='text-center'>No hay Productos</td>
                  </tr>
                ) : (
                  productos.map((producto) => (
                    <tr key={producto.id}>
                      <td><img src={producto.image} alt={producto.title} className='img-thumbnail' style={{ width: '80px' }} /></td>
                      <td>{producto.title}</td>
                      <td>${producto.price}</td>
                      <td>
                        <button className='btn btn-primary btn-sm me-2' onClick={() => openFormModal(producto)}>Editar</button>
                        <button className='btn btn-danger btn-sm' onClick={() => handleEliminar(producto.id)}>Eliminar</button>
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
  );
};
