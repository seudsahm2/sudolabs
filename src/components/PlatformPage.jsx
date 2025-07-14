import './PlatformPage.css';
import NavbarVariant from './NavbarVariant';
import filterIcon from '../assets/funnel.svg';
import searchIcon from '../assets/search.svg';
import mainImage from '../assets/lab_1.jpg';
import profileImg from '../assets/person-circle.svg';
import heartIcon from '../assets/heart.svg';
import commentIcon from '../assets/comment.svg';
import shareIcon from '../assets/share.svg';
import mediaIcon from '../assets/media.svg';
import headphoneIcon from '../assets/headphone.svg';
import robotIcon from '../assets/robot.svg';
import tvIcon from '../assets/tv.svg';


const featuresRows = [
  ['Course', 'School'],
  ['Rent a Lab', 'Chatroom'],
  ['Tutorials', 'Post', 'R & D'],
  ['Online Competition', 'Specialization'],
  ['Digital Library', 'Course Support'],
  ['Rent a Lab', 'Help and Support'],
  ['Course', 'Planner'],
  ['Certification', 'Chatroom'],
  ['Row 9 Link 1', 'Row 9 Link 2', 'Row 9 Link 3'],
  ['Row 10 Link 1', 'Row 10 Link 2', 'Row 10 Link 3'],
  ['Row 11 Link 1', 'Row 11 Link 2', 'Row 11 Link 3'],
  ['Row 12 Link 1', 'Row 12 Link 2', 'Row 12 Link 3'],
];

export default function PlatformPage() {
  return (
    <div className="platform-root">
      <NavbarVariant />
      <div className="platform-main">
        <div className="platform-left">
          <div className="platform-title">Platform Features</div>
          <div className="platform-features-scroll">
            {featuresRows.map((row, rowIdx) => (
              <div className="platform-features-row" key={rowIdx}>
                {row.map((f, i) => (
                  <div className="platform-feature-pill" key={i}>{f}</div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="platform-right">
          <div className="platform-searchbar">
            <img src={filterIcon} alt="filter" className="platform-searchbar-icon" />
            <input className="platform-searchbar-input" placeholder="Search...|" spellCheck={false} />
            <img src={searchIcon} alt="search" className="platform-searchbar-icon right" />
          </div>
          <div className="platform-card-container">
            <div className="platform-card">
              <img src={mainImage} alt="main" className="platform-card-img" />
              <div className="platform-card-links">
                <span className="platform-card-link free">Free Resources</span>
                <span className="platform-card-slant" />
                <span className="platform-card-link wish">Add to Wish List</span>
                <span className="platform-card-slant" />
                <span className="platform-card-link enroll">Enroll Now</span>
              </div>
            </div>
            <div className="platform-card-icons">
              <div className="platform-card-icon-col">
                <div className="platform-card-icon-btn">
                  <img src={heartIcon} alt="like" />
                </div>
                <div className="platform-card-icon-label">100</div>
                <div className="platform-card-icon-btn">
                  <img src={commentIcon} alt="comment" />
                </div>
                <div className="platform-card-icon-label">14</div>
                <div className="platform-card-icon-btn">
                  <img src={shareIcon} alt="share" />
                </div>
                <div className="platform-card-icon-label">3</div>
              </div>
              <div className="platform-card-icon-col wide">
                <div className="platform-card-icon-btn wide">
                  <img src={mediaIcon} alt="media" />
                </div>
                <div className="platform-card-icon-btn wide">
                  <img src={headphoneIcon} alt="headphone" />
                </div>
                <div className="platform-card-icon-btn wide">
                  <img src={robotIcon} alt="robot" />
                </div>
                <div className="platform-card-icon-btn wide">
                  <img src={tvIcon} alt="tv" />
                </div>
              </div>
            </div>
          </div>
          <div className="platform-profile-row">
            <img src={profileImg} alt="profile" className="platform-profile-img" />
            <div className="platform-profile-main">
              <div className="platform-profile-header">
                <span className="platform-profile-name">Abebe Kebede</span>
                <button className="platform-profile-follow">Follow</button>
              </div>
              <div className="platform-profile-desc">
                Explore Newton's First Law: Objects stay still or move at constant speed unless a force acts on them.
              </div>
              <div className="platform-profile-tags">
                <span>#Physics</span> <span>#Newton's First Law</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
