import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

function Home() {
  return (
    <section className="home-page">
      <h2>Bem-vindo à MiniStore!</h2>
      <p>Explore nosso catálogo e cadastre novos produtos.</p>
      <div className="home-buttons">
        <Link to="/produtos" className="home-link">Ver Produtos</Link>
        <span className="separator">|</span>
        <Link to="/cadastrar" className="home-link">Cadastrar Produto</Link>
      </div>
    </section>
  );
}

export default Home;
