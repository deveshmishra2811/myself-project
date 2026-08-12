import React, { useState } from 'react';

/**
 * InstitutionLogo - Renders an institution's logo from Clearbit or Google Favicon API
 * with graceful fallback to an initial-letter avatar.
 */
export default function InstitutionLogo({ domain, name, size = 48, customLogo, bg = 'transparent', invertInLight = false, blendWhite = false }) {
  const [imgError, setImgError] = useState(false);
  const [useFallbackApi, setUseFallbackApi] = useState(false);

  const clearbitUrl = `https://logo.clearbit.com/${domain}`;
  const googleFaviconUrl = `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;

  const logoSrc = customLogo ? customLogo : (useFallbackApi ? googleFaviconUrl : clearbitUrl);

  if (imgError && !customLogo) {
    const initial = name ? name.charAt(0).toUpperCase() : '?';
    // Both APIs failed — render letter avatar
    return (
      <div 
        className="institution-logo-fallback"
        style={{ width: size, height: size, fontSize: size * 0.4 }}
        title={name}
      >
        {initial}
      </div>
    );
  }

  return (
    <div 
      className="institution-logo-bg"
      style={{
        width: size, 
        height: size, 
        backgroundColor: bg !== 'transparent' ? bg : undefined,
        borderRadius: '8px',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0
      }}
    >
      <img
        src={logoSrc}
        alt={`${name} logo`}
        title={name}
        className={invertInLight ? 'invert-in-light' : ''}
        style={{ width: '100%', height: '100%', objectFit: 'contain', ...(blendWhite ? { mixBlendMode: 'multiply' } : {}) }}
        onError={() => {
          if (customLogo) {
            setImgError(true);
          } else if (!useFallbackApi) {
            setUseFallbackApi(true);
            setImgError(false);
          } else {
            setImgError(true);
          }
        }}
        loading="lazy"
      />
    </div>
  );
}
