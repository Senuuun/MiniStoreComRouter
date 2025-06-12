import React from 'react'; 
import { Link } from 'react-router-dom';
import './topbar.css';

function TopBar() {
  return (
    <header className="topbar">
      <h1 className="title">MiniStore</h1>
      <nav className="nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/produtos" className="nav-link">Produtos</Link>
        <Link to="/cadastrar" className="nav-link">Cadastrar</Link>
      </nav>
    </header>
  );
}

export default TopBar;
