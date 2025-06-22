import React from 'react'
import { Navigate } from 'react-router-dom';

export const PrivateRouter = ({ children }) => {
  const auth = localStorage.getItem('auth') === 'true';
  return (auth)
    ? children
    : <Navigate to="/auth" />
}
