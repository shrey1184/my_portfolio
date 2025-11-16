import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import './App.css'
import BottomBar from './components/Bottombar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '80vh',
          textAlign: 'center',
        }}
      >
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
      <Sidebar />
      <BottomBar />
    </div>
  );
}

export default App
