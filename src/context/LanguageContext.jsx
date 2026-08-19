import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [currentLang, setCurrentLang] = useState('en');

  const setLang = (lang) => {
    setCurrentLang(lang);
    document.documentElement.setAttribute('data-lang', lang);
    document.documentElement.setAttribute('lang', lang === 'zh' ? 'zh-CN' : lang);
    
    // Update document title based on language
    const titles = {
      id: 'PT Hexaon Vegan Indonesia (HVI) — Pemasok Perkebunan Kelapa & Mitra Ekspor',
      en: 'PT Hexaon Vegan Indonesia (HVI) — Coconut Plantation Supplier & Export Partner',
      zh: 'PT Hexaon Vegan Indonesia (HVI) — 椰子种植供应商与出口合作伙伴'
    };
    document.title = titles[lang] || titles.en;
  };

  useEffect(() => {
    setLang('en'); // Default to English
  }, []);

  const value = {
    currentLang,
    setLang
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};