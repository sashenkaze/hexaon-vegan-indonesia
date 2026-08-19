import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function useReveal() {
  const ref = useRef();
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!('IntersectionObserver' in window)) { el.classList.add('in'); return; }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add('in'); io.unobserve(el); } }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    io.observe(el);
    return () => io.unobserve(el);
  }, []);
  return ref;
}

function T({ id, en, zh }) {
  return (<><span data-i18n="id">{id}</span><span data-i18n="en">{en}</span><span data-i18n="zh">{zh}</span></>);
}

const C = { greenDeep: '#123626', gold: '#c9972f', red: '#ac1b32', sand: '#f5efe2', sand2: '#ece2cb', ink: '#1c1a15', inkSoft: '#4a453c' };

const WHY_ITEMS = [
  { id: '01', title: { id: 'Rantai Pasok Terintegrasi Vertikal', en: 'Vertically Integrated Supply Chain', zh: '垂直整合供应链' }, desc: { id: 'Dari kebun langsung ke pelabuhan, menjaga keterlacakan di setiap tahap.', en: 'Plantation to port, ensuring traceability at every stage.', zh: '从种植园直达港口，全程可追溯。' } },
  { id: '02', title: { id: 'Kualitas Konsisten & Harga Ekspor Kompetitif', en: 'Consistent Quality & Competitive Export Pricing', zh: '稳定品质，具竞争力的出口价格' }, desc: { id: 'Standar mutu terjaga dengan struktur harga yang bersaing secara global.', en: 'Reliable quality standards paired with globally competitive pricing.', zh: '严格把控品质，同时保持具全球竞争力的价格。' } },
  { id: '03', title: { id: 'Sumber Bahan Berkelanjutan & Melibatkan Petani', en: 'Sustainable, Traceable, Farmer-Inclusive Sourcing', zh: '可持续、可追溯且惠及农户的采购模式' }, desc: { id: 'Model pengadaan yang memberdayakan petani lokal sekaligus menjaga kelestarian lingkungan.', en: 'A sourcing model that empowers local farmers while protecting the environment.', zh: '采购模式惠及本地农户，同时兼顾环境永续。' } },
  { id: '04', title: { id: 'Tim Perdagangan Internasional & Logistik Berpengalaman', en: 'Experienced International Trade & Logistics Team', zh: '经验丰富的国际贸易与物流团队' }, desc: { id: 'Menangani dokumentasi ekspor, pengiriman, dan koordinasi lintas negara secara end-to-end.', en: 'Handling export documentation, shipping, and cross-border coordination end-to-end.', zh: '全程处理出口文件、货运与跨国协调事务。' } },
];

const BIZ_ITEMS = [
  { num: '01', to: '/products#coconut', title: { id: 'Turunan Kelapa', en: 'Coconut Derivatives', zh: '椰子衍生品' }, desc: { id: 'Komoditas olahan kelapa untuk kebutuhan pangan & industri.', en: 'Processed coconut commodities for food and industrial use.', zh: '用于食品与工业用途的椰子加工商品。' } },
  { num: '02', to: '/products#other', title: { id: 'Ekspor Agrikultur', en: 'Agricultural Exports', zh: '农产品出口' }, desc: { id: 'Kopi, kakao, lada, pinang, dan vanili biji dari kebun Indonesia.', en: 'Coffee, cacao, pepper, betel nut, and vanilla beans from Indonesian farms.', zh: '来自印尼农场的咖啡、可可、胡椒、槟榔及香草豆。' } },
  { num: '03', to: '/products#vanilla', title: { id: 'Vanili Premium', en: 'Premium Vanilla', zh: '优质香草' }, desc: { id: 'Empat bentuk olahan untuk bakery, konfeksi, dan minuman.', en: 'Four processed forms for bakery, confectionery, and beverage use.', zh: '适用于烘焙、糖果及饮品的四种加工形态。' } },
  { num: '04', to: '/products#retail', title: { id: 'Pangan Nabati Ritel', en: 'Plant-Based Retail Foods', zh: '植物基零售食品' }, desc: { id: 'MYCHO, MYPIA, dan Bumbu Nusantara — 100% nabati.', en: 'MYCHO, MYPIA, and Bumbu Nusantara — 100% plant-based.', zh: 'MYCHO、MYPIA 与 Bumbu Nusantara——100% 纯植物。' } },
];

