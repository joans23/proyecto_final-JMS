import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { MiCarritoLayout } from '../layout/MiCarritoLayout';

export const ContactPage = () => {
  return (
    <MiCarritoLayout>
      <section className="contact-section py-5">
        <Container>
          <h2 className="text-center fw-bold mb-4">Contacto</h2>
          <Row>
            <Col md={6}>
              <Form>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control type="text" placeholder="Tu nombre" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="ejemplo@mail.com" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formMessage">
                  <Form.Label>Mensaje</Form.Label>
                  <Form.Control as="textarea" rows={4} placeholder="Escribí tu mensaje..." required />
                </Form.Group>

                <Button variant="primary" type="submit">Enviar mensaje</Button>
              </Form>
            </Col>

            <Col md={6} className="mt-4 mt-md-0">
              <Card className="p-3 shadow-sm border-0">
                <h5 className="fw-bold">Información de contacto</h5>
                <p><strong>Email:</strong> contacto@micarrito.com</p>
                <p><strong>Teléfono:</strong> +54 11 1234 5678</p>
                <p><strong>Dirección:</strong> Av. Siempre Viva 742, Buenos Aires, Argentina</p>

                <div className="map-responsive mt-3">
                  <iframe
                    title="Ubicación"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13136.049604345768!2d-58.4173093!3d-34.603738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccacb00000001%3A0x0000000000000000!2sBuenos+Aires!5e0!3m2!1ses-419!2sar!4v0000000000000"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </MiCarritoLayout>

  );
};
