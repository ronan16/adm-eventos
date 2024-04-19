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

  return (
    <div>
      <h2>Cadastro de Usuário</h2>
      <form>
        <label htmlFor='nome' >Nome</label>
        <input type='text' id="nome"
          value={formulario.nome}
          onChange={ } />

        <label htmlFor='email' >Email</label>
        <input type='text' id="email"
          value={formulario.emai} />

        <label htmlFor='senha' >Senha</label>
        <input type='text' id="senha"
          value={formulario.senha} />

        <label htmlFor='confSenha' >Confirmar Senha</label>
        <input type='text' id="confSenha"
          value={formulario.confSenha} />

        <button type='submit'>Salvar</button>
      </form>

    </div>
  );
};

export default CadastroUsuario;
