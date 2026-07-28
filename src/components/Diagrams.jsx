import React from 'react';

// 1. Material Flow Diagram for Circular Angul
export function MaterialFlowDiagram() {
  return (
    <div style={{ background: 'var(--bg-card)', padding: '24px', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
      <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.95rem', marginBottom: '16px', color: 'var(--accent-terracotta)' }}>
        Angul Plastic Upcycling Stream Flow
      </h4>
      <svg width="100%" height="220" viewBox="0 0 600 200" fill="none">
        {/* Nodes */}
        <rect x="20" y="70" width="110" height="60" rx="8" fill="var(--bg-secondary)" stroke="var(--border-color)" strokeWidth="2"/>
        <text x="75" y="98" fill="var(--text-primary)" fontSize="11" fontWeight="600" textAnchor="middle">Municipal Waste</text>
        <text x="75" y="114" fill="var(--text-muted)" fontSize="9" textAnchor="middle">MLP & Single Use</text>

        <rect x="180" y="70" width="110" height="60" rx="8" fill="var(--accent-sage-light)" stroke="var(--accent-sage)" strokeWidth="2"/>
        <text x="235" y="98" fill="var(--text-primary)" fontSize="11" fontWeight="600" textAnchor="middle">Sorting & Shredding</text>
        <text x="235" y="114" fill="var(--accent-terracotta)" fontSize="9" textAnchor="middle">Mechanical Prep</text>

        {/* 3 Output Streams */}
        <rect x="360" y="20" width="130" height="44" rx="6" fill="var(--bg-secondary)" stroke="var(--border-color)"/>
        <text x="425" y="42" fill="var(--text-primary)" fontSize="10" fontWeight="600" textAnchor="middle">Bitumen Modification</text>
        <text x="425" y="54" fill="var(--accent-terracotta)" fontSize="8" textAnchor="middle">IRC:SP:98 Roads</text>

        <rect x="360" y="78" width="130" height="44" rx="6" fill="var(--bg-secondary)" stroke="var(--border-color)"/>
        <text x="425" y="100" fill="var(--text-primary)" fontSize="10" fontWeight="600" textAnchor="middle">Fly-Ash Panels</text>
        <text x="425" y="112" fill="var(--accent-terracotta)" fontSize="8" textAnchor="middle">Composite Building</text>

        <rect x="360" y="136" width="130" height="44" rx="6" fill="var(--bg-secondary)" stroke="var(--border-color)"/>
        <text x="425" y="158" fill="var(--text-primary)" fontSize="10" fontWeight="600" textAnchor="middle">Recycled Pavers</text>
        <text x="425" y="170" fill="var(--accent-terracotta)" fontSize="8" textAnchor="middle">Pedestrian Infrastructure</text>

        {/* Connector Lines */}
        <path d="M130 100 L180 100" stroke="var(--accent-terracotta)" strokeWidth="2" strokeDasharray="4,4"/>
        <path d="M290 100 L325 100 L325 42 L360 42" stroke="var(--accent-sage)" strokeWidth="2"/>
        <path d="M290 100 L360 100" stroke="var(--accent-sage)" strokeWidth="2"/>
        <path d="M290 100 L325 100 L325 158 L360 158" stroke="var(--accent-sage)" strokeWidth="2"/>
      </svg>
    </div>
  );
}

// 2. Unit Economics Diagram for ECONE
export function UnitEconomicsDiagram() {
  return (
    <div style={{ background: 'var(--bg-card)', padding: '24px', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
      <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.95rem', marginBottom: '16px', color: 'var(--accent-terracotta)' }}>
        ECONE Rental Model vs Plywood Economics
      </h4>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginTop: '12px' }}>
        <div style={{ padding: '16px', borderRadius: '8px', background: 'var(--bg-secondary)', border: '1px solid var(--border-color)' }}>
          <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>CONVENTIONAL PLYWOOD</span>
          <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)', margin: '6px 0' }}>4-6 Reuses</div>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>High site breakage, zero residual scrap value, recurring timber cost.</p>
        </div>

        <div style={{ padding: '16px', borderRadius: '8px', background: 'var(--accent-sage-light)', border: '1px solid var(--accent-sage)' }}>
          <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-terracotta)' }}>ECONE PP-BASALT HYBRID</span>
          <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--accent-terracotta)', margin: '6px 0' }}>50+ Reuses</div>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>4.3 mo payback, 53.5% gross margin, &gt;35% lifecycle saving.</p>
        </div>
      </div>
    </div>
  );
}

