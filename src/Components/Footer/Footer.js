import SocialMedia from "../SocialMedia/SocialMedia";
import SwitchTheme from "../SwitchTheme/SwitchTheme";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-div">
        <SwitchTheme />
        <SocialMedia />
      </div>
    </footer>
  );
};

export default Footer;
