import React, { createContext, useContext, useState, useEffect } from 'react';
import { api } from '../config/api'; 

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

const SESSION_KEY = 'user_session';

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);


  useEffect(() => {
    const storedSession = localStorage.getItem(SESSION_KEY);
    if (storedSession) {
      setUser(JSON.parse(storedSession));
    }
  }, []);

  
  const login = async ({ email, password }) => {
    try {
      
      const response = await api.post('/auth/login', { email, password });

      const userData = response.data; 

      
      setUser(userData);
      localStorage.setItem(SESSION_KEY, JSON.stringify(userData));

      return userData;

    } catch (error) {
      console.error("Error en login:", error);
      
      const mensajeError = error.response?.data || 'Error al iniciar sesión';
      throw new Error(mensajeError);
    }
  };

  const register = async ({ email, password, role }) => {
    try {
    
      const response = await api.post('/auth/registro', {
        email,
        password,
        rol: role 
      });

      return response.data;

    } catch (error) {
      console.error("Error en registro:", error);
      const mensajeError = error.response?.data || 'Error al registrar usuario';
      throw new Error(mensajeError);
    }
  };

  
  const logout = () => {
    setUser(null);
    localStorage.removeItem(SESSION_KEY);
   
  };

  const value = { user, login, register, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}