import React from 'react';
import { aboutNarrative, personalInfo } from '../data/portfolioData';
import { Sparkles, Quote, MapPin, GraduationCap } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="section" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">06 / About</div>
          <h2 className="section-title">
            The Wollastonite Metaphor & Professional Mindset
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '40px', alignItems: 'center' }} className="about-grid">
          
          {/* Main Narrative Card */}
          <div 
            style={{
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              borderRadius: '20px',
              padding: '40px',
              boxShadow: 'var(--shadow-md)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <Quote size={28} color="var(--accent-terracotta)" />
              <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.15rem', color: 'var(--text-primary)' }}>
                {aboutNarrative.quote}
              </p>
            </div>

            <div style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {aboutNarrative.body.split('\n\n').map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Quick Context Card */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div className="card" style={{ padding: '28px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                <GraduationCap size={22} color="var(--accent-terracotta)" />
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700 }}>Education</h4>
              </div>
              <p style={{ fontWeight: 600, color: 'var(--text-primary)' }}>B.Tech in Chemical Engineering</p>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>VNIT Nagpur · Expected Graduation 2028</p>
            </div>

            <div className="card" style={{ padding: '28px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                <MapPin size={22} color="var(--accent-terracotta)" />
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700 }}>Location & Base</h4>
              </div>
              <p style={{ fontWeight: 600, color: 'var(--text-primary)' }}>Nagpur, Maharashtra, India</p>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Open for global sustainability & materials opportunities</p>
            </div>
          </div>

        </div>

      </div>

      <style>{`
        @media (min-width: 992px) {
          .about-grid {
            grid-template-columns: 1.4fr 0.6fr !important;
          }
        }
      `}</style>
    </section>
  );
}
