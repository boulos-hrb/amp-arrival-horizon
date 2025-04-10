
import React from 'react';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Original orbs */}
      <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-amp-orange/5 blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-amp-purple/5 blur-3xl animate-pulse-slow"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-amp-green/5 blur-3xl animate-pulse-slow"></div>
      
      {/* New shapes based on the provided images */}
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-amp-orange/10 animate-float-slow hidden md:block"></div>
      <div className="absolute top-3/4 right-16 w-24 h-24 rounded-full bg-[#4169E1]/10 animate-float-slow-reverse"></div>
      <div className="absolute bottom-1/3 left-1/4 w-20 h-20">
        <div className="w-full h-full bg-amp-green/10 rotate-45 animate-spin-slow"></div>
      </div>
      <div className="absolute top-1/3 right-1/3 w-16 h-16">
        <div className="w-full h-full bg-amp-purple/10 animate-pulse-slow">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path d="M50 0 L90 30 L70 80 L30 80 L10 30 Z" fill="currentColor"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default AnimatedBackground;
