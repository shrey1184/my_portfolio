import { RetroGrid } from "./ui/retro-grid.jsx";
import { AnimatedSun } from "./ui/animated-sun.jsx";

export default function HomeSection() {
  return (
    <div
      id="home"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        textAlign: 'center',
        paddingTop: '70px',
        position: 'relative',
        overflow: 'hidden',
        padding: '42px 2px 2px 42px', // Top right bottom left - creates gaps for navbar, sidebar, bottombar
      }}
    >
      {/* ⭐ Background Sun for HOME only */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <AnimatedSun />
      </div>
      
      {/* ⭐ RetroGrid for HOME only */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
        <RetroGrid />
      </div>

      {/* Main container box - no fill, no blur, just border */}
      <div style={{
        position: 'absolute',
        top: '45px',
        left: '45px',
        right: '5px',
        bottom: '45px',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        borderRadius: '0.27rem',
        background: 'transparent',
        pointerEvents: 'none',
        zIndex: 1,
      }}></div>

      <div style={{
        position: 'absolute',
        top: '0px',
        left: '0px',
        right: '0px',
        bottom: '0px',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        borderBottomLeftRadius: '0.27rem',
        borderBottomRightRadius: '0.27rem',

        background: 'transparent',
        pointerEvents: 'none',
        zIndex: 1,
      }}></div>
    
      <div style={{
        border: '1px solid rgba(255, 255, 255, 0.2)',
        borderRadius: '1.5rem',
        padding: '3.5rem 5rem',
        background: 'rgba(17, 18, 17, 0.4)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        transform: 'scale(1)',
        position: 'relative',
        zIndex: 2,
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
  );
}
