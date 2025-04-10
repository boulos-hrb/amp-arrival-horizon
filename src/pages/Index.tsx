
import React from 'react';
import NewsletterForm from '@/components/NewsletterForm';
import SocialIcons from '@/components/SocialIcons';
import AnimatedBackground from '@/components/AnimatedBackground';
import SoundWaves from '@/components/SoundWaves';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4">
      <AnimatedBackground />
      
      <div className="w-full max-w-screen-xl mx-auto flex flex-col items-center">
        {/* Main Content */}
        <div className="text-center mb-12">
          {/* Amp Logo */}
          <div className="mb-3">
            <img 
              src="/lovable-uploads/8dbec154-c472-451f-8fb6-f4f218ca2421.png" 
              alt="Amp Logo" 
              className="h-24 mx-auto" // Changed from h-20 to h-24 (20% larger)
            />
          </div>
          
          {/* Sound Waves Animation */}
          <SoundWaves />
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amp-green to-amp-white">
              Amp is Almost Here!
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
        <div className="mt-auto pt-8 pb-6 text-amp-grey text-sm">
          &copy; {new Date().getFullYear()} Amp. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Index;
