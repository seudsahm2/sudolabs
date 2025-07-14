import './Laboratory.css';
import hamburgerIcon from '../assets/hamburger-button.svg';
import globeIcon from '../assets/globe.svg';
import robotIcon from '../assets/robot.svg';
import personIcon from '../assets/person-circle.svg';
import funnelIcon from '../assets/funnel.svg';

export default function Laboratory() {
  return (
    <div className="lab-root">
      {/* Sidebar */}
      <aside className="lab-sidebar">
        <button className="sidebar-menu"><img src={hamburgerIcon} alt="menu" /></button>
        <div className="lab-logo">DELTA LABS</div>
        <nav className="lab-nav">
          <button className="nav-btn active"><span role="img" aria-label="lab">⚗️</span></button>
          <button className="nav-btn"><span role="img" aria-label="help">❓</span></button>
          <button className="nav-btn"><span role="img" aria-label="docs">📄</span></button>
        </nav>
      </aside>
      {/* Main Content */}
      <main className="lab-main">
        <header className="lab-header">
          <div className="lab-header-left">
            <span className="lab-title"><span role="img" aria-label="lab">⚗️</span> Laboratory</span>
            <div className="lab-tabs">
              <button className="tab active">Host Lab</button>
              <button className="tab">Rent Lab</button>
            </div>
          </div>
          <div className="lab-header-right">
            <button className="header-btn"><img src={globeIcon} alt="globe" /></button>
            <span className="header-lang">English</span>
            <img src={robotIcon} alt="robot" className="header-robot" />
            <button className="header-btn invite">Invite</button>
            <button className="header-btn new-lab">+ New Lab</button>
            <img src={personIcon} alt="user" className="header-user" />
            <span className="header-username">John</span>
          </div>
        </header>
        <section className="lab-search-section">
          <input className="lab-search" placeholder="Search for Labs..." />
          <button className="lab-search-btn"><span role="img" aria-label="search">🔍</span></button>
          <button className="lab-filter-btn"><img src={funnelIcon} alt="filter" /></button>
        </section>
        <section className="lab-cards-section">
          {[1,2,3].map((i) => (
            <div className="lab-card" key={i}>
              <img className="lab-card-img" src="https://images.unsplash.com/photo-1517971071642-34a2d3eccb5e?auto=format&fit=crop&w=400&q=80" alt="Lab" />
              <div className="lab-card-content">
                <div className="lab-card-header">
                  <span className="lab-card-institute">AAU</span>
                  <span className="lab-card-title">African Union Chemical Lab</span>
                </div>
                <div className="lab-card-meta">
                  <span className="lab-card-guests">12 guests</span>
                  <span className="lab-card-rating">★ 4.94 (233 reviews)</span>
                  <span className="lab-card-price">13,000 Birr / Guest</span>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
