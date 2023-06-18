import React, { useContext } from 'react';
import MyContext from '../../Context/MyContext';
import SocialMedia from "../SocialMedia/SocialMedia";
import SwitchTheme from "../SwitchTheme/SwitchTheme";
import "./Footer.css";

const Footer = () => {

  const { dataCss } = useContext(MyContext);

  return (
    <footer style={{boxShadow: dataCss.boxShadowFooter}} className="footer">
      <div className="footer-div">
        <SwitchTheme />
        <SocialMedia />
      </div>
    </footer>
  );
};

export default Footer;
