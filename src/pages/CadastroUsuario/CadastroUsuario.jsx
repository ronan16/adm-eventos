// src/pages/CadastroUsuario/CadastroUsuario.js
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

const CadastroUsuario = () => {
 const { setIsAuthenticated, setUserName } = useContext(AuthContext);
 const navigate = useNavigate();

 // Estado para gerenciar os valores dos campos do formulário
 const [formValues, setFormValues] = useState({
   nome: '',
   email: '',
   senha: '',
   confirmarSenha: '',
 });

 // Função para lidar com as mudanças nos campos do formulário
 const handleChange = (e) => {
   const { name, value } = e.target;
   setFormValues({ ...formValues, [name]: value });
 };

 const handleCadastro = () => {
    // Aqui você pode adicionar a lógica de validação e cadastro do usuário
    // Por exemplo, verificar se a senha e a confirmação da senha são iguais
    if (formValues.senha !== formValues.confirmarSenha) {
      alert('As senhas não coincidem');
      return;
    }

    // Simulação de cadastro bem-sucedido
    setIsAuthenticated(true);
    setUserName(formValues.nome); // Atualiza o nome do usuário
    navigate('/home'); // Redireciona para a Home
 };

 return (
    <div>
      <h1>Cadastro de Usuário</h1>
      <form>
        <label>
          Nome:
          <input type="text" name="nome" value={formValues.nome} onChange={handleChange} />
        </label>
        <label>
          E-mail:
          <input type="email" name="email" value={formValues.email} onChange={handleChange} />
        </label>
        <label>
          Senha:
          <input type="password" name="senha" value={formValues.senha} onChange={handleChange} />
        </label>
        <label>
          Confirmar Senha:
          <input type="password" name="confirmarSenha" value={formValues.confirmarSenha} onChange={handleChange} />
        </label>
        <button type="button" onClick={handleCadastro}>Cadastrar</button>
      </form>
    </div>
 );
};

export default CadastroUsuario;
