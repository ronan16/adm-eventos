import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const RotaProtegida = ({ children }) => {

  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => { 
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [] )

  return !isAuthenticated?  null: children

};

export default RotaProtegida;
