import './VerticalNav.css';
import labIcon from '../assets/hamburger-button.svg'; // Replace with actual lab icon if available
import helpIcon from '../assets/robot.svg'; // Replace with actual help icon if available
import docIcon from '../assets/person-circle.svg'; // Replace with actual doc icon if available
import { NavLink } from 'react-router-dom';

export default function VerticalNav() {
  const icons = [
    { src: labIcon, alt: 'Lab', key: 'lab', to: '/' },
    { src: helpIcon, alt: 'Requests', key: 'requests', to: '/requests' },
    { src: docIcon, alt: 'Docs', key: 'docs', to: '/third' },
    { src: labIcon, alt: 'Platform', key: 'platform', to: '/platform' },
  ];
  return (
    <nav className="vertical-nav">
      {icons.map((icon) => (
        <NavLink
          key={icon.key}
          to={icon.to}
          className={({ isActive }) =>
            `vertical-nav-btn${isActive ? ' selected' : ''}`
          }
          end={icon.to === '/'}
        >
          <img src={icon.src} alt={icon.alt} />
        </NavLink>
      ))}
    </nav>
  );
}
