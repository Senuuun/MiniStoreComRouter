// Importa os hooks e componentes necessários do React e do React Router
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

// Importa os componentes reutilizáveis e páginas do aplicativo
import TopBar from './components/topbar';
import Footer from './components/footer';
import Home from './pages/home';
import Produtos from './pages/produtos';
import Cadastrar from './pages/cadastrar';
import Info from './pages/info';

function App() {
  // Cria um estado para armazenar o produto selecionado
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);

  return (
    // Estrutura principal do aplicativo
    <div className="app">
      {/* Componente de barra superior, visível em todas as páginas */}
      <TopBar />

      {/* Conteúdo principal da página, que será alterado conforme a rota */}
      <main className="main-content">
        <Routes>
          {/* Rota para a página inicial */}
          <Route path="/" element={<Home />} />

          {/* Rota para a página de produtos; passa a função de selecionar produto como prop */}
          <Route
            path="/produtos"
            element={<Produtos setProdutoSelecionado={setProdutoSelecionado} />}
          />

          {/* Rota para a página de cadastro */}
          <Route path="/cadastrar" element={<Cadastrar />} />

          {/* Rota para a página de informações do produto; recebe o produto selecionado como prop */}
          <Route
            path="/info"
            element={<Info produto={produtoSelecionado} />}
          />
        </Routes>
      </main>

      {/* Componente de rodapé, visível em todas as páginas */}
      <Footer />
    </div>
  );
}

export default App;
