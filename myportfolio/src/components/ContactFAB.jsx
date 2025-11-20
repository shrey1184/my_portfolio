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
          transition-all duration-500 ease-in-out flex items-center justify-center gap-3
        "
        style={{ 
          paddingLeft: '2rem', 
          paddingRight: '2rem', 
          paddingTop: '0.75rem', 
          paddingBottom: '0.75rem', 
          borderRadius: '0.5rem',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          backgroundColor: open ? 'rgba(255, 255, 255, 0.95)' : 'rgba(0, 0, 0, 0.6)',
        }}
      >
        <span 
          className="text-sm font-medium transition-all duration-500 ease-in-out"
          style={{
            color: open ? 'black' : 'white',
            opacity: open ? 0 : 1,
            maxWidth: open ? '0' : '300px',
            marginRight: open ? '0' : '0.75rem',
          }}
        >
          let's-get-in-touch
        </span>
        <span 
          className="text-lg transition-all duration-500 ease-in-out"
          style={{
            color: open ? 'black' : 'white',
            opacity: open ? 0 : 1,
            maxWidth: open ? '0' : '50px',
          }}
        >
          →
        </span>
        
        {/* Icons container - shows horizontally on hover */}
        <div
          className="flex items-center gap-3 transition-all duration-500 ease-in-out"
          style={{ 
            overflow: 'hidden',
            opacity: open ? 1 : 0,
            maxWidth: open ? '300px' : '0',
            transform: open ? 'translateX(0)' : 'translateX(-20px)',
          }}
        >
          <a
            href="mailto:shreyshrivastava11@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-black/10 transition-all duration-300"
            style={{ 
              transitionDelay: open ? '100ms' : '0ms',
              transform: open ? 'scale(1) translateY(0)' : 'scale(0.5) translateY(10px)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <FiMail className="text-black text-lg" />
          </a>

          <a
            href="https://linkedin.com/in/shrey1184"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-black/10 transition-all duration-300"
            style={{ 
              transitionDelay: open ? '200ms' : '0ms',
              transform: open ? 'scale(1) translateY(0)' : 'scale(0.5) translateY(10px)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <FiLinkedin className="text-black text-lg" />
          </a>

          <a
            href="https://github.com/shrey1184"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-black/10 transition-all duration-300"
            style={{ 
              transitionDelay: open ? '300ms' : '0ms',
              transform: open ? 'scale(1) translateY(0)' : 'scale(0.5) translateY(10px)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <FiGithub className="text-black text-lg" />
          </a>

          <a
            href="https://instagram.com/shrey.draft"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-black/10 transition-all duration-300"
            style={{ 
              transitionDelay: open ? '400ms' : '0ms',
              transform: open ? 'scale(1) translateY(0)' : 'scale(0.5) translateY(10px)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <FiInstagram className="text-black text-lg" />
          </a>
        </div>
      </div>
    </div>
  );
}
