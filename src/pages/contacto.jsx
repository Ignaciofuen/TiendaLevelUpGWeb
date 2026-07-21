import React from "react";
import { Button, Form } from "react-bootstrap";



function contacto() {
  return (
    <div className="contact-form-container">
      <h2 className="text-center mb-4">Contáctanos</h2>
      <Form>
        <Form.Group className="form-group" controlId="nombre">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Ingrese su nombre" required />
        </Form.Group>

        <Form.Group className="form-group" controlId="apellido">
          <Form.Label>Apellido</Form.Label>
          <Form.Control type="text" placeholder="Ingrese su apellido" required />
        </Form.Group>

        <Form.Group className="form-group" controlId="email">
          <Form.Label>Correo Electrónico</Form.Label>
          <Form.Control type="email" placeholder="correo@contacto.cl" required />
        </Form.Group>

        <Form.Group className="form-group" controlId="numero">
          <Form.Label>Número de Teléfono</Form.Label>
          <Form.Control type="tel" placeholder="+56912345678" required />
        </Form.Group>

        <Form.Group className="form-group" controlId="mensaje">
          <Form.Label>Dejar comentario</Form.Label>
          <Form.Control as="textarea" rows={4} placeholder="Escriba su mensaje aquí..." required />
        </Form.Group>

        <div className="d-flex justify-content-center">
          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default contacto;