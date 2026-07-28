import React, { useState } from 'react';
import { capabilities } from '../data/portfolioData';
import { Check, Sparkles, Layers } from 'lucide-react';

export default function Capabilities() {
  const [selectedCategory, setSelectedCategory] = useState(0);

  return (
    <section id="capabilities" className="section" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">04 / Capabilities</div>
          <h2 className="section-title">
            Capabilities & Problem-Solving Matrix
          </h2>
          <p style={{ maxWidth: '640px', marginTop: '12px', fontSize: '1.05rem' }}>
            Grouped by the specific engineering, sustainability, decision science, and business problems I am trained to solve.
          </p>
        </div>

        {/* Categories Tab Selector */}
        <div 
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '12px',
            marginBottom: '36px'
          }}
        >
          {capabilities.map((cat, idx) => {
            const isActive = selectedCategory === idx;
            return (
              <button
                key={cat.category}
                onClick={() => setSelectedCategory(idx)}
                style={{
                  backgroundColor: isActive ? 'var(--accent-terracotta)' : 'var(--bg-card)',
                  color: isActive ? '#FFFFFF' : 'var(--text-primary)',
                  border: isActive ? '1px solid var(--accent-terracotta)' : '1px solid var(--border-color)',
                  borderRadius: '30px',
                  padding: '10px 22px',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: isActive ? '0 4px 12px rgba(183, 93, 62, 0.25)' : 'none'
                }}
              >
                {cat.category}
              </button>
            );
          })}
        </div>

        {/* Selected Category Skill Matrix Cards */}
        <div 
          style={{
            backgroundColor: 'var(--bg-card)',
            border: '1px solid var(--border-color)',
            borderRadius: '16px',
            padding: '36px',
            boxShadow: 'var(--shadow-md)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
            <Sparkles size={20} color="var(--accent-terracotta)" />
            <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-primary)' }}>
              {capabilities[selectedCategory].category} Capabilities
            </h3>
          </div>

          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '16px'
            }}
          >
            {capabilities[selectedCategory].skills.map((skill, i) => (
              <div 
                key={i}
                style={{
                  backgroundColor: 'var(--bg-secondary)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '10px',
                  padding: '16px 20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}
              >
                <div 
                  style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--accent-sage-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-terracotta)',
                    flexShrink: 0
                  }}
                >
                  <Check size={14} />
                </div>
                <span style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
