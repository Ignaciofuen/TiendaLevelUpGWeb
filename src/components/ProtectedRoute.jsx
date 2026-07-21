import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';

export default function ProtectedRoute({ children, requireAdmin }) {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  
  if(requireAdmin && user.rol?.toLowerCase() !== 'admin') {
    return <Navigate to="/" replace />;
  }

  
  return children;
}