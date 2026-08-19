import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Topbar = () => {
  const { currentLang, setLang } = useLanguage();

  return (
    <div style={{ background: '#123626', color: '#f5efe2', fontFamily: 'Inter, sans-serif', fontSize: '.76rem' }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBlock: '8px', gap: '16px', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'center', color: 'rgba(245,239,226,.86)' }}>
          <a href="https://wa.me/62811179804" target="_blank" rel="noopener"
            style={{ color: 'inherit' }}
            onMouseEnter={e => e.target.style.color = '#c9972f'}
            onMouseLeave={e => e.target.style.color = 'rgba(245,239,226,.86)'}
          >
            +62 811 179 804
          </a>
          <span style={{ opacity: .4 }}>/</span>
          <a href="mailto:zengroeddy.backup@gmail.com" style={{ color: 'inherit' }}
            onMouseEnter={e => e.target.style.color = '#c9972f'}
            onMouseLeave={e => e.target.style.color = 'rgba(245,239,226,.86)'}
          >
            zengroeddy.backup@gmail.com
          </a>
          <span style={{ opacity: .4 }}>/</span>
          <span>
            <span data-i18n="id">Indonesia</span>
            <span data-i18n="en">Indonesia</span>
            <span data-i18n="zh">印度尼西亚</span>
          </span>
        </div>
        <div role="group" aria-label="Language switch"
          style={{ display: 'flex', gap: '2px', background: 'rgba(245,239,226,.12)', padding: '3px', borderRadius: '3px' }}>
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
              }}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Topbar;
