import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FiMail, FiUser, FiMessageSquare, FiSend } from 'react-icons/fi';

// ContactSection.jsx
export default function ContactSection() {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    // Replace these with your EmailJS credentials
    // Get them from: https://www.emailjs.com/
    const SERVICE_ID = 'service_6my24tr'; // e.g., 'service_abc123'
    const TEMPLATE_ID = 'template_uzvpma6'; // e.g., 'template_xyz789'
    const PUBLIC_KEY = 'CHaNSb5q9_rtEIm9b'; // e.g., 'your_public_key_here'

    try {
      const result = await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        PUBLIC_KEY
      );

      if (result.text === 'OK') {
        setStatus({
          type: 'success',
          message: '✓ Message sent successfully! I\'ll get back to you soon.'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus({
        type: 'error',
        message: '✗ Failed to send message. Please try again or email me directly.'
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setStatus({ type: '', message: '' }), 5000);
    }
  };

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
          contact
        </span>
        
        <h2 style={{ 
          fontSize: '4rem', 
          fontWeight: '600', 
          margin: '1rem 0 2rem 0', 
          fontFamily: 'StarCrush, sans-serif',
          background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.9) 0%, rgba(147, 51, 234, 0.9) 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'}}>
          Get In Touch
        </h2>

        {/* Contact Form */}
        <form ref={formRef} onSubmit={handleSubmit} style={{ marginTop: '2rem' }}>
          {/* Name Field */}
          <div style={{ marginBottom: '1.5rem' }}>
            <label 
              htmlFor="name" 
              className="system-font"
              style={{ 
                display: 'block', 
                marginBottom: '0.5rem',
                fontSize: '0.95rem',
                fontWeight: '300',
                color: 'rgba(255, 255, 255, 0.9)'
              }}
            >
              Your Name *
            </label>
            <div style={{ position: 'relative' }}>
              <FiUser style={{ 
                position: 'absolute', 
                left: '1rem', 
                top: '50%', 
                transform: 'translateY(-50%)',
                color: 'rgba(255, 255, 255, 0.5)'
              }} />
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
                style={{
                  width: '100%',
                  padding: '0.875rem 1rem 0.875rem 3rem',
                  background: 'rgba(0, 0, 0, 0.3)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '0.75rem',
                  color: '#ffffff',
                  fontSize: '1rem',
                  fontFamily: 'StarCrush, sans-serif',
                  outline: 'none',
                  transition: 'all 0.3s ease',
                }}
                onFocus={(e) => e.target.style.border = '1px solid #3b82f6'}
                onBlur={(e) => e.target.style.border = '1px solid rgba(255, 255, 255, 0.2)'}
              />
            </div>
          </div>

          {/* Email Field */}
          <div style={{ marginBottom: '1.5rem' }}>
            <label 
              htmlFor="email"
              className="system-font"
              style={{ 
                display: 'block', 
                marginBottom: '0.5rem',
                fontSize: '0.95rem',
                fontWeight: '300',
                color: 'rgba(255, 255, 255, 0.9)'
              }}
            >
              Your Email *
            </label>
            <div style={{ position: 'relative' }}>
              <FiMail style={{ 
                position: 'absolute', 
                left: '1rem', 
                top: '50%', 
                transform: 'translateY(-50%)',
                color: 'rgba(255, 255, 255, 0.5)'
              }} />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
                style={{
                  width: '100%',
                  padding: '0.875rem 1rem 0.875rem 3rem',
                  background: 'rgba(0, 0, 0, 0.3)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '0.75rem',
                  color: '#ffffff',
                  fontSize: '1rem',
                  fontFamily: 'StarCrush, sans-serif',
                  outline: 'none',
                  transition: 'all 0.3s ease',
                }}
                onFocus={(e) => e.target.style.border = '1px solid #3b82f6'}
                onBlur={(e) => e.target.style.border = '1px solid rgba(255, 255, 255, 0.2)'}
              />
            </div>
          </div>

          {/* Subject Field */}
          <div style={{ marginBottom: '1.5rem' }}>
            <label 
              htmlFor="subject"
              className="system-font"
              style={{ 
                display: 'block', 
                marginBottom: '0.5rem',
                fontSize: '0.95rem',
                fontWeight: '300',
                color: 'rgba(255, 255, 255, 0.9)'
              }}
            >
              Subject *
            </label>
            <div style={{ position: 'relative' }}>
              <FiMessageSquare style={{ 
                position: 'absolute', 
                left: '1rem', 
                top: '50%', 
                transform: 'translateY(-50%)',
                color: 'rgba(255, 255, 255, 0.5)'
              }} />
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="What's this about?"
                style={{
                  width: '100%',
                  padding: '0.875rem 1rem 0.875rem 3rem',
                  background: 'rgba(0, 0, 0, 0.3)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '0.75rem',
                  color: '#ffffff',
                  fontSize: '1rem',
                  fontFamily: 'StarCrush, sans-serif',
                  outline: 'none',
                  transition: 'all 0.3s ease',
                }}
                onFocus={(e) => e.target.style.border = '1px solid #3b82f6'}
                onBlur={(e) => e.target.style.border = '1px solid rgba(255, 255, 255, 0.2)'}
              />
            </div>
          </div>

          {/* Message Field */}
          <div style={{ marginBottom: '1.5rem' }}>
            <label 
              htmlFor="message"
              className="system-font"
              style={{ 
                display: 'block', 
                marginBottom: '0.5rem',
                fontSize: '0.95rem',
                fontWeight: '300',
                color: 'rgba(255, 255, 255, 0.9)'
              }}
            >
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              placeholder="Tell me about your project or inquiry..."
              style={{
                width: '100%',
                padding: '0.875rem 1rem',
                background: 'rgba(0, 0, 0, 0.3)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '0.75rem',
                color: '#ffffff',
                fontSize: '1rem',
                fontFamily: 'StarCrush, sans-serif',
                outline: 'none',
                resize: 'vertical',
                transition: 'all 0.3s ease',
              }}
              onFocus={(e) => e.target.style.border = '1px solid #3b82f6'}
              onBlur={(e) => e.target.style.border = '1px solid rgba(255, 255, 255, 0.2)'}
            />
          </div>

          {/* Status Message */}
          {status.message && (
            <div style={{
              padding: '1rem',
              borderRadius: '0.75rem',
              marginBottom: '1.5rem',
              background: status.type === 'success' 
                ? 'rgba(34, 197, 94, 0.2)' 
                : 'rgba(239, 68, 68, 0.2)',
              border: `1px solid ${status.type === 'success' ? '#22c55e' : '#ef4444'}`,
              color: status.type === 'success' ? '#86efac' : '#fca5a5',
              fontFamily: 'StarCrush, sans-serif',
              fontSize: '0.95rem'
            }}>
              {status.message}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            style={{
              width: '100%',
              padding: '1rem 1.5rem',
              background: isSubmitting 
                ? 'rgba(59, 130, 246, 0.5)' 
                : 'linear-gradient(to right, #3b82f6, #8b5cf6)',
              border: 'none',
              borderRadius: '0.75rem',
              color: '#ffffff',
              fontSize: '1.1rem',
              fontWeight: '600',
              fontFamily: 'StarCrush, sans-serif',
              cursor: isSubmitting ? 'not-allowed' : 'pointer',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              opacity: isSubmitting ? 0.7 : 1,
            }}
            onMouseEnter={(e) => {
              if (!isSubmitting) {
                e.target.style.transform = 'scale(1.02)';
                e.target.style.boxShadow = '0 0 20px rgba(59, 130, 246, 0.5)';
              }
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1)';
              e.target.style.boxShadow = 'none';
            }}
          >
            {isSubmitting ? (
              <>
                <div style={{
                  width: '1.25rem',
                  height: '1.25rem',
                  border: '2px solid #ffffff',
                  borderTopColor: 'transparent',
                  borderRadius: '50%',
                  animation: 'spin 1s linear infinite',
                }} />
                Sending...
              </>
            ) : (
              <>
                <FiSend />
                Send Message
              </>
            )}
          </button>
        </form>

        {/* Additional Contact Info */}
        <div style={{ 
          marginTop: '2rem', 
          paddingTop: '2rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          textAlign: 'center',
          fontFamily: 'StarCrush, sans-serif',
          fontSize: '0.9rem',
          color: 'rgba(255, 255, 255, 0.6)'
        }}>
          Prefer email directly? Reach out at{' '}
          <a
            href="mailto:your-email@example.com"
            style={{
              color: '#3b82f6',
              textDecoration: 'none',
              transition: 'color 0.3s ease'
            }}
            onMouseEnter={(e) => e.target.style.color = '#60a5fa'}
            onMouseLeave={(e) => e.target.style.color = '#3b82f6'}
          >
            your-email@example.com
          </a>
        </div>
      </div>

      {/* CSS for spinner animation */}
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
