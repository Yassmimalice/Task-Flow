import React, { useState, useEffect } from 'react';
import Header from './components/header';
import HeroSection from './components/hero-section';
import FeaturesSection from './components/features-section';
import DemoSection from './components/demo-section';
import TestimonialsSection from './components/testimonials-section';
import PricingSection from './components/pricing-section';
import FAQSection from './components/faq-section';
import CTASection from './components/cta-section';
import Footer from './components/footer';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Check for dark mode preference
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark');
    }
    setIsLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen bg-white dark:bg-gray-900 transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <DemoSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;

