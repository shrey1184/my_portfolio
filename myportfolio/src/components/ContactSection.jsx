// ContactSection.jsx
export default function ContactSection() {
  return (
    <div id="contact" style={{
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
        maxWidth: '900px',
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
          contact
        </span>
        
        <h2 style={{ 
          fontSize: '4rem', 
          fontWeight: '600', 
          margin: '1rem 0', 
          fontFamily: 'StarCrush, sans-serif',
          color: '#3b82f6'
        }}>
          Get In Touch
        </h2>

        {/* Add your contact info here */}
        <div style={{ 
          fontSize: '1.25rem', 
          fontWeight: '300', 
          lineHeight: '1.8',
          fontFamily: 'StarCrush, sans-serif',
          color: '#ffffff'
        }}>
          Your contact information goes here...
        </div>
      </div>
    </div>
  );
}
