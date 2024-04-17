// src/pages/Home/Home.js
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

const Home = () => {
 const { userName, setIsAuthenticated } = useContext(AuthContext);
 const navigate = useNavigate();

 const handleLogout = () => {
    setIsAuthenticated(false);
    navigate('/login'); // Redireciona para o Login
 };

 return (
    <div>
      <header>
        <nav>
          <div>Logo da Empresa</div>
          <div>
            <button onClick={() => navigate('/home')}>Início</button>
            <button onClick={() => navigate('/palestrantes')}>Palestrantes</button>
            <button onClick={handleLogout}>Logout</button>
          </div>
        </nav>
      </header>
      <div style={{ height: '400px', width: '100%' }}>
        Header
      </div>
      {/* Conteúdo principal da Home aqui */}
    </div>
 );
};

export default Home;