const FLOW_STEPS = [
  { id: '01', title: { id: 'Perkebunan', en: 'Plantation', zh: '种植园' }, desc: { id: 'Bahan baku bersumber dari jaringan kebun kelapa dan komoditas Indonesia.', en: 'Raw materials sourced from Indonesian coconut and commodity plantation networks.', zh: '原料来自印尼椰子及大宗商品种植网络。' } },
  { id: '02', title: { id: 'Pengolahan & Kendali Mutu', en: 'Processing & Quality Control', zh: '加工与质量控制' }, desc: { id: 'Diproses dan diperiksa untuk memenuhi standar konsisten sebelum dikemas.', en: 'Processed and checked to meet consistent standards before packing.', zh: '加工并检验，确保达到统一标准后再包装。' } },
  { id: '03', title: { id: 'Dokumentasi & Logistik Ekspor', en: 'Export Documentation & Logistics', zh: '出口文件与物流' }, desc: { id: 'Ditangani oleh tim perdagangan internasional kami hingga siap kirim.', en: 'Handled end-to-end by our international trade team through to shipment.', zh: '由我们的国际贸易团队全程处理，直至完成装运。' } },
  { id: '04', title: { id: 'Pembeli Global', en: 'Global Buyer', zh: '全球买家' }, desc: { id: 'Tiba di tangan mitra dan distributor di seluruh dunia.', en: 'Delivered to partners and distributors around the world.', zh: '送达全球各地的合作伙伴与分销商。' } },
];

