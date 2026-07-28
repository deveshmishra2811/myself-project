import React from 'react';
import { awards } from '../data/portfolioData';
import { Trophy, Medal, Award, Globe, Star } from 'lucide-react';

export default function Recognition() {
  const icons = [
    <Trophy key="0" size={24} color="var(--accent-terracotta)" />,
    <Medal key="1" size={24} color="var(--accent-terracotta)" />,
    <Globe key="2" size={24} color="var(--accent-sage)" />,
    <Star key="3" size={24} color="var(--accent-terracotta)" />,
    <Award key="4" size={24} color="var(--accent-sage)" />
  ];

  return (
    <section id="recognition" className="section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
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
              className="card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  {icons[idx]}
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
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
