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
  return <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4">
      <AnimatedBackground />
      <ScrollingHeader position="top" />
      <ScrollingHeader position="bottom" />
      
      <div className="w-full max-w-screen-xl mx-auto flex flex-col items-center">
        {/* Main Content */}
        <div className="text-center mb-4 mt-16">
          {/* Amp Logo - responsive sizing for mobile and desktop with 50% size reduction on desktop */}
          <div className="mb-0">
            <img src={ASSETS.IMAGES.AMP_LOGO} alt="Amp Logo" className={`${isMobile ? 'h-40 w-auto' : 'h-40 w-auto'} mx-auto`} />
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-gotham font-bold mb-4 tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amp-green to-amp-white font-gotham font-bold text-base">
              THE ARTIST OWNED BOOKING PLATFORM
            </span>
          </h1>
          
          <p className="text-amp-grey mb-1 text-xl font-gotham font-bold">
            LOADING........
          </p>
          
          {/* Sound Waves Animation - reduced margin */}
          <SoundWaves />
          
          {/* Newsletter Form - reduced top margin */}
          <NewsletterForm className="mt-3" />
        </div>
        
        {/* Social Icons */}
        <SocialIcons />
        
        {/* Footer */}
        <div className="mt-2 pt-2 pb-6 text-amp-grey text-sm font-gotham font-bold">
          &copy; {new Date().getFullYear()} Amp. All rights reserved.
        </div>
      </div>
    </div>;
};
export default Index;