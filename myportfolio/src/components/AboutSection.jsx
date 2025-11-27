// AboutSection.jsx
import { PixelatedCanvas } from './ui/pixelated-canvas';
import { PixelatedCanvasDemo } from './PixelatedCanvasDemo';
import imageRemoveBgPreview from '../assets/image-removebg-preview.png';

export default function AboutSection() {
  return (
    <div id="about" style={{
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '2rem',
      position: 'relative',
      gap: '2rem',
    }}>
      {/* Pixelated Canvas Box */}
      <div style={{
        border: '1px solid rgba(255, 255, 255, 0.2)',
        borderRadius: '1.5rem',
        padding: '1rem',
        background: 'rgba(17, 18, 17, 0.4)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        position: 'relative',
        zIndex: 2,
      }}>
        <PixelatedCanvas
          src={imageRemoveBgPreview}
          width={300}
          height={400}
          cellSize={4}
          dotScale={0.9}
          shape="square"
          backgroundColor="#000000"
          interactive={true}
          distortionMode="swirl"
          distortionStrength={3}
          distortionRadius={80}
          tintColor="#3b82f6"
          tintStrength={0.3}
        />
      </div>

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
        </span>
        
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
  );
}
