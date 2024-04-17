// src/contexts/UserContext.js
import React, { createContext, useState, Provider } from 'react';
export const UsuarioContext = createContext();

export const UsuarioProvider = ({ children }) => {
 const [user, setUser] = useState({});

 return (
    <UsuarioContext.Provider value={{ user, setUser }}>
      {children}
    </UsuarioContext.Provider>
 );
};
