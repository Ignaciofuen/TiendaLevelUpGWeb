import React from "react";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import imagen7 from '../assets/img/lolcito.png';
import imagen8 from '../assets/img/BannerBlog_CONSOLAS_EVOLUCION.webp';

function Nosotros() {
  return (
    <Container className="page-nosotros my-4">
      <Card bg="dark" text="light" className="p-4 mb-4" >
        <Card.Body>
          <h2 className="text-center mb-3">Bienvenido a Level Up Gamer</h2>
          <hr className="border-light" />
          <p className="lead text-justify">
            Level-Up Gamer es una tienda online dedicada a satisfacer las necesidades de los
            entusiastas de los videojuegos en Chile. Nacida hace dos años como respuesta a la
            creciente demanda durante la pandemia, ofrece una amplia gama de productos que
            incluyen consolas, accesorios, computadores y sillas especializadas, con despacho a
            todo el país. Nuestra misión es proporcionar artículos de alta calidad y una experiencia
            de compra única y personalizada, siempre con el foco puesto en la satisfacción del
            cliente y en el fortalecimiento de la comunidad gamer.
          </p>
        </Card.Body>
      </Card>

      <Card bg="dark" text="light" className="p-4 card">
        <Row className="align-items-center">
          <Col md={7} className="mb-3 mb-md-0">
            <h3 className="display-6 fw-bold">La importancia de la comunidad gamer en Chile</h3>
            <p className="mt-3 text-justify">
              Más allá de los videojuegos, ser gamer significa formar parte de una comunidad que
              comparte pasiones, logros y experiencias. En Level-Up Gamer estamos convencidos de que
              fortalecer la comunidad gamer en Chile es clave para impulsar la cultura digital y
              fomentar espacios de inclusión y amistad. A través de nuestras redes y programas de
              fidelización, buscamos crear un espacio donde cada jugador pueda sentirse parte de algo
              más grande que un simple juego: una verdadera comunidad.
            </p>
          </Col>

          <Col md={5} className="text-center">
            <img src={imagen7} alt="Evento gamer" className="img-fluid rounded shadow" />
          </Col>
        </Row>
      </Card>

      <Card bg="dark" text="light" className="p-4">
        <Row className="align-items-center">
          <Col md={7} className="mb-3 mb-md-0">
            <h3 className="display-6 fw-bold">Cómo elegir tu primera consola en 2025</h3>
            <p className="mt-3 text-justify">
              En Level-Up Gamer sabemos que elegir tu primera consola puede ser emocionante, 
              pero también un poco confuso con tantas opciones en el mercado. PlayStation, Xbox y Nintendo 
              ofrecen experiencias únicas: desde gráficos de última generación hasta juegos exclusivos que marcan la diferencia. 
              Nuestro objetivo es ayudarte a encontrar la consola que mejor se adapte a tu estilo de juego, 
              tu presupuesto y la experiencia que buscas. En nuestra tienda encontrarás comparativas, accesorios compatibles y 
              la asesoría necesaria para que tu primera compra gamer sea un acierto seguro.
            </p>
          </Col>

          <Col md={5} className="text-center">
            <img src={imagen8} alt="Evento gamer" className="img-fluid rounded shadow" />
          </Col>
        </Row>
      </Card>

      <Card bg="dark" text="light" className="p-4">
        <Row className="align-items-center">
          <Col md={7} className="mb-3 mb-md-0 order-1 order-md-1">
            <h3 className="display-6 fw-bold">¿Dónde estamos?</h3>
            <p className="mt-3 text-justify">
              Nuestro local está ubicado en <strong>Av. Providencia 1234, Santiago, Chile</strong>,
              a pasos del Metro Los Leones. Ven a visitarnos para conocer todos nuestros productos y
              recibir asesoría personalizada de nuestro equipo gamer.
            </p>
          </Col>

          <Col md={5} className="text-center order-2 order-md-2">
            <div className="iframe-container-maps">
              <iframe
                title="Mapa - Av. Providencia 1234"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.646393857839!2d-70.6106036848006!3d-33.4199999807826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cf3e2b2e2e2b%3A0x7e2e2e2e2e2e2e2e!2sAv.%20Providencia%201234%2C%20Providencia%2C%20Regi%C3%B3n%20Metropolitana%2C%20Chile!5e0!3m2!1ses-419!2scl!4v1693770000000!5m2!1ses-419!2scl"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ minHeight: '400px', width: '100%', border: 0 }}
              ></iframe>
            </div>
          </Col>
        </Row>
      </Card>
      
    </Container>
  );
}

export default Nosotros;

