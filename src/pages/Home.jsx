import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

// Importaciones de imágenes
import slide1 from '../assets/img/pcss.webp';
import slide2 from '../assets/img/slogan2.png';
import slide3 from '../assets/img/acseso.png'; 
import imagen1 from '../assets/img/Made with insMind-catan.png';
import imagen2 from '../assets/img/pc2.webp';
import imagen3 from '../assets/img/mause1LOGITECH.webp';
import imagen4 from '../assets/img/[20060] SILLA 1GAMER COUGAR TITAN PRO.png';
import imagen5 from '../assets/img/switch22.png';
import imagen6 from '../assets/img/mausepad.webp';
import imagen7 from '../assets/img/polera.png';


export default function Home() {
  return (
    <Container fluid>
      <Row className="contenido">
        <Col xs={12} className="mb-4">
          <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={slide2}
              alt="First slide"
            />
          </Carousel.Item>
          
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={slide1} 
              alt="Second slide"
            />
          </Carousel.Item>
          
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={slide3} 
              alt="Third slide"
            />
          </Carousel.Item>
          </Carousel>
          </Col>
          {[
            { img: imagen1, text: 'JUEGOS DE MESA' },
            { img: imagen2, text: 'COMPUTADORES GAMER' },
            { img: imagen3, text: 'ACCESORIOS GAMER' },
            { img: imagen4, text: 'SILLAS GAMER' },
            { img: imagen5, text: 'CONSOLAS' },
            { img: imagen6, text: 'ACCESORIOS' },
            { img: imagen7, text: 'NUESTRAS POLERAS Y POLERONES' },
          ].map((p, idx) => (
            <Col key={idx} xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center mb-4">
              <Card className="h-100 text-center product-card">
                <Card.Body>
                  <Card.Img variant="top" src={p.img} alt={`producto-${idx}`} />
                  <Card.Text className="card-text">{p.text}</Card.Text>
                  <Button variant="primary">Ver Más</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
    </Row>
  </Container>
  );
}