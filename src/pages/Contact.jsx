import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
  const { currentLang } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    product: 'Coconut-Derived Commodities',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const subject = `Export Inquiry - ${formData.company || formData.name || 'New Inquiry'}`;
    const bodyLines = [
      `Name: ${formData.name}`,
      `Company: ${formData.company}`,
      `Email: ${formData.email}`,
      `Product interest: ${formData.product}`,
      '',
      formData.message
    ];
    
    const mailto = `mailto:zengroeddy.backup@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join('\n'))}`;
    window.location.href = mailto;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const getPlaceholder = (field) => {
    const placeholders = {
      name: {
        id: 'Nama lengkap',
        en: 'Full name',
        zh: '您的姓名'
      },
      company: {
        id: 'Nama perusahaan',
        en: 'Company name',
        zh: '公司名称'
      },
      email: {
        id: 'email@perusahaan.com',
        en: 'email@company.com',
        zh: 'email@company.com'
      },
      message: {
        id: 'Ceritakan kebutuhan produk, estimasi volume, dan negara tujuan Anda.',
        en: 'Tell us about your product needs, estimated volume, and destination country.',
        zh: '请告诉我们您的产品需求、预估数量及目的地国家。'
      }
    };
    return placeholders[field][currentLang] || placeholders[field].en;
  };

  return (
    <>
      {/* Page Hero */}
      <section className="bg-green-deep text-white relative overflow-hidden">
        <div 
          className="absolute -right-[8%] -top-[30%] w-[520px] h-[520px] opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(201,151,47,.16), transparent 70%)'
          }}
        />
        <div className="container py-14 relative z-10">
          <div className="font-mono text-xs text-sand/60 tracking-wide">
            <Link to="/" className="hover:text-gold">
              <span data-i18n="id">Beranda</span>
              <span data-i18n="en">Home</span>
              <span data-i18n="zh">首页</span>
            </Link>
            &nbsp;/&nbsp; 
            <span data-i18n="id">Kontak</span>
            <span data-i18n="en">Contact</span>
            <span data-i18n="zh">联系我们</span>
          </div>
          <span className="eyebrow on-dark mt-4 inline-flex">
            <span data-i18n="id">HUBUNGI KAMI</span>
            <span data-i18n="en">CONTACT</span>
            <span data-i18n="zh">联系我们</span>
          </span>
          <h1 className="text-white text-4xl lg:text-5xl mt-3">
            <span data-i18n="id">Mari Membangun Kemitraan Ekspor</span>
            <span data-i18n="en">Let's Build an Export Partnership</span>
            <span data-i18n="zh">携手共建出口合作</span>
          </h1>
          <p className="mt-4 max-w-[62ch] text-sand/82">
            <span data-i18n="id">Hubungi tim HVI untuk katalog produk, harga, dan informasi kapasitas ekspor.</span>
            <span data-i18n="en">Reach out to the HVI team for product catalogues, pricing, and export capacity information.</span>
            <span data-i18n="zh">联系 HVI 团队，获取产品目录、报价及出口产能信息。</span>
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-sand py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-14">
            
            {/* Contact Info */}
            <div className="space-y-5">
              <div className="bg-white border border-line p-8">
                <span className="eyebrow">01</span>
                <h4 className="mt-2.5 text-base">
                  <span data-i18n="id">WhatsApp / Telepon</span>
                  <span data-i18n="en">WhatsApp / Phone</span>
                  <span data-i18n="zh">WhatsApp / 电话</span>
                </h4>
                <div className="mt-2 font-mono text-lg text-green-deep">
                  <a href="https://wa.me/62811179804" target="_blank" rel="noopener">
                    +62 811 179 804
                  </a>
                </div>
                <p className="mt-2 text-ink-soft text-sm">
                  <span data-i18n="id">Cara tercepat untuk menghubungi tim kami.</span>
                  <span data-i18n="en">The fastest way to reach our team.</span>
                  <span data-i18n="zh">联系我们团队最快捷的方式。</span>
                </p>
              </div>

              <div className="bg-white border border-line p-8">
                <span className="eyebrow">02</span>
                <h4 className="mt-2.5 text-base">
                  <span data-i18n="id">Email</span>
                  <span data-i18n="en">Email</span>
                  <span data-i18n="zh">电子邮箱</span>
                </h4>
                <div className="mt-2 font-mono text-lg text-green-deep">
                  <a href="mailto:zengroeddy.backup@gmail.com">
                    zengroeddy.backup@gmail.com
                  </a>
                </div>
                <p className="mt-2 text-ink-soft text-sm">
                  <span data-i18n="id">Untuk permintaan katalog, harga, dan dokumen ekspor.</span>
                  <span data-i18n="en">For catalogue requests, pricing, and export documentation.</span>
                  <span data-i18n="zh">用于索取产品目录、报价及出口文件。</span>
                </p>
              </div>

              <div className="bg-white border border-line p-8">
                <span className="eyebrow">03</span>
                <h4 className="mt-2.5 text-base">
                  <span data-i18n="id">Lokasi</span>
                  <span data-i18n="en">Location</span>
                  <span data-i18n="zh">所在地</span>
                </h4>
                <div className="mt-2 font-mono text-lg text-green-deep">
                  <span data-i18n="id">Indonesia</span>
                  <span data-i18n="en">Indonesia</span>
                  <span data-i18n="zh">印度尼西亚</span>
                </div>
                <p className="mt-2 text-ink-soft text-sm">
                  <span data-i18n="id">Mengekspor komoditas perkebunan Indonesia ke pembeli global.</span>
                  <span data-i18n="en">Exporting Indonesian plantation commodities to global buyers.</span>
                  <span data-i18n="zh">将印尼种植园商品出口至全球买家。</span>
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white border border-line p-8">
              <span className="eyebrow">
                <span data-i18n="id">FORMULIR PERMINTAAN</span>
                <span data-i18n="en">INQUIRY FORM</span>
                <span data-i18n="zh">询价表单</span>
              </span>
              <h3 className="mt-3 text-xl">
                <span data-i18n="id">Kirim Permintaan Anda</span>
                <span data-i18n="en">Send Your Inquiry</span>
                <span data-i18n="zh">发送您的询价</span>
              </h3>

              <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-mono text-xs tracking-wider uppercase text-ink-soft mb-2">
                      <span data-i18n="id">Nama</span>
                      <span data-i18n="en">Name</span>
                      <span data-i18n="zh">姓名</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={getPlaceholder('name')}
                      className="w-full border border-line bg-white px-4 py-3 text-sm text-ink rounded-sm focus:outline-2 focus:outline-green focus:outline-offset-1 focus:border-green"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-xs tracking-wider uppercase text-ink-soft mb-2">
                      <span data-i18n="id">Perusahaan</span>
                      <span data-i18n="en">Company</span>
                      <span data-i18n="zh">公司名称</span>
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder={getPlaceholder('company')}
                      className="w-full border border-line bg-white px-4 py-3 text-sm text-ink rounded-sm focus:outline-2 focus:outline-green focus:outline-offset-1 focus:border-green"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-xs tracking-wider uppercase text-ink-soft mb-2">
                    <span data-i18n="id">Email</span>
                    <span data-i18n="en">Email</span>
                    <span data-i18n="zh">电子邮箱</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={getPlaceholder('email')}
                    className="w-full border border-line bg-white px-4 py-3 text-sm text-ink rounded-sm focus:outline-2 focus:outline-green focus:outline-offset-1 focus:border-green"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs tracking-wider uppercase text-ink-soft mb-2">
                    <span data-i18n="id">Produk yang Diminati</span>
                    <span data-i18n="en">Product of Interest</span>
                    <span data-i18n="zh">感兴趣的产品</span>
                  </label>
                  <select
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                    className="w-full border border-line bg-white px-4 py-3 text-sm text-ink rounded-sm focus:outline-2 focus:outline-green focus:outline-offset-1 focus:border-green"
                  >
                    <option value="Coconut-Derived Commodities">
                      <span data-i18n="id">Komoditas Turunan Kelapa</span>
                      <span data-i18n="en">Coconut-Derived Commodities</span>
                      <span data-i18n="zh">椰子衍生商品</span>
                    </option>
                    <option value="Other Export Commodities">
                      <span data-i18n="id">Komoditas Ekspor Lainnya</span>
                      <span data-i18n="en">Other Export Commodities</span>
                      <span data-i18n="zh">其他出口商品</span>
                    </option>
                    <option value="Vanilla Product Line">
                      <span data-i18n="id">Lini Produk Vanili</span>
                      <span data-i18n="en">Vanilla Product Line</span>
                      <span data-i18n="zh">香草产品系列</span>
                    </option>
                    <option value="Retail Brands">
                      <span data-i18n="id">Merek Ritel</span>
                      <span data-i18n="en">Retail Brands</span>
                      <span data-i18n="zh">零售品牌</span>
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block font-mono text-xs tracking-wider uppercase text-ink-soft mb-2">
                    <span data-i18n="id">Pesan</span>
                    <span data-i18n="en">Message</span>
                    <span data-i18n="zh">留言</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={getPlaceholder('message')}
                    className="w-full border border-line bg-white px-4 py-3 text-sm text-ink rounded-sm resize-vertical min-h-[120px] focus:outline-2 focus:outline-green focus:outline-offset-1 focus:border-green"
                  />
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary w-full justify-center"
                >
                  <span data-i18n="id">Kirim Permintaan</span>
                  <span data-i18n="en">Send Inquiry</span>
                  <span data-i18n="zh">提交询价</span>
                </button>
                
                <p className="mt-4 text-sm text-ink-soft">
                  <span data-i18n="id">Tombol ini akan membuka aplikasi email Anda dengan pesan yang sudah terisi otomatis.</span>
                  <span data-i18n="en">This button opens your email app with the message pre-filled.</span>
                  <span data-i18n="zh">点击后将打开您的邮件应用，并自动填入相关信息。</span>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="bg-red text-white py-0">
        <div className="container flex items-center justify-between gap-6 flex-wrap py-12">
          <div>
            <h3 className="text-white text-2xl max-w-[26ch]">
              <span data-i18n="id">Lebih Suka Chat Langsung?</span>
              <span data-i18n="en">Prefer to Chat Directly?</span>
              <span data-i18n="zh">更希望直接聊聊？</span>
            </h3>
            <p className="mt-2 text-white/84">
              <span data-i18n="id">Sapa tim kami di WhatsApp — biasanya kami merespons dengan cepat.</span>
              <span data-i18n="en">Say hello to our team on WhatsApp — we typically respond promptly.</span>
              <span data-i18n="zh">通过 WhatsApp 联系我们的团队——我们通常会尽快回复。</span>
            </p>
          </div>
          <div>
            <a 
              href="https://wa.me/62811179804" 
              target="_blank" 
              rel="noopener"
              className="btn"
              style={{background: '#fff', color: '#ac1b32'}}
            >
              <span data-i18n="id">Chat di WhatsApp</span>
              <span data-i18n="en">Chat on WhatsApp</span>
              <span data-i18n="zh">通过 WhatsApp 聊天</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;