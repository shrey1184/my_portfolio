// AchievementsSection.jsx
export default function AchievementsSection() {
  return (
    <div
      id="achievements"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '42px 2px 2px 42px',
      }}
    >
      {/* Main container box */}
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
        position: 'relative',
        zIndex: 2,
        maxWidth: '1200px',
        width: '90%',
      }}>
        <span className="system-font" style={{ 
          fontSize: '1.5rem', 
          fontWeight: '200', 
          marginBottom: '1rem', 
          letterSpacing: '1px',
          display: 'block'
        }}>
          achievements
        </span>
        
        <h2 style={{ 
          fontSize: '4rem', 
          fontWeight: '600', 
          margin: '1rem 0 2rem 0', 
          lineHeight: 1, 
          fontFamily: 'StarCrush, sans-serif',
          color: '#3b82f6'
        }}>
          My Achievements
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          marginTop: '2rem',
          textAlign: 'left'
        }}>
          {/* Achievement Card 1 */}
          <div style={{
            padding: '1.5rem',
            background: 'rgba(59, 130, 246, 0.1)',
            border: '1px solid rgba(59, 130, 246, 0.3)',
            borderRadius: '0.75rem',
          }}>
            <h3 style={{ 
              color: '#3b82f6', 
              marginBottom: '0.5rem',
              fontFamily: 'StarCrush, sans-serif'
            }}>
              Achievement Title 1
            </h3>
            <p style={{ color: '#cccccc', fontSize: '0.9rem', lineHeight: '1.6' }}>
              Description of your achievement goes here.
            </p>
          </div>

          {/* Achievement Card 2 */}
          <div style={{
            padding: '1.5rem',
            background: 'rgba(59, 130, 246, 0.1)',
            border: '1px solid rgba(59, 130, 246, 0.3)',
            borderRadius: '0.75rem',
          }}>
            <h3 style={{ 
              color: '#3b82f6', 
              marginBottom: '0.5rem',
              fontFamily: 'StarCrush, sans-serif'
            }}>
              Achievement Title 2
            </h3>
            <p style={{ color: '#cccccc', fontSize: '0.9rem', lineHeight: '1.6' }}>
              Description of your achievement goes here.
            </p>
          </div>

          {/* Achievement Card 3 */}
          <div style={{
            padding: '1.5rem',
            background: 'rgba(59, 130, 246, 0.1)',
            border: '1px solid rgba(59, 130, 246, 0.3)',
            borderRadius: '0.75rem',
          }}>
            <h3 style={{ 
              color: '#3b82f6', 
              marginBottom: '0.5rem',
              fontFamily: 'StarCrush, sans-serif'
            }}>
              Achievement Title 3
            </h3>
            <p style={{ color: '#cccccc', fontSize: '0.9rem', lineHeight: '1.6' }}>
              Description of your achievement goes here.
            </p>
          </div>

          {/* Achievement Card 4 */}
          <div style={{
            padding: '1.5rem',
            background: 'rgba(59, 130, 246, 0.1)',
            border: '1px solid rgba(59, 130, 246, 0.3)',
            borderRadius: '0.75rem',
          }}>
            <h3 style={{ 
              color: '#3b82f6', 
              marginBottom: '0.5rem',
              fontFamily: 'StarCrush, sans-serif'
            }}>
              Achievement Title 4
            </h3>
            <p style={{ color: '#cccccc', fontSize: '0.9rem', lineHeight: '1.6' }}>
              Description of your achievement goes here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
