// AboutSection.jsx
import { AsciiScene } from '../ascii-scene';

export default function AboutSection() {
  return (
    <section id="about" style={{ minHeight: '100vh', padding: '2rem' }}>
      <h2>About Me</h2>
      <div style={{ 
        display: 'flex', 
        gap: '2rem', 
        alignItems: 'center',
        flexWrap: 'wrap'
      }}>
        {/* ASCII Scene on the left */}
        <div style={{ 
          flex: '1', 
          minWidth: '300px',
          height: '500px',
          borderRadius: '8px',
          overflow: 'hidden'
        }}>
          <AsciiScene />
        </div>

        {/* Content on the right */}
        <div style={{ flex: '1', minWidth: '300px' }}>
          <p>
            This is the about section content. Add your bio, skills, and information here.
          </p>
          {/* Add more content as needed */}
        </div>
      </div>
    </section>
  );
}