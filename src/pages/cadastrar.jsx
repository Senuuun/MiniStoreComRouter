// Importa os hooks necessários do React e a função de navegação do React Router
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './cadastrar.css'; // Importa o CSS específico desta página

function Cadastrar() {
  // Estado local para armazenar os dados do formulário
  const [formData, setFormData] = useState({
    nome: '',
    preco: '',
    descricao: '',
  });

  // Hook para navegação programática entre rotas
  const navigate = useNavigate();

  // Atualiza o estado formData conforme o usuário digita nos campos
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Atualiza somente o campo alterado usando spread do estado anterior
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Manipula o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita o recarregamento da página

    // Recupera os produtos existentes do localStorage (ou um array vazio se não houver)
    const produtos = JSON.parse(localStorage.getItem('produtos')) || [];

    // Adiciona o novo produto ao array
    produtos.push(formData);

    // Salva o array atualizado de produtos no localStorage
    localStorage.setItem('produtos', JSON.stringify(produtos));

    // Redireciona para a página de produtos após o cadastro
    navigate('/produtos');
  };

  return (
    <div className="cadastrar-container">
      <h2 className="cadastrar-title">Cadastro de Produto</h2>

      {/* Formulário de cadastro */}
      <form onSubmit={handleSubmit} className="cadastrar-form">
        {/* Campo para o nome do produto */}
        <input
          type="text"
          name="nome"
          placeholder="Nome"
          value={formData.nome}
          onChange={handleChange}
          required
          className="form-input"
        />

        {/* Campo para o preço do produto */}
        <input
          type="number"
          name="preco"
          placeholder="Preço"
          value={formData.preco}
          onChange={handleChange}
          required
          className="form-input"
        />

        {/* Campo opcional para descrição do produto */}
        <textarea
          name="descricao"
          placeholder="Descrição (opcional)"
          value={formData.descricao}
          onChange={handleChange}
          className="form-textarea"
        />

        {/* Botão para submeter o formulário */}
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}

export default Cadastrar;
