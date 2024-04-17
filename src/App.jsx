// src/App.js
import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import CadastroUsuario from './pages/CadastroUsuario/CadastroUsuario';
import RotaProtegida from './components/RotaProtegida';

const App = () => {
 return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route index path="/login" element={<Login />} />
          <Route path="/cadastro" element={<CadastroUsuario />} />
          <Route path="/" element={<RotaProtegida><Home /></RotaProtegida>} />
        </Routes>
      </Router>
    </AuthProvider>
 );
};

export default App;
