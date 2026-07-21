import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { api } from './config/api'; 
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './auth/AuthContext';


import Home from './pages/Home';
import Carrito from './pages/carrito';
import Productos from './pages/Productos';
import Contacto from './pages/contacto';
import Nosotros from './pages/nosotros';
import Login from './pages/login';
import Registro from './pages/registro';
import AdminHome from './pages/AdminHome';
import GestionUser from './pages/GestionUsers';
import GestionPro from './pages/GestionPro';


import AppNavbar from './components/AppNavbar';
import Footer from './components/footer';

import './App.css';
import './styles/custom.css';

export default function App() {
  const [carrito, setCarrito] = useState([]);
  const [products, setProducts] = useState([]); 
  
  
  const userSession = JSON.parse(localStorage.getItem('user_session'));
  const userId = userSession?.idusu; 

  useEffect(() => {
    api.get('/productos')
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.error("Error cargando productos:", err));
  }, []);


  useEffect(() => {
    if (userId) {
   
      api.get(`/carrito/${userId}`)
        .then((res) => setCarrito(res.data))
        .catch((err) => console.error("Error cargando carrito del usuario:", err));
    } else {
     
      const raw = localStorage.getItem('tg_cart');
      if (raw) setCarrito(JSON.parse(raw));
    }
  }, [userId]); 


  useEffect(() => {
    if (!userId) {
      localStorage.setItem('tg_cart', JSON.stringify(carrito));
    }
  }, [carrito, userId]);


  

  const addToCart = async (product) => {

    setCarrito((prev) => [...prev, product]);

    if (userId) {
     
      try {
        await api.post(`/carrito/${userId}/agregar/${product.id}`);
      } catch (error) {
        console.error("Error sincronizando con backend:", error);
      }
    }
  };

  const removeFromCart = async (index, product) => {
    
    setCarrito((prev) => prev.filter((_, i) => i !== index));

    if (userId) {
  
      try {
        await api.delete(`/carrito/${userId}/quitar/${product.id}`);
      } catch (error) {
        console.error("Error borrando del backend:", error);
      }
    }
  };

  const clearCart = async () => {
    setCarrito([]);

    if (userId) {
      try {
        await api.delete(`/carrito/${userId}/vaciar`);
      } catch (error) {
        console.error("Error vaciando carrito en backend:", error);
      }
    } else {
      localStorage.removeItem('tg_cart');
    }
  };

  return (
    <AuthProvider>
      <Router>
        <AppNavbar cartItems={carrito} />
        
        <Routes>
          {/* --- RUTAS PÚBLICAS --- */}
          <Route path="/" element={<Home />} />
          <Route 
            path="/Productos" 
            element={<Productos onAdd={addToCart} products={products} />} 
          />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />

          {/* --- RUTA USUARIO (Requiere estar logueado) --- */}
          <Route
            path="/carrito"
            element={
              <ProtectedRoute>
                <Carrito 
                  items={carrito} 
                  onRemove={removeFromCart} 
                  onClear={clearCart} 
                />
              </ProtectedRoute>
            }
          />

          {/* --- RUTAS DE ADMINISTRADOR (Requieren rol 'admin') --- */}
          <Route path="/AdminHome" element={
              <ProtectedRoute requireAdmin={true}>
                <AdminHome />
              </ProtectedRoute>
            } 
          />
          
          <Route path="/GestionPro" element={
              <ProtectedRoute requireAdmin={true}>
                <GestionPro products={products} setProducts={setProducts} />
              </ProtectedRoute>
            } 
          />
          
          <Route path="/GestionUsers" element={
              <ProtectedRoute requireAdmin={true}>
                <GestionUser />
              </ProtectedRoute>
            } 
          />
        </Routes>

        <Footer />
      </Router>
    </AuthProvider>
  );
}