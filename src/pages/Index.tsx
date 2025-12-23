import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import PortfolioSection from '@/components/PortfolioSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import TrackingAnimation from '@/components/TrackingAnimation';

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <TrackingAnimation />
      <Navigation />
      <HeroSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
