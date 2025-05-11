import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'



export const MiCarritoLayout = ({children}) => {
  return (
    <Container>
        <Row className='wrapper-header'>
            {/* NavBar */}
        </Row>
        <Row className='wrapper-main'>
            {/* Main */}
            { children }
        </Row>
        <Row>
            {/* Footer */}
        </Row>
    
    </Container>
        
  )
}
