import React from 'react';
import { workingMethod } from '../data/portfolioData';
import { Search, BarChart3, GitCompare, TestTube, Rocket } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';

const stepIcons = [
  <Search key="0" size={22} />,
  <BarChart3 key="1" size={22} />,
  <GitCompare key="2" size={22} />,
  <TestTube key="3" size={22} />,
  <Rocket key="4" size={22} />
];

export default function WorkingMethod() {
  const sectionRef = useScrollReveal();

  return (
    <section id="method" className="section dot-grid-bg" ref={sectionRef}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header reveal">
          <div className="section-tag">02 / Working Method</div>
          <h2 className="section-title">
            Research → Model → Evaluate → Validate → Scale
          </h2>
          <p style={{ maxWidth: '640px', marginTop: '12px', fontSize: '1.05rem' }}>
            A structured, quantitative approach connecting chemical engineering, sustainability analysis, and commercial execution.
          </p>
        </div>

        {/* Method Steps */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '24px'
          }}
        >
          {workingMethod.map((method, idx) => (
            <div 
              key={idx} 
              className="card-3d reveal"
              style={{
                textAlign: 'center',
                padding: '36px 24px',
                transitionDelay: `${idx * 0.1}s`
              }}
            >
              {/* Step Number */}
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                fontWeight: 600,
                color: 'var(--accent-terracotta)',
                marginBottom: '16px',
                letterSpacing: '0.1em'
              }}>
                STEP {method.step}
              </div>

              {/* Icon */}
              <div style={{
                width: '52px',
                height: '52px',
                borderRadius: '14px',
                backgroundColor: 'var(--accent-sage-light)',
                border: '1px solid rgba(141, 170, 157, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                color: 'var(--accent-terracotta)'
              }}>
                {stepIcons[idx]}
              </div>

              {/* Name */}
              <h3 style={{
                fontSize: '1.3rem',
                fontWeight: 700,
                marginBottom: '8px',
                color: 'var(--text-primary)'
              }}>
                {method.name}
              </h3>

              {/* Title */}
              <h4 style={{
                fontSize: '0.85rem',
                fontWeight: 600,
                color: 'var(--accent-terracotta)',
                fontFamily: 'var(--font-heading)',
                marginBottom: '14px'
              }}>
                {method.title}
              </h4>

              {/* Description */}
              <p style={{
                fontSize: '0.88rem',
                lineHeight: 1.6,
                color: 'var(--text-secondary)'
              }}>
                {method.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
