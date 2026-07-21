import React from 'react';
import { Container, Row, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import gestionp from'../assets/img/unnamed.jpg';
import gestionU from'../assets/img/suario.png';
import reportar from'../assets/img/reporte_problemas.png';


export default function AdminHome() {
  return (
    <Container fluid>
      <Row className="contenido">
        <div></div>
        <Card className='admin_card'>
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Img className = "imagen_admin"variant="top" src={gestionp} alt="PCSS Logo" />
            <Card.Text></Card.Text>
            <Button variant="primary" as={Link} to="/GestionPro">Gestionar Productos
            </Button>
            
          </Card.Body>
        </Card>
        <Card className='admin_card2'>
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Img className = 'imagen_adm2' variant="top" src={gestionU}alt="PCSS Logo" />
            <Card.Text></Card.Text>
            <Button variant="primary" as={Link} to="/GestionUsers">
            Gestionar Usuarios</Button>
          </Card.Body>
        </Card>
        <Card className='admin_card3'>
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Img className='imagen_adm3' variant="top" src={reportar} alt="PCSS Logo" />
            <Card.Text></Card.Text>
            <Button variant="primary">Reportar Problema</Button>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
}