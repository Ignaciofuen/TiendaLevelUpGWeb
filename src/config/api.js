import axios from 'axios';

const baseURL = import.meta.env.VITE_API_BASE_URL || 'http://98.90.253.99:8080/api';

export const api = axios.create({
  baseURL,
  headers: { 'Content-Type': 'application/json' }
});


api.interceptors.request.use(
  (config) => {
    const sessionRaw = localStorage.getItem('user_session');
    
    if (sessionRaw) {
      const session = JSON.parse(sessionRaw);
      if (session?.token) {
      
        console.log("Añadiendo token a la petición:", session.token.substring(0, 10) + "...");
        config.headers.Authorization = `Bearer ${session.token}`;
      } else {
        console.warn("No se encontró token en la sesión");
      }
    } else {
        console.warn("No hay sesión guardada");
    }
    return config;
  },
  (error) => Promise.reject(error)
);