// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Login from './pages/Login/Login';
import CadastroPalestra from './pages/CadastroPalestra/CadastroPalestra';
import CadastroUsuario from './pages/CadastroUsuario/CadastroUsuario';
import RotaProtegida from './components/RotaProtegida';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<CadastroUsuario />} />
          <Route path="/palestra" element={<RotaProtegida><CadastroPalestra /></RotaProtegida>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
