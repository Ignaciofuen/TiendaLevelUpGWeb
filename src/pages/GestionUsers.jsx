import React, { useState, useEffect } from 'react';
import { Container, Table, Button, Form, Row, Col, Alert } from 'react-bootstrap';
import { api } from '../config/api'; 

const initialFormState = {
    email: '',
    password: '', 
    rol: 'user',  
};

export default function GestionUsers() {
    const [users, setUsers] = useState([]);
    const [newUser, setNewUser] = useState(initialFormState);
    const [error, setError] = useState('');

   
    useEffect(() => {
        cargarUsuarios();
    }, []);

    const cargarUsuarios = async () => {
        try {
            const response = await api.get('/auth/usuarios');
            setUsers(response.data);
        } catch (err) {
            console.error("Error cargando usuarios:", err);
        }
    };

    // CREAR USUARIO 
    const handleAddUser = async (e) => {
        e.preventDefault();
        setError('');

        try {
        
            const userToSend = {
                email: newUser.email,
                password: newUser.password,
                rol: newUser.rol.toUpperCase() 
            };

            await api.post('/auth/registro', userToSend);
            
            alert("Usuario creado exitosamente");
            setNewUser(initialFormState);
            cargarUsuarios(); 

        } catch (err) {
            console.error("Error al crear:", err);
            setError("Error al crear usuario (quizás el correo ya existe)");
        }
    };

    
    const handleDeleteUser = async (userId) => {
        if (!window.confirm('¿Estás seguro de que quieres eliminar este usuario?')) return;

        try {
          
            await api.delete(`/auth/usuarios/${userId}`); 
            setUsers(prev => prev.filter(u => u.idusu !== userId));
        } catch (err) {
            console.error("Error al eliminar:", err);
            alert("No se pudo eliminar el usuario (Falta endpoint DELETE en backend)");
        }
    };

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setNewUser(prev => ({ ...prev, [name]: value }));
    };

    return (
        <Container className="mt-5 pt-5" style={{ minHeight: '70vh' }}>
            <div className="panel-container">
                <h2 className="page-title">Gestión de Usuarios</h2>
                <hr />
                
                {error && <Alert variant="danger">{error}</Alert>}

                <h4 className="page-title">Añadir Nuevo Usuario</h4>
                <Form onSubmit={handleAddUser} className="mb-4 p-3 border rounded">
                    <Row className="align-items-end">
                        
                        
                        
                        <Col md={4}>
                            <Form.Group controlId="email">
                                <Form.Label>Correo</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    value={newUser.email}
                                    onChange={handleFormChange}
                                    required
                                />
                            </Form.Group>
                        </Col>

                        <Col md={3}>
                            <Form.Group controlId="password">
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control
                                    type="password" // Input de tipo password
                                    name="password"
                                    value={newUser.password}
                                    onChange={handleFormChange}
                                    required
                                    placeholder="Mín 6 caracteres"
                                />
                            </Form.Group>
                        </Col>

                        <Col md={3}>
                            <Form.Group>
                                <Form.Label>Rol</Form.Label>
                                <Form.Select name="rol" value={newUser.rol} onChange={handleFormChange}>
                                    <option value="user">Usuario</option>
                                    <option value="admin">Administrador</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>

                        <Col md={2} className="mt-auto">
                            <Button variant="primary" type="submit" className="w-100">
                                + Añadir
                            </Button>
                        </Col>
                    </Row>
                </Form>

                <h4 className="page-title">Lista de Usuarios (MySQL)</h4>
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Correo</th>
                            <th>Rol</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users && users.length ? users.map(user => (
                            <tr key={user.idusu}>
                                <td>{user.idusu}</td>
                                <td>{user.email}</td>
                                <td>{user.rol}</td>
                                <td>
                                    <Button variant="danger" size="sm" onClick={() => handleDeleteUser(user.idusu)}>Eliminar</Button>
                                </td>
                            </tr>
                        )) : (
                            <tr>
                                <td colSpan={4} className="text-center">Cargando o no hay usuarios...</td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </div>
        </Container>
    );
}