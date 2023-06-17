import React, { useState } from 'react';
import './NavBar.css'; // Importe o arquivo de estilos CSS

function NavBar() {
  const [activeOption, setActiveOption] = useState('about'); // Estado para controlar a opção ativa

  const handleClick = (option) => {
    setActiveOption(option);
    // Adicione o código da função que você deseja executar aqui
  };

  return (
    <nav className="navbar">
      <div
        className={`nav-item ${activeOption === 'about' ? 'active' : ''}`}
        onClick={() => handleClick('about')}
      >
        About
      </div>
      <div
        className={`nav-item ${activeOption === 'projects' ? 'active' : ''}`}
        onClick={() => handleClick('projects')}
      >
        Projects
      </div>
      <div
        className={`nav-item ${activeOption === 'certificates' ? 'active' : ''}`}
        onClick={() => handleClick('certificates')}
      >
        Certificates
      </div>
    </nav>
  );
}

export default NavBar;
