import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import  YouTubeIcon  from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="footer-section text-white pt-5 pb-3">
      <Container>
        <Row className="mb-4">
          <Col md={4} className="mb-4 mb-md-0">
            <h4 className="fw-bold">mi carrito<span className="text-warning">.com</span></h4>
            <p>Tu tienda online favorita. Comprá rápido, fácil y seguro.</p>
          </Col>

          <Col md={4} className="mb-4 mb-md-0">
            <h5 className="fw-semibold">Enlaces</h5>
            <ul className="list-unstyled">
              <li><Link to={"/"} className="footer-link">Inicio</Link></li>
              <li><Link to={"/contact"} className="footer-link">Contacto</Link></li>
              <li><Link to={"/about"} className="footer-link">Sobre Nosotros</Link></li>
            </ul>
          </Col>

          <Col md={4}>
            <h5 className="fw-semibold">Seguinos</h5>
            <div className="d-flex gap-3 fs-5">
              <a href="https://facebook.com" className="footer-icon"><FacebookIcon /></a>
              <a href="https://instagram.com" className="footer-icon"><InstagramIcon /></a>
              <a href="https://twitter.com" className="footer-icon"><XIcon /></a>
              <a href="https://youtube.com" className="footer-icon"><YouTubeIcon /></a>
            </div>

            <Form className="mt-3">
              <Form.Label className="fw-light mb-1">Suscribite al newsletter</Form.Label>
              <div className="d-flex">
                <Form.Control type="email" placeholder="Email" className="me-2" />
                <Button variant="success">OK</Button>
              </div>
            </Form>
          </Col>
        </Row>

        <hr className="border-light" />

        <Row>
          <Col className="text-center small">
            &copy; {new Date().getFullYear()} mi carrito.com — Todos los derechos reservados
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
