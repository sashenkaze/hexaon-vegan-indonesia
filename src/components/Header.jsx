import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NAV_LINKS = [
  { to: '/', label: { id: 'Beranda', en: 'Home', zh: '首页' } },
  { to: '/about', label: { id: 'Tentang Kami', en: 'About Us', zh: '关于我们' } },
  { to: '/products', label: { id: 'Produk', en: 'Products', zh: '产品' } },
  { to: '/contact', label: { id: 'Kontak', en: 'Contact', zh: '联系我们' } },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isCurrent = (to) => location.pathname === to;

  return (
    <header style={{
      background: '#f5efe2',
      borderBottom: '1px solid rgba(28,26,21,.14)',
      position: 'sticky', top: 0, zIndex: 60,
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBlock: '14px', gap: '20px', position: 'relative' }}>

        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <img src="/assets/images/logo-lockup.png" alt="PT Hexaon Vegan Indonesia logo" style={{ height: '46px', width: 'auto' }} />
        </Link>

        {/* Desktop Nav */}
        <nav aria-label="Primary" style={{
          display: 'flex', alignItems: 'center', gap: '34px',
          ...(open ? {} : {}),
        }} className="desktop-nav">
          <ul style={{ display: 'flex', gap: '30px', listStyle: 'none', margin: 0, padding: 0 }}>
            {NAV_LINKS.map(({ to, label }) => (
              <li key={to} className="nav-item">
                <Link
                  to={to}
                  onClick={() => setOpen(false)}
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
                  className={isCurrent(to) ? 'nav-link current' : 'nav-link'}
                >
                  <span data-i18n="id">{label.id}</span>
                  <span data-i18n="en">{label.en}</span>
                  <span data-i18n="zh">{label.zh}</span>
                </Link>
              </li>
            ))}
          </ul>
          <Link to="/contact" className="btn btn-primary" onClick={() => setOpen(false)}>
            <span data-i18n="id">Minta Penawaran</span>
            <span data-i18n="en">Request a Quote</span>
            <span data-i18n="zh">索取报价</span>
          </Link>
        </nav>

        {/* Hamburger */}
        <button
          className={`nav-toggle${open ? ' open' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          style={{
            display: 'none',
            background: 'none', border: 0, cursor: 'pointer', padding: '6px',
            position: 'relative', zIndex: 2,
          }}
        >
          <span></span>
        </button>
      </div>

      {/* Mobile Nav */}
      {open && (
        <nav aria-label="Primary mobile" style={{
          position: 'absolute', top: '100%', left: 0, right: 0,
          background: '#f5efe2',
          borderBottom: '1px solid rgba(28,26,21,.14)',
          display: 'flex', flexDirection: 'column', alignItems: 'flex-start',
          padding: '24px', gap: '24px',
          maxHeight: 'calc(100vh - 64px)', overflowY: 'auto',
          boxShadow: '0 16px 28px -12px rgba(28,26,21,.28)',
          zIndex: 59,
        }}>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%', listStyle: 'none', margin: 0, padding: 0 }}>
            {NAV_LINKS.map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  onClick={() => setOpen(false)}
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '1rem',
                    letterSpacing: '.03em',
                    color: isCurrent(to) ? '#123626' : '#4a453c',
                    fontWeight: isCurrent(to) ? 600 : 400,
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
          <Link to="/contact" className="btn btn-primary" onClick={() => setOpen(false)}>
            <span data-i18n="id">Minta Penawaran</span>
            <span data-i18n="en">Request a Quote</span>
            <span data-i18n="zh">索取报价</span>
          </Link>
        </nav>
      )}

      <style>{`
        .nav-link::after {
          content: "";
          position: absolute;
          left: 0; right: 0; bottom: -2px;
          height: 2px;
          background: #ac1b32;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform .2s ease;
        }
        .nav-link:hover { color: #1c1a15 !important; }
        .nav-link:hover::after { transform: scaleX(1); }
        .nav-link.current::after { transform: scaleX(1); }

        .nav-toggle { display: none !important; }
        @media (max-width: 720px) {
          .desktop-nav { display: none !important; }
          .nav-toggle { display: block !important; }
        }
        .nav-toggle span,
        .nav-toggle span::before,
        .nav-toggle span::after {
          content: "";
          display: block;
          width: 22px; height: 2px;
          background: #1c1a15;
          position: relative;
          transition: all .2s ease;
        }
        .nav-toggle span::before { position: absolute; top: -7px; }
        .nav-toggle span::after  { position: absolute; top: 7px; }
        .nav-toggle.open span { background: transparent; }
        .nav-toggle.open span::before { top: 0; transform: rotate(45deg); background: #ac1b32; }
        .nav-toggle.open span::after  { top: 0; transform: rotate(-45deg); background: #ac1b32; }
      `}</style>
    </header>
  );
};

export default Header;
