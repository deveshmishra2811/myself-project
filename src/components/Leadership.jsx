import React from 'react';
import { leadershipRoles } from '../data/portfolioData';
import { ShieldCheck, Briefcase, Award, Users } from 'lucide-react';

export default function Leadership() {
  return (
    <section id="leadership" className="section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
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
              className="card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--accent-terracotta)', fontWeight: 600 }}>
                    {role.period}
                  </span>
                  <Briefcase size={18} color="var(--accent-sage)" />
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
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', paddingTop: '16px', borderTop: '1px solid var(--border-color)' }}>
                  {role.highlights.map((h, i) => (
                    <span 
                      key={i} 
                      className="badge"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
