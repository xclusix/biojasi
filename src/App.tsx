import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { HeaderV3 } from '@/components/layout/HeaderV3';
import { FooterV3 } from '@/components/layout/FooterV3';
import { WhatsAppConcierge, RitualSelector } from '@/components/layout';
import { CartDrawer } from '@/components/cart';
import { HomePageV3 } from '@/pages/HomePageV3';
import {
  CatalogPage,
  AboutPage,
  ContactPage,
  BlogPage,
  BlogPostPage,
  NotFoundPage,
} from '@/pages';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export function App() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1C1917] font-body flex flex-col selection:bg-[#1C1917] selection:text-[#FAF8F5] relative">
      <ScrollToTop />
      <HeaderV3 />
      <main className="flex-1 w-full flex flex-col">
        <Routes>
          <Route path="/" element={<HomePageV3 />} />
          <Route path="/catalogo" element={<CatalogPage />} />
          <Route path="/nosotros" element={<AboutPage />} />
          <Route path="/contacto" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <FooterV3 />
      <CartDrawer />
      <RitualSelector />
      <WhatsAppConcierge />
    </div>
  );
}

export default App;
