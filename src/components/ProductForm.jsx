import React, { useState } from 'react'
import Swal from 'sweetalert2';


export const ProductForm = ({ onSubmit, initialData = {} }) => {

    const [form, setForm] = useState({
    image: '',
    title: '',
    price: '',
    category: '',
    description: '',
    ...initialData
  });

  const [errors, setErrors] = useState({});

  const validate = (name, value) => {
    let error = '';
    if (!value) error = 'Campo requerido';
    else if (name === 'price' && isNaN(value)) error = 'Debe ser un número';
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    validate(name, value);
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const hasErrors = Object.values(form).some(val => !val);
    if (hasErrors) {
      Swal.showValidationMessage('Todos los campos son obligatorios');
      return;
    }
    onSubmit(form);
    Swal.close();
  };

    return (
    <form onSubmit={handleSubmit}>
      {['title', 'price', 'category', 'description', 'image'].map((field) => (
        <div key={field} className="mb-2">
          <input
            name={field}
            placeholder={field}
            value={form[field]}
            onChange={handleChange}
            className="form-control"
            type={field === 'price' ? 'number' : 'text'}
          />
          {errors[field] && <small className='text-danger'>{errors[field]}</small>}
        </div>
      ))}
      <button className="btn btn-success" type="submit">Guardar</button>
    </form>
  );
}
