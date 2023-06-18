import React, { useContext } from 'react';
import MyContext from '../../Context/MyContext';
import NavBar from '../NavBar/NavBar';
import SwitchLanguage from '../SwitchLanguage/SwitchLanguage';
import './Header.css';

const Header = () => {
  
  const { dataCss } = useContext(MyContext);

  return (
    <header style={{boxShadow: dataCss.boxShadowHeader}} className='header'>
      <div className='header-div'>
        <NavBar/>
        <SwitchLanguage/>
      </div>
    </header>
  );
};

export default Header;
