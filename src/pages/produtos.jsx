import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Hook para navegação entre páginas
import './produtos.css';

function Produtos() {
  const [produtos, setProdutos] = useState([]); // Estado que guarda a lista de produtos
  const navigate = useNavigate(); // Função que permite navegar para outra rota

  useEffect(() => {
    // Tenta pegar os produtos salvos no localStorage
    const salvos = JSON.parse(localStorage.getItem('produtos'));

    if (salvos && salvos.length > 0) {
      // Se encontrou produtos, usa eles
      setProdutos(salvos);
    } else {
      // Se não encontrou nada, define uma lista inicial de produtos
      const iniciais = [
        { nome: 'Computador', preco: 1800, descricao: 'Computador Desktop' },
        { nome: 'Mouse', preco: 80, descricao: 'Mouse sem fio' },
        { nome: 'Teclado', preco: 100, descricao: 'Teclado mecânico' },
        { nome: 'Notebook', preco: 2500, descricao: 'Notebook i7 com SSD' },
      ];
      localStorage.setItem('produtos', JSON.stringify(iniciais)); // Salva os produtos iniciais no localStorage
      setProdutos(iniciais); // Atualiza o estado com os produtos iniciais
    }
  }, []); // Executa apenas uma vez ao carregar a página

  // Função que navega para a página de detalhes do produto
  const verDetalhes = (produto) => {
    localStorage.setItem('produtoSelecionado', JSON.stringify(produto)); // Salva o produto clicado no localStorage
    navigate('/info'); // Redireciona para a rota "/info"
  };

  return (
    <div className="produtos-container">
      <h2>Produtos Cadastrados</h2>
      <p>Total de produtos: {produtos.length}</p>

      <ul className="lista-produtos">
        {produtos.map((produto, index) => (
          <li key={index} className="item-produto">
            {produto.nome} - R$ {produto.preco}
            <button
              className="detalhes-link"
              onClick={() => verDetalhes(produto)} // Ao clicar, chama a função de ver detalhes
            >
              Ver detalhes
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Produtos;
