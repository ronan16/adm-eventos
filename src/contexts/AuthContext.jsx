// src/contexts/AuthContext.js
import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
 const [isAuthenticated, setIsAuthenticated] = useState(false);
 const [userName, setUserName] = useState(''); // Adicionado para armazenar o nome do usuário

 return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, userName, setUserName }}>
      {children}
    </AuthContext.Provider>
 );
};
