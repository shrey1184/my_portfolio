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
          background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.9) 0%, rgba(147, 51, 234, 0.9) 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          fontFamily: 'StarCrush, sans-serif',
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
          {/* Achievement Card 1 - TSATS 2025 */}
          <div style={{
            padding: '1.5rem',
            background: 'rgba(59, 130, 246, 0.1)',
            border: '1px solid rgba(59, 130, 246, 0.3)',
            borderRadius: '0.75rem',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
          }}
          onClick={() => window.open('https://www.linkedin.com/posts/shrey1184_tsats2025-defenceinnovation-technology-activity-7376574525007790080-16qj', '_blank')}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 10px 25px rgba(59, 130, 246, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}>
            <h3 style={{ 
              color: '#3b82f6', 
              marginBottom: '0.5rem',
              fontFamily: 'StarCrush, sans-serif',
              fontSize: '1.25rem'
            }}>
              TSATS 2025
            </h3>
            <p style={{ color: '#cccccc', fontSize: '0.9rem', lineHeight: '1.6' }}>
              Participated in TSATS 2025 - A prestigious defence innovation and technology event showcasing cutting-edge solutions and innovations in the defence sector.
            </p>
          </div>

          {/* Achievement Card 2 - NASA Space Apps Challenge */}
          <div style={{
            padding: '1.5rem',
            background: 'rgba(59, 130, 246, 0.1)',
            border: '1px solid rgba(59, 130, 246, 0.3)',
            borderRadius: '0.75rem',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
          }}
          onClick={() => window.open('https://www.linkedin.com/posts/shrey1184_spaceapps-spaceappsbhopal-innovation-activity-7381057874292142080-Tl7J', '_blank')}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 10px 25px rgba(59, 130, 246, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}>
            <h3 style={{ 
              color: '#3b82f6', 
              marginBottom: '0.5rem',
              fontFamily: 'StarCrush, sans-serif',
              fontSize: '1.25rem'
            }}>
              NASA Space Apps Challenge
            </h3>
            <p style={{ color: '#cccccc', fontSize: '0.9rem', lineHeight: '1.6' }}>
              Competed in NASA Space Apps Challenge Bhopal - A global hackathon where teams collaborate to solve challenges using NASA's open data. Showcased innovation in space exploration and technology.
            </p>
          </div>

          {/* Achievement Card 3 - Code Slayer 2K25 */}
          <div style={{
            padding: '1.5rem',
            background: 'rgba(59, 130, 246, 0.1)',
            border: '1px solid rgba(59, 130, 246, 0.3)',
            borderRadius: '0.75rem',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
          }}
          onClick={() => window.open('https://www.linkedin.com/posts/shrey1184_codeslayer2k25-nitdelhi-teamevangelions-activity-7392270535008714752-VxUz', '_blank')}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 10px 25px rgba(59, 130, 246, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}>
            <h3 style={{ 
              color: '#3b82f6', 
              marginBottom: '0.5rem',
              fontFamily: 'StarCrush, sans-serif',
              fontSize: '1.25rem'
            }}>
              Code Slayer 2K25 @ NIT Delhi
            </h3>
            <p style={{ color: '#cccccc', fontSize: '0.9rem', lineHeight: '1.6' }}>
              Team Evangelions at Code Slayer 2K25, NIT Delhi - Competed in an intense coding competition showcasing algorithmic problem-solving skills and technical expertise.
            </p>
          </div>

          {/* Achievement Card 4 - Smart India Hackathon 2025 Finalist */}
          <div style={{
            padding: '1.5rem',
            background: 'rgba(59, 130, 246, 0.1)',
            border: '1px solid rgba(59, 130, 246, 0.3)',
            borderRadius: '0.75rem',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
          }}
          onClick={() => window.open('https://www.linkedin.com/posts/shrey1184_sih2025-smartindiahackathon-finalist-activity-7403306786574815233-_5tO', '_blank')}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 10px 25px rgba(59, 130, 246, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}>
            <h3 style={{ 
              color: '#3b82f6', 
              marginBottom: '0.5rem',
              fontFamily: 'StarCrush, sans-serif',
              fontSize: '1.25rem'
            }}>
              SIH 2025 Finalist 🏆
            </h3>
            <p style={{ color: '#cccccc', fontSize: '0.9rem', lineHeight: '1.6' }}>
              Finalist at Smart India Hackathon 2025 - India's biggest hackathon initiative. Developed innovative solutions to real-world problems, competing with thousands of teams nationwide.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
