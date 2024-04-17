import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const RotaProtegida = ({ children }) => {
 const { isAuthenticated } = useContext(AuthContext);
 const navigate = useNavigate();

 if (!isAuthenticated) {
   navigate('/login');
   return null;
 }

 return children;
};

export default RotaProtegida;
