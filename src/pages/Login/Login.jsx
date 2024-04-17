// src/pages/Login/Login.js
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

const Login = () => {
 const { setIsAuthenticated, setUserName } = useContext(AuthContext);
 const navigate = useNavigate();

 // Estado para gerenciar os valores dos campos do formulário
 const [formValues, setFormValues] = useState({
   email: '',
   senha: '',
 });

 // Função para lidar com as mudanças nos campos do formulário
 const handleChange = (e) => {
   const { name, value } = e.target;
   setFormValues({ ...formValues, [name]: value });
 };

 const handleLogin = () => {
    // Aqui você pode adicionar a lógica de validação e login do usuário
    // Por exemplo, verificar se o e-mail e a senha correspondem a um usuário válido
    // Simulação de login bem-sucedido
    setIsAuthenticated(true);
    setUserName('Nome do Usuário'); // Atualiza o nome do usuário
    navigate('/home'); // Redireciona para a Home
 };

 return (
    <div>
      <h1>Login</h1>
      <form>
        <label>
          E-mail:
          <input type="email" name="email" value={formValues.email} onChange={handleChange} />
        </label>
        <label>
          Senha:
          <input type="password" name="senha" value={formValues.senha} onChange={handleChange} />
        </label>
        <button type="button" onClick={handleLogin}>Entrar</button>
      </form>
    </div>
 );
};

export default Login;
