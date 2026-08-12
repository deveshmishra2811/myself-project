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
                borderRadius: '8px',
                background: 'linear-gradient(135deg, var(--accent-kiln), var(--accent-terracotta))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
                fontFamily: 'var(--font-heading)',
                fontWeight: 800,
                fontSize: '0.65rem'
              }}
            >
              DM
            </div>
            <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.95rem' }}>
              Devesh Mishra
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
