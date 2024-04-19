// src/contexts/AuthContext.js
import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [nomeUsuario, setNomeUsuario] = useState(''); // Adicionado para armazenar o nome do usuário

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, nomeUsuario, setNomeUsuario }}>
      {children}
    </AuthContext.Provider>
  );
};
