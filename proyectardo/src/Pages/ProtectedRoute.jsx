import React from 'react';
import { useAuth } from '../nodeApp/AuthContext';
import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoute() {
  const { loading, isAuthenticated } = useAuth();
  console.log(loading, isAuthenticated)
  if (!loading && !isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}

export default ProtectedRoute;