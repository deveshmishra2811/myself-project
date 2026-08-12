import React from 'react';
import { leadershipRoles } from '../data/portfolioData';
import { ExternalLink } from 'lucide-react';
import InstitutionLogo from './InstitutionLogo';
import useScrollReveal from '../hooks/useScrollReveal';

export default function Leadership() {
  const sectionRef = useScrollReveal();

  return (
    <section id="leadership" className="section" ref={sectionRef}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header reveal">
          <div className="section-tag">03 / Leadership & Ecosystem</div>
          <h2 className="section-title">
            Leadership, Governance & Ecosystem Building
          </h2>
          <p style={{ maxWidth: '640px', marginTop: '12px', fontSize: '1.05rem' }}>
            Demonstrating structured governance, financial stewardship, client contracting, and startup founder mentorship.
          </p>
        </div>

        {/* Leadership Cards Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px'
          }}
        >
          {leadershipRoles.map((role, idx) => (
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
                {/* Period & Logo */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--accent-terracotta)', fontWeight: 600 }}>
                    {role.period}
                  </span>
                  {(role.logoDomain || role.customLogoUrl) && (
                    <InstitutionLogo domain={role.logoDomain} name={role.organization} size={role.logoSize || 64} customLogo={role.customLogoUrl} bg={role.logoBg} invertInLight={role.invertInLight} />
                  )}
                </div>

                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '6px', color: 'var(--text-primary)' }}>
                  {role.role}
                </h3>

                <h4 style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--accent-terracotta)', marginBottom: '16px', fontFamily: 'var(--font-heading)' }}>
                  {role.organization}
                </h4>

                <p style={{ fontSize: '0.92rem', lineHeight: 1.6, color: 'var(--text-secondary)', marginBottom: '24px' }}>
                  {role.desc}
                </p>
              </div>

              <div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', paddingTop: '16px', borderTop: '1px solid var(--border-color)', alignItems: 'center' }}>
                  {role.highlights.map((h, i) => (
                    <span key={i} className="badge">
                      {h}
                    </span>
                  ))}

                  {role.documentUrl && (
                    <a 
                      href={role.documentUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="doc-link"
                      style={{ marginLeft: 'auto' }}
                    >
                      <ExternalLink size={13} />
                      {role.documentLabel || 'View'}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
