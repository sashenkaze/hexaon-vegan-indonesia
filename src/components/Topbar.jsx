import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Topbar = () => {
  const { currentLang, setLang } = useLanguage();

  return (
    <div style={{ background: '#123626', color: '#f5efe2', fontFamily: 'Inter, sans-serif', fontSize: '.76rem' }}>
      <div className="container" style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        paddingBlock: '8px', gap: '12px',
      }}>
        {/* Contact info */}
        <div className="topbar-contact" style={{
          display: 'flex', gap: '16px', alignItems: 'center',
          color: 'rgba(245,239,226,.86)', overflow: 'hidden', minWidth: 0,
        }}>
          <a href="https://wa.me/62811179804" target="_blank" rel="noopener"
            style={{ color: 'inherit', whiteSpace: 'nowrap', flexShrink: 0 }}
            onMouseEnter={e => e.currentTarget.style.color='#c9972f'}
            onMouseLeave={e => e.currentTarget.style.color='rgba(245,239,226,.86)'}
          >
            +62 811 179 804
          </a>
          {/* Hide sep + email + country on small screens via CSS class */}
          <span className="topbar-sep" style={{ opacity: .4, flexShrink: 0 }}>/</span>
          <a href="mailto:zengroeddy.backup@gmail.com"
            className="topbar-email"
            style={{ color: 'inherit', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', minWidth: 0 }}
            onMouseEnter={e => e.currentTarget.style.color='#c9972f'}
            onMouseLeave={e => e.currentTarget.style.color='rgba(245,239,226,.86)'}
          >
            zengroeddy.backup@gmail.com
          </a>
          <span className="topbar-sep" style={{ opacity: .4, flexShrink: 0 }}>/</span>
          <span className="topbar-country" style={{ whiteSpace: 'nowrap', flexShrink: 0 }}>
            <span data-i18n="id">Indonesia</span>
            <span data-i18n="en">Indonesia</span>
            <span data-i18n="zh">印度尼西亚</span>
          </span>
        </div>

        {/* Lang switch — always visible in topbar */}
        <div role="group" aria-label="Language switch" style={{
          display: 'flex', gap: '2px', flexShrink: 0,
          background: 'rgba(245,239,226,.12)', padding: '3px', borderRadius: '3px',
        }}>
          {[
            { code: 'id', label: 'ID' },
            { code: 'en', label: 'EN' },
            { code: 'zh', label: '中文' },
          ].map(({ code, label }) => (
            <button
              key={code}
              type="button"
              onClick={() => setLang(code)}
              aria-pressed={currentLang === code}
              style={{
                background: currentLang === code ? '#ac1b32' : 'none',
                border: 0,
                color: currentLang === code ? '#fff' : 'rgba(245,239,226,.7)',
                fontFamily: 'Inter, sans-serif',
                fontSize: '.72rem',
                letterSpacing: '.06em',
                padding: '4px 9px',
                borderRadius: '2px',
                cursor: 'pointer',
                transition: 'background .15s ease, color .15s ease',
                whiteSpace: 'nowrap',
              }}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <style>{`
        /* Hide email + separators + country on small screens */
        @media (max-width: 600px) {
          .topbar-email,
          .topbar-country { display: none !important; }
          .topbar-sep { display: none !important; }
        }
      `}</style>
    </div>
  );
};

export default Topbar;
