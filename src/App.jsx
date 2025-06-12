import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import TopBar from './components/topbar';
import Footer from './components/footer';
import Home from './pages/home';
import Produtos from './pages/produtos';
import Cadastrar from './pages/cadastrar';
import Info from './pages/info';

function App() {
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);

  return (
    <div className="app">
      <TopBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/produtos"
            element={<Produtos setProdutoSelecionado={setProdutoSelecionado} />}
          />
          <Route path="/cadastrar" element={<Cadastrar />} />
          <Route
            path="/info"
            element={<Info produto={produtoSelecionado} />}
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
