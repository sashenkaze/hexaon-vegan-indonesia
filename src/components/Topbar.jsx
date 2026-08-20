import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Topbar = () => {
  const { currentLang, setLang } = useLanguage();

  return (
    <div style={{ background: '#123626', color: '#f5efe2', fontFamily: 'Inter, sans-serif', fontSize: '.76rem' }}>
      <div className="container topbar-inner">
        {/* Contact info — wraps naturally on small screens */}
        <div className="topbar-contact">
          <a href="https://wa.me/62811179804" target="_blank" rel="noopener" className="topbar-link">
            +62 811 179 804
          </a>
          <span className="topbar-sep">/</span>
          <a href="mailto:zengroeddy.backup@gmail.com" className="topbar-link topbar-email">
            zengroeddy.backup@gmail.com
          </a>
          <span className="topbar-sep">/</span>
          <span>
            <span data-i18n="id">Indonesia</span>
            <span data-i18n="en">Indonesia</span>
            <span data-i18n="zh">印度尼西亚</span>
          </span>
        </div>

        {/* Lang switch */}
        <div role="group" aria-label="Language switch" className="topbar-langswitch">
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
              className={`topbar-lang-btn${currentLang === code ? ' active' : ''}`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <style>{`
        .topbar-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-block: 8px;
          gap: 16px;
          flex-wrap: wrap;
        }
        .topbar-contact {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          align-items: center;
          color: rgba(245,239,226,.86);
        }
        .topbar-link {
          color: rgba(245,239,226,.86);
          text-decoration: none;
          white-space: nowrap;
        }
        .topbar-link:hover { color: #c9972f; }
        .topbar-sep { opacity: .4; }
        .topbar-langswitch {
          display: flex;
          gap: 2px;
          flex-shrink: 0;
          background: rgba(245,239,226,.12);
          padding: 3px;
          border-radius: 3px;
        }
        .topbar-lang-btn {
          background: none;
          border: 0;
          color: rgba(245,239,226,.7);
          font-family: Inter, sans-serif;
          font-size: .72rem;
          letter-spacing: .06em;
          padding: 4px 9px;
          border-radius: 2px;
          cursor: pointer;
          transition: background .15s ease, color .15s ease;
          white-space: nowrap;
        }
        .topbar-lang-btn:hover { color: #f5efe2; }
        .topbar-lang-btn.active { background: #ac1b32; color: #fff; }

        /* Mobile: stack contact info + lang toggle, allow email to wrap */
        @media (max-width: 600px) {
          .topbar-inner {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
            padding-block: 10px;
          }
          .topbar-contact {
            gap: 8px;
            font-size: .73rem;
          }
          .topbar-email {
            word-break: break-all;
          }
        }
      `}</style>
    </div>
  );
};

export default Topbar;
