import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import './App.css'
import BottomBar from './components/Bottombar';
import { RetroGrid } from './components/ui/retro-grid';

function App() {
  return (
    <div className="App" style={{ position: 'relative' }}>
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
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div style={{
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: '1.5rem',
          padding: '3rem 4rem',
          background: 'rgba(17, 18, 17, 0.4)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        }}>
          <span style={{ fontSize: '1.35rem', fontWeight: '200', marginBottom: '0rem', letterSpacing: '1px' }}>home</span>
          <h1 style={{ fontSize: '5rem', fontWeight: '600', margin: 0, lineHeight: 1 }}>
            Hi, I'm 
            <span style={{ color: '#3b82f6' }}> Shrey</span>
            <br />
            <span style={{ fontSize: '5rem', fontWeight: '600', color: '#ffffff' }}>
              I Build Things
            </span>
          </h1>
          <span style={{ fontSize: '1.35rem', fontWeight: '200', marginBottom: '0rem', letterSpacing: '1px', lineHeight: '2' }}>I code, create, design, edit, render and what not...</span>
        </div>
      </div>        
      <Sidebar />
      <BottomBar />
    </div>
  );
}

export default App
