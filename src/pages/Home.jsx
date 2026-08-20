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

const C = {
  ink: '#1c1a15',
  inkSoft: '#4a453c',
  greenDeep: '#123626',
  green: '#2c7a4b',
  red: '#ac1b32',
  redDeep: '#7d1226',
  gold: '#c9972f',
  sand: '#f5efe2',
  sand2: '#ece2cb',
  cardBlack: '#131210',
  line: 'rgba(28,26,21,0.14)',
};

const WHY_ITEMS = [
  { id: '01', title: { id: 'Rantai Pasok Terintegrasi Vertikal', en: 'Vertically Integrated Supply Chain', zh: '垂直整合供应链' }, desc: { id: 'Dari kebun langsung ke pelabuhan, menjaga keterlacakan di setiap tahap.', en: 'Plantation to port, ensuring traceability at every stage.', zh: '从种植园直达港口，全程可追溯。' } },
  { id: '02', title: { id: 'Kualitas Konsisten & Harga Ekspor Kompetitif', en: 'Consistent Quality & Competitive Export Pricing', zh: '稳定品质，具竞争力的出口价格' }, desc: { id: 'Standar mutu terjaga dengan struktur harga yang bersaing secara global.', en: 'Reliable quality standards paired with globally competitive pricing.', zh: '严格把控品质，同时保持具全球竞争力的价格。' } },
  { id: '03', title: { id: 'Sumber Bahan Berkelanjutan & Melibatkan Petani', en: 'Sustainable, Traceable, Farmer-Inclusive Sourcing', zh: '可持续、可追溯且惠及农户的采购模式' }, desc: { id: 'Model pengadaan yang memberdayakan petani lokal sekaligus menjaga kelestarian lingkungan.', en: 'A sourcing model that empowers local farmers while protecting the environment.', zh: '采购模式惠及本地农户，同时兼顾环境永续。' } },
  { id: '04', title: { id: 'Tim Perdagangan Internasional & Logistik Berpengalaman', en: 'Experienced International Trade & Logistics Team', zh: '经验丰富的国际贸易与物流团队' }, desc: { id: 'Menangani dokumentasi ekspor, pengiriman, dan koordinasi lintas negara secara end-to-end.', en: 'Handling export documentation, shipping, and cross-border coordination end-to-end.', zh: '全程处理出口文件、货运与跨国协调事务。' } },
];

const CAT_ITEMS = [
  { num: '01 / COMMODITY', to: '/products#coconut', title: { id: 'Komoditas Turunan Kelapa', en: 'Coconut-Derived Commodities', zh: '椰子衍生商品' }, desc: { id: 'VCO, gula kelapa, kelapa parut kering, coco fiber & peat, briket arang, dan kopra.', en: 'Virgin coconut oil, coconut sugar, desiccated coconut, coco fiber & peat, charcoal briquette, and copra.', zh: '特级初榨椰子油、椰糖、椰丝、椰纤维与椰糠、椰壳炭砖及椰干仁。' } },
  { num: '02 / COMMODITY', to: '/products#other', title: { id: 'Komoditas Ekspor Lainnya', en: 'Other Export Commodities', zh: '其他出口商品' }, desc: { id: 'Pinang, kopi, kakao, lada hitam, vanili biji utuh, dan keripik sehat.', en: 'Betel nut, coffee, cacao, black pepper, whole vanilla beans, and healthy chips.', zh: '槟榔、咖啡、可可、黑胡椒、香草原豆及健康脆片。' } },
  { num: '03 / PRODUCT LINE', to: '/products#vanilla', title: { id: 'Lini Produk Vanili', en: 'Vanilla Product Line', zh: '香草产品系列' }, desc: { id: 'Vanili premium dalam empat bentuk: biji, pasta, ekstrak cair, dan bubuk.', en: 'Premium vanilla in four forms: beans, paste, liquid extract, and powder.', zh: '优质香草，提供豆荚、酱、液态提取物及粉末四种形态。' } },
  { num: '04 / RETAIL', to: '/products#retail', title: { id: 'Merek Ritel', en: 'Retail Brands', zh: '零售品牌' }, desc: { id: 'MYCHO, MYPIA, dan Bumbu Nusantara — cita rasa Indonesia siap ekspor.', en: 'MYCHO, MYPIA, and Bumbu Nusantara — Indonesian flavors, export-ready.', zh: 'MYCHO、MYPIA 与 Bumbu Nusantara——印尼风味，蓄势出口。' } },
];

