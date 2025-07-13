import './Navbar.css';
import hamburgerIcon from '../assets/hamburger-button.svg';
import globeIcon from '../assets/globe.svg';
import robotIcon from '../assets/robot.svg';

export default function NavbarVariant() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <button className="navbar-hamburger">
          <img src={hamburgerIcon} alt="menu" />
        </button>
        <span className="navbar-logo">DELTA LABS</span>
        <span className="navbar-title-text">DELTA LABS</span>
      </div>
      <div className="navbar-right">
        <img src={globeIcon} alt="globe" className="navbar-icon" />
        <span className="navbar-lang">English</span>
        <img src={robotIcon} alt="robot" className="navbar-icon navbar-robot" />
        <button className="navbar-btn login">Login</button>
        <button className="navbar-btn signup">Signup</button>
      </div>
    </nav>
  );
}
