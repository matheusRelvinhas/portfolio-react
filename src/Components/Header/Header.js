import NavBar from '../NavBar/NavBar';
import SwitchLanguage from '../SwitchLanguage/SwitchLanguage';
import './Header.css';

const Header = () => {
  
  return (
    <header className='header'>
      <div className='header-div'>
        <NavBar/>
        <SwitchLanguage/>
      </div>
    </header>
  );
};

export default Header;
