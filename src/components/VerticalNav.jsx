import './VerticalNav.css';
import labIcon from '../assets/hamburger-button.svg'; // Replace with actual lab icon if available
import helpIcon from '../assets/robot.svg'; // Replace with actual help icon if available
import docIcon from '../assets/person-circle.svg'; // Replace with actual doc icon if available

export default function VerticalNav({ selected = 0 }) {
  const icons = [
    { src: labIcon, alt: 'Lab', key: 'lab' },
    { src: helpIcon, alt: 'Help', key: 'help' },
    { src: docIcon, alt: 'Docs', key: 'docs' },
  ];
  return (
    <nav className="vertical-nav">
      {icons.map((icon, idx) => (
        <button
          key={icon.key}
          className={`vertical-nav-btn${selected === idx ? ' selected' : ''}`}
        >
          <img src={icon.src} alt={icon.alt} />
        </button>
      ))}
    </nav>
  );
}
