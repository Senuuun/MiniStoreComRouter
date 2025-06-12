import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './cadastrar.css';

function Cadastrar() {
  const [formData, setFormData] = useState({
    nome: '',
    preco: '',
    descricao: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const produtos = JSON.parse(localStorage.getItem('produtos')) || [];
    produtos.push(formData);
    localStorage.setItem('produtos', JSON.stringify(produtos));

    navigate('/produtos');
  };

  return (
    <div className="cadastrar-container">
      <h2 className="cadastrar-title">Cadastro de Produto</h2>
      <form onSubmit={handleSubmit} className="cadastrar-form">
        <input
          type="text"
          name="nome"
          placeholder="Nome"
          value={formData.nome}
          onChange={handleChange}
          required
          className="form-input"
        />

        <input
          type="number"
          name="preco"
          placeholder="Preço"
          value={formData.preco}
          onChange={handleChange}
          required
          className="form-input"
        />

        <textarea
          name="descricao"
          placeholder="Descrição (opcional)"
          value={formData.descricao}
          onChange={handleChange}
          className="form-textarea"
        />

        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}

export default Cadastrar;
