import React, { useState } from 'react';
import './Sidebar.css';

interface NavItem {
  label: string;
  icon: React.ReactNode;
  badge?: string;
  badgeVariant?: 'mvp' | 'soon';
  children?: NavItem[];
}

interface SidebarProps {
  isOpen: boolean;
}

const HomeIcon: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2.5 7.5L10 1.667 17.5 7.5V17.5a1.667 1.667 0 0 1-1.667 1.667H4.167A1.667 1.667 0 0 1 2.5 17.5V7.5z" />
    <polyline points="7.5 19.167 7.5 10 12.5 10 12.5 19.167" />
  </svg>
);

const ClipboardIcon: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round">
    <path d="M13.333 2.5H15a1.667 1.667 0 0 1 1.667 1.667v13.333A1.667 1.667 0 0 1 15 19.167H5A1.667 1.667 0 0 1 3.333 17.5V4.167A1.667 1.667 0 0 1 5 2.5h1.667" />
    <rect x="6.667" y="0.833" width="6.667" height="3.333" rx="1.667" />
  </svg>
);

const PaletteIcon: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="10" cy="10" r="8.333" />
    <circle cx="6.667" cy="8.333" r="1.667" />
    <circle cx="13.333" cy="8.333" r="1.667" />
    <circle cx="10" cy="13.333" r="1.667" />
  </svg>
);

const CodeIcon: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="5.833 7.5 1.667 10 5.833 12.5" />
    <polyline points="14.167 7.5 18.333 10 14.167 12.5" />
    <line x1="11.667" y1="3.333" x2="8.333" y2="16.667" />
  </svg>
);

const PlayIcon: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="4.167 3.333 15.833 10 4.167 16.667 4.167 3.333" />
  </svg>
);

const BarChartIcon: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18.333" y1="18.333" x2="1.667" y2="18.333" />
    <rect x="3.333" y="10" width="3.333" height="8.333" />
    <rect x="8.333" y="5" width="3.333" height="13.333" />
    <rect x="13.333" y="1.667" width="3.333" height="16.667" />
  </svg>
);

const SettingsIcon: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="10" cy="10" r="3.333" />
    <path d="M16.667 10a6.667 6.667 0 0 1-.083 1.05l2.25 1.75-2 3.467-2.65-.883a6.667 6.667 0 0 1-1.817 1.05l-.417 2.733h-4l-.417-2.733a6.667 6.667 0 0 1-1.817-1.05l-2.65.883-2-3.467 2.25-1.75A6.667 6.667 0 0 1 3.333 10a6.667 6.667 0 0 1 .083-1.05L1.167 7.2l2-3.467 2.65.883A6.667 6.667 0 0 1 7.633 3.567L8.05.833h4l.417 2.733a6.667 6.667 0 0 1 1.817 1.05l2.65-.883 2 3.467-2.25 1.75A6.667 6.667 0 0 1 16.667 10z" />
  </svg>
);

const FolderIcon: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18.333 15a1.667 1.667 0 0 1-1.667 1.667H3.333A1.667 1.667 0 0 1 1.667 15V5A1.667 1.667 0 0 1 3.333 3.333h5l1.667 2.5h6.667A1.667 1.667 0 0 1 18.333 6.667V15z" />
  </svg>
);

const ChevronDownIcon: React.FC<{ rotated?: boolean }> = ({ rotated }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.33"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ transform: rotated ? 'rotate(180deg)' : 'rotate(0deg)', transition: '0.2s' }}
  >
    <polyline points="4 6 8 10 12 6" />
  </svg>
);

