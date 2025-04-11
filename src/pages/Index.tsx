
import React from 'react';
import NewsletterForm from '@/components/NewsletterForm';
import SocialIcons from '@/components/SocialIcons';
import AnimatedBackground from '@/components/AnimatedBackground';
import SoundWaves from '@/components/SoundWaves';
import ScrollingHeader from '@/components/ScrollingHeader';
import { ASSETS } from '@/constants/animations';
import { useIsMobile } from '@/hooks/use-mobile';

const Index: React.FC = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4">
      <AnimatedBackground />
      <ScrollingHeader position="top" />
      <ScrollingHeader position="bottom" />
      
      <div className="w-full max-w-screen-xl mx-auto flex flex-col items-center">
        {/* Main Content */}
        <div className="text-center mb-4 mt-16">
          {/* Amp Logo - responsive sizing for mobile and desktop */}
          <div className="mb-0">
            <img 
              src={ASSETS.IMAGES.AMP_LOGO} 
              alt="Amp Logo" 
              className={`${isMobile ? 'h-48 w-auto' : 'h-96 w-auto'} mx-auto`}
            />
          </div>
          
          {/* Sound Waves Animation */}
          <SoundWaves />
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amp-green to-amp-white">
              The Artist Owned booking platform
            </span>
          </h1>
          
          <p className="text-sm text-amp-grey mb-8">
            Launching soon in MENA
          </p>
          
          {/* Newsletter Form */}
          <NewsletterForm className="mt-8" />
        </div>
        
        {/* Social Icons */}
        <SocialIcons />
        
        {/* Footer */}
        <div className="mt-2 pt-2 pb-6 text-amp-grey text-sm">
          &copy; {new Date().getFullYear()} Amp. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Index;
