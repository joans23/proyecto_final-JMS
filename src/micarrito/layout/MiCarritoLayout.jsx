import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import { NavBarPage } from '../../components';



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
        <Row>
            {/* Footer */}
        </Row>
    
    </Container>
    </>
    
        
  )
}
