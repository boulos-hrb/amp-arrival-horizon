
import React from 'react';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden flex items-center justify-center">
      <div className="relative w-full h-full">
        <img 
          src="/lovable-uploads/0de90a27-0aa3-4e48-ba95-507e3f145103.png" 
          alt="Background Starburst" 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] max-w-none opacity-10 animate-spin-slow"
        />
      </div>
    </div>
  );
};

export default AnimatedBackground;
