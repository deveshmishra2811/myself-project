import React, { useEffect } from 'react';
import { X, CheckCircle2, ArrowRight, ShieldAlert, Sparkles, Layers } from 'lucide-react';
import { 
  MaterialFlowDiagram, 
  UnitEconomicsDiagram, 
  LcaRadarChart, 
  ProcessFlowDiagram, 
  IncubationPipelineDiagram 
} from './Diagrams';

export default function CaseStudyModal({ study, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!study) return null;

  const renderDiagram = () => {
    switch (study.diagramType) {
      case 'flow':
        return <MaterialFlowDiagram />;
      case 'economics':
        return <UnitEconomicsDiagram />;
      case 'radar':
        return <LcaRadarChart />;
      case 'pfd':
        return <ProcessFlowDiagram />;
      case 'pipeline':
        return <IncubationPipelineDiagram />;
      default:
        return null;
    }
  };

  const sectionsList = [
    { title: '1. Problem Statement', content: study.sections.problem },
    { title: '2. Context & Environment', content: study.sections.context },
    { title: '3. Technical & Operational Constraints', content: study.sections.constraints },
    { title: '4. Personal Role & Responsibilities', content: study.sections.role },
    { title: '5. Literature & Standard Research', content: study.sections.research },
    { title: '6. Engineering & Economic Analysis', content: study.sections.analysis },
    { title: '7. Designed Solution', content: study.sections.solution },
    { title: '8. Quantified Impact & Results', content: study.sections.impact },
    { title: '9. Learnings & Future Reflection', content: study.sections.reflection },
  ];

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 2000,
        backgroundColor: 'rgba(15, 45, 39, 0.75)',
        backdropFilter: 'blur(10px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        animation: 'fadeIn 0.3s ease'
      }}
      onClick={onClose}
    >
      <div 
        style={{
          backgroundColor: 'var(--bg-primary)',
          border: '1px solid var(--border-color)',
          borderRadius: '20px',
          width: '100%',
          maxWidth: '920px',
          maxHeight: '90vh',
          overflowY: 'auto',
          boxShadow: 'var(--shadow-lg)',
          position: 'relative',
          padding: '40px'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '24px',
            right: '24px',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-color)',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--text-primary)',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
          aria-label="Close Case Study"
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div style={{ marginBottom: '32px', paddingRight: '48px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            <span className="badge" style={{ backgroundColor: 'rgba(183, 93, 62, 0.15)', color: 'var(--accent-terracotta)' }}>
              {study.category}
            </span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
              Case Study Dossier
            </span>
          </div>

          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: '12px' }}>
            {study.title}
          </h2>

          <p style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--accent-terracotta)', fontFamily: 'var(--font-heading)' }}>
            {study.headline}
          </p>
        </div>

        {/* Metrics Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '16px',
            marginBottom: '36px',
            backgroundColor: 'var(--bg-card)',
            padding: '20px',
            borderRadius: '12px',
            border: '1px solid var(--border-color)'
          }}
        >
          {study.metrics.map((m, i) => (
            <div key={i}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                {m.label}
              </div>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                {m.value}
              </div>
            </div>
          ))}
        </div>

        {/* Diagram Section */}
        <div style={{ marginBottom: '40px' }}>
          {renderDiagram()}
        </div>

        {/* 9-Step Writing Framework Content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
          {sectionsList.map((sec, idx) => (
            <div key={idx} style={{ paddingBottom: '20px', borderBottom: '1px solid var(--border-color)' }}>
              <h3 style={{ fontSize: '1.15rem', color: 'var(--accent-terracotta)', marginBottom: '8px', fontFamily: 'var(--font-heading)' }}>
                {sec.title}
              </h3>
              <p style={{ fontSize: '1rem', lineHeight: 1.6, color: 'var(--text-primary)' }}>
                {sec.content}
              </p>
            </div>
          ))}
        </div>

        {/* Footer Action */}
        <div style={{ marginTop: '36px', display: 'flex', justifyContent: 'flex-end', gap: '16px' }}>
          {study.documentUrl && (
            <a 
              href={study.documentUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 20px',
                backgroundColor: 'rgba(183, 93, 62, 0.15)',
                color: 'var(--accent-terracotta)',
                border: '1px solid rgba(183, 93, 62, 0.3)',
                borderRadius: '8px',
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'all 0.2s ease'
              }}
            >
              <ExternalLink size={18} />
              {study.documentLabel || 'View Document'}
            </a>
          )}
          <button onClick={onClose} className="btn btn-primary">
            <span>Close Case Study</span>
          </button>
        </div>
      </div>
    </div>
  );
}
