// src/components/BottomBar.jsx

export default function BottomBar() {
  return (
    <div className="bottom-bar" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      {/* Search button on the left */}
      <button className="search-btn" style={{ background: 'none', border: 'none', color: '#fff', opacity: 0.7, cursor: 'pointer', padding: '0.5rem', display: 'flex', alignItems: 'center' }} aria-label="Search">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </button>
  {/* Center line removed as requested */}
      {/* Empty right side for spacing */}
      <div style={{ width: '32px' }}></div>
    </div>
  );
}
