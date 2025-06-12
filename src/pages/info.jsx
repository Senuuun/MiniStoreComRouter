import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Info() {
  const [produto, setProduto] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Este código será executado quando o componente for montado (quando a página carregar)
    console.log('Produto carregado!');

    // Busca o produto selecionado do localStorage
    const produtoSalvo = JSON.parse(localStorage.getItem('produtoSelecionado'));
    setProduto(produtoSalvo);

    // Esta função será executada quando o componente for desmontado (quando sair da página)
    return () => {
      console.log('Saindo da página de detalhes.');
    };
  }, []); // O array vazio garante que o useEffect só execute na montagem e desmontagem

  if (!produto) {
    return (
      <div className="produtos-container">
        <h2>Produto não encontrado</h2>
        <button onClick={() => navigate('/produtos')}>Voltar</button>
      </div>
    );
  }

  return (
    <div className="produtos-container">
      <h2>{produto.nome}</h2>
      <p>Preço: R$ {produto.preco}</p>
      <p>Descrição: {produto.descricao || 'Sem descrição'}</p>
      <button onClick={() => navigate('/produtos')}>Voltar</button>
    </div>
  );
}

export default Info;
