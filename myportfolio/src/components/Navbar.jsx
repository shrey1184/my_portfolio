import { useState } from 'react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMinimize = () => {
    // Minimize window (this would typically be handled by Electron or similar desktop framework)
    if (window.electronAPI) {
      window.electronAPI.minimize();
    } else {
      console.log('Minimize clicked');
    }
  };

  const handleFullscreen = () => {
    // Toggle fullscreen
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  const handleClose = () => {
    // Close window (this would typically be handled by Electron or similar desktop framework)
    if (window.electronAPI) {
      window.electronAPI.close();
    } else {
      window.close();
    }
  };

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-brand">
          <span className="brand-shrey">shrey</span>
          <span className="brand-shrivastava">&lt;shrivastava&gt;</span>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="control-btn mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menu"
          style={{ display: 'none' }}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            {mobileMenuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>

        <div className="navbar-controls">
          {/* Minimize Button */}
          <button 
            className="control-btn desktop-only" 
            onClick={handleMinimize}
            aria-label="Minimize"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </button>

          {/* Fullscreen Button */}
          <button 
            className="control-btn desktop-only" 
            onClick={handleFullscreen}
            aria-label="Fullscreen"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
            </svg>
          </button>

          {/* Close Button */}
          <button 
            className="control-btn desktop-only" 
            onClick={handleClose}
            aria-label="Close"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div 
          className="mobile-nav-menu"
          style={{
            position: 'fixed',
            top: '50px',
            left: 0,
            right: 0,
            background: 'rgba(17, 18, 17, 0.95)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderTop: 'none',
            zIndex: 999,
            padding: '1rem',
            display: 'none',
          }}
        >
          <a href="#home" onClick={(e) => scrollToSection(e, 'home')} style={mobileMenuLinkStyle}>Home</a>
          <a href="#about" onClick={(e) => scrollToSection(e, 'about')} style={mobileMenuLinkStyle}>About</a>
          <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')} style={mobileMenuLinkStyle}>Projects</a>
          <a href="#achievements" onClick={(e) => scrollToSection(e, 'achievements')} style={mobileMenuLinkStyle}>Achievements</a>
          <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} style={mobileMenuLinkStyle}>Contact</a>
        </div>
      )}

      <style>{`
        @media (max-width: 1024px) {
          .mobile-menu-btn {
            display: flex !important;
          }
          .desktop-only {
            display: none !important;
          }
          .mobile-nav-menu {
            display: flex !important;
            flex-direction: column;
            gap: 0.5rem;
          }
        }
      `}</style>
    </>
  );
};

const mobileMenuLinkStyle = {
  color: '#9ca3af',
  textDecoration: 'none',
  padding: '0.75rem',
  fontSize: '1rem',
  transition: 'color 0.3s ease',
  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
};

export default Navbar;
