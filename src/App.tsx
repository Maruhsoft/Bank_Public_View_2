import React, { useEffect } from 'react';
import './config/i18n';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesGrid from './components/ServicesGrid';
import FeaturesSection from './components/FeaturesSection';
import TestimonialsSection from './components/TestimonialsSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Set document title
    document.title = 'IBK 기업은행 - Your Trusted Financial Partner Worldwide';
    
    // Add meta tags for SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Experience world-class banking services with IBK 기업은행. Comprehensive personal and business banking, international services, and digital solutions.';
      document.head.appendChild(meta);
    }

    // Add viewport meta tag if not present
    const viewport = document.querySelector('meta[name="viewport"]');
    if (!viewport) {
      const meta = document.createElement('meta');
      meta.name = 'viewport';
      meta.content = 'width=device-width, initial-scale=1.0';
      document.head.appendChild(meta);
    }

    // Add Open Graph tags
    const ogTitle = document.createElement('meta');
    ogTitle.property = 'og:title';
    ogTitle.content = 'IBK 기업은행 - Your Trusted Financial Partner';
    document.head.appendChild(ogTitle);

    const ogDescription = document.createElement('meta');
    ogDescription.property = 'og:description';
    ogDescription.content = 'Comprehensive banking solutions for personal and business needs with global reach and local expertise from IBK 기업은행.';
    document.head.appendChild(ogDescription);

    const ogType = document.createElement('meta');
    ogType.property = 'og:type';
    ogType.content = 'website';
    document.head.appendChild(ogType);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <ServicesGrid />
        <FeaturesSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;