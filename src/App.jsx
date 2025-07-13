



import Navbar from './components/Navbar';
import SubNavbar from './components/SubNavbar';

import LabTabs from './components/LabTabs';
import LabSearchBar from './components/LabSearchBar';
import VerticalNav from './components/VerticalNav';
import LabCards from './components/LabCards';

function App() {
  return (
    <>
      <Navbar />
      <SubNavbar />
      <LabTabs />
      <LabSearchBar />
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}>
        <VerticalNav selected={0} />
        <div style={{ flex: 1 }}>
          <LabCards />
        </div>
      </div>
    </>
  );
}

export default App;
