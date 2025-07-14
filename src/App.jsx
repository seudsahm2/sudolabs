




import Navbar from './components/Navbar';
import SubNavbar from './components/SubNavbar';
import LabTabs from './components/LabTabs';
import LabSearchBar from './components/LabSearchBar';
import VerticalNav from './components/VerticalNav';

import LabCards from './components/LabCards';
import LabRequests from './components/LabRequests';

import LabBooking from './components/LabBooking';
import PlatformPage from './components/PlatformPage';
import { Routes, Route, useLocation } from 'react-router-dom';


function App() {
  const location = useLocation();
  if (location.pathname === '/platform') {
    return <PlatformPage />;
  }
  let selected = 0;
  if (location.pathname === '/requests') selected = 1;
  if (location.pathname === '/third') selected = 2;
  if (location.pathname === '/platform') selected = 3;

  return (
    <>
      <Navbar />
      <SubNavbar />
      <LabTabs />
      <LabSearchBar />
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}>
        <VerticalNav selected={selected} />
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<LabCards />} />
            <Route path="/requests" element={<LabRequests />} />
            <Route path="/third" element={<LabBooking />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
