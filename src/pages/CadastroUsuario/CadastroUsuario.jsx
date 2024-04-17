// src/pages/CadastroUsuario/CadastroUsuario.js
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { setDoc, doc } from "firebase/firestore";
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { db } from '../../database/firebaseConfig';

const CadastroUsuario = () => {
  const { setIsAuthenticated, setUserName } = useContext(AuthContext);
  const navigate = useNavigate();

  // Estado para gerenciar os valores dos campos do formulário
  const [usuario, setUsuario] = useState({
    nome: '',
    email: '',
    senha: '',
    confirmarSenha: '',
  });

  // Função para lidar com as mudanças nos campos do formulário
  const mudaFormulario = (e) => {
    const { name, value } = e.target;
    setUsuario({ ...usuario, [name]: value });
  };
  const criaUsuario = () =>{
    if (usuario.senha !== usuario.confirmarSenha) {
      alert('As senhas não coincidem');
      return;
    }

    const auth = getAuth()
    createUserWithEmailAndPassword(
      auth,
      usuario.email, usuario.senha)

      .then((userCredential) => {
        const user = userCredential.user;
        cadastroUsuario()
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });

  }
  const cadastroUsuario = async () => {   
    //Grava no Firebase 
    try {
      const resultado = await setDoc(doc(db, "usuarios", usuario.email),
        usuario
      );
      console.log("ID RESULTADO: " + resultado.id)

      //Criar usuario autenticado
      const auth = getAuth();
      createUserWithEmailAndPassword(
        auth,
        usuario.email, usuario.senha)

        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    } catch (e) {
      console.log("Erro: " + e)
    }



    setIsAuthenticated(true);
    setUserName(usuario.nome); // Atualiza o nome do usuário
    navigate('/home'); // Redireciona para a Home
  };

  return (
    <div>
      <h1>Cadastro de Usuário</h1>
      <form>
        <label>
          Nome:
          <input type="text" name="nome" value={usuario.nome} onChange={mudaFormulario} />
        </label>
        <label>
          E-mail:
          <input type="email" name="email" value={usuario.email} onChange={mudaFormulario} />
        </label>
        <label>
          Senha:
          <input type="password" name="senha" value={usuario.senha} onChange={mudaFormulario} />
        </label>
        <label>
          Confirmar Senha:
          <input type="password" name="confirmarSenha" value={usuario.confirmarSenha} onChange={mudaFormulario} />
        </label>
        <button type="button" onClick={criaUsuario}>Cadastrar</button>
      </form>
    </div>
  );
};

export default CadastroUsuario;
