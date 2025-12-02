import { useState } from "react";
import { FiMail, FiGithub, FiLinkedin, FiInstagram, FiPlus } from "react-icons/fi";

export default function ContactFAB() {
  const [open, setOpen] = useState(false);

  return (
    <div 
      className="fixed bottom-6 right-6" 
      style={{ zIndex: 1100, transform: 'translateY(21px)' }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Floating button with expandable content */}
      <div
        className="
          border border-white/10
          shadow-2xl backdrop-blur-xl
          transition-all duration-500 ease-in-out flex items-center justify-center
        "
        style={{ 
          paddingLeft: open ? '2rem' : '2rem', 
          paddingRight: '2rem', 
          paddingTop: '0.75rem', 
          paddingBottom: '0.75rem', 
          borderRadius: '0.5rem',
          boxShadow: '0 8px 32px 0 rgba(59, 130, 246, 0.2)',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          backgroundColor: open ? 'rgba(246, 65, 108, 0.9)' : 'rgba(0, 0, 0, 0.6)',
          gap: open ? '0.75rem' : '0.5rem',
        }}
      >
        <span 
          className="text-sm font-medium transition-all duration-500 ease-in-out"
          style={{
            color: open ? 'white' : 'white',
            opacity: open ? 0 : 1,
            maxWidth: open ? '0' : '300px',
            overflow: 'hidden',
          }}
        >
          let's-get-in-touch
        </span>
        <span 
          className="text-lg transition-all duration-500 ease-in-out"
          style={{
            color: open ? 'white' : 'white',
            opacity: open ? 0 : 1,
            maxWidth: open ? '0' : '50px',
          }}
        >
          →
        </span>
        
        {/* Icons container - shows horizontally on hover */}
        <div
          className="flex items-center transition-all duration-500 ease-in-out"
          style={{ 
            overflow: 'hidden',
            opacity: open ? 1 : 0,
            maxWidth: open ? '300px' : '0',
            transform: open ? 'translateX(0)' : 'translateX(-20px)',
            gap: '0.75rem',
          }}
        >
          <a
            href="mailto:shreyshrivastava11@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-white/20 transition-all duration-300"
            style={{ 
              transitionDelay: open ? '100ms' : '0ms',
              transform: open ? 'scale(1) translateY(0)' : 'scale(0.5) translateY(10px)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <FiMail className="text-white text-lg" />
          </a>

          <a
            href="https://linkedin.com/in/shrey1184"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-white/20 transition-all duration-300"
            style={{ 
              transitionDelay: open ? '200ms' : '0ms',
              transform: open ? 'scale(1) translateY(0)' : 'scale(0.5) translateY(10px)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <FiLinkedin className="text-white text-lg" />
          </a>

          <a
            href="https://github.com/shrey1184"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-white/20 transition-all duration-300"
            style={{ 
              transitionDelay: open ? '300ms' : '0ms',
              transform: open ? 'scale(1) translateY(0)' : 'scale(0.5) translateY(10px)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <FiGithub className="text-white text-lg" />
          </a>

          <a
            href="https://instagram.com/shrey.draft"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-white/20 transition-all duration-300"
            style={{ 
              transitionDelay: open ? '400ms' : '0ms',
              transform: open ? 'scale(1) translateY(0)' : 'scale(0.5) translateY(10px)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <FiInstagram className="text-white text-lg" />
          </a>
        </div>
      </div>
    </div>
  );
}
