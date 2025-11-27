// ProjectsSection.jsx
export default function ProjectsSection() {
  return (
    <div id="projects" style={{
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '2rem',
      position: 'relative',
    }}>
      <div style={{
        border: '1px solid rgba(255, 255, 255, 0.2)',
        borderRadius: '1.5rem',
        padding: '3.5rem 5rem',
        background: 'rgba(17, 18, 17, 0.4)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        maxWidth: '1200px',
        width: '100%',
        position: 'relative',
        zIndex: 2,
      }}>
        <span className="system-font" style={{ 
          fontSize: '1.5rem', 
          fontWeight: '200', 
          letterSpacing: '1px',
          display: 'block',
          marginBottom: '1rem'
        }}>
          projects
        </span>
        
        <h2 style={{ 
          fontSize: '4rem', 
          fontWeight: '600', 
          margin: '1rem 0', 
          fontFamily: 'StarCrush, sans-serif',
          color: '#3b82f6'
        }}>
          My Projects
        </h2>

        {/* Add your projects here */}
        <div style={{ 
          fontSize: '1.25rem', 
          fontWeight: '300', 
          lineHeight: '1.8',
          fontFamily: 'StarCrush, sans-serif',
          color: '#ffffff'
        }}>
          Your projects content goes here...
        </div>
      </div>
    </div>
  );
}
