import React, { useMemo } from 'react';
import { Container, Table, Button, Alert } from 'react-bootstrap';

export default function Carrito({ items, onRemove, onClear }) {
  const total = useMemo(() => items.reduce((acc, p) => acc + p.precio, 0), [items]);

  return (
    <Container>
      <h2 className="page-title">Carrito</h2>
      {items.length === 0 ? (
        <Alert variant="info">Tu carrito está vacío</Alert>
      ) : (
        <>
          <Table hover responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Producto</th>
                <th>Imagen</th>
                <th>Precio</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {items.map((p, i) => (
                
                <tr key={`${p.id}-${i}`}>
                  <td>{i + 1}</td>
                  <td>{p.nombre}</td>
                  <td>
                    <img 
                      className='img-carrito'
                      src={p.imagen} 
                      alt={p.nombre} 
                      style={{ width: "50px", height: "50px", objectFit: "cover" }}
                    />
                  </td>
                  <td>${p.precio.toLocaleString('es-CL')}</td>
                  <td>
                    {/* Pasamos 'p' para poder borrarlo del backend */}
                    <Button size="sm" variant="outline-danger" onClick={() => onRemove(i, p)}>
                      Eliminar
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div className="d-flex justify-content-between align-items-center">
            <h5 className='total'>Total: ${total.toLocaleString('es-CL')}</h5>
            <div className="d-flex gap-2">
              <Button variant="outline-secondary" onClick={onClear}>Vaciar</Button>
              <Button variant="success">Finalizar compra</Button>
            </div>
          </div>
        </>
      )}
    </Container>
  );
}