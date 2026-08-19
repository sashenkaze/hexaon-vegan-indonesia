import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer style={{ background: '#123626', color: 'rgba(245,239,226,.82)' }}>
    <div className="container" style={{
      display: 'grid',
      gridTemplateColumns: '1.3fr 1fr 1fr 1.1fr',
      gap: '40px',
      paddingBlock: '62px 40px',
    }}>
      {/* Brand */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#fff', fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '1.02rem', lineHeight: 1.15 }}>
          <img src="/assets/images/logo-icon.png" alt="" style={{ height: '34px', width: 'auto' }} />
          HEXAON VEGAN INDONESIA
        </div>
        <p style={{ marginTop: '16px', fontSize: '.88rem', color: 'rgba(245,239,226,.68)', maxWidth: '34ch' }}>
          <span data-i18n="id">Mitra ekspor komoditas &amp; produk olahan dari Indonesia untuk pasar global.</span>
          <span data-i18n="en">Indonesia's export partner for plantation commodities and processed retail products, for global markets.</span>
          <span data-i18n="zh">印尼商品与加工零售产品出口伙伴，服务全球市场。</span>
        </p>
      </div>

      {/* Quick Links */}
      <div>
        <h5 style={{ fontFamily: 'Inter, sans-serif', fontSize: '.72rem', letterSpacing: '.1em', textTransform: 'uppercase', color: '#c9972f', marginBottom: '16px', fontWeight: 600 }}>
          <span data-i18n="id">Tautan</span><span data-i18n="en">Quick Links</span><span data-i18n="zh">快速链接</span>
        </h5>
        <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
          {[
            { to: '/', id: 'Beranda', en: 'Home', zh: '首页' },
            { to: '/about', id: 'Tentang Kami', en: 'About Us', zh: '关于我们' },
            { to: '/products', id: 'Produk', en: 'Products', zh: '产品' },
            { to: '/contact', id: 'Kontak', en: 'Contact', zh: '联系我们' },
          ].map(l => (
            <li key={l.to} style={{ marginBottom: '10px' }}>
              <Link to={l.to} className="footer-link" style={{ fontSize: '.88rem', color: 'rgba(245,239,226,.82)', textDecoration: 'none' }}>
                <span data-i18n="id">{l.id}</span><span data-i18n="en">{l.en}</span><span data-i18n="zh">{l.zh}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Product Categories */}
      <div>
        <h5 style={{ fontFamily: 'Inter, sans-serif', fontSize: '.72rem', letterSpacing: '.1em', textTransform: 'uppercase', color: '#c9972f', marginBottom: '16px', fontWeight: 600 }}>
          <span data-i18n="id">Kategori Produk</span><span data-i18n="en">Product Categories</span><span data-i18n="zh">产品类别</span>
        </h5>
        <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
          {[
            { to: '/products#coconut', id: 'Turunan Kelapa', en: 'Coconut Derivatives', zh: '椰子衍生品' },
            { to: '/products#other', id: 'Komoditas Lainnya', en: 'Other Commodities', zh: '其他商品' },
            { to: '/products#vanilla', id: 'Lini Vanili', en: 'Vanilla Line', zh: '香草系列' },
            { to: '/products#retail', id: 'Merek Ritel', en: 'Retail Brands', zh: '零售品牌' },
          ].map(l => (
            <li key={l.to} style={{ marginBottom: '10px' }}>
              <Link to={l.to} className="footer-link" style={{ fontSize: '.88rem', color: 'rgba(245,239,226,.82)', textDecoration: 'none' }}>
                <span data-i18n="id">{l.id}</span><span data-i18n="en">{l.en}</span><span data-i18n="zh">{l.zh}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact */}
      <div>
        <h5 style={{ fontFamily: 'Inter, sans-serif', fontSize: '.72rem', letterSpacing: '.1em', textTransform: 'uppercase', color: '#c9972f', marginBottom: '16px', fontWeight: 600 }}>
          <span data-i18n="id">Kontak</span><span data-i18n="en">Get in Touch</span><span data-i18n="zh">联系方式</span>
        </h5>
        <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
          <li style={{ marginBottom: '10px' }}>
            <a href="https://wa.me/62811179804" target="_blank" rel="noopener" className="footer-link" style={{ fontSize: '.88rem', color: 'rgba(245,239,226,.82)' }}>
              +62 811 179 804
            </a>
          </li>
          <li style={{ marginBottom: '10px' }}>
            <a href="mailto:zengroeddy.backup@gmail.com" className="footer-link" style={{ fontSize: '.88rem', color: 'rgba(245,239,226,.82)' }}>
              zengroeddy.backup@gmail.com
            </a>
          </li>
          <li style={{ fontSize: '.88rem' }}>
            <span data-i18n="id">Indonesia</span><span data-i18n="en">Indonesia</span><span data-i18n="zh">印度尼西亚</span>
          </li>
        </ul>
      </div>
    </div>

    {/* Footer bottom */}
    <div className="container" style={{
      borderTop: '1px solid rgba(245,239,226,.15)',
      paddingBlock: '20px',
      fontFamily: 'Inter, sans-serif',
      fontSize: '.72rem',
      color: 'rgba(245,239,226,.55)',
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '10px',
    }}>
      <span>
        © 2026 PT Hexaon Vegan Indonesia.{' '}
        <span data-i18n="id">Hak cipta dilindungi.</span>
        <span data-i18n="en">All rights reserved.</span>
        <span data-i18n="zh">版权所有。</span>
      </span>
      <span>
        <span data-i18n="id">Dosier Ekspor · Indonesia</span>
        <span data-i18n="en">Export Dossier · Indonesia</span>
        <span data-i18n="zh">出口档案 · 印度尼西亚</span>
      </span>
    </div>

    <style>{`
      .footer-link:hover { color: #fff !important; }
      @media (max-width: 1020px) {
        .footer-grid { grid-template-columns: 1fr 1fr !important; }
      }
      @media (max-width: 720px) {
        .footer-grid { grid-template-columns: 1fr !important; paddingBlock: 46px 30px !important; }
      }
    `}</style>
  </footer>
);

export default Footer;
