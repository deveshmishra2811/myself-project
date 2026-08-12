import React from 'react';
import { capabilities } from '../data/portfolioData';
import { Recycle, Leaf, Brain, Briefcase, Code2 } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';

const categoryIcons = [
  <Recycle key="0" size={22} />,
  <Leaf key="1" size={22} />,
  <Brain key="2" size={22} />,
  <Briefcase key="3" size={22} />,
  <Code2 key="4" size={22} />
];

export default function Capabilities() {
  const sectionRef = useScrollReveal();

  return (
    <section id="capabilities" className="section dot-grid-bg" ref={sectionRef}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header reveal">
          <div className="section-tag">04 / Capabilities</div>
          <h2 className="section-title">
            Skills & Technical Expertise
          </h2>
          <p style={{ maxWidth: '640px', marginTop: '12px', fontSize: '1.05rem' }}>
            Capabilities grouped by the problems they solve - from waste valorisation to digital execution.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px'
          }}
        >
          {capabilities.map((cap, idx) => (
            <div 
              key={idx} 
              className="card-3d reveal"
              style={{
                transitionDelay: `${idx * 0.08}s`
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  backgroundColor: 'var(--accent-sage-light)',
                  border: '1px solid rgba(141, 170, 157, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-terracotta)',
                  flexShrink: 0
                }}>
                  {categoryIcons[idx]}
                </div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  {cap.category}
                </h3>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {cap.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="badge"
                    style={{ fontSize: '0.72rem' }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
