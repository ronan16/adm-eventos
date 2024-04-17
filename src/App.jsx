// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import CadastroUsuario from './pages/CadastroUsuario/CadastroUsuario';
import RotaProtegida from './components/RotaProtegida';
import Palestrantes from './pages/Palestrantes/Palestrantes'; // Importar a tela de Manter Palestrante

const App = () => {
 return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<CadastroUsuario />} />
          <Route path="/home" element={<RotaProtegida><Home /></RotaProtegida>} />
          <Route path="/palestrantes" element={<RotaProtegida><Palestrantes /></RotaProtegida>} /> {/* Adicionar a rota para a tela de Manter Palestrante */}
        </Routes>
      </Router>
    </AuthProvider>
 );
};

export default App;
