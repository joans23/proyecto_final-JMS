import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Container, Navbar, Nav, Button, CloseButton} from 'react-bootstrap';
import { Minicart } from '../Minicart';


export const NavBarPage = () => {
  const navigate = useNavigate();
  const isAuth = localStorage.getItem('auth') === 'true';

  const cerrarSesion = () => {
    localStorage.removeItem('auth');
    navigate('/');
  }

  return (
    <Navbar bg="dark" variant='dark' expand="lg" >
        <Container>
        <Navbar.Brand href="/">
            <img
              src="/images/logo.png"
              width="80"
              height="80"
              className="d-inline-block align-top"
              alt="Logo mi carrito"
            />
          </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav'/>
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='me-auto'>
                    <Nav.Link as={Link} to='/'>Home</Nav.Link>
                    <Nav.Link  as={Link} to='/destacado'>Destacados</Nav.Link>
                    <Nav.Link as={Link} to='/ofertas'>Ofertas</Nav.Link>
                    <Nav.Link as={Link} to='/about'>About</Nav.Link>
                    {
                      isAuth && (
                        <>
                          <Nav.Link as={Link} to="/perfil/usuario23">Perfil</Nav.Link>
                          <Nav.Link as={Link} to='/admin'>Admin</Nav.Link>
                        </>
                      )
                    }
                </Nav>
                <Nav>
            {/* Mostrar botón de login o logout según autenticación */}
            {!isAuth ? (
              <Nav.Link as={Link} to="/auth/login">Login</Nav.Link>
            ) : (
              <Button variant="outline-light" onClick={cerrarSesion}>Cerrar sesión</Button>
            )}
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/cart"><Minicart/></Nav.Link>
          </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}
