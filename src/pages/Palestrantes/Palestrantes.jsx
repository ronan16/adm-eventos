// src/pages/Palestrantes/Palestrantes.js
import React, { useState } from 'react';

const Palestrantes = () => {
 const [palestrantes, setPalestrantes] = useState([]);
 const [formValues, setFormValues] = useState({
   nome: '',
   titulo: '',
   resumo: '',
   data: '',
   horaInicio: '',
   horaTermino: '',
 });

 const handleChange = (e) => {
   const { name, value } = e.target;
   setFormValues({ ...formValues, [name]: value });
 };

 const handleSubmit = (e) => {
   e.preventDefault();
   // Aqui você pode adicionar a lógica para salvar o palestrante
   // Por exemplo, adicionar o novo palestrante ao estado palestrantes
   const novoPalestrante = { ...formValues };
   setPalestrantes([...palestrantes, novoPalestrante]);
   setFormValues({ nome: '', titulo: '', resumo: '', data: '', horaInicio: '', horaTermino: '' });
 };

 return (
    <div>
      <h1>Manter Palestrante</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nome do Palestrante:
          <input type="text" name="nome" value={formValues.nome} onChange={handleChange} />
        </label>
        <label>
          Título da Palestra:
          <input type="text" name="titulo" value={formValues.titulo} onChange={handleChange} />
        </label>
        <label>
          Resumo da Palestra:
          <textarea name="resumo" value={formValues.resumo} onChange={handleChange} />
        </label>
        <label>
          Data:
          <input type="date" name="data" value={formValues.data} onChange={handleChange} />
        </label>
        <label>
          Hora de Início:
          <input type="time" name="horaInicio" value={formValues.horaInicio} onChange={handleChange} />
        </label>
        <label>
          Hora de Término:
          <input type="time" name="horaTermino" value={formValues.horaTermino} onChange={handleChange} />
        </label>
        <button type="submit">Cadastrar</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Título</th>
            <th>Resumo</th>
            <th>Data</th>
            <th>Hora de Início</th>
            <th>Hora de Término</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {palestrantes.map((palestrante, index) => (
            <tr key={index}>
              <td>{palestrante.nome}</td>
              <td>{palestrante.titulo}</td>
              <td>{palestrante.resumo}</td>
              <td>{palestrante.data}</td>
              <td>{palestrante.horaInicio}</td>
              <td>{palestrante.horaTermino}</td>
              <td>
                <button>Editar</button>
                <button>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
 );
};

export default Palestrantes;
