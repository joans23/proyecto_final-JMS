import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'


export const NavBarPage = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" >
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
                    <Nav.Link href='/'>Home</Nav.Link>
                    <Nav.Link href='/destacado'>Destacados</Nav.Link>
                    <Nav.Link href='/ofertas'>Ofertas</Nav.Link>
                    <Nav.Link href='/about'>About</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}
