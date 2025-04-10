
import React from 'react';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden flex items-center justify-center">
      <div className="relative w-full h-full">
        {/* Main starburst background */}
        <img 
          src="/lovable-uploads/0de90a27-0aa3-4e48-ba95-507e3f145103.png" 
          alt="Background Starburst" 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] max-w-none opacity-10 animate-spin-slow"
        />
        
        {/* Green star shape */}
        <img 
          src="/lovable-uploads/088b7bce-a01e-4e03-85d3-54be61826f4f.png" 
          alt="Green Star" 
          className="absolute top-[20%] right-[15%] w-16 h-16 opacity-50 animate-float-slow"
        />
        
        {/* Purple star shape */}
        <img 
          src="/lovable-uploads/8109b790-2977-4110-aec2-cc8a02bc7e3f.png" 
          alt="Purple Star" 
          className="absolute bottom-[30%] left-[10%] w-12 h-12 opacity-30 animate-float-slow-reverse"
        />
      </div>
    </div>
  );
};

export default AnimatedBackground;