// 3. LCA Radar Chart for Ceramic Membrane
export function LcaRadarChart() {
  return (
    <div style={{ background: 'var(--bg-card)', padding: '24px', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
      <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.95rem', marginBottom: '16px', color: 'var(--accent-terracotta)' }}>
        Multi-Criteria TOPSIS Membrane Ranking
      </h4>
      <svg width="100%" height="200" viewBox="0 0 300 200" fill="none">
        {/* Radar pentagon guide */}
        <polygon points="150,20 250,70 210,170 90,170 50,70" stroke="var(--border-color)" strokeWidth="1" fill="none"/>
        <polygon points="150,50 210,85 190,140 110,140 90,85" stroke="var(--border-color)" strokeWidth="1" fill="none" strokeDasharray="3,3"/>
        
        {/* TOPSIS Ranked Membrane Surface */}
        <polygon points="150,30 235,75 195,155 105,160 65,75" fill="rgba(183, 93, 62, 0.25)" stroke="var(--accent-terracotta)" strokeWidth="2"/>

        {/* Metric Labels */}
        <text x="150" y="12" fill="var(--text-primary)" fontSize="9" fontWeight="600" textAnchor="middle">Global Warming (GWP)</text>
        <text x="260" y="70" fill="var(--text-primary)" fontSize="9" fontWeight="600">Flux Rate</text>
        <text x="215" y="185" fill="var(--text-primary)" fontSize="9" fontWeight="600">Flexural Strength</text>
        <text x="85" y="185" fill="var(--text-primary)" fontSize="9" fontWeight="600">Raw Capex</text>
        <text x="40" y="70" fill="var(--text-primary)" fontSize="9" fontWeight="600" textAnchor="end">Energy Density</text>
      </svg>
    </div>
  );
}

// 4. Process Flow Diagram for Butyl Acetate Plant
export function ProcessFlowDiagram() {
  return (
    <div style={{ background: 'var(--bg-card)', padding: '24px', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
      <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.95rem', marginBottom: '16px', color: 'var(--accent-terracotta)' }}>
        100 T/Day Butyl Acetate Esterification Train
      </h4>
      <svg width="100%" height="200" viewBox="0 0 500 180" fill="none">
        {/* Feeds */}
        <rect x="20" y="40" width="70" height="35" rx="4" fill="var(--bg-secondary)" stroke="var(--border-color)"/>
        <text x="55" y="62" fill="var(--text-primary)" fontSize="9" textAnchor="middle">Acetic Acid</text>

        <rect x="20" y="95" width="70" height="35" rx="4" fill="var(--bg-secondary)" stroke="var(--border-color)"/>
        <text x="55" y="117" fill="var(--text-primary)" fontSize="9" textAnchor="middle">n-Butanol</text>

        {/* CSTR Reactor */}
        <rect x="140" y="50" width="75" height="75" rx="10" fill="var(--accent-sage-light)" stroke="var(--accent-sage)" strokeWidth="2"/>
        <text x="177" y="85" fill="var(--text-primary)" fontSize="10" fontWeight="600" textAnchor="middle">CSTR</text>
        <text x="177" y="100" fill="var(--accent-terracotta)" fontSize="8" textAnchor="middle">Esterification</text>

        {/* Decanter */}
        <rect x="260" y="60" width="65" height="55" rx="6" fill="var(--bg-secondary)" stroke="var(--border-color)"/>
        <text x="292" y="92" fill="var(--text-primary)" fontSize="9" fontWeight="600" textAnchor="middle">Decanter</text>

        {/* Distillation Column */}
        <rect x="375" y="25" width="55" height="130" rx="6" fill="var(--bg-secondary)" stroke="var(--border-color)"/>
        <line x1="375" y1="55" x2="430" y2="55" stroke="var(--border-color)" strokeDasharray="2,2"/>
        <line x1="375" y1="90" x2="430" y2="90" stroke="var(--border-color)" strokeDasharray="2,2"/>
        <text x="402" y="75" fill="var(--text-primary)" fontSize="9" fontWeight="600" textAnchor="middle">Packed</text>
        <text x="402" y="88" fill="var(--text-primary)" fontSize="9" fontWeight="600" textAnchor="middle">Distillation</text>

        {/* Connecting Lines */}
        <path d="M90 57 L140 75" stroke="var(--accent-terracotta)" strokeWidth="1.5"/>
        <path d="M90 112 L140 100" stroke="var(--accent-terracotta)" strokeWidth="1.5"/>
        <path d="M215 87 L260 87" stroke="var(--accent-sage)" strokeWidth="2"/>
        <path d="M325 87 L375 87" stroke="var(--accent-sage)" strokeWidth="2"/>
      </svg>
    </div>
  );
}

// 5. Incubation Pipeline Diagram for VNIT Venture Vault
export function IncubationPipelineDiagram() {
  return (
    <div style={{ background: 'var(--bg-card)', padding: '24px', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
      <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.95rem', marginBottom: '16px', color: 'var(--accent-terracotta)' }}>
        VNIT Ventures Vault Founder Acquisition Funnel
      </h4>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div style={{ padding: '10px 16px', background: 'var(--bg-secondary)', borderRadius: '6px', width: '100%', display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
          <span>1. Initial Founder Outreach</span>
          <strong>150+ Teams Engaged</strong>
        </div>
        <div style={{ padding: '10px 16px', background: 'var(--accent-sage-light)', borderRadius: '6px', width: '85%', display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', margin: '0 auto' }}>
          <span>2. Venture Readiness & Workshops</span>
          <strong>45 Structured Pitch Decks</strong>
        </div>
        <div style={{ padding: '10px 16px', background: 'rgba(183, 93, 62, 0.2)', borderRadius: '6px', width: '70%', display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', margin: '0 auto' }}>
          <span>3. Seeded & Incubated</span>
          <strong style={{ color: 'var(--accent-terracotta)' }}>12 Active Startups</strong>
        </div>
      </div>
    </div>
  );
}
