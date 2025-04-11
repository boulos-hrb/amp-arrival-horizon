
import React from 'react';
import NewsletterForm from '@/components/NewsletterForm';
import SocialIcons from '@/components/SocialIcons';
import AnimatedBackground from '@/components/AnimatedBackground';
import SoundWaves from '@/components/SoundWaves';
import { ASSETS } from '@/constants/animations';
import { useIsMobile } from '@/hooks/use-mobile';

const Index: React.FC = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4">
      <AnimatedBackground />
      
      <div className="w-full max-w-screen-xl mx-auto flex flex-col items-center">
        {/* Main Content */}
        <div className="text-center mb-4">
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
          
          <div className="max-w-2xl mx-auto mb-6">
            <div className="flex items-start space-x-3 mb-3 text-left">
              <div className="mt-1.5 flex-shrink-0 w-3 h-3 bg-[#FF4E00]"></div>
              <p className="text-lg font-light text-amp-grey leading-relaxed">
                The easiest way to book artists and manage live music events in the Middle East — from tech riders to contracts, everything in one place.
              </p>
            </div>
          </div>
          
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