const RETAIL_ITEMS = [
  { img: '/assets/images/mycho-crunchy.jpg', name: 'MYCHO', sub: { id: 'Crunchy', en: 'Crunchy', zh: '脆脆的' } },
  { img: '/assets/images/mycho-walnut.jpg', name: 'MYCHO', sub: { id: 'Walnut', en: 'Walnut', zh: '核桃' } },
  { img: '/assets/images/mypia-goldenyolk.jpg', name: 'MYPIA', sub: { id: 'Golden Yolk', en: 'Golden Yolk', zh: '金黄蛋黄' } },
  { img: '/assets/images/mypia-taro.jpg', name: 'MYPIA', sub: { id: 'Taro', en: 'Taro', zh: '芋头' } },
  { img: '/assets/images/bumbu-satay.jpg', name: 'Bumbu Nusantara', sub: { id: 'Bumbu Satai', en: 'Satay Seasoning', zh: '沙嗲酱' } },
];

const Home = () => {
  const r1 = useReveal(), r2 = useReveal(), r3 = useReveal(), r4 = useReveal(), r5 = useReveal(), r6 = useReveal();

  return (
    <>
      {/* ===== HERO ===== */}
      <section style={{ position: 'relative', color: '#fff', overflow: 'hidden', minHeight: '78vh', display: 'flex', alignItems: 'center' }}>
        <img className="hero-bg" src="/assets/images/hero-plantation.jpg" alt="Coconut palm plantation in Indonesia"
          style={{ position: 'absolute', inset: 0, objectFit: 'cover', width: '100%', height: '100%' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,rgba(18,54,38,.35) 0%,rgba(15,25,18,.55) 55%,rgba(9,14,10,.88) 100%)' }} />

        <svg className="stamp" style={{ right: '6%', bottom: '8%', transform: 'rotate(-9deg)' }} viewBox="0 0 200 200" aria-hidden="true">
          <defs><path id="sc-home" d="M 100,100 m -78,0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0" /></defs>
          <circle cx="100" cy="100" r="96" fill="none" stroke="#f5efe2" strokeWidth="1.3" opacity=".8" />
          <circle cx="100" cy="100" r="58" fill="none" stroke="#f5efe2" strokeWidth="1.3" opacity=".8" />
          <text fontFamily="Inter,sans-serif" fontSize="9.6" letterSpacing="2.6" fill="#f5efe2" opacity=".92">
            <textPath href="#sc-home" startOffset="0%">PT HEXAON VEGAN INDONESIA • EXPORT PARTNER • EST. INDONESIA •</textPath>
          </text>
          <g transform="translate(100,100)">
            <polygon points="0,-23 20,-11.5 20,11.5 0,23 -20,11.5 -20,-11.5" fill="none" stroke="#f5efe2" strokeWidth="1.5" opacity=".95" />
            <text x="0" y="6" textAnchor="middle" fontFamily="Inter,sans-serif" fontWeight="700" fontSize="14" fill="#f5efe2">HVI</text>
          </g>
        </svg>

        <div ref={r1} className="reveal container" style={{ position: 'relative', zIndex: 2, paddingBlock: '80px', width: '100%' }}>
          <span className="eyebrow hero-eyebrow">
            <T id="DOSIER EKSPOR — INDONESIA" en="EXPORT DOSSIER — INDONESIA" zh="出口档案 — 印度尼西亚" />
          </span>
          <h1 style={{ color: '#fff', fontSize: 'clamp(2.2rem,4.6vw,3.6rem)', lineHeight: 1.08, maxWidth: '15ch', marginTop: '12px' }}>
            <T id="Pemasok Perkebunan Kelapa & Mitra Ekspor Multi-Kategori" en="Coconut Plantation Supplier & Multi-Category Export Partner" zh="椰子种植供应商与多品类出口合作伙伴" />
          </h1>
          <p style={{ marginTop: '18px', maxWidth: '52ch', fontSize: '1.06rem', color: 'rgba(255,255,255,.86)' }}>
            <T
              id="PT Hexaon Vegan Indonesia (HVI) menghubungkan komoditas hasil perkebunan dengan pasar global — mencakup turunan kelapa, produk agrikultur, buah segar, hingga pangan berbasis nabati."
              en="PT Hexaon Vegan Indonesia (HVI) connects plantation-grown commodities with global markets — spanning coconut derivatives, agricultural exports, fresh fruit, and plant-based food products."
              zh="HVI 通过椰子衍生品、农产品出口、新鲜水果及植物基食品，将种植园商品与全球市场紧密相连。"
            />
          </p>
          <div style={{ display: 'flex', gap: '14px', marginTop: '32px', flexWrap: 'wrap' }}>
            <Link to="/products" className="btn btn-primary">
              <T id="Lihat Produk" en="Explore Products" zh="查看产品" />
            </Link>
            <Link to="/contact" className="btn btn-outline on-dark">
              <T id="Hubungi Kami" en="Contact Us" zh="联系我们" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== STAT STRIP ===== */}
      <section style={{ background: C.greenDeep, color: '#fff', paddingBlock: 0 }}>
        <div className="container">
          <div ref={r2} className="reveal stat-grid">
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

      {/* ===== ABOUT TEASER ===== */}
      <section style={{ background: C.sand, paddingBlock: '84px' }}>
        <div className="container">
          <div ref={r3} className="reveal two-col">
            <div className="col-media">
              <div className="framed-photo">
                <img src="/assets/images/plantation-grove.jpg" alt="Coconut plantation grove, Indonesia" />
              </div>
            </div>
            <div className="col-copy">
              <span className="eyebrow"><T id="TENTANG HVI" en="ABOUT HVI" zh="关于 HVI" /></span>
              <h2 style={{ marginTop: '14px' }}>
                <T id="Dari Kebun ke Pelabuhan, dari Indonesia ke Dunia" en="From Plantation to Port, from Indonesia to the World" zh="从种植园到港口，从印尼走向世界" />
              </h2>
              <p style={{ marginTop: '18px', color: C.inkSoft }}>
                <T
                  id="PT Hexaon Vegan Indonesia (HVI) adalah perusahaan multi-bidang asal Indonesia yang berpijak pada prinsip keberlanjutan — menghubungkan komoditas hasil perkebunan dengan pasar global melalui empat lini utama."
                  en="PT Hexaon Vegan Indonesia (HVI) is a diversified Indonesian enterprise built on sustainability — connecting plantation-grown commodities with global markets across coconut derivatives, agricultural exports, fresh fruit, and plant-based food products."
                  zh="HVI 是一家立足印尼、践行可持续发展理念的多元化企业——通过椰子衍生品、农产品出口、新鲜水果及植物基食品等板块，将种植园商品与全球市场紧密相连。"
                />
              </p>
              <p style={{ marginTop: '22px' }}>
                <Link to="/about" className="btn btn-outline">
                  <T id="Selengkapnya Tentang Kami" en="More About Us" zh="了解更多" />
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CATEGORY GRID ===== */}
      <section style={{ background: C.sand2, paddingBlock: '84px' }}>
        <div className="container">
          <div ref={r4} className="reveal section-head">
            <span className="eyebrow"><T id="KATALOG EKSPOR" en="EXPORT CATALOGUE" zh="出口目录" /></span>
            <h2><T id="Empat Lini Komoditas Kami" en="Our Four Commodity Lines" zh="四大商品品类" /></h2>
            <p className="lede">
              <T id="Dari bahan baku perkebunan hingga produk olahan siap ritel." en="From raw plantation commodities to ready-to-retail processed goods." zh="从种植园原料到即食零售产品。" />
            </p>
          </div>
        </div>
        <div className="container" style={{ padding: 0 }}>
          <div className="cat-grid">
            {CAT_ITEMS.map(c => (
              <Link key={c.to} to={c.to} className="cat-card">
                <span className="doc-num">{c.num}</span>
                <h3><T id={c.title.id} en={c.title.en} zh={c.title.zh} /></h3>
                <p style={{ color: C.inkSoft, fontSize: '.9rem' }}><T id={c.desc.id} en={c.desc.en} zh={c.desc.zh} /></p>
                <span style={{ marginTop: 'auto', fontFamily: 'Inter,sans-serif', fontSize: '.74rem', color: C.red, letterSpacing: '.04em' }}>
                  <T id="Lihat kategori →" en="View category →" zh="查看类别 →" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY PARTNER ===== */}
      <section style={{ background: C.greenDeep, color: C.sand, paddingBlock: '84px' }}>
        <div className="container">
          <div ref={r5} className="reveal section-head">
            <span className="eyebrow on-dark"><T id="MENGAPA HVI" en="WHY PARTNER WITH HVI" zh="为何选择 HVI" /></span>
            <h2 style={{ color: '#fff' }}><T id="Kemitraan yang Dibangun di Atas Kepercayaan" en="A Partnership Built on Trust" zh="值得信赖的合作伙伴关系" /></h2>
          </div>
          <div className="manifest-list" style={{ borderTopColor: 'rgba(245,239,226,.2)' }}>
            {WHY_ITEMS.map(item => (
              <div key={item.id} className="manifest-row" style={{ borderBottomColor: 'rgba(245,239,226,.2)' }}>
                <span className="doc-num" style={{ fontSize: '1rem', paddingTop: '2px' }}>{item.id}</span>
                <div>
                  <h4 style={{ color: '#fff', fontSize: '1.05rem', marginBottom: '6px' }}>
                    <T id={item.title.id} en={item.title.en} zh={item.title.zh} />
                  </h4>
                  <p style={{ color: 'rgba(245,239,226,.78)', fontSize: '.94rem', maxWidth: '60ch' }}>
                    <T id={item.desc.id} en={item.desc.en} zh={item.desc.zh} />
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== RETAIL TEASER ===== */}
      <section style={{ background: C.cardBlack, color: C.sand, paddingBlock: '84px' }}>
        <div className="container">
          <div ref={r6} className="reveal section-head">
            <span className="eyebrow"><T id="LINI RITEL" en="RETAIL LINE" zh="零售系列" /></span>
            <h2 style={{ color: '#fff' }}><T id="Cita Rasa Indonesia, untuk Dunia" en="Indonesian Flavors, Made for the World" zh="印尼风味，献给世界的味蕾" /></h2>
            <p className="lede" style={{ color: 'rgba(245,239,226,.75)' }}>
              <T id="Tiga merek pangan nabati siap ekspor: MYCHO, MYPIA, dan Bumbu Nusantara." en="Three export-ready plant-based food brands: MYCHO, MYPIA, and Bumbu Nusantara." zh="三大出口即用型植物基食品品牌：MYCHO、MYPIA 与 Bumbu Nusantara。" />
            </p>
          </div>

          <div className="retail-grid">
            {RETAIL_ITEMS.map((p, i) => (
              <div key={i} className="retail-card">
                <div className="retail-photo">
                  <img src={p.img} alt={`${p.name} ${p.sub.en}`} />
                </div>
                <div className="retail-label">
                  <div className="name">{p.name}</div>
                  <div className="sub"><T id={p.sub.id} en={p.sub.en} zh={p.sub.zh} /></div>
                </div>
              </div>
            ))}
          </div>

          <div className="badge-row">
            <span className="badge-pill"><span className="dot"></span><T id="100% NABATI" en="100% PLANT-BASED" zh="100% 纯植物" /></span>
            <span className="badge-pill"><span className="dot"></span><T id="BUATAN INDONESIA" en="MADE IN INDONESIA" zh="印尼制造" /></span>
            <Link to="/products#retail" className="btn btn-outline on-dark" style={{ marginLeft: 'auto' }}>
              <T id="Lihat Semua Rasa" en="View All Flavors" zh="查看全部口味" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== CTA BAND ===== */}
      <section style={{ background: C.red, color: '#fff', paddingBlock: 0 }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px', flexWrap: 'wrap', paddingBlock: '46px' }}>
          <div>
            <h3 style={{ color: '#fff', fontSize: '1.5rem', maxWidth: '26ch' }}>
              <T id="Siap Bersumber dari Indonesia?" en="Ready to Source from Indonesia?" zh="准备好从印尼采购了吗？" />
            </h3>
            <p style={{ marginTop: '8px', color: 'rgba(255,255,255,.84)' }}>
              <T id="Hubungi tim kami untuk katalog produk, harga, dan kapasitas ekspor." en="Contact our team for product catalogues, pricing, and export capacity." zh="联系我们的团队，获取产品目录、报价及出口产能信息。" />
            </p>
          </div>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <a href="https://wa.me/62811179804" target="_blank" rel="noopener" className="btn" style={{ background: '#fff', color: C.red }}>WhatsApp</a>
            <Link to="/contact" className="btn btn-outline" style={{ color: '#fff', borderColor: 'rgba(255,255,255,.55)' }}>
              <T id="Hubungi Kami" en="Contact Us" zh="联系我们" />
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        .stat-grid { display:grid; grid-template-columns:repeat(3,1fr); }
        .stat-item { padding:30px 28px; border-left:1px solid rgba(245,239,226,.16); }
        .stat-item:first-child { border-left:0; }

        .two-col { display:grid; grid-template-columns:1.05fr .95fr; gap:56px; align-items:center; }
        .col-copy p { color:#4a453c; }
        .col-copy p + p { margin-top:16px; }

        .cat-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:1px; background:rgba(28,26,21,0.14); border:1px solid rgba(28,26,21,0.14); }
        .cat-card { background:#f5efe2; padding:30px 24px; display:flex; flex-direction:column; gap:14px; min-height:210px; text-decoration:none; transition:background .18s ease; }
        .cat-card:hover { background:#ece2cb; }
        .cat-card h3 { font-size:1.08rem; color:#123626; margin:0; }

        .manifest-list { border-top:1.5px dotted rgba(28,26,21,0.14); }
        .manifest-row { display:grid; grid-template-columns:64px 1fr; gap:24px; padding-block:26px; border-bottom:1.5px dotted rgba(28,26,21,0.14); }

        .retail-grid { display:grid; grid-template-columns:repeat(5,1fr); gap:16px; }
        .retail-card { background:#131210; border:1px solid rgba(245,239,226,.1); overflow:hidden; }
        .retail-photo { aspect-ratio:1/1; overflow:hidden; background:#0d0c0a; }
        .retail-photo img { width:100%; height:100%; object-fit:cover; transition:transform .4s ease; }
        .retail-card:hover .retail-photo img { transform:scale(1.06); }
        .retail-label { padding:12px 14px 16px; }
        .retail-label .name { font-weight:600; font-size:.92rem; color:#fff; }
        .retail-label .sub { margin-top:3px; font-family:Inter,sans-serif; font-size:.72rem; color:rgba(245,239,226,.55); }

        .badge-row { display:flex; gap:14px; margin-top:30px; flex-wrap:wrap; align-items:center; }
        .badge-pill { display:inline-flex; align-items:center; gap:8px; border:1px solid rgba(245,239,226,.35); padding:9px 16px; border-radius:999px; font-family:Inter,sans-serif; font-size:.74rem; letter-spacing:.05em; color:#f5efe2; }
        .badge-pill .dot { width:7px; height:7px; border-radius:50%; background:#c9972f; flex-shrink:0; }

        @media (max-width:1020px) {
          .stat-grid { grid-template-columns:1fr; }
          .stat-item { border-left:0; border-top:1px solid rgba(245,239,226,.16); }
          .stat-item:first-child { border-top:0; }
          .two-col { grid-template-columns:1fr; }
          .cat-grid { grid-template-columns:repeat(2,1fr); }
          .retail-grid { grid-template-columns:repeat(3,1fr); }
        }
        @media (max-width:720px) {
          .cat-grid, .retail-grid { grid-template-columns:1fr; }
          .badge-row { flex-direction:column; align-items:flex-start; }
          .badge-row .btn { margin-left:0 !important; }
        }

        /* Hero eyebrow — gold strip, no red */
        .hero-eyebrow {
          color: #c9972f;
        }
        .hero-eyebrow::before {
          background: #c9972f !important;
        }
      `}</style>
    </>
  );
};

export default Home;
