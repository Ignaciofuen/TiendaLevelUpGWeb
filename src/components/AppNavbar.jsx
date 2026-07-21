import React from 'react';
import { useAuth } from '../auth/AuthContext';
import { Navbar, Nav, NavDropdown, Container, Badge } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';

export default function AppNavbar({ cartItems }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <Navbar fixed='top' collapseOnSelect expand="lg" variant="dark" className="bg-custom navbar-level-up">
      <Container fluid>
        <Navbar.Brand as={NavLink} to="/">Level Up Gamer</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/nosotros">Nosotros</Nav.Link>
            <Nav.Link as={NavLink} to="/Productos">Productos</Nav.Link>
            <Nav.Link as={NavLink} to="/contacto">Contacto</Nav.Link>
            {user && user.rol && user.rol.toLowerCase() === 'admin' && (
              <Nav.Link as={NavLink} to="/AdminHome" className="fw-bold text-danger">
                Panel Admin
              </Nav.Link>
            )}
          </Nav>
          <Nav>
            {user ? (
            
              <NavDropdown title={`Hola, ${user.email}`} id="collapsible-nav-dropdown">
                <NavDropdown.Item onClick={handleLogout}>
                  Cerrar Sesión
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
            
              <NavDropdown title="Usuario" id="collapsible-nav-dropdown">
                <NavDropdown.Item as={NavLink} to="/login">Iniciar sesión</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/registro">Registrarse</NavDropdown.Item>
              </NavDropdown>
            )}

            <Nav.Link as={NavLink} to="/carrito">Carrito</Nav.Link>
            {' '}
            <Badge className='contador' bg='success'>
              {cartItems.length}
            </Badge>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}