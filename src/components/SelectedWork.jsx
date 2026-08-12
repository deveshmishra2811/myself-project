import React, { useState } from 'react';
import { ArrowUpRight, FileText, ExternalLink } from 'lucide-react';
import { caseStudies } from '../data/portfolioData';
import CaseStudyModal from './CaseStudyModal';
import InstitutionLogo from './InstitutionLogo';
import useScrollReveal from '../hooks/useScrollReveal';

export default function SelectedWork() {
  const [selectedStudy, setSelectedStudy] = useState(null);
  const sectionRef = useScrollReveal();

  return (
    <section id="work" className="section" ref={sectionRef}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header reveal">
          <div className="section-tag">01 / Selected Work</div>
          <h2 className="section-title">
            Engineering, LCA & Venture Case Studies
          </h2>
          <p style={{ maxWidth: '640px', marginTop: '12px', fontSize: '1.05rem' }}>
            Quantitative case studies detailing circular waste valorisation, lifecycle optimization, industrial chemical plant design, and deep-tech venture building.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '32px'
          }}
        >
          {caseStudies.map((study, idx) => (
            <div 
              key={study.id} 
              className="card-3d reveal"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                cursor: 'pointer',
                position: 'relative',
                transitionDelay: `${idx * 0.08}s`
              }}
              onClick={() => setSelectedStudy(study)}
            >
              <div>
                {/* Category, Institution Logo & Badge */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    {(study.logoDomain || study.customLogoUrl) && (
                      <InstitutionLogo domain={study.logoDomain} name={study.institution} size={study.logoSize || 64} customLogo={study.customLogoUrl} invertInLight={study.invertInLight} />
                    )}
                    <span className="badge" style={{ backgroundColor: 'rgba(183, 93, 62, 0.12)', color: 'var(--accent-terracotta)' }}>
                      {study.category}
                    </span>
                  </div>
                  <FileText size={18} color="var(--text-muted)" />
                </div>

                {/* Case Study Title */}
                <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '10px', color: 'var(--text-primary)' }}>
                  {study.title}
                </h3>

                {/* Headline */}
                <p style={{ fontWeight: 600, color: 'var(--accent-terracotta)', fontSize: '0.95rem', marginBottom: '14px', fontFamily: 'var(--font-heading)' }}>
                  {study.headline}
                </p>

                {/* Summary */}
                <p style={{ fontSize: '0.92rem', lineHeight: 1.6, color: 'var(--text-secondary)', marginBottom: '24px' }}>
                  {study.summary}
                </p>
              </div>

              <div>
                {/* Metrics Pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px', paddingTop: '16px', borderTop: '1px solid var(--border-color)' }}>
                  {study.metrics.map((m, mIdx) => (
                    <span 
                      key={mIdx} 
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.75rem',
                        padding: '4px 10px',
                        borderRadius: '6px',
                        backgroundColor: 'var(--bg-secondary)',
                        color: 'var(--text-primary)',
                        border: '1px solid var(--border-color)'
                      }}
                    >
                      {m.label}: <strong>{m.value}</strong>
                    </span>
                  ))}
                </div>

                {/* Actions Row */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 600, color: 'var(--accent-terracotta)', fontSize: '0.95rem' }}>
                    <span>Read Full Case Study</span>
                    <ArrowUpRight size={18} />
                  </div>

                  {study.documentUrl && (
                    <a 
                      href={study.documentUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="doc-link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={13} />
                      {study.documentLabel || 'View Document'}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Case Study Modal */}
      {selectedStudy && (
        <CaseStudyModal 
          study={selectedStudy} 
          onClose={() => setSelectedStudy(null)} 
        />
      )}
    </section>
  );
}
