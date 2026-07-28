import React, { useState } from 'react';
import { workingMethod } from '../data/portfolioData';
import { Search, Cpu, CheckSquare, ShieldCheck, TrendingUp } from 'lucide-react';

export default function WorkingMethod() {
  const [activeStep, setActiveStep] = useState(0);

  const stepIcons = [
    <Search key="0" size={22} />,
    <Cpu key="1" size={22} />,
    <CheckSquare key="2" size={22} />,
    <ShieldCheck key="3" size={22} />,
    <TrendingUp key="4" size={22} />
  ];

  return (
    <section id="method" className="section" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">02 / Working Method</div>
          <h2 className="section-title">
            Engineering & Commercial Methodology
          </h2>
          <p style={{ maxWidth: '640px', marginTop: '12px', fontSize: '1.05rem' }}>
            A structured 5-phase methodology connecting chemical engineering fundamentals, life cycle modeling, and venture implementation.
          </p>
        </div>

        {/* 5-Step Process Horizontal Bar */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '12px',
            marginBottom: '40px'
          }}
        >
          {workingMethod.map((item, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={item.step}
                onClick={() => setActiveStep(idx)}
                style={{
                  backgroundColor: isActive ? 'var(--accent-kiln)' : 'var(--bg-card)',
                  color: isActive ? '#FFFFFF' : 'var(--text-primary)',
                  border: isActive ? '1px solid var(--accent-terracotta)' : '1px solid var(--border-color)',
                  borderRadius: '12px',
                  padding: '20px',
                  textAlign: 'left',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: isActive ? 'var(--accent-terracotta)' : 'var(--text-muted)' }}>
                    {item.step}
                  </span>
                  <div style={{ color: isActive ? 'var(--accent-terracotta)' : 'var(--accent-sage)' }}>
                    {stepIcons[idx]}
                  </div>
                </div>

                <div>
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 700 }}>
                    {item.name}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Detailed Card */}
        <div 
          style={{
            backgroundColor: 'var(--bg-card)',
            border: '1px solid var(--border-color)',
            borderRadius: '16px',
            padding: '40px',
            boxShadow: 'var(--shadow-md)',
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '24px'
          }}
          className="method-detail"
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span 
              style={{ 
                fontFamily: 'var(--font-heading)', 
                fontSize: '2.5rem', 
                fontWeight: 800, 
                color: 'var(--accent-terracotta)',
                lineHeight: 1 
              }}
            >
              {workingMethod[activeStep].step}
            </span>
            <div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                {workingMethod[activeStep].name}: {workingMethod[activeStep].title}
              </h3>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--accent-sage)' }}>
                Phase {activeStep + 1} of 5 in Execution Framework
              </span>
            </div>
          </div>

          <p style={{ fontSize: '1.1rem', lineHeight: 1.7, color: 'var(--text-secondary)' }}>
            {workingMethod[activeStep].desc}
          </p>
        </div>

      </div>
    </section>
  );
}
