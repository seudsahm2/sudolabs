import './SubNavbar.css';
import funnelIcon from '../assets/funnel.svg';

export default function SubNavbar() {
  return (
    <div className="subnavbar">
      <div className="subnavbar-left">
        <img src={funnelIcon} alt="filter" className="subnavbar-icon" />
        <span className="subnavbar-title">Laboratory</span>
      </div>
      <div className="subnavbar-right">
        <span className="subnavbar-action">
          <span className="subnavbar-socket" role="img" aria-label="socket">🔌</span>
          <span>Integrate</span>
        </span>
        <span className="subnavbar-action">
          <span className="subnavbar-robot" role="img" aria-label="robot">🤖</span>
          <span>Automate</span>
        </span>
        <div className="subnavbar-invite">
          <span className="subnavbar-invite-main">
            <span className="subnavbar-invite-icon" role="img" aria-label="invite">📨</span>
            <span>Invite</span>
          </span>
          <span className="subnavbar-invite-separator">|</span>
          <span className="subnavbar-invite-link">
            <span className="subnavbar-link-icon" role="img" aria-label="link">🔗</span>
          </span>
        </div>
      </div>
    </div>
  );
}