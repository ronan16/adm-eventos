// src/pages/Login/Login.js
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { signInWithEmailAndPassword } from "firebase/auth";
import { db, auth } from '../../database/firebaseConfig';
import { doc, getDoc } from "firebase/firestore";

const Login = () => {
 const { setIsAuthenticated, setUserName } = useContext(AuthContext);
 const navigate = useNavigate();

 // Estado para gerenciar os valores dos campos do formulário
 const [login, setLogin] = useState({
    email: '',
    senha: '',
    nome: '',
 });

 // Função para lidar com as mudanças nos campos do formulário
 const mudaLogin = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
 };

 const fazerLogin = async () => { // Torna a função assíncrona
    try {
      const userCredential = await signInWithEmailAndPassword(auth, login.email, login.senha);
      // Signed in 
      const user = userCredential.user;
      await buscarUsuario(); // Aguarda a busca do usuário
    
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Erro ao fazer login:", errorCode, errorMessage);
    }
 };

 const buscarUsuario = async () => {
  const docRef = doc(db, "usuarios", login.email);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const userData = docSnap.data(); // Obtenha os dados do usuário
    setLogin(userData); // Atualize o estado com os dados do usuário
    console.log(userData.nome); // Use os dados diretamente

    setIsAuthenticated(true);
    setUserName(userData.nome); // Atualize o nome do usuário com os dados diretamente
    navigate('/home'); // Redireciona para a Home
  } else {
    console.log("No such document!");
  }
}


 return (
    <div>
      <h1>Login</h1>
      <form>
        <label>
          E-mail:
          <input type="email" name="email" value={login.email} onChange={mudaLogin} />
        </label>
        <label>
          Senha:
          <input type="password" name="senha" value={login.senha} onChange={mudaLogin} />
        </label>
        <button type="button" onClick={fazerLogin}>Entrar</button>
      </form>
    </div>
 );
};

export default Login;
