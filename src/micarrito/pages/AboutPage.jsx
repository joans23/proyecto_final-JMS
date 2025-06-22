import React from 'react'
import { MiCarritoLayout } from '../layout/MiCarritoLayout'
import { Row, Container, Col, Card } from 'react-bootstrap'

export const AboutPage = () => {
  return (
    <MiCarritoLayout>
      <section className="about-page py-5">
        <Container>
          <h2 className="text-center mb-4 fw-bold">Sobre Nosotros</h2>
          <Row className="align-items-center mb-5">
            <Col md={6}>
              <p className="fs-5">
                En <strong>mi carrito.com</strong> creemos en hacer las compras más simples, rápidas y seguras.
                Desde 2023 ofrecemos productos seleccionados con amor y calidad, adaptándonos a las necesidades de nuestros clientes.
              </p>
              <p className="fs-5">
                Nos apasiona la tecnología, la atención al cliente y brindar una experiencia de compra excelente en todo momento.
              </p>
            </Col>
            <Col md={6}>
              <img
                src="../../public/images/about_image.jpg"
                alt="Equipo trabajando"
                className="img-fluid rounded shadow-sm"
              />
            </Col>
          </Row>

          <h3 className="text-center mb-4">Nuestros pilares</h3>
          <Row className="text-center">
            <Col md={4}>
              <Card className="p-3 shadow-sm border-0">
                <Card.Body>
                  <h5 className="fw-bold">Calidad</h5>
                  <p>Trabajamos con productos seleccionados y marcas confiables para que siempre recibas lo mejor.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="p-3 shadow-sm border-0">
                <Card.Body>
                  <h5 className="fw-bold">Confianza</h5>
                  <p>Tu seguridad es prioridad. Protegemos tus datos y garantizamos compras sin sorpresas.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="p-3 shadow-sm border-0">
                <Card.Body>
                  <h5 className="fw-bold">Compromiso</h5>
                  <p>Estamos para ayudarte antes, durante y después de cada compra. Siempre cerca tuyo.</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="mt-5">
            <Col>
              <h4 className="text-center fw-semibold">Nuestra misión</h4>
              <p className="text-center mx-auto" style={{ maxWidth: '700px' }}>
                Hacer del comercio digital una experiencia cercana, rápida y accesible para todos los hogares.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </MiCarritoLayout>

  )
}
