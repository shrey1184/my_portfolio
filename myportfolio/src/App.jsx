import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import BottomBar from './components/Bottombar'
import ContactFAB from './components/ContactFAB'
import { RetroGrid } from "./components/ui/retro-grid.jsx";
import { AnimatedSun } from "./components/ui/animated-sun.jsx";
import './App.css'

function App() {
  return (
    <>
      {/* ⭐ Background Sun BELOW EVERYTHING */}
      <div className="fixed inset-0 -z-40">
        <AnimatedSun />
      </div>

      {/* ⭐ Your App content with RetroGrid ABOVE sun */}
      <div className="App" style={{ position: 'relative' }}>
        {/* New box with 100% width and height, white border, no fill */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: '0.5rem',
          background: 'transparent',
          pointerEvents: 'none',
          zIndex: 10,
        }}></div>
        
        <AnimatedSun />
        <RetroGrid />
        <Navbar />

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '80vh',
            textAlign: 'center',
            transform: 'translateY(70px)',
          }}
        >
          <div style={{
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '1.5rem',
            padding: '3.5rem 5rem',
            background: 'rgba(17, 18, 17, 0.4)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
            transform: 'scale(1)',
          }}>
            <span className="system-font" style={{ fontSize: '1.5rem', fontWeight: '200', marginBottom: '0rem', letterSpacing: '1px' }}>home</span>
            
            <h1 style={{ fontSize: '6.5rem', fontWeight: '600', margin: 0, lineHeight: 1, fontFamily: 'StarCrush, sans-serif' }}>
              Hi, I'm
              <span style={{ color: '#3b82f6' }}> Shrey</span>
              <br />
              <span style={{ fontSize: '6.5rem', fontWeight: '600', color: '#ffffff' }}>
                I Build Things
              </span>
            </h1>

            <span style={{ fontSize: '1.5rem', fontWeight: '200', marginBottom: '0rem', letterSpacing: '1px', lineHeight: '2', fontFamily: 'StarCrush, sans-serif' }}>
              I code, create, design, edit, render and what not...
            </span>
          </div>
        </div>

        <Sidebar />
        <ContactFAB />

        <BottomBar />

      </div>
    </>
  );
}

export default App;
