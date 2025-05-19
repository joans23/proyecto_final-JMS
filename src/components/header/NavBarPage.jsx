import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Container, Navbar, Nav, Button, CloseButton} from 'react-bootstrap';
import { Minicart } from './Minicart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { MinicartSidebar } from './MinicartSidebar';


export const NavBarPage = ({cantItems, setCantItems, carrito}) => {

  const navigate = useNavigate();
  const isAuth = localStorage.getItem('auth') === 'true';

  const cerrarSesion = () => {
    localStorage.removeItem('auth');
    navigate('/');
  }

  return (
    <Navbar style={{background:" #1e1e2f"}} variant='dark' expand="lg" >
        <Container>
        <Navbar.Brand href="/">
            <h4 className="fw-bold">mi carrito<span className="text-warning">.com</span></h4>
          </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav'/>
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='me-auto'>
                    <Nav.Link as={Link} to='/'>Home</Nav.Link>
                    {/* <Nav.Link  as={Link} to='/destacado'>Destacados</Nav.Link>
                    <Nav.Link as={Link} to='/ofertas'>Ofertas</Nav.Link> */}
                    <Nav.Link as={Link} to='/contact'>Contacto</Nav.Link>
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
              <Nav.Link as={Link} to="/auth/login"><AccountCircleIcon/></Nav.Link>
            ) : (
              <Button variant="outline-light" onClick={cerrarSesion}>Cerrar sesión</Button>
            )}
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/" className='minicart-link'><Minicart/><span className='counter'>{cantItems}</span></Nav.Link>
            {/* Se comenta para proximo desarrollo */}
            {/* {
              (cantItems > 0)
              ? <MinicartSidebar carrito={carrito} cantItems={cantItems}/>
              : <Nav.Link as={Link} to="/cart" className='minicart-link'><Minicart/><span className='counter'>{cantItems}</span></Nav.Link>
            } */}
          </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}
