import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const NAV_LINKS = [
  { to: '/', label: { id: 'Beranda', en: 'Home', zh: '首页' } },
  { to: '/about', label: { id: 'Tentang Kami', en: 'About Us', zh: '关于我们' } },
  { to: '/products', label: { id: 'Produk', en: 'Products', zh: '产品' } },
  { to: '/contact', label: { id: 'Kontak', en: 'Contact', zh: '联系我们' } },
];

const TOPBAR_HEIGHT = 36;

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { currentLang, setLang } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > TOPBAR_HEIGHT);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [location.pathname]);

  const isCurrent = (to) => location.pathname === to;

  const langButtons = [
    { code: 'id', label: 'ID' },
    { code: 'en', label: 'EN' },
    { code: 'zh', label: '中文' },
  ];

  return (
    <header style={{
      background: '#f5efe2',
      borderBottom: '1px solid rgba(28,26,21,.14)',
      position: 'sticky', top: 0, zIndex: 60,
    }}>
      <div className="container" style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        paddingBlock: '14px', gap: '20px', position: 'relative',
      }}>

        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
          <img src="/assets/images/logo-lockup.png" alt="PT Hexaon Vegan Indonesia logo"
            style={{ height: '46px', width: 'auto' }} />
        </Link>

        {/* Desktop Nav */}
        <nav aria-label="Primary" className="desktop-nav" style={{
          display: 'flex', alignItems: 'center', gap: '34px', flex: 1, justifyContent: 'flex-end',
        }}>
          <ul style={{ display: 'flex', gap: '30px', listStyle: 'none', margin: 0, padding: 0 }}>
            {NAV_LINKS.map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  className={isCurrent(to) ? 'nav-link current' : 'nav-link'}
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '.82rem',
                    letterSpacing: '.03em',
                    color: isCurrent(to) ? '#123626' : '#4a453c',
                    fontWeight: isCurrent(to) ? 600 : 400,
                    position: 'relative',
                    paddingBlock: '4px',
                    textDecoration: 'none',
                  }}
                >
                  <span data-i18n="id">{label.id}</span>
                  <span data-i18n="en">{label.en}</span>
                  <span data-i18n="zh">{label.zh}</span>
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA button + lang toggle (lang toggle slides in when scrolled) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexShrink: 0 }}>
            <Link to="/contact" className="btn btn-primary">
              <span data-i18n="id">Minta Penawaran</span>
              <span data-i18n="en">Request a Quote</span>
              <span data-i18n="zh">索取报价</span>
            </Link>

            {/* Lang toggle — expands in smoothly when topbar scrolls away */}
            <div
              role="group"
              aria-label="Language switch"
              style={{
                display: 'flex',
                gap: '2px',
                background: 'rgba(28,26,21,.08)',
                padding: scrolled ? '3px' : '0px',
                borderRadius: '3px',
                maxWidth: scrolled ? '130px' : '0px',
                opacity: scrolled ? 1 : 0,
                overflow: 'hidden',
                transition: 'max-width .3s ease, opacity .25s ease, padding .3s ease',
                pointerEvents: scrolled ? 'auto' : 'none',
              }}
            >
              {langButtons.map(({ code, label }) => (
                <button
                  key={code}
                  type="button"
                  onClick={() => setLang(code)}
                  aria-pressed={currentLang === code}
                  style={{
                    background: currentLang === code ? '#ac1b32' : 'none',
                    border: 0,
                    color: currentLang === code ? '#fff' : '#4a453c',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '.72rem',
                    letterSpacing: '.06em',
                    padding: '4px 9px',
                    borderRadius: '2px',
                    cursor: 'pointer',
                    transition: 'background .15s ease, color .15s ease',
                    fontWeight: currentLang === code ? 600 : 400,
                    whiteSpace: 'nowrap',
                  }}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </nav>

        {/* Hamburger — mobile only */}
        <button
          className={`nav-toggle${mobileOpen ? ' open' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span />
        </button>
      </div>

      {/* Mobile Nav dropdown */}
      {mobileOpen && (
        <div style={{
          position: 'absolute', top: '100%', left: 0, right: 0,
          background: '#f5efe2',
          borderBottom: '1px solid rgba(28,26,21,.14)',
          padding: '24px',
          display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '20px',
          maxHeight: 'calc(100vh - 74px)', overflowY: 'auto',
          boxShadow: '0 16px 28px -12px rgba(28,26,21,.28)',
          zIndex: 59,
          animation: 'mobileNavIn .2s ease',
        }}>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '20px', listStyle: 'none', margin: 0, padding: 0, width: '100%' }}>
            {NAV_LINKS.map(({ to, label }) => (
              <li key={to}>
                <Link to={to} onClick={() => setMobileOpen(false)}
                  className={isCurrent(to) ? 'nav-link nav-link-mobile current' : 'nav-link nav-link-mobile'}
                  style={{
                    fontFamily: 'Inter, sans-serif', fontSize: '1rem',
                    color: isCurrent(to) ? '#123626' : '#4a453c',
                    fontWeight: isCurrent(to) ? 600 : 400,
                    textDecoration: 'none',
                    position: 'relative',
                    paddingBottom: '4px',
                    display: 'inline-block',
                  }}>
                  <span data-i18n="id">{label.id}</span>
                  <span data-i18n="en">{label.en}</span>
                  <span data-i18n="zh">{label.zh}</span>
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA button */}
          <Link to="/contact" className="btn btn-primary" onClick={() => setMobileOpen(false)}
            style={{ alignSelf: 'flex-start' }}>
            <span data-i18n="id">Minta Penawaran</span>
            <span data-i18n="en">Request a Quote</span>
            <span data-i18n="zh">索取报价</span>
          </Link>

          {/* Lang toggle — fade in when topbar scrolled away, same animation as desktop */}
          <div role="group" aria-label="Language switch" style={{
            display: 'flex', gap: '2px', alignSelf: 'flex-start',
            background: 'rgba(28,26,21,.08)', padding: scrolled ? '3px' : '0px', borderRadius: '3px',
            maxHeight: scrolled ? '40px' : '0px',
            opacity: scrolled ? 1 : 0,
            overflow: 'hidden',
            pointerEvents: scrolled ? 'auto' : 'none',
            transition: 'max-height .3s ease, opacity .25s ease, padding .3s ease',
          }}>
            {langButtons.map(({ code, label }) => (
              <button key={code} type="button" onClick={() => setLang(code)}
                aria-pressed={currentLang === code}
                style={{
                  background: currentLang === code ? '#ac1b32' : 'none',
                  border: 0,
                  color: currentLang === code ? '#fff' : '#4a453c',
                  fontFamily: 'Inter, sans-serif', fontSize: '.72rem', letterSpacing: '.06em',
                  padding: '4px 9px', borderRadius: '2px', cursor: 'pointer',
                  transition: 'background .15s ease, color .15s ease',
                  fontWeight: currentLang === code ? 600 : 400,
                  whiteSpace: 'nowrap',
                }}>
                {label}
              </button>
            ))}
          </div>
        </div>
      )}

      <style>{`
        .nav-link { display: inline-block; }
        .nav-link::after {
          content: "";
          position: absolute; left: 0; right: 0; bottom: -2px;
          height: 2px; background: #ac1b32;
          transform: scaleX(0); transform-origin: left;
          transition: transform .2s ease;
        }
        .nav-link:hover { color: #1c1a15 !important; }
        .nav-link:hover::after, .nav-link.current::after { transform: scaleX(1); }

        /* Mobile nav links — same underline effect, slightly larger bottom offset */
        .nav-link-mobile::after {
          bottom: 0px;
        }

        .nav-toggle {
          display: none !important;
          background: none; border: 0; cursor: pointer; padding: 6px;
          position: relative; z-index: 2;
        }
        .nav-toggle span,
        .nav-toggle span::before,
        .nav-toggle span::after {
          content: ""; display: block;
          width: 22px; height: 2px; background: #1c1a15;
          position: relative; transition: all .2s ease;
        }
        .nav-toggle span::before { position: absolute; top: -7px; }
        .nav-toggle span::after  { position: absolute; top:  7px; }
        .nav-toggle.open span { background: transparent; }
        .nav-toggle.open span::before { top: 0; transform: rotate(45deg);  background: #ac1b32; }
        .nav-toggle.open span::after  { top: 0; transform: rotate(-45deg); background: #ac1b32; }

        @media (max-width: 720px) {
          .desktop-nav { display: none !important; }
          .nav-toggle  { display: block !important; }
        }

        @keyframes mobileNavIn {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </header>
  );
};

export default Header;
