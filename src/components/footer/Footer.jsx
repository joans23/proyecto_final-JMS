import React from 'react'
import { Container, Row } from 'react-bootstrap'

export const Footer = () => {
  return (
    <Row className='footer'>
        <Container>
            <div className='wrapper-footer-content'>
                <div className='footer-content__contain'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                </div>
                <div className='footer-content__copyright'>
                    <p className="mb-0 text-center">© MiCarrito, una marca propiedad de MiCarrito S.A. Todos los derechos reservados.</p>
                </div>
            </div>
        </Container>
    </Row>
  )
}
