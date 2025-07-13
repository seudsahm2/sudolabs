import './LabTabs.css';

export default function LabTabs() {
  return (
    <div className="lab-tabs-bar">
      <div className="lab-tabs-left">
        <a href="#" className="lab-tab-link active">Host Lab</a>
        <span className="lab-tab-separator">|</span>
        <a href="#" className="lab-tab-link">Rent Lab</a>
      </div>
      <button className="lab-tabs-newlab">
        <span className="lab-tabs-plus">&#x2795;</span>
        <span>New Lab</span>
      </button>
    </div>
  );
}
