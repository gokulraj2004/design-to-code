import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';
import PhaseCard from '../PhaseCard/PhaseCard';
import Footer from '../Footer/Footer';
import './Dashboard.css';

const Dashboard: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);
  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <div className={`dashboard-root${darkMode ? ' dark' : ''}`}>
      <Sidebar isOpen={sidebarOpen} />
      <div className={`dashboard-main${sidebarOpen ? ' sidebar-open' : ' sidebar-closed'}`}>
        <Header
          onToggleSidebar={toggleSidebar}
          onToggleDarkMode={toggleDarkMode}
          darkMode={darkMode}
          userName="John Doe"
          userInitials="JD"
        />
        <main className="dashboard-content">
          <div className="dashboard-page-header">
            <div className="dashboard-page-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </div>
            <div className="dashboard-page-info">
              <h1 className="dashboard-page-title">Project Home Page</h1>
              <p className="dashboard-page-subtitle">
                Navigate through the four testing phases below to manage your complete Software Testing Life Cycle.
              </p>
            </div>
          </div>

          <div className="dashboard-cards-grid">
            <PhaseCard
              phase="PHASE 1"
              title="Planning"
              description="Research insights, generate documentation, build work backlogs, and define comprehensive test strategies."
              items={[
                { label: 'Research & Insights', badge: 'AI-Powered' },
                { label: 'Tech Document Generator', badge: 'Coming Soon' },
                { label: 'Work Backlog Generator', badge: 'Available' },
                { label: 'Test Strategy', badge: 'v2.0' },
              ]}
            />
            <PhaseCard
              phase="PHASE 2"
              title="Design"
              description="Transform concepts into designs, generate test cases and plans, create automation frameworks and scripts."
              items={[
                { label: 'Concept‑to‑Design Engine', badge: 'Figma MCP' },
                { label: 'Rapid Prototyping', badge: 'Interactive' },
                { label: 'Test Case Generation', badge: '4 Cases' },
                { label: 'Test Plan Generation', badge: '3 Plans' },
                { label: 'Framework Generation', badge: '3 Frameworks' },
                { label: 'Script Generation', badge: '0 Scripts' },
              ]}
            />
            <PhaseCard
              phase="PHASE 3"
              title="Engineering"
              description="Generate framework scaffolds, convert designs to code, and rapidly build interactive prototypes."
              items={[
                { label: 'Framework Scaffold Generator', badge: 'Coming Soon' },
                { label: 'Design‑to‑Code Engine', badge: 'Figma→Code' },
              ]}
            />
            <PhaseCard
              phase="PHASE 4"
              title="Execution"
              description="Execute functional and non-functional tests, monitor test suites, and track real-time progress."
              items={[
                { label: 'Functional Test Execution', badge: '96.5% Pass' },
                { label: 'Quality Test Execution', badge: '89.8% Pass' },
                { label: 'Test Suite Execution', badge: 'Coming Soon' },
              ]}
            />
            <PhaseCard
              phase="PHASE 5"
              title="Reporting"
              description="Analyze test results, generate insights, track trends, and create comprehensive reports for stakeholders."
              items={[
                { label: 'Functional Test Reports', badge: 'Analytics' },
                { label: 'Quality Test Reports', badge: 'Metrics' },
              ]}
            />
          </div>
        </main>
        <Footer />
      </div>

      {/* Floating AI Button */}
      <button className="floating-ai-btn" aria-label="AI Assistant">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v4l3 3" />
        </svg>
        <span className="floating-ai-badge" />
      </button>
    </div>
  );
};

export default Dashboard;