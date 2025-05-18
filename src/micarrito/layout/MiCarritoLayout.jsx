import React from 'react'
import {Container, Row } from 'react-bootstrap';
import { NavBarPage } from '../../components';
import { Footer } from '../../components/footer/Footer';



export const MiCarritoLayout = ({children}) => {
  return (
    <>
    <Row className='wrapper-header'>
    {/* NavBar */}
    <NavBarPage/>
    </Row>
    <Container>
        <Row className='wrapper-main'>
            {/* Main */}
            { children }
        </Row>
    </Container>
    <Row className='bg-dark row-footer'>
            {/* Footer */}
            <Footer />
        </Row>
    </>
    
        
  )
}
