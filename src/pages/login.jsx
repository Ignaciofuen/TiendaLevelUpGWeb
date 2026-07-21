  import React, { useState } from "react";
import { Button, Form, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Image9 from "../assets/img/slogan2.png";
import { useAuth } from "../auth/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (!email || !password) {
      setError("Por favor, complete todos los campos.");
      return;
    }

    try {
      setLoading(true);
      const loggedInUser = await login({email,password});

      if(loggedInUser.rol && loggedInUser.rol.toLowerCase() === 'admin'){
        navigate('/AdminHome');
      }else{
          navigate('/')
      }
      
    }catch(err){
      setError(err.message)
    }finally{
      setLoading(false);
    }
  };

  return (
    <>
      <div className="login" style={{ textAlign: "center", marginTop: "16px" }}>
        <img src={Image9} alt="Logo empresa" className="login-logo-img" />
      </div>

      <div className="contact-form-container">
        <h2 className="text-center mb-4">Inicio de Sesión</h2>
        
        {error && <Alert variant="danger">{error}</Alert>}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="form-group" controlId="email">
            <Form.Label>Correo</Form.Label>
            <Form.Control
              type="email"
              placeholder="Ingrese su correo"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="form-group" controlId="password">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Ingrese su contraseña"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <div className="d-flex justify-content-center mt-3">
            <Button type="submit" disabled={loading} className="w-100">
              {loading ? 'Ingresando…' : 'Iniciar Sesión'}
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
}
