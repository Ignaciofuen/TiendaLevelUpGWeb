import React, { useState } from 'react';
import { Container, Table, Button, Form, Row, Col } from 'react-bootstrap';
import { api } from '../config/api'; 

const initialFormState = {
  nombre: '',
  precio: 0,
  stock: 0,
};

export default function GestionPro({ products, setProducts }) {
  
  const [newProduct, setNewProduct] = useState(initialFormState);


  const handleAddProduct = async (e) => {
    e.preventDefault();
    
    
    const productToSend = {
      nombre: newProduct.nombre,
      precio: Number(newProduct.precio),
   
      stock: Number(newProduct.stock), 
      descripcion: "Descripción pendiente", 
      categoria: "General",
      
      imagen: "http://localhost:8080/images/pc2.webp" 
    };

    try {
    
      const response = await api.post('/productos', productToSend);
      
     
      setProducts([...products, response.data]);
      
      setNewProduct(initialFormState);
      alert("¡Producto guardado en la base de datos!");

    } catch (error) {
      console.error("Error al guardar:", error);
      alert("Error al conectar con el servidor");
    }
  };


  const handleDeleteProduct = async (productId) => {
    if (!window.confirm('¿Estás seguro de que quieres eliminar este producto?')) {
      return;
    }

    try {
    
      await api.delete(`/productos/${productId}`);
      
      setProducts(prevProducts => prevProducts.filter(p => p.id !== productId));
      
    } catch (error) {
      console.error("Error al eliminar:", error);
      alert("No se pudo eliminar el producto (¿Tal vez está en un carrito?)");
    }
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setNewProduct(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <Container className="mt-5 pt-5" style={{ minHeight: '70vh' }}>
      <div className="panel-container">
      <h2 className="page-title">Gestión de Productos</h2>
      <hr />

      <h4 className="mt-4">Añadir Nuevo Producto</h4>
      <Form onSubmit={handleAddProduct} className="mb-4 p-3 border rounded">
        <Row className="align-items-end">
          <Col md={4}>
            <Form.Group className="form-group" controlId="nombre">
              <Form.Label>Nombre</Form.Label>
              <Form.Control 
                type="text" 
                name="nombre" 
                value={newProduct.nombre} 
                onChange={handleFormChange} 
                required 
              />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group>
              <Form.Label>Precio</Form.Label>
              <Form.Control 
                type="number" 
                name="precio" 
                value={newProduct.precio} 
                onChange={handleFormChange} 
                required 
              />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group>
              <Form.Label>Stock</Form.Label>
              <Form.Control 
                type="number" 
                name="stock" 
                value={newProduct.stock} 
                onChange={handleFormChange} 
                required 
              />
            </Form.Group>
          </Col>
          <Col md={2} className="mt-auto">
              <Button variant="primary" type="submit" className="w-100">
                  + Añadir
              </Button>
          </Col>
        </Row>
      </Form>

      <h4 className="mt-5">Lista de Productos (Base de Datos)</h4>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.nombre}</td>
              <td>${product.precio.toLocaleString("es-CL")}</td>
              {/* El backend no siempre devuelve stock si no está en el DTO, manejamos el 0 */}
              <td>{product.stock || 0}</td>
              <td>
                <Button 
                  variant="danger" 
                  size="sm"
                  onClick={() => handleDeleteProduct(product.id)}
                >
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      </div>
    </Container>
  );
}