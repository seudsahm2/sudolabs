import './Navbar.css';
import hamburgerIcon from '../assets/hamburger-button.svg';
import globeIcon from '../assets/globe.svg';
import robotIcon from '../assets/robot.svg';
import personIcon from '../assets/person-circle.svg';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <button className="navbar-hamburger">
          <img src={hamburgerIcon} alt="menu" />
        </button>
        <span className="navbar-logo">DELTA LABS</span>
        <div className="navbar-tab">
          <span className="navbar-tab-icon" role="img" aria-label="lab">⚗️</span>
          <span className="navbar-tab-label">Labs</span>
          <button className="navbar-tab-close" aria-label="Close tab">×</button>
        </div>
      </div>
      <div className="navbar-right">
        <img src={globeIcon} alt="globe" className="navbar-icon" />
        <span className="navbar-lang">English</span>
        <img src={robotIcon} alt="robot" className="navbar-icon navbar-robot" />
        <img src={personIcon} alt="user" className="navbar-icon navbar-user" />
        <span className="navbar-username">John</span>
      </div>
    </nav>
  );
}