const About = () => {
  const r1 = useReveal(), r2 = useReveal(), r3 = useReveal(), r4 = useReveal(), r5 = useReveal();

  return (
    <>
      {/* Page Hero */}
      <section style={{ background: C.greenDeep, color: '#fff', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', right: '-8%', top: '-30%', width: '520px', height: '520px', background: 'radial-gradient(circle, rgba(201,151,47,.16), transparent 70%)' }} />
        <div className="container" style={{ paddingBlock: '56px 46px', position: 'relative', zIndex: 2 }}>
          <p style={{ fontFamily: 'Inter,sans-serif', fontSize: '.74rem', color: 'rgba(245,239,226,.6)', letterSpacing: '.04em' }}>
            <Link to="/" style={{ color: 'inherit' }} onMouseEnter={e => e.target.style.color = C.gold} onMouseLeave={e => e.target.style.color = 'rgba(245,239,226,.6)'}>
              <T id="Beranda" en="Home" zh="首页" />
            </Link>
            {' / '}
            <T id="Tentang Kami" en="About Us" zh="关于我们" />
          </p>
          <span className="eyebrow on-dark" style={{ marginTop: '14px', display: 'inline-flex' }}>
            <T id="TENTANG KAMI" en="ABOUT US" zh="关于我们" />
          </span>
          <h1 style={{ color: '#fff', fontSize: 'clamp(1.9rem,3.6vw,2.7rem)', marginTop: '12px', maxWidth: '22ch' }}>
            <T id="Tentang PT Hexaon Vegan Indonesia" en="About PT Hexaon Vegan Indonesia" zh="关于 PT Hexaon Vegan Indonesia" />
          </h1>
          <p style={{ marginTop: '14px', maxWidth: '62ch', color: 'rgba(245,239,226,.82)' }}>
            <T id="Perusahaan ekspor multi-komoditas Indonesia yang menghubungkan hasil perkebunan dengan pembeli global." en="An Indonesian multi-commodity export company connecting plantation-grown goods with global buyers." zh="一家印尼多元商品出口企业，将种植园产品与全球买家紧密相连。" />
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section style={{ background: C.sand, paddingBlock: '84px' }}>
        <div className="container">
          <div ref={r1} className="reveal two-col about-reverse">
            <div className="col-media about-media">
              <div className="framed-photo">
                <img src="/assets/images/hero-plantation.jpg" alt="Coconut palm plantation" style={{ aspectRatio: '4/3', objectFit: 'cover' }} />
              </div>
            </div>
            <div className="col-copy">
              <span className="eyebrow"><T id="IKHTISAR PERUSAHAAN" en="COMPANY OVERVIEW" zh="公司概况" /></span>
              <h2 style={{ marginTop: '14px' }}>
                <T id="Multi-Bidang, Berpijak pada Keberlanjutan" en="Diversified, Built on Sustainability" zh="多元发展，践行可持续理念" />
              </h2>
              <p style={{ marginTop: '18px', color: C.inkSoft }}>
                <T id="PT Hexaon Vegan Indonesia (HVI) adalah perusahaan multi-bidang asal Indonesia yang berpijak pada prinsip keberlanjutan — menghubungkan komoditas hasil perkebunan dengan pasar global melalui empat lini utama: turunan kelapa, ekspor produk agrikultur, buah segar, dan pangan berbasis nabati." en="PT Hexaon Vegan Indonesia (HVI) is a diversified Indonesian enterprise built on sustainability — connecting plantation-grown commodities with global markets across coconut derivatives, agricultural exports, fresh fruit, and plant-based food products." zh="PT Hexaon Vegan Indonesia (HVI) 是一家立足印尼、践行可持续发展理念的多元化企业——通过椰子衍生品、农产品出口、新鲜水果及植物基食品等板块，将种植园商品与全球市场紧密相连。" />
              </p>
              <p style={{ marginTop: '16px', color: C.inkSoft }}>
                <T id="Bisnis kami berpusat pada penghubungan produsen perkebunan Indonesia dengan pembeli internasional, dengan standar mutu dan kapasitas pasokan yang dijaga secara konsisten di setiap lini produk." en="Our business is centred on linking Indonesian plantation producers with international buyers, maintaining consistent quality standards and supply capacity across every product line." zh="我们专注于将印尼种植园生产者与国际买家紧密连接，并在每条产品线中持续保持稳定的品质标准与供应能力。" />
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Market Context */}
      <section style={{ background: C.greenDeep, color: '#fff', paddingBlock: '84px' }}>
        <div className="container">
          <div ref={r2} className="reveal section-head" style={{ marginBottom: '8px' }}>
            <span className="eyebrow on-dark"><T id="KONTEKS PASAR" en="MARKET CONTEXT" zh="市场概况" /></span>
            <h2 style={{ color: '#fff' }}><T id="Peluang di Pasar Kelapa Global" en="Opportunity in the Global Coconut Market" zh="全球椰子市场的发展机遇" /></h2>
          </div>
          <div className="stat-grid" style={{ marginTop: '32px' }}>
            {[
              { num: 'No. 2', label: { id: 'Produsen Kelapa Terbesar ke-2 Dunia', en: "World's 2nd Largest Coconut-Producing Nation", zh: '全球第二大椰子生产国' } },
              { num: 'USD 15–30 Bn', label: { id: 'Nilai Pasar Global Produk Kelapa (2025)', en: 'Global Coconut Products Market Value (2025)', zh: '2025年全球椰子产品市场规模' } },
              { num: '6–10%', label: { id: 'Proyeksi CAGR hingga Awal 2030-an', en: 'Projected CAGR through the Early 2030s', zh: '预计到2030年代初复合年增长率' } },
            ].map((s, i) => (
              <div key={i} className="stat-item">
                <div style={{ fontFamily: 'Inter,sans-serif', fontSize: 'clamp(1.8rem,3vw,2.5rem)', fontWeight: 700, color: C.gold, lineHeight: 1 }}>{s.num}</div>
                <div style={{ marginTop: '10px', fontFamily: 'Inter,sans-serif', fontSize: '.76rem', letterSpacing: '.05em', color: 'rgba(245,239,226,.78)' }}>
                  <T id={s.label.id} en={s.label.en} zh={s.label.zh} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supply Chain Flow */}
      <section style={{ background: C.sand, paddingBlock: '84px' }}>
        <div className="container">
          <div ref={r3} className="reveal section-head">
            <span className="eyebrow"><T id="RANTAI PASOK" en="SUPPLY CHAIN" zh="供应链" /></span>
            <h2><T id="Terintegrasi Vertikal — Kebun ke Pelabuhan" en="Vertically Integrated — Plantation to Port" zh="垂直整合 — 从种植园到港口" /></h2>
          </div>
          <div className="flow">
            {FLOW_STEPS.map((s, i) => (
              <div key={s.id} className="flow-step" style={i === 0 ? { borderLeft: 0 } : {}}>
                <span className="doc-num" style={{ display: 'block', marginBottom: '10px' }}>{s.id}</span>
                <h4 style={{ fontSize: '.98rem' }}><T id={s.title.id} en={s.title.en} zh={s.title.zh} /></h4>
                <p style={{ marginTop: '6px', fontSize: '.85rem', color: C.inkSoft }}>
                  <T id={s.desc.id} en={s.desc.en} zh={s.desc.zh} />
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose HVI */}
      <section style={{ background: C.greenDeep, color: C.sand, paddingBlock: '84px' }}>
        <div className="container">
          <div ref={r4} className="reveal section-head">
            <span className="eyebrow on-dark"><T id="KOMITMEN KAMI" en="OUR COMMITMENT" zh="我们的承诺" /></span>
            <h2 style={{ color: '#fff' }}><T id="Mengapa Mitra Global Memilih HVI" en="Why Global Partners Choose HVI" zh="全球伙伴为何选择 HVI" /></h2>
          </div>
          <div className="manifest-list" style={{ borderTopColor: 'rgba(245,239,226,.2)' }}>
            {WHY_ITEMS.map(item => (
              <div key={item.id} className="manifest-row" style={{ borderBottomColor: 'rgba(245,239,226,.2)' }}>
                <span className="doc-num" style={{ fontSize: '1rem', paddingTop: '2px' }}>{item.id}</span>
                <div>
                  <h4 style={{ color: '#fff', fontSize: '1.05rem', marginBottom: '6px' }}><T id={item.title.id} en={item.title.en} zh={item.title.zh} /></h4>
                  <p style={{ color: 'rgba(245,239,226,.78)', fontSize: '.94rem', maxWidth: '60ch' }}><T id={item.desc.id} en={item.desc.en} zh={item.desc.zh} /></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Lines */}
      <section style={{ background: C.sand2, paddingBlock: '84px' }}>
        <div className="container">
          <div ref={r5} className="reveal section-head">
            <span className="eyebrow"><T id="LINI BISNIS" en="BUSINESS LINES" zh="业务板块" /></span>
            <h2><T id="Empat Pilar Bisnis HVI" en="Four Pillars of HVI's Business" zh="HVI 四大业务支柱" /></h2>
          </div>
        </div>
        <div className="container" style={{ padding: 0 }}>
          <div className="cat-grid">
            {BIZ_ITEMS.map(c => (
              <Link key={c.to} to={c.to} className="cat-card">
                <span className="doc-num">{c.num}</span>
                <h3><T id={c.title.id} en={c.title.en} zh={c.title.zh} /></h3>
                <p style={{ color: C.inkSoft, fontSize: '.9rem' }}><T id={c.desc.id} en={c.desc.en} zh={c.desc.zh} /></p>
                <span style={{ marginTop: 'auto', fontFamily: 'Inter,sans-serif', fontSize: '.74rem', color: C.red, letterSpacing: '.04em' }}>
                  <T id="Lihat produk →" en="View products →" zh="查看产品 →" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section style={{ background: C.red, color: '#fff', paddingBlock: 0 }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px', flexWrap: 'wrap', paddingBlock: '46px' }}>
          <div>
            <h3 style={{ color: '#fff', fontSize: '1.5rem', maxWidth: '26ch' }}><T id="Ingin Bermitra dengan HVI?" en="Interested in Partnering with HVI?" zh="有兴趣与 HVI 合作吗？" /></h3>
            <p style={{ marginTop: '8px', color: 'rgba(255,255,255,.84)' }}><T id="Diskusikan kebutuhan sumber komoditas Anda dengan tim kami." en="Discuss your commodity sourcing needs with our team." zh="与我们的团队探讨您的商品采购需求。" /></p>
          </div>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <a href="https://wa.me/62811179804" target="_blank" rel="noopener" className="btn" style={{ background: '#fff', color: C.red }}>WhatsApp</a>
            <Link to="/contact" className="btn btn-outline" style={{ color: '#fff', borderColor: 'rgba(255,255,255,.55)' }}><T id="Hubungi Kami" en="Contact Us" zh="联系我们" /></Link>
          </div>
        </div>
      </section>

      <style>{`
        .stat-grid { display:grid; grid-template-columns:repeat(3,1fr); }
        .stat-item { padding:30px 28px; border-left:1px solid rgba(245,239,226,.16); }
        .stat-item:first-child { border-left:0; }

        .two-col { display:grid; grid-template-columns:1.05fr .95fr; gap:56px; align-items:center; }
        .about-reverse { grid-template-columns:.95fr 1.05fr; }
        .about-media { order:2; }

        .flow { display:grid; grid-template-columns:repeat(4,1fr); position:relative; }
        .flow-step { padding:26px 22px; border-left:1.5px dotted rgba(28,26,21,.14); }
        .flow-step h4 { font-size:.98rem; color:#123626; }

        .cat-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:1px; background:rgba(28,26,21,0.14); border:1px solid rgba(28,26,21,0.14); }
        .cat-card { background:#f5efe2; padding:30px 24px; display:flex; flex-direction:column; gap:14px; min-height:210px; text-decoration:none; transition:background .18s ease; }
        .cat-card:hover { background:#ece2cb; }
        .cat-card h3 { font-size:1.08rem; color:#123626; margin:0; }

        .manifest-list { border-top:1.5px dotted rgba(28,26,21,0.14); }
        .manifest-row { display:grid; grid-template-columns:64px 1fr; gap:24px; padding-block:26px; border-bottom:1.5px dotted rgba(28,26,21,0.14); }

        @media (max-width:1020px) {
          .stat-grid { grid-template-columns:1fr; }
          .stat-item { border-left:0; border-top:1px solid rgba(245,239,226,.16); }
          .stat-item:first-child { border-top:0; }
          .two-col, .about-reverse { grid-template-columns:1fr; }
          .about-media { order:-1; }
          .cat-grid { grid-template-columns:repeat(2,1fr); }
          .flow { grid-template-columns:repeat(2,1fr); }
          .flow-step:nth-child(3) { border-left:0; }
        }
        @media (max-width:720px) {
          .cat-grid { grid-template-columns:1fr; }
          .flow { grid-template-columns:1fr; }
          .flow-step { border-left:0; border-top:1.5px dotted rgba(28,26,21,.14); }
          .flow-step:first-child { border-top:0; }
        }
      `}</style>
    </>
  );
};

export default About;
