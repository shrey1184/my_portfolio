import { useState } from 'react';

const Navbar = () => {
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

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="brand-shrey">shrey</span>
        <span className="brand-shrivastava">&lt;shrivastava&gt;</span>
      </div>

      <div className="navbar-controls">
        {/* Minimize Button */}
        <button 
          className="control-btn" 
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
          className="control-btn" 
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
          className="control-btn" 
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
  );
};

export default Navbar;
