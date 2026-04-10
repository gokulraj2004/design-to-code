import React from 'react';
import './PhaseCard.css';

interface PhaseItem {
  label: string;
  badge: string;
}

interface PhaseCardProps {
  phase: string;
  title: string;
  description: string;
  items: PhaseItem[];
}

const PhaseIcon: React.FC<{ phase: string }> = ({ phase }) => {
  const num = phase.replace('PHASE ', '');
  const icons: Record<string, React.ReactNode> = {
    '1': (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="9" y1="13" x2="15" y2="13" />
        <line x1="9" y1="17" x2="15" y2="17" />
        <line x1="9" y1="9" x2="11" y2="9" />
      </svg>
    ),
    '2': (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="8" cy="10" r="2" />
      </svg>
    ),
    '3': (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    '4': (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="5 3 19 12 5 21 5 3" />
      </svg>
    ),
    '5': (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  };
  return <>{icons[num] || icons['1']}</>;
};

const PhaseCard: React.FC<PhaseCardProps> = ({ phase, title, description, items }) => {
  return (
    <article className="phase-card">
      <div className="phase-card-header">
        <div className="phase-card-icon-wrap">
          <PhaseIcon phase={phase} />
        </div>
        <div className="phase-card-title-group">
          <span className="phase-card-phase-label">{phase}</span>
          <h2 className="phase-card-title">{title}</h2>
        </div>
      </div>

      <p className="phase-card-description">{description}</p>

      <div className="phase-card-items">
        {items.map((item, idx) => (
          <div key={idx} className="phase-card-item">
            <span className="phase-card-item-label">{item.label}</span>
            <span className="phase-card-item-badge">{item.badge}</span>
          </div>
        ))}
      </div>
    </article>
  );
};

export default PhaseCard;