import React, { useState } from 'react';
import { ArrowRight, Download, Linkedin, Sparkles, UserCheck, Layers } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import WollastoniteCanvas from './WollastoniteCanvas';

export default function Hero({ isDarkMode }) {
  const [showPhoto, setShowPhoto] = useState(false);

  return (
    <section 
      id="hero" 
      className="section crystalline-bg"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '120px',
        paddingBottom: '60px',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <WollastoniteCanvas isDarkMode={isDarkMode} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '48px', alignItems: 'center' }} className="hero-grid">
          
          {/* Left Column — Copy & Positioning */}
          <div>
            {/* Tag / Metaphor badge */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
              <span className="badge" style={{ backgroundColor: 'rgba(183, 93, 62, 0.12)', color: 'var(--accent-terracotta)', borderColor: 'rgba(183, 93, 62, 0.3)' }}>
                <Sparkles size={13} style={{ marginRight: '6px' }} />
                Wollastonite — Materialising Impact
              </span>
            </div>

            {/* Name */}
            <h1 style={{ 
              fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
              fontWeight: 800, 
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              marginBottom: '16px',
              color: 'var(--text-primary)'
            }}>
              {personalInfo.name}
            </h1>

            {/* Subheading / Professional Title */}
            <h2 style={{
              fontSize: 'clamp(1.25rem, 2.5vw, 1.85rem)',
              fontWeight: 600,
              color: 'var(--accent-terracotta)',
              marginBottom: '20px',
              fontFamily: 'var(--font-heading)'
            }}>
              {personalInfo.tagline}
            </h2>

            {/* Value Proposition */}
            <p style={{
              fontSize: '1.15rem',
              lineHeight: 1.6,
              color: 'var(--text-secondary)',
              maxWidth: '640px',
              marginBottom: '28px'
            }}>
              {personalInfo.bio}
            </p>

            {/* Core Capability Pillars */}
            <div style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: '10px', 
              marginBottom: '40px' 
            }}>
              <span className="badge">Chemical Engineering at VNIT</span>
              <span className="badge">Circular Economy</span>
              <span className="badge">Lifecycle Assessment (LCA)</span>
              <span className="badge">Venture Building</span>
            </div>

            {/* CTAs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center' }}>
              <a href="#work" className="btn btn-primary">
                <span>View Selected Work</span>
                <ArrowRight size={18} />
              </a>

              <a href={personalInfo.resumeUrl} download className="btn btn-secondary">
                <Download size={18} />
                <span>Download Résumé</span>
              </a>

              <a 
                href={personalInfo.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-outline"
                aria-label="Connect on LinkedIn"
              >
                <Linkedin size={18} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Column — Wollastonite Mineral Avatar / Photo Visual */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div 
              style={{
                width: '100%',
                maxWidth: '420px',
                position: 'relative'
              }}
            >
              {/* Decorative Frame */}
              <div 
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '24px',
                  padding: '24px',
                  boxShadow: 'var(--shadow-lg)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Visual Header with Toggle */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#B75D3E' }} />
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                      {showPhoto ? 'PROFILE PHOTO' : 'ACICULAR MESH'}
                    </span>
                  </div>

                  <button
                    onClick={() => setShowPhoto(!showPhoto)}
                    style={{
                      background: 'var(--accent-sage-light)',
                      border: '1px solid var(--border-color)',
                      borderRadius: '6px',
                      padding: '4px 10px',
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--text-primary)',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}
                  >
                    {showPhoto ? <Layers size={13} /> : <UserCheck size={13} />}
                    <span>{showPhoto ? 'Show Crystalline Mesh' : 'Show Photo'}</span>
                  </button>
                </div>

                {/* Content Box */}
                <div 
                  style={{
                    height: '360px',
                    borderRadius: '16px',
                    backgroundColor: isDarkMode ? '#11302A' : '#E8E2D5',
                    border: '1px solid var(--border-color)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  {showPhoto ? (
                    <img 
                      src={personalInfo.photoUrl} 
                      alt="Devesh Mishra" 
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        borderRadius: '16px'
                      }}
                    />
                  ) : (
                    /* Abstract Wollastonite Crystalline Visual */
                    <div style={{ textAlign: 'center', padding: '24px' }}>
                      <svg width="140" height="140" viewBox="0 0 100 100" fill="none" style={{ margin: '0 auto 16px' }}>
                        <polygon points="50,10 90,40 75,90 25,90 10,40" stroke="var(--accent-sage)" strokeWidth="3" fill="none" />
                        <polygon points="50,25 75,45 65,75 35,75 25,45" stroke="var(--accent-terracotta)" strokeWidth="2" strokeDasharray="3,3" fill="none" />
                        <line x1="50" y1="10" x2="50" y2="90" stroke="var(--accent-terracotta)" strokeWidth="2" />
                        <line x1="10" y1="40" x2="90" y2="40" stroke="var(--accent-sage)" strokeWidth="2" />
                        <line x1="25" y1="90" x2="75" y2="45" stroke="var(--text-muted)" strokeWidth="1.5" />
                        <circle cx="50" cy="40" r="6" fill="var(--accent-terracotta)" />
                      </svg>
                      
                      <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '6px' }}>
                        Wollastonite Structure
                      </p>
                      <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                        Acicular · Reinforcing · Versatile
                      </p>
                    </div>
                  )}
                </div>

                {/* Footer caption */}
                <div style={{ marginTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                    CaSiO₃ · Calcium Silicate
                  </span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--accent-terracotta)' }}>
                    VNIT Nagpur
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .hero-grid {
            grid-template-columns: 1.2fr 0.8fr !important;
          }
        }
      `}</style>
    </section>
  );
}
