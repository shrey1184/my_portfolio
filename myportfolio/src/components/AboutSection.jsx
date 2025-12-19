// AboutSection.jsx
import { PixelatedCanvas } from './ui/pixelated-canvas';
import { PixelatedCanvasDemo } from './PixelatedCanvasDemo';
import imageRemoveBgPreview from '../assets/image-removebg-preview.png';
import { ScrollBasedVelocityDemo } from './ui/scrollani';
import { AsciiScene } from './ascii-scene';

// Import video - using alpha transparent video
const videoPath = '/output_alpha.webm';

export default function AboutSection() {
  return (
    <>
      <style>{`
        a:hover .linkedin-tooltip {
          opacity: 1 !important;
        }
      `}</style>
      <section id="about" style={{ width: '100%', position: 'relative', background: 'transparent', padding: 0 }}>
      {/* Scroll Animation - full width, top of About */}
      <div style={{ width: '100%', position: 'relative', zIndex: 10 }}>
        <ScrollBasedVelocityDemo />
      </div>
      {/* Main About Content - flex layout */}
      <div style={{
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem',
        position: 'relative',
      }}>
        {/* Overlapping Pixelated Canvas */}
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '2rem',
          position: 'relative',
          gap: '2rem',
          width: '100%',
        }}>
          {/* ASCII Scene Box - LEFT SIDE */}
          <div style={{
            position: 'absolute',
            top: '-2%',
            left: '-9%',
            width: '800px',
            height: '800px',
            zIndex: 2,
            background: 'transparent',
            mixBlendMode: 'screen',
          }}>
            <AsciiScene videoSrc={videoPath} />
          </div>

          {/* Pixelated Canvas Box */}
          <a 
            href="https://www.linkedin.com/in/shrey1184/" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '0.75rem',
              padding: '0.75rem',
              background: 'rgba(17, 18, 17, 0.4)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
              position: 'absolute',
              top: '0%',
              right: '20%',
              zIndex: 2,
              cursor: 'pointer',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 8px 32px 0 rgba(0, 0, 0, 0.37)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 8px 32px 0 rgba(0, 0, 0, 0.37)';
            }}
            title="Connect with me on LinkedIn"
          >
            <PixelatedCanvas
              src="/IMG-20251210-WA0006 (5).jpg"
              width={225}
              height={300}
              cellSize={4}
              dotScale={0.9}
              shape="square"
              backgroundColor="#000000"
              interactive={true}
              distortionMode="swirl"
              distortionStrength={3}
              distortionRadius={80}
              tintColor="#3b82f6"
              tintStrength={0.1}
            />
            <div style={{
              position: 'absolute',
              bottom: '-40px',
              left: '50%',
              transform: 'translateY(-50%)',
              border: '1px solid white',
              background: 'rgba(0, 0, 0, 0.6)',
              color: 'white',
              padding: '0.5rem 1rem',
              borderRadius: '0.5rem',
              fontSize: '0.875rem',
              fontFamily: 'StarCrush, sans-serif',
              whiteSpace: 'nowrap',
              opacity: 0,
              pointerEvents: 'none',
              transition: 'opacity 0.3s ease',
            }}
            className="linkedin-tooltip"
            >
             Find me on LinkedIn
            </div>
          </a>

          {/* About Content Box */}
          <div style={{
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '1.5rem',
            padding: '3.5rem 5rem',
            background: 'rgba(17, 18, 17, 0.4)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
            maxWidth: '900px',
            position: 'absolute',
            top: '15%',
            zIndex: 1,
          }}>
          <h2 style={{ 
            fontSize: '4rem', 
            fontWeight: '600', 
            margin: '1rem 0', 
            fontFamily: 'StarCrush, sans-serif',
            color: '#3b82f6'
          }}>
            About Me
          </h2>

          {/* Add your content here */}
          <p style={{ 
            fontSize: '1.25rem', 
            fontWeight: '300', 
            lineHeight: '1.8',
            fontFamily: 'StarCrush, sans-serif',
            color: '#ffffff'
          }}>
            <span style={{ color: '#9ca3af' }}>1.</span> Nice to meet you! I'm <span style={{ color: 'green' }}>Shrey.</span><br />
            <span style={{ color: '#9ca3af' }}>2.</span> I'm passionate about <span style={{ color: 'red' }}>Machine learning.</span>and <span style={{ color: 'yellow' }}>Artificial intelligence.</span>, with a particular focus on deep learning and natural language processing. I love exploring new technologies and applying them to solve real-world problems.<br />
            <span style={{ color: '#9ca3af' }}>3.</span> Coding for me is not just my work, i like experimenting with many technologies and i also maintain some personal projects that showcase my skills and creativity.<br />
            <span style={{ color: '#9ca3af' }}>4.</span> I like solving complex real world problems and participating in hackathons and coding competitions to challenge myself and improve my skills.
          </p>
        </div>
      </div>
        </div>
      </section>
    </>
  );
}