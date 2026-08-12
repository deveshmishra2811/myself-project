import React from 'react';
import { ArrowRight, Download, Linkedin } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section 
      id="hero" 
      className="dot-grid-bg"
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
      {/* Ambient gradient orbs */}
      <div style={{
        position: 'absolute',
        top: '-20%',
        right: '-10%',
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(183, 93, 62, 0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 0
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-15%',
        left: '-10%',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(141, 170, 157, 0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '48px', alignItems: 'center' }} className="hero-grid">
          
          {/* Left Column — Copy & Positioning */}
          <div>
            {/* Tag */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
              <span className="badge" style={{ backgroundColor: 'rgba(183, 93, 62, 0.12)', color: 'var(--accent-terracotta)', borderColor: 'rgba(183, 93, 62, 0.3)' }}>
                Materialising Impact
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
                <span>Download Resume</span>
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

          {/* Right Column — Profile Photo */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: '100%', maxWidth: '380px', position: 'relative' }}>
              
              {/* Photo Frame with gradient border and float animation */}
              <div className="hero-photo-frame" style={{ aspectRatio: '3 / 4' }}>
                <img 
                  src={personalInfo.photoUrl} 
                  alt="Devesh Mishra - Circular Materials & Sustainability Strategist"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              {/* Floating caption card */}
              <div 
                style={{
                  position: 'absolute',
                  bottom: '-16px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '12px',
                  padding: '10px 20px',
                  boxShadow: 'var(--shadow-md)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  whiteSpace: 'nowrap',
                  zIndex: 3
                }}
              >
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--accent-terracotta)' }} />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  VNIT Nagpur · Chemical Engineering
                </span>
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
