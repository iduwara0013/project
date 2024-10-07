import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar'; // Corrected path
import TopBar from './components/TopBar/TopBar'; // Corrected path
import DashboardPage from './pages/DashboardPage'; // Corrected path
import DoctorsPage from './pages/DoctorsPage'; // Corrected path
import PatientsPage from './pages/PatientsPage'; // Corrected path
import './App.css'; // Corrected path

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div className="app">
        <TopBar toggleSidebar={toggleSidebar} />
        <div className="content">
          <Sidebar isOpen={isSidebarOpen} />
          <main className={isSidebarOpen ? 'main-content' : 'main-content full-screen'}>
            <Routes>
              <Route path="/" element={<DashboardPage isSidebarOpen={isSidebarOpen} />} />
              <Route path="/doctors" element={<DoctorsPage />} />
              <Route path="/patients" element={<PatientsPage />} />
              {/* Add more routes as needed */}
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
