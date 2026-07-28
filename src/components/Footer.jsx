import React from 'react';
import { ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      style={{
        backgroundColor: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border-color)',
        padding: '40px 0',
        position: 'relative',
        zIndex: 10
      }}
    >
      <div className="container">
        <div 
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
          className="footer-content"
        >
          {/* Logo & Theme Info */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div 
              style={{
                width: '28px',
                height: '28px',
                borderRadius: '6px',
                backgroundColor: 'var(--accent-kiln)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF'
              }}
            >
              <svg width="16" height="16" viewBox="0 0 100 100" fill="none">
                <polygon points="50,15 80,45 65,85 35,85 20,45" stroke="#8DAA9D" strokeWidth="6" fill="none"/>
                <line x1="50" y1="15" x2="50" y2="85" stroke="#B75D3E" strokeWidth="5"/>
              </svg>
            </div>
            <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.95rem' }}>
              Devesh Mishra — Wollastonite Theme Portfolio
            </span>
          </div>

          {/* Copyright & Academic tag */}
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-muted)', textAlign: 'center' }}>
            © {new Date().getFullYear()} Devesh Mishra · Chemical Engineering, VNIT Nagpur
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            aria-label="Back to Top"
            style={{
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              color: 'var(--text-primary)',
              padding: '8px 16px',
              borderRadius: '20px',
              fontSize: '0.8rem',
              fontFamily: 'var(--font-mono)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'all 0.2s ease'
            }}
          >
            <span>Back to Top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .footer-content {
            flex-direction: row !important;
          }
        }
      `}</style>
    </footer>
  );
}
