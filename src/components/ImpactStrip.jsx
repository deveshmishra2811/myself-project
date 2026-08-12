import React, { useEffect, useRef, useState } from 'react';
import { impactMetrics } from '../data/portfolioData';

function AnimatedCounter({ value, prefix = '', suffix = '', decimals = 0 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 1800;
          const startTime = performance.now();

          const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(eased * value);

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  const displayValue = decimals > 0 ? count.toFixed(decimals) : Math.round(count);

  return (
    <span ref={ref}>
      {prefix}{displayValue}{suffix}
    </span>
  );
}

export default function ImpactStrip() {
  return (
    <section 
      style={{
        backgroundColor: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border-color)',
        borderBottom: '1px solid var(--border-color)',
        padding: '48px 0',
        position: 'relative',
        zIndex: 10
      }}
    >
      <div className="container">
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '24px'
          }}
        >
          {impactMetrics.map((item, idx) => (
            <div 
              key={item.id} 
              className="card-3d"
              style={{
                padding: '28px',
                animationDelay: `${idx * 0.1}s`
              }}
            >
              <div 
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '2.5rem',
                  fontWeight: 800,
                  color: 'var(--accent-terracotta)',
                  lineHeight: 1,
                  marginBottom: '8px'
                }}
              >
                <AnimatedCounter 
                  value={item.value} 
                  prefix={item.prefix || ''} 
                  suffix={item.suffix || ''} 
                  decimals={item.decimals || 0}
                />
              </div>

              <div 
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  marginBottom: '6px'
                }}
              >
                {item.label}
              </div>

              <div 
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  color: 'var(--text-muted)'
                }}
              >
                {item.subtext}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
