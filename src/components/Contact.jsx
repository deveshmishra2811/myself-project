import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, Phone, Linkedin, Download, Contact, ExternalLink } from 'lucide-react';

export default function ContactSection() {
  
  // Generate downloadable vCard VCF File dynamically
  const handleDownloadVcf = () => {
    const vcardData = `BEGIN:VCARD
VERSION:3.0
FN:Devesh Mishra
TITLE:Circular Materials & Sustainability Strategist
ORG:VNIT Nagpur / ECONE
EMAIL;TYPE=INTERNET,PREF:${personalInfo.email}
TEL;TYPE=CELL:${personalInfo.phone}
URL:${personalInfo.linkedin}
NOTE:Chemical engineer combining material research, lifecycle analysis, commercial strategy, and venture building.
END:VCARD`;

    const blob = new Blob([vcardData], { type: 'text/vcard;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Devesh_Mishra.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="contact" className="section" style={{ paddingBottom: '120px' }}>
      <div className="container">
        
        <div 
          style={{
            background: 'linear-gradient(135deg, var(--accent-kiln) 0%, #1a4b42 50%, #1f5549 100%)',
            borderRadius: '28px',
            padding: '60px 40px',
            color: '#FFFFFF',
            boxShadow: 'var(--shadow-lg)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Glassmorphism overlay accent */}
          <div 
            style={{
              position: 'absolute',
              top: '-80px',
              right: '-80px',
              width: '350px',
              height: '350px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(224, 122, 95, 0.12) 0%, transparent 70%)',
              pointerEvents: 'none'
            }}
          />
          <div 
            style={{
              position: 'absolute',
              bottom: '-60px',
              left: '-60px',
              width: '250px',
              height: '250px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(141, 170, 157, 0.1) 0%, transparent 70%)',
              pointerEvents: 'none'
            }}
          />

          <div style={{ maxWidth: '720px', position: 'relative', zIndex: 2 }}>
            <div className="section-tag" style={{ color: '#E07A5F' }}>
              07 / Connect & Collaborate
            </div>

            <h2 
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 800,
                color: '#FFFFFF',
                lineHeight: 1.15,
                marginTop: '12px',
                marginBottom: '20px'
              }}
            >
              Let's build material solutions that work technically, environmentally, and commercially.
            </h2>

            <p style={{ fontSize: '1.1rem', color: '#C8D3CF', marginBottom: '40px', lineHeight: 1.6 }}>
              Whether you are looking for research collaboration in circular economy pathways, LCA evaluation, or deep-tech venture strategy - feel free to reach out.
            </p>

            {/* Direct Contact Links */}
            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '16px',
                marginBottom: '40px'
              }}
            >
              {/* Email */}
              <a 
                href={`mailto:${personalInfo.email}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  backgroundColor: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(8px)',
                  padding: '16px 20px',
                  borderRadius: '14px',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease'
                }}
              >
                <Mail size={20} color="#E07A5F" />
                <div>
                  <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', opacity: 0.6, display: 'block' }}>EMAIL</span>
                  <span style={{ fontWeight: 600, fontSize: '0.88rem', wordBreak: 'break-all' }}>{personalInfo.email}</span>
                </div>
              </a>

              {/* Phone */}
              <a 
                href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  backgroundColor: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(8px)',
                  padding: '16px 20px',
                  borderRadius: '14px',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease'
                }}
              >
                <Phone size={20} color="#8DAA9D" />
                <div>
                  <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', opacity: 0.6, display: 'block' }}>PHONE</span>
                  <span style={{ fontWeight: 600, fontSize: '0.88rem' }}>{personalInfo.phone}</span>
                </div>
              </a>

              {/* LinkedIn */}
              <a 
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  backgroundColor: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(8px)',
                  padding: '16px 20px',
                  borderRadius: '14px',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease'
                }}
              >
                <Linkedin size={20} color="#E07A5F" />
                <div>
                  <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', opacity: 0.6, display: 'block' }}>LINKEDIN</span>
                  <span style={{ fontWeight: 600, fontSize: '0.88rem' }}>Devesh Mishra</span>
                </div>
              </a>
            </div>

            {/* Action Buttons Row */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
              <button 
                onClick={handleDownloadVcf}
                className="btn btn-primary"
                style={{ backgroundColor: '#E07A5F', borderColor: '#E07A5F' }}
              >
                <Contact size={18} />
                <span>Save Contact Card (.VCF)</span>
              </button>

              <a 
                href={personalInfo.resumeUrl} 
                download 
                className="btn btn-secondary"
                style={{ color: '#FFFFFF', borderColor: 'rgba(255, 255, 255, 0.25)' }}
              >
                <Download size={18} />
                <span>Download Official Resume</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
