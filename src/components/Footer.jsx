import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer style={{ background: '#123626', color: 'rgba(245,239,226,.82)' }}>
    <div className="container footer-top-grid">
      {/* Brand */}
      <div>
        <div className="footer-brand-name">
          <img src={`${import.meta.env.BASE_URL}assets/images/logo-icon.png`} alt="" style={{ height: '30px', width: 'auto', flexShrink: 0 }} />
          <span>HEXAON VEGAN INDONESIA</span>
        </div>
        <p style={{ marginTop: '14px', fontSize: '.88rem', color: 'rgba(245,239,226,.68)', maxWidth: '34ch', wordBreak: 'break-word' }}>
          <span data-i18n="id">Mitra ekspor komoditas &amp; produk olahan dari Indonesia untuk pasar global.</span>
          <span data-i18n="en">Indonesia's export partner for plantation commodities and processed retail products, for global markets.</span>
          <span data-i18n="zh">印尼商品与加工零售产品出口伙伴，服务全球市场。</span>
        </p>
      </div>

      {/* Quick Links */}
      <div>
        <h5 className="footer-col-title">
          <span data-i18n="id">Tautan</span>
          <span data-i18n="en">Quick Links</span>
          <span data-i18n="zh">快速链接</span>
        </h5>
        <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
          {[
            { to: '/',         id: 'Beranda',      en: 'Home',     zh: '首页' },
            { to: '/about',    id: 'Tentang Kami', en: 'About Us', zh: '关于我们' },
            { to: '/products', id: 'Produk',       en: 'Products', zh: '产品' },
            { to: '/contact',  id: 'Kontak',       en: 'Contact',  zh: '联系我们' },
          ].map(l => (
            <li key={l.to} style={{ marginBottom: '10px' }}>
              <Link to={l.to} className="footer-link" style={{ fontSize: '.88rem', color: 'rgba(245,239,226,.82)', textDecoration: 'none' }}>
                <span data-i18n="id">{l.id}</span>
                <span data-i18n="en">{l.en}</span>
                <span data-i18n="zh">{l.zh}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Product Categories */}
      <div>
        <h5 className="footer-col-title">
          <span data-i18n="id">Kategori Produk</span>
          <span data-i18n="en">Product Categories</span>
          <span data-i18n="zh">产品类别</span>
        </h5>
        <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
          {[
            { to: '/products#coconut', id: 'Turunan Kelapa',     en: 'Coconut Derivatives', zh: '椰子衍生品' },
            { to: '/products#other',   id: 'Komoditas Lainnya',  en: 'Other Commodities',   zh: '其他商品' },
            { to: '/products#vanilla', id: 'Lini Vanili',        en: 'Vanilla Line',        zh: '香草系列' },
            { to: '/products#retail',  id: 'Merek Ritel',        en: 'Retail Brands',       zh: '零售品牌' },
          ].map(l => (
            <li key={l.to} style={{ marginBottom: '10px' }}>
              <Link to={l.to} className="footer-link" style={{ fontSize: '.88rem', color: 'rgba(245,239,226,.82)', textDecoration: 'none' }}>
                <span data-i18n="id">{l.id}</span>
                <span data-i18n="en">{l.en}</span>
                <span data-i18n="zh">{l.zh}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact */}
      <div>
        <h5 className="footer-col-title">
          <span data-i18n="id">Kontak</span>
          <span data-i18n="en">Get in Touch</span>
          <span data-i18n="zh">联系方式</span>
        </h5>
        <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
          <li style={{ marginBottom: '10px' }}>
            <a href="https://wa.me/62811179804" target="_blank" rel="noopener"
              className="footer-link"
              style={{ fontSize: '.88rem', color: 'rgba(245,239,226,.82)', textDecoration: 'none', wordBreak: 'break-all' }}>
              +62 811 179 804
            </a>
          </li>
          <li style={{ marginBottom: '10px' }}>
            <a href="mailto:zengroeddy.backup@gmail.com"
              className="footer-link"
              style={{ fontSize: '.88rem', color: 'rgba(245,239,226,.82)', textDecoration: 'none', wordBreak: 'break-all' }}>
              zengroeddy.backup@gmail.com
            </a>
          </li>
          <li style={{ fontSize: '.88rem' }}>
            <span data-i18n="id">Indonesia</span>
            <span data-i18n="en">Indonesia</span>
            <span data-i18n="zh">印度尼西亚</span>
          </li>
        </ul>
      </div>
    </div>

    {/* Footer bottom */}
    <div className="container footer-bottom">
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

      .footer-brand-name {
        display: flex;
        align-items: center;
        gap: 10px;
        color: #fff;
        font-family: Inter, sans-serif;
        font-weight: 700;
        font-size: .95rem;
        line-height: 1.2;
        word-break: break-word;
      }

      .footer-col-title {
        font-family: Inter, sans-serif;
        font-size: .72rem;
        letter-spacing: .1em;
        text-transform: uppercase;
        color: #c9972f;
        margin: 0 0 16px 0;
        font-weight: 600;
      }

      .footer-top-grid {
        display: grid;
        grid-template-columns: 1.3fr 1fr 1fr 1.1fr;
        gap: 40px;
        padding-block: 62px 40px;
      }

      .footer-bottom {
        border-top: 1px solid rgba(245,239,226,.15);
        padding-block: 20px;
        font-family: Inter, sans-serif;
        font-size: .72rem;
        color: rgba(245,239,226,.55);
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 10px;
      }

      /* Tablet */
      @media (max-width: 1020px) {
        .footer-top-grid {
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          padding-block: 48px 32px;
        }
      }

      /* Mobile */
      @media (max-width: 600px) {
        .footer-top-grid {
          grid-template-columns: 1fr;
          gap: 28px;
          padding-block: 40px 28px;
        }
        .footer-brand-name {
          font-size: .85rem;
        }
        .footer-bottom {
          flex-direction: column;
          gap: 6px;
        }
      }
    `}</style>
  </footer>
);

export default Footer;
