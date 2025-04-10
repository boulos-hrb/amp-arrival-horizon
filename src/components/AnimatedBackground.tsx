
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const AnimatedBackground: React.FC = () => {
  const isMobile = useIsMobile();
  
  if (isMobile) {
    return null; // Don't render anything on mobile
  }
  
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden flex items-center justify-center">
      <div className="relative w-full h-full">
        {/* Green star shape with rotation animation */}
        <img 
          src="/lovable-uploads/088b7bce-a01e-4e03-85d3-54be61826f4f.png" 
          alt="Green Star" 
          className="absolute top-[20%] right-[15%] w-16 h-16 opacity-50 animate-float-slow animate-spin-slow"
        />
        
        {/* Purple star shape with opposite rotation */}
        <img 
          src="/lovable-uploads/8109b790-2977-4110-aec2-cc8a02bc7e3f.png" 
          alt="Purple Star" 
          className="absolute bottom-[30%] left-[10%] w-12 h-12 opacity-30 animate-float-slow-reverse animate-spin-slow-reverse"
        />
      </div>
    </div>
  );
};

export default AnimatedBackground;
