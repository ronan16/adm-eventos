import { useState } from 'react';

const CadastroUsuario = () => {

  const [formulario, setFormulario] = useState(
    {
      nome: '',
      emai: '',
      senha: '',
      confSenha: ''
    }//OBJETO
  )
  const alteraFormulario = (e) => {
    const { name, value } = e.target;
    setFormulario({ ...formulario, [name]: value })
  }


  return (
    <div>
      <h2>Cadastro de Usuário</h2>
      <form>
        <label htmlFor='nome' >Nome</label>
        <input type='text' id="nome" name='nome'
          value={formulario.nome}
          onChange={alteraFormulario} />

        <label htmlFor='email' >Email</label>
        <input type='text' id="email" name='email'
          value={formulario.emai} 
          onChange={alteraFormulario} />

        <label htmlFor='senha' >Senha</label>
        <input type='text' id="senha" name='senha'
          value={formulario.senha} 
          onChange={alteraFormulario} />

        <label htmlFor='confSenha' >Confirmar Senha</label>
        <input type='text' id="confSenha" name='confSenha'
          value={formulario.confSenha}
          onChange={alteraFormulario} />

        <button type='submit'>Salvar</button>
      </form>

    </div>
  );
};

export default CadastroUsuario;
