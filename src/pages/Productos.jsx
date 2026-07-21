import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

export default function Productos({ onAdd, products }) {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(3000000);

  const filteredProductos = products.filter(
    (p) => p.precio >= minPrice && p.precio <= maxPrice
  );

  return (
    <Container className="my-4">
      <h2 className="page-title">Productos</h2>
      <div className="d-flex justify-content-center gap-3 mb-4">
        <div>
          <label className='rango-precio'>Precio mínimo:</label>
          <input
            type="number"
            value={minPrice}
            onChange={(e) => setMinPrice(Number(e.target.value))}
            className="form-control"
            style={{ width: "130px" }}
          />
        </div>
        <div>
          <label className='rango-precio'>Precio máximo:</label>
          <input
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="form-control"
            style={{ width: "130px" }}
          />
        </div>
      </div>
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {filteredProductos.map((p) => (
          <Col key={p.id}>
            <Card className="h-100 shadow-sm">
              <Card.Img
                variant="top"
                src={p.imagen} 
                alt={p.nombre}
                style={{ height: "200px", objectFit: "cover", width: "100%" }} 
              />
              <Card.Body className="d-flex flex-column justify-content-between">
                <div>
                  <Card.Title className='titulo-producto'>{p.nombre}</Card.Title>
                  <Card.Text className='descripcion-pro'>{p.descripcion}</Card.Text>
                </div>
                <div>
                  <h5 className='total'>${p.precio.toLocaleString("es-CL")}</h5>
                  <Button variant="primary" onClick={() => onAdd(p)}>
                    Agregar al carrito
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      {filteredProductos.length === 0 && (
        <p className="text-center mt-4 text-muted">
          No hay productos en este rango de precios.
        </p>
      )}
    </Container>
  );
}