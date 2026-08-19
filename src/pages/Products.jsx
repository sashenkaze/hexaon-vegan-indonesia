import React from 'react';
import { Link } from 'react-router-dom';
import { useReveal } from '../hooks/useReveal';

const coconutProducts = [
  { id: "01", name: "Virgin Coconut Oil (VCO)", desc: { id: "Minyak kelapa murni hasil ekstraksi tanpa pemanasan tinggi.", en: "Cold-extracted pure coconut oil.", zh: "冷榨特级初榨椰子油。" } },
  { id: "02", name: { id: "Gula Kelapa", en: "Coconut Sugar", zh: "椰糖" }, desc: { id: "Pemanis alami dari nira kelapa, cocok untuk kebutuhan food & beverage.", en: "Natural sweetener from coconut sap, suited for food & beverage applications.", zh: "取自椰花蜜的天然甜味剂，适用于食品与饮料行业。" } },
  { id: "03", name: { id: "Kelapa Parut Kering", en: "Desiccated Coconut", zh: "椰丝" }, desc: { id: "Kelapa parut kering untuk bahan baku bakery dan konfeksi.", en: "Dried grated coconut for bakery and confectionery ingredients.", zh: "干燥椰丝，可作为烘焙与糖果制品原料。" } },
  { id: "04", name: "Coco Fiber & Coco Peat", desc: { id: "Serat dan media tanam dari sabut kelapa untuk kebutuhan pertanian & industri.", en: "Coconut-husk fiber and growing media for agricultural and industrial use.", zh: "椰壳纤维及椰糠栽培介质，适用于农业与工业用途。" } },
  { id: "05", name: { id: "Briket Arang Tempurung", en: "Coconut Charcoal Briquette", zh: "椰壳炭砖" }, desc: { id: "Briket dari tempurung kelapa dengan daya bakar tinggi dan rendah asap.", en: "Shell-based briquette with high heat output and low smoke.", zh: "以椰壳制成，燃烧值高、烟量低。" } },
  { id: "06", name: { id: "Kopra", en: "Copra", zh: "椰干仁" }, desc: { id: "Daging kelapa kering, bahan baku utama industri minyak kelapa.", en: "Dried coconut meat, the primary raw material for coconut oil processing.", zh: "干燥椰肉，是椰子油加工的主要原料。" } },
];

const otherCommodities = [
  { id: "01", img: "/assets/images/betel-nut.jpg", name: { id: "Pinang", en: "Betel Nut", zh: "槟榔" } },
  { id: "02", img: "/assets/images/coffee-beans.jpg", name: { id: "Kopi", en: "Coffee", zh: "咖啡" } },
  { id: "03", img: "/assets/images/cacao-beans.jpg", name: { id: "Kakao", en: "Cacao", zh: "可可" } },
  { id: "04", img: "/assets/images/black-pepper.jpg", name: { id: "Lada Hitam", en: "Black Pepper", zh: "黑胡椒" } },
  { id: "05", img: "/assets/images/vanilla-pods.jpg", name: { id: "Vanili (Biji Utuh)", en: "Vanilla (Raw Beans)", zh: "香草原豆" } },
  { id: "06", img: "/assets/images/healthy-chips.jpg", name: { id: "Keripik Sehat", en: "Healthy Chips", zh: "健康脆片" } },
];

const vanillaProducts = [
  { id: "01", name: { id: "Biji Vanili", en: "Vanilla Beans", zh: "香草豆荚" }, desc: { id: "Biji utuh berisi, 18–22cm, kadar vanillin ~2.4%", en: "Plump whole beans, 18–22cm, vanillin ~2.4%", zh: "饱满整豆，18–22厘米，香草醛含量约2.4%" } },
  { id: "02", name: { id: "Pasta Vanili", en: "Vanilla Paste", zh: "香草酱" }, desc: { id: "Pasta kental dengan bintik biji yang terlihat jelas", en: "Thick paste with visible seed specks", zh: "浓稠酱体，可见香草籽斑点" } },
  { id: "03", name: { id: "Ekstrak Cair Vanili", en: "Vanilla Liquid Extract", zh: "香草液态提取物" }, desc: { id: "Diproses dingin, sangat mudah larut", en: "Cold-processed, highly soluble", zh: "冷加工工艺，高度可溶" } },
  { id: "04", name: { id: "Bubuk Vanili", en: "Vanilla Powder", zh: "香草粉" }, desc: { id: "100% biji giling murni, tahan panas", en: "100% pure ground beans, heat-stable", zh: "100%纯香草豆研磨，耐高温" } },
];

function T({ id, en, zh }) {
  return (
    <>
      <span data-i18n="id">{id}</span>
      <span data-i18n="en">{en}</span>
      <span data-i18n="zh">{zh}</span>
    </>
  );
}

function ProductName({ name }) {
  if (typeof name === 'string') return <>{name}</>;
  return <T id={name.id} en={name.en} zh={name.zh} />;
}

const Products = () => {
  const sec1 = useReveal();
  const sec2 = useReveal();
  const sec3 = useReveal();
  const sec4 = useReveal();

  return (
    <>
      {/* Page Hero */}
      <section className="bg-green-deep text-white relative overflow-hidden">
        <div className="absolute -right-[8%] -top-[30%] w-[520px] h-[520px]"
          style={{ background: 'radial-gradient(circle, rgba(201,151,47,.16), transparent 70%)' }} />
        <div className="container py-14 relative z-10">
          <p className="font-mono text-xs text-sand/60 tracking-wide">
            <Link to="/" className="hover:text-gold transition-colors">
              <T id="Beranda" en="Home" zh="首页" />
            </Link>
            {' / '}
            <T id="Produk" en="Products" zh="产品" />
          </p>
          <span className="eyebrow on-dark mt-4 inline-flex">
            <T id="PRODUK & KOMODITAS" en="PRODUCTS & COMMODITIES" zh="产品与商品" />
          </span>
          <h1 className="text-white mt-3" style={{ fontSize: 'clamp(1.9rem,3.6vw,2.7rem)' }}>
            <T id="Komoditas & Produk Ritel Kami" en="Our Commodities & Retail Products" zh="我们的商品与零售产品" />
          </h1>
          <p className="mt-4 max-w-[62ch] text-sand/82">
            <T
              id="Dari bahan baku perkebunan hingga produk olahan siap ritel — katalog ekspor lengkap dari Indonesia."
              en="From raw plantation commodities to ready-to-retail processed goods — a complete export catalogue from Indonesia."
              zh="从种植园原料到即食零售产品——完整的印尼出口产品目录。"
            />
          </p>
        </div>
      </section>

      {/* Quick Jump Nav */}
      <nav className="bg-sand-2 border-b border-line overflow-x-auto" aria-label="Section jump">
        <div className="container flex gap-7 py-[14px] font-mono text-[.78rem] tracking-[.03em]">
          {[
            { href: '#coconut', id: '01 Turunan Kelapa', en: '01 Coconut Derivatives', zh: '01 椰子衍生品' },
            { href: '#other', id: '02 Komoditas Lain', en: '02 Other Commodities', zh: '02 其他商品' },
            { href: '#vanilla', id: '03 Lini Vanili', en: '03 Vanilla Line', zh: '03 香草系列' },
            { href: '#retail', id: '04 Merek Ritel', en: '04 Retail Brands', zh: '04 零售品牌' },
          ].map(item => (
            <a key={item.href} href={item.href} className="whitespace-nowrap hover:text-red transition-colors">
              <T id={item.id} en={item.en} zh={item.zh} />
            </a>
          ))}
        </div>
      </nav>

      {/* 01 Coconut Derivatives */}
      <section id="coconut" className="bg-sand py-[84px]">
        <div className="container">
          <div ref={sec1} className="reveal section-head mb-11">
            <span className="eyebrow">
              {'01 · '}<T id="KOMODITAS" en="COMMODITY" zh="商品" />
            </span>
            <h2 className="mt-3" style={{ fontSize: 'clamp(1.6rem,2.6vw,2.2rem)' }}>
              <T id="Komoditas Turunan Kelapa" en="Coconut-Derived Commodities" zh="椰子衍生商品" />
            </h2>
            <p className="lede mt-4 text-ink-soft">
              <T
                id="Enam produk olahan kelapa untuk kebutuhan pangan, kosmetik, dan industri."
                en="Six processed coconut products for food, cosmetic, and industrial applications."
                zh="六种椰子加工产品，适用于食品、化妆品及工业用途。"
              />
            </p>
          </div>

          {/* Two-col image + text */}
          <div className="grid lg:grid-cols-2 gap-14 items-start mb-12">
            <div className="grid grid-cols-2 gap-3">
              <div className="framed-photo col-span-2">
                <img src="/assets/images/coco-conveyor.jpg" alt="Coconut processing line" className="w-full object-cover" style={{ aspectRatio: '16/9' }} />
              </div>
              <div className="framed-photo">
                <img src="/assets/images/coco-pile.jpg" alt="Whole coconuts" className="w-full object-cover" style={{ aspectRatio: '1/1' }} />
              </div>
              <div className="framed-photo">
                <img src="/assets/images/coco-container.jpg" alt="Coconut export packaging" className="w-full object-cover" style={{ aspectRatio: '1/1' }} />
              </div>
            </div>
            <div className="text-ink-soft">
              <T
                id="Dari kopra mentah hingga briket arang tempurung, lini turunan kelapa kami mencakup seluruh rantai nilai pengolahan — bersumber dari perkebunan Indonesia dan dikemas sesuai standar ekspor."
                en="From raw copra to charcoal briquette, our coconut derivatives line covers the full processing value chain — sourced from Indonesian plantations and packed to export standard."
                zh="从原料椰干仁到椰壳炭砖，我们的椰子衍生品系列涵盖完整的加工价值链——原料来自印尼种植园，并按出口标准包装。"
              />
            </div>
          </div>

          {/* Product manifest list */}
          <div className="border-t border-dotted border-line">
            {coconutProducts.map(p => (
              <div key={p.id} className="grid gap-6 py-[26px] border-b border-dotted border-line" style={{ gridTemplateColumns: '64px 1fr' }}>
                <span className="doc-num text-base pt-0.5">{p.id}</span>
                <div>
                  <h4 className="text-[1.05rem] mb-1.5"><ProductName name={p.name} /></h4>
                  <p className="text-ink-soft text-[.94rem] max-w-[60ch]">
                    <T id={p.desc.id} en={p.desc.en} zh={p.desc.zh} />
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 02 Other Commodities */}
      <section id="other" className="bg-sand-2 py-[84px]">
        <div className="container">
          <div ref={sec2} className="reveal section-head mb-11">
            <span className="eyebrow">
              {'02 · '}<T id="KOMODITAS" en="COMMODITY" zh="商品" />
            </span>
            <h2 className="mt-3" style={{ fontSize: 'clamp(1.6rem,2.6vw,2.2rem)' }}>
              <T id="Komoditas Ekspor Lainnya" en="Other Export Commodities" zh="其他出口商品" />
            </h2>
            <p className="lede mt-4 text-ink-soft">
              <T
                id="Komoditas agrikultur pilihan dari berbagai wilayah penghasil di Indonesia."
                en="Selected agricultural commodities sourced from growing regions across Indonesia."
                zh="精选自印尼各产区的优质农产品。"
              />
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {otherCommodities.map(c => (
              <div key={c.id} className="bg-white border border-line shadow-card">
                <div className="overflow-hidden" style={{ aspectRatio: '4/3' }}>
                  <img
                    src={c.img}
                    alt={c.name.en}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <span className="doc-num block mb-1.5">{c.id}</span>
                  <h4 className="text-[1.02rem]"><T id={c.name.id} en={c.name.en} zh={c.name.zh} /></h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 03 Vanilla Product Line */}
      <section id="vanilla" className="bg-sand py-[84px]">
        <div className="container">
          <div ref={sec3} className="reveal section-head mb-11">
            <span className="eyebrow">
              {'03 · '}<T id="LINI PRODUK" en="PRODUCT LINE" zh="产品系列" />
            </span>
            <h2 className="mt-3" style={{ fontSize: 'clamp(1.6rem,2.6vw,2.2rem)' }}>
              <T id="Lini Produk Vanili" en="Vanilla Product Line" zh="香草产品系列" />
            </h2>
            <p className="lede mt-4 text-ink-soft">
              <T
                id="Vanili premium dari perkebunan terbaik Indonesia, tersedia dalam empat bentuk untuk kebutuhan bakery, konfeksi, dessert, dan produk susu."
                en="Premium vanilla sourced from Indonesia's finest plantations, available in four forms for bakery, confectionery, dessert, and dairy applications."
                zh="香草原料精选自印尼优质种植园，提供四种形态，适用于烘焙、糖果、甜品及乳制品加工。"
              />
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div className="framed-photo">
              <img src="/assets/images/vanilla-products.jpg" alt="Vanilla extract, paste and powder" className="w-full object-cover" style={{ aspectRatio: '4/5' }} />
            </div>
            <div className="grid grid-cols-2 gap-[22px]">
              {vanillaProducts.map(v => (
                <div key={v.id} className="bg-white border border-line p-[22px]">
                  <span className="doc-num block mb-2.5">{v.id}</span>
                  <h4 className="text-[1rem]"><T id={v.name.id} en={v.name.en} zh={v.name.zh} /></h4>
                  <p className="mt-2 text-ink-soft text-[.86rem]">
                    <T id={v.desc.id} en={v.desc.en} zh={v.desc.zh} />
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 04 Retail Brands */}
      <section id="retail" className="bg-card-black text-sand py-[84px]">
        <div className="container">
          <div ref={sec4} className="reveal section-head mb-11">
            <span className="eyebrow">
              {'04 · '}<T id="MEREK RITEL" en="RETAIL BRANDS" zh="零售品牌" />
            </span>
            <h2 className="mt-3 text-white" style={{ fontSize: 'clamp(1.6rem,2.6vw,2.2rem)' }}>
              <T id="Cita Rasa Indonesia, untuk Dunia" en="Indonesian Flavors, Made for the World" zh="印尼风味，献给世界的味蕾" />
            </h2>
            <div className="flex gap-3 mt-5 flex-wrap">
              {[
                { id: '100% NABATI', en: '100% PLANT-BASED', zh: '100% 纯植物' },
                { id: 'BUATAN INDONESIA', en: 'MADE IN INDONESIA', zh: '印尼制造' },
              ].map((b, i) => (
                <span key={i} className="inline-flex items-center gap-2 border border-sand/35 px-4 py-2 rounded-full font-mono text-[.74rem] tracking-[.05em] text-sand">
                  <span className="w-[7px] h-[7px] rounded-full bg-gold flex-none" />
                  <T id={b.id} en={b.en} zh={b.zh} />
                </span>
              ))}
            </div>
          </div>

          {/* MYCHO */}
          <div className="mb-14">
            <div className="flex items-baseline justify-between gap-5 flex-wrap mb-5">
              <h3 className="text-white text-2xl font-semibold">MYCHO</h3>
              <span className="font-mono text-[.72rem] tracking-[.08em] text-gold border border-gold/40 px-2.5 py-1 rounded-sm">
                <T id="BATANG COKELAT · 5 RASA" en="COCOA BAR · 5 FLAVORS" zh="可可棒 · 5种口味" />
              </span>
            </div>
            <p className="text-sand/75 max-w-[60ch] mb-5">
              <T id="Kakao asli Indonesia dalam lima varian rasa yang menggugah selera." en="Indonesian cacao in five indulgent flavors." zh="印尼可可，五种浓郁风味。" />
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                { img: '/assets/images/mycho-crunchy.jpg', name: 'Crunchy', sub: { id: 'Renyah', en: 'Crunchy', zh: '脆脆的' } },
                { img: '/assets/images/mycho-walnut.jpg', name: 'Walnut', sub: { id: 'Kenari', en: 'Walnut', zh: '核桃' } },
                { img: '/assets/images/mycho-mixberries.jpg', name: 'Mix Berries', sub: { id: 'Mix Beri', en: 'Mix Berries', zh: '混合莓果' } },
                { img: '/assets/images/mycho-mixnuts.jpg', name: 'Mix Nuts', sub: { id: 'Mix Kacang', en: 'Mix Nuts', zh: '混合坚果' } },
                { img: '/assets/images/mycho-tempehflake.jpg', name: 'Tempeh Flake', sub: { id: 'Keping Tempe', en: 'Tempeh Flake', zh: '天贝碎' } },
              ].map((p, i) => (
                <div key={i} className="bg-card-black border border-sand/10 overflow-hidden group">
                  <div className="overflow-hidden bg-black/20" style={{ aspectRatio: '1/1' }}>
                    <img src={p.img} alt={p.name} className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-[1.06]" />
                  </div>
                  <div className="px-3.5 py-3 pb-4">
                    <div className="text-white font-semibold text-[.92rem]">{p.name}</div>
                    <div className="mt-0.5 font-mono text-[.72rem] text-sand/55">
                      <T id={p.sub.id} en={p.sub.en} zh={p.sub.zh} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* MYPIA */}
          <div className="mb-14">
            <div className="flex items-baseline justify-between gap-5 flex-wrap mb-5">
              <h3 className="text-white text-2xl font-semibold">MYPIA</h3>
              <span className="font-mono text-[.72rem] tracking-[.08em] text-gold border border-gold/40 px-2.5 py-1 rounded-sm">
                <T id="KUE TRADISIONAL" en="TRADITIONAL PASTRY" zh="传统酥饼" />
              </span>
            </div>
            <p className="text-sand/75 max-w-[60ch] mb-5">
              <T id="Resep klasik yang dihadirkan kembali dengan sentuhan baru." en="A classic recipe, reimagined." zh="经典配方，匠心再造。" />
            </p>
            <div className="grid grid-cols-2 gap-4 max-w-[620px]">
              {[
                { img: '/assets/images/mypia-goldenyolk.jpg', name: 'Golden Yolk', sub: { id: 'Kuning Telur Emas', en: 'Golden Yolk', zh: '金黄蛋黄' } },
                { img: '/assets/images/mypia-taro.jpg', name: 'Taro', sub: { id: 'Talas', en: 'Taro', zh: '芋头' } },
              ].map((p, i) => (
                <div key={i} className="bg-card-black border border-sand/10 overflow-hidden group">
                  <div className="overflow-hidden bg-black/20" style={{ aspectRatio: '1/1' }}>
                    <img src={p.img} alt={p.name} className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-[1.06]" />
                  </div>
                  <div className="px-3.5 py-3 pb-4">
                    <div className="text-white font-semibold text-[.92rem]">{p.name}</div>
                    <div className="mt-0.5 font-mono text-[.72rem] text-sand/55">
                      <T id={p.sub.id} en={p.sub.en} zh={p.sub.zh} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bumbu Nusantara */}
          <div>
            <div className="flex items-baseline justify-between gap-5 flex-wrap mb-5">
              <h3 className="text-white text-2xl font-semibold">Bumbu Nusantara</h3>
              <span className="font-mono text-[.72rem] tracking-[.08em] text-gold border border-gold/40 px-2.5 py-1 rounded-sm">
                <T id="BUMBU TRADISIONAL" en="TRADITIONAL SEASONINGS" zh="传统调味料" />
              </span>
            </div>
            <p className="text-sand/75 max-w-[60ch] mb-6">
              <T id="Resep otentik dari berbagai penjuru Nusantara." en="Authentic recipes from across the archipelago." zh="群岛风味，正宗配方。" />
            </p>
            <div className="grid lg:grid-cols-2 gap-14 items-start">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10">
                {[
                  { name: 'Kacang Mala', sub: { id: 'Saus Kacang Pedas', en: 'Spicy Numbing Peanut Sauce', zh: '麻辣花生酱' } },
                  { name: 'Abon Sayuran', sub: { id: 'Serundeng Sayur', en: 'Vegetable Floss', zh: '蔬菜肉松' } },
                  { name: 'Pecel Blitar', sub: { id: 'Sambal Pecel Khas Blitar', en: 'Blitar-Style Peanut Sauce', zh: '布利塔花生酱' } },
                  { name: 'Bumbu Satai', sub: { id: 'Saus Sate', en: 'Satay Seasoning Sauce', zh: '沙嗲酱' } },
                  { name: 'Pecel Madiun', sub: { id: 'Sambal Pecel Khas Madiun', en: 'Madiun-Style Peanut Sauce', zh: '玛迪温花生酱' } },
                  { name: 'Gado-Gado Surabaya', sub: { id: 'Saus Gado-Gado Khas Surabaya', en: 'Surabaya-Style Gado-Gado Sauce', zh: '泗水加多加多酱' } },
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 py-2.5 border-b border-dotted border-sand/20 text-[.95rem] text-sand/90">
                    <span className="w-1.5 h-1.5 rounded-full bg-red flex-none" />
                    <span>
                      {item.name}{' '}
                      <span className="opacity-55">— <T id={item.sub.id} en={item.sub.en} zh={item.sub.zh} /></span>
                    </span>
                  </li>
                ))}
              </ul>
              <div className="grid grid-cols-2 gap-3">
                <div className="framed-photo">
                  <img src="/assets/images/bumbu-gadogado.jpg" alt="Bumbu Nusantara gado-gado" className="w-full object-cover" style={{ aspectRatio: '3/4' }} />
                </div>
                <div className="framed-photo">
                  <img src="/assets/images/bumbu-satay.jpg" alt="Bumbu Nusantara satay" className="w-full object-cover" style={{ aspectRatio: '3/4' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="bg-red text-white" style={{ paddingBlock: 0 }}>
        <div className="container flex items-center justify-between gap-6 flex-wrap" style={{ paddingBlock: '46px' }}>
          <div>
            <h3 className="text-white text-2xl max-w-[26ch]">
              <T id="Tertarik dengan Komoditas Tertentu?" en="Interested in a Specific Commodity?" zh="对某种商品感兴趣？" />
            </h3>
            <p className="mt-2 text-white/84">
              <T id="Minta sampel, spesifikasi, dan penawaran harga dari tim kami." en="Request samples, specifications, and pricing from our team." zh="向我们的团队索取样品、规格及报价。" />
            </p>
          </div>
          <div className="flex gap-3 flex-wrap">
            <a href="https://wa.me/62811179804" target="_blank" rel="noopener" className="btn" style={{ background: '#fff', color: '#ac1b32' }}>WhatsApp</a>
            <Link to="/contact" className="btn" style={{ background: 'transparent', color: '#fff', borderColor: 'rgba(255,255,255,.55)' }}>
              <T id="Hubungi Kami" en="Contact Us" zh="联系我们" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
