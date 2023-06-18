import React, { useContext } from 'react';
import MyContext from '../../Context/MyContext';
import './NavBar.css'; // Importe o arquivo de estilos CSS

function NavBar() {

  const { dataCss, goToSlide, dataLanguage } = useContext(MyContext);

  return (
    <nav className="navbar" style={{color: dataCss.color}}>
      <div
        className='nav-item'
        onClick={() => goToSlide(3)}
      >
        {dataLanguage.about}
      </div>
      <div
        className='nav-item'
        onClick={() => goToSlide(1)}
      >
        {dataLanguage.projects}
      </div>
      <div
        className='nav-item'
        onClick={() => goToSlide(2)}
      >
        {dataLanguage.certificates}
      </div>
    </nav>
  );
}

export default NavBar;
