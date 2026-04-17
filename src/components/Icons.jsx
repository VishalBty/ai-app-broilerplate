export const HomeIcon = ({ filled }) => (
  <svg viewBox="0 0 24 24" fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2">
    <path d="M3 9.5L12 3l9 6.5V21a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" />
    <path d="M9 21V12h6v9" />
  </svg>
);

export const PredictionsIcon = ({ filled }) => (
  <svg viewBox="0 0 24 24" fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2">
    <rect x="3" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" />
    <rect x="14" y="14" width="7" height="7" rx="1" />
  </svg>
);

export const ActivityIcon = ({ filled }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </svg>
);

export const ProfileIcon = ({ filled }) => (
  <svg viewBox="0 0 24 24" fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="8" r="4" />
    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
  </svg>
);

export const BellIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22">
    <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 01-3.46 0" />
  </svg>
);

export const TrophyIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
    <path d="M8 21h8M12 17v4M7 4H4a1 1 0 00-1 1v3a4 4 0 004 4h1" />
    <path d="M17 4h3a1 1 0 011 1v3a4 4 0 01-4 4h-1" />
    <path d="M7 4h10v8a5 5 0 01-10 0V4z" />
  </svg>
);

export const EyeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

export const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="22" height="22">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export const ChevronRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

export const MenuIcon = ({ type }) => {
  const icons = {
    bell: <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" />,
    settings: <><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" /></>,
    person: <><circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" /></>,
    wallet: <><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 11v2M2 11h20M6 3l6 4 6-4" /></>,
    transfer: <><path d="M5 12h14M12 5l7 7-7 7" /></>,
    logout: <><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9" /></>,
    help: <><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3M12 17h.01" /></>,
  };
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
      {icons[type]}
    </svg>
  );
};
