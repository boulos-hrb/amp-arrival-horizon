
import React from 'react';
import NewsletterForm from '@/components/NewsletterForm';
import SocialIcons from '@/components/SocialIcons';
import AnimatedBackground from '@/components/AnimatedBackground';
import SoundWaves from '@/components/SoundWaves';
import ScrollingHeader from '@/components/ScrollingHeader';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4">
      {/* Background Elements */}
      <AnimatedBackground />
      
      {/* Scrolling Headers */}
      <ScrollingHeader position="top" />
      <ScrollingHeader position="bottom" />
      
      {/* Main Content Container */}
      <div className="w-full max-w-screen-xl mx-auto flex flex-col items-center">
        
        {/* Hero Section - Logo, Heading, Loading Text */}
        <HeroSection />
        
        {/* Sound Waves Animation */}
        <SoundWaves />
        
        {/* Newsletter Signup Form */}
        <NewsletterForm className="mt-3" />
        
        {/* Social Media Icons */}
        <SocialIcons />
        
        {/* Footer Copyright */}
        <Footer />
        
      </div>
    </div>
  );
};

export default Index;
