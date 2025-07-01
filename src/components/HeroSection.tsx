
import React from 'react';
import { ASSETS } from '@/constants/animations';
import { useIsMobile } from '@/hooks/use-mobile';

const HeroSection: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <div className="text-center mb-4 mt-16">
      {/* Logo Section */}
      <div className="mb-0">
        <img 
          src={ASSETS.IMAGES.AMP_LOGO} 
          alt="Amp Logo" 
          className={`${isMobile ? 'h-40 w-auto' : 'h-40 w-auto'} mx-auto`} 
        />
      </div>
      
      {/* Main Heading */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-gotham font-bold mb-4 tracking-tight">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amp-green to-amp-white font-gotham font-bold text-base">
          THE ARTIST OWNED BOOKING PLATFORM
        </span>
      </h1>
      
      {/* Loading Text */}
      <p className="text-amp-grey mb-1 text-xl font-gotham font-bold">
        LOADING........
      </p>
    </div>
  );
};

export default HeroSection;
