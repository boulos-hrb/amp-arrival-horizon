
import React from 'react';
import NewsletterForm from '@/components/NewsletterForm';
import SocialIcons from '@/components/SocialIcons';
import SoundWaves from '@/components/SoundWaves';
import AnimatedBackground from '@/components/AnimatedBackground';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4">
      <AnimatedBackground />
      
      <div className="w-full max-w-screen-xl mx-auto flex flex-col items-center">
        {/* Logo */}
        <div className="mb-8">
          <img 
            src="/lovable-uploads/30938775-d9a5-49c9-a9de-a564b1a27229.png" 
            alt="Amp Logo" 
            className="h-16 md:h-20"
          />
        </div>
        
        {/* Sound Waves */}
        <SoundWaves />
        
        {/* Main Content */}
        <div className="text-center mt-4 mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amp-green to-amp-white">
              Amp is Almost Here!
            </span>
          </h1>
          
          <p className="text-lg md:text-xl font-light text-amp-grey max-w-2xl mx-auto mb-4 leading-relaxed">
            The easiest way to book artists and manage live music events in the Middle East.
            From tech riders to contracts — everything in one place.
          </p>
          
          <p className="text-sm text-amp-grey mb-8">
            Launching soon in MENA
          </p>
          
          {/* Newsletter Form */}
          <NewsletterForm className="mt-8" />
        </div>
        
        {/* Shape Accents */}
        <div className="absolute -z-5 top-10 right-10 opacity-30 hidden md:block">
          <img 
            src="/lovable-uploads/b786b2ee-9e64-488a-9846-1b508ba16097.png" 
            alt="Star Shape" 
            className="w-16 h-16 animate-pulse"
          />
        </div>
        <div className="absolute -z-5 bottom-20 left-10 opacity-20 hidden md:block">
          <img 
            src="/lovable-uploads/61062fce-b9c2-49d2-9ed2-5dcd55c77f63.png" 
            alt="Circle Shape" 
            className="w-20 h-20 animate-float-slow"
          />
        </div>
        <div className="absolute -z-5 top-1/2 left-20 opacity-20 hidden md:block">
          <img 
            src="/lovable-uploads/759a595e-1135-4008-b4c7-0d6a609a6020.png" 
            alt="Starburst Shape" 
            className="w-16 h-16 animate-spin-slow"
          />
        </div>
        
        {/* Social Icons */}
        <SocialIcons />
        
        {/* Footer */}
        <div className="mt-auto pt-8 pb-6 text-amp-grey text-sm">
          &copy; {new Date().getFullYear()} Amp. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Index;
