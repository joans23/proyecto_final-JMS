import React from 'react'
import { Container, Form, Button, Row} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'


export const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem('auth','true');
    navigate('/admin');
  }

   const handleBack = () => {
    navigate('/');
  }

  return (
    <>
    <Row className="m-auto d-flex justify-content-center align-items-center login-page">
      <Container className="mt-5" style={{ maxWidth: 400 }}>
      <h2>Iniciar sesión</h2>
            <Form onSubmit={handleLogin}>
              <Form.Group className="mb-3">
                <Form.Label>Usuario</Form.Label>
                <Form.Control type="email" required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" required/>
              </Form.Group>
              <Button variant="primary" type='submit'>Entrar</Button>
            </Form>
      </Container>
     <Button className='back-home' variant='secondary' onClick={handleBack}><ArrowBackIcon/>Volver</Button>
    </Row>
    </>
    
  )
}
