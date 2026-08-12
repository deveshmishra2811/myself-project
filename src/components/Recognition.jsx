import React from 'react';
import { awards } from '../data/portfolioData';
import { ExternalLink, Medal } from 'lucide-react';
import InstitutionLogo from './InstitutionLogo';
import useScrollReveal from '../hooks/useScrollReveal';

export default function Recognition() {
  const sectionRef = useScrollReveal();

  return (
    <section id="recognition" className="section" ref={sectionRef}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header reveal">
          <div className="section-tag">05 / Recognition</div>
          <h2 className="section-title">
            Honors, Awards & Achievements
          </h2>
          <p style={{ maxWidth: '640px', marginTop: '12px', fontSize: '1.05rem' }}>
            Validated business strategy, sustainability pitch, and national inter-university competitions.
          </p>
        </div>

        {/* Awards Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px'
          }}
        >
          {awards.map((award, idx) => (
            <div 
              key={idx} 
              className="card-3d reveal"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transitionDelay: `${idx * 0.08}s`
              }}
            >
              <div>
                {/* Institution Logo & Metric Badge */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    {(award.logoDomain || award.customLogoUrl) ? (
                      <InstitutionLogo domain={award.logoDomain} name={award.organizer} size={award.logoSize || 64} customLogo={award.customLogoUrl} invertInLight={award.invertInLight} />
                    ) : award.customIcon === 'medal' ? (
                      <div style={{ width: 64, height: 64, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFF5E6', borderRadius: '8px', color: '#F5A623', border: '1px solid #FFE0B2' }}>
                        <Medal size={36} />
                      </div>
                    ) : (
                      <InstitutionLogo domain="" name={award.organizer} size={award.logoSize || 64} />
                    )}
                  </div>
                  <span className="badge" style={{ backgroundColor: 'rgba(183, 93, 62, 0.12)', color: 'var(--accent-terracotta)' }}>
                    {award.metric}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '6px', color: 'var(--text-primary)' }}>
                  {award.title}
                </h3>

                <h4 style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '14px', fontFamily: 'var(--font-mono)' }}>
                  {award.organizer}
                </h4>

                <p style={{ fontSize: '0.92rem', lineHeight: 1.6, color: 'var(--text-secondary)' }}>
                  {award.desc}
                </p>

                {/* Hult Prize certificate image */}
                {award.imageUrl && (
                  <div style={{ 
                    marginTop: '16px', 
                    borderRadius: '12px', 
                    overflow: 'hidden', 
                    border: '1px solid var(--border-color)',
                    maxHeight: '180px'
                  }}>
                    <img 
                      src={award.imageUrl} 
                      alt={`${award.title} certificate`}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                      loading="lazy"
                    />
                  </div>
                )}
              </div>

              {/* Document Link */}
              {award.documentUrl && (
                <div style={{ marginTop: '16px', paddingTop: '12px', borderTop: '1px solid var(--border-color)' }}>
                  <a 
                    href={award.documentUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="doc-link"
                  >
                    <ExternalLink size={13} />
                    {award.documentLabel || 'View Certificate'}
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
