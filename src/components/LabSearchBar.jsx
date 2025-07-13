import './LabSearchBar.css';

export default function LabSearchBar() {
  return (
    <div className="lab-searchbar-wrap">
      <div className="lab-searchbar">
        <input
          className="lab-searchbar-input"
          placeholder="Search for Labs...|"
          spellCheck={false}
        />
        <div className="lab-searchbar-actions">
          <span className="lab-searchbar-icon" role="img" aria-label="search">🔍</span>
          <span className="lab-searchbar-separator">|</span>
          <span className="lab-searchbar-icon lab-searchbar-filter" role="img" aria-label="filter">≡</span>
        </div>
      </div>
    </div>
  );
}