const navSections: { title?: string; items: NavItem[] }[] = [
  {
    items: [
      { label: 'Go to Home', icon: <HomeIcon /> },
      { label: 'Project HomePage', icon: <HomeIcon /> },
    ],
  },
  {
    items: [
      {
        label: 'Planning Phase',
        icon: <ClipboardIcon />,
        children: [
          { label: 'Research & Insights', icon: <span className="nav-dot" />, badge: 'MVP', badgeVariant: 'mvp' },
          { label: 'Technical Document Generator', icon: <span className="nav-dot" />, badge: 'MVP', badgeVariant: 'mvp' },
          { label: 'Work Backlog Generator', icon: <span className="nav-dot" /> },
          { label: 'Test Strategy', icon: <span className="nav-dot" /> },
        ],
      },
      {
        label: 'Design Phase',
        icon: <PaletteIcon />,
        children: [
          { label: 'Concept‑to‑Design Engine', icon: <span className="nav-dot" />, badge: 'MVP', badgeVariant: 'mvp' },
          { label: 'Rapid Prototyping', icon: <span className="nav-dot" />, badge: 'Soon', badgeVariant: 'soon' },
          { label: 'Test Case Generation', icon: <span className="nav-dot" /> },
          { label: 'Test Plan Generation', icon: <span className="nav-dot" /> },
          { label: 'Automation Framework Generation', icon: <span className="nav-dot" /> },
          { label: 'Script Generation', icon: <span className="nav-dot" /> },
        ],
      },
      {
        label: 'Engineering Phase',
        icon: <CodeIcon />,
        children: [
          { label: 'Framework Scaffold Generator', icon: <span className="nav-dot" />, badge: 'MVP', badgeVariant: 'mvp' },
          { label: 'Design‑to‑Code Engine', icon: <span className="nav-dot" />, badge: 'MVP', badgeVariant: 'mvp' },
        ],
      },
      {
        label: 'Execution Phase',
        icon: <PlayIcon />,
        children: [
          { label: 'Functional Test', icon: <span className="nav-dot" />, badge: 'Soon', badgeVariant: 'soon' },
          { label: 'Non-Functional Test', icon: <span className="nav-dot" /> },
          { label: 'Test Suite Execution', icon: <span className="nav-dot" />, badge: 'Soon', badgeVariant: 'soon' },
        ],
      },
      {
        label: 'Reporting Phase',
        icon: <BarChartIcon />,
        children: [
          { label: 'Functional Test', icon: <span className="nav-dot" />, badge: 'Soon', badgeVariant: 'soon' },
          { label: 'Non-Functional Test', icon: <span className="nav-dot" />, badge: 'Soon', badgeVariant: 'soon' },
        ],
      },
    ],
  },
  {
    items: [
      { label: 'Global Configurator', icon: <SettingsIcon />, badge: 'Soon', badgeVariant: 'soon' },
      { label: 'Environment Configurator', icon: <SettingsIcon />, badge: 'Soon', badgeVariant: 'soon' },
      { label: 'Project Assets', icon: <FolderIcon />, badge: 'Soon', badgeVariant: 'soon' },
      { label: 'Settings', icon: <SettingsIcon />, badge: 'Soon', badgeVariant: 'soon' },
    ],
  },
];

interface NavItemComponentProps {
  item: NavItem;
  depth?: number;
  activeItem: string;
  onSelect: (label: string) => void;
}

const NavItemComponent: React.FC<NavItemComponentProps> = ({ item, depth = 0, activeItem, onSelect }) => {
  const [expanded, setExpanded] = useState(false);
  const hasChildren = item.children && item.children.length > 0;
  const isActive = activeItem === item.label;

  const handleClick = () => {
    if (hasChildren) {
      setExpanded((prev) => !prev);
    } else {
      onSelect(item.label);
    }
  };

  return (
    <div className="nav-item-wrapper">
      <button
        className={`nav-item${isActive ? ' nav-item--active' : ''}${depth > 0 ? ' nav-item--child' : ''}`}
        onClick={handleClick}
        style={{ paddingLeft: depth > 0 ? `${16 + depth * 16}px` : '16px' }}
        aria-expanded={hasChildren ? expanded : undefined}
      >
        <span className="nav-item-icon">{item.icon}</span>
        <span className="nav-item-label">{item.label}</span>
        {item.badge && (
          <span className={`nav-badge nav-badge--${item.badgeVariant || 'default'}`}>
            {item.badge}
          </span>
        )}
        {hasChildren && (
          <span className="nav-item-chevron">
            <ChevronDownIcon rotated={expanded} />
          </span>
        )}
      </button>
      {hasChildren && expanded && (
        <div className="nav-children">
          {item.children!.map((child) => (
            <NavItemComponent
              key={child.label}
              item={child}
              depth={depth + 1}
              activeItem={activeItem}
              onSelect={onSelect}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  const [activeItem, setActiveItem] = useState('Project HomePage');

  return (
    <aside className={`sidebar${isOpen ? ' sidebar--open' : ' sidebar--closed'}`} aria-label="Sidebar navigation">
      <nav className="sidebar-nav">
        {navSections.map((section, sIdx) => (
          <div key={sIdx} className="sidebar-section">
            {section.items.map((item) => (
              <NavItemComponent
                key={item.label}
                item={item}
                activeItem={activeItem}
                onSelect={setActiveItem}
              />
            ))}
          </div>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div className="sidebar-ai-badge">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="4 8 7 5 10 8 13 5" />
          </svg>
          <span>AI Enhanced Platform</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;