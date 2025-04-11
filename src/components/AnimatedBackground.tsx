
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { ANIMATIONS, ASSETS } from '@/constants/animations';

interface AnimationProps {
  src: string;
  alt: string;
  size: string;
  position: string;
  floatAnimation: string;
  spinAnimation: string;
}

const AnimatedElement: React.FC<AnimationProps> = ({
  src,
  alt,
  size,
  position,
  floatAnimation,
  spinAnimation
}) => {
  return (
    <div className={`absolute ${position} ${floatAnimation}`}>
      <img 
        src={src} 
        alt={alt} 
        className={`${size} opacity-50 ${spinAnimation}`}
      />
    </div>
  );
};

const AnimatedBackground: React.FC = () => {
  const isMobile = useIsMobile();
  
  if (isMobile) {
    return null; // Don't render anything on mobile
  }
  
  const animatedElements = [
    {
      src: ASSETS.IMAGES.GREEN_STAR,
      alt: "Green Star",
      size: "w-16 h-16",
      position: "top-[20%] right-[15%]",
      floatAnimation: ANIMATIONS.FLOAT.SLOW,
      spinAnimation: ANIMATIONS.SPIN.SLOW
    },
    {
      src: ASSETS.IMAGES.PURPLE_STAR,
      alt: "Purple Star",
      size: "w-12 h-12", 
      position: "bottom-[30%] left-[10%]",
      floatAnimation: ANIMATIONS.FLOAT.SLOW_REVERSE,
      spinAnimation: ANIMATIONS.SPIN.SLOW_REVERSE
    }
  ];
  
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden flex items-center justify-center">
      <div className="relative w-full h-full">
        {animatedElements.map((element, index) => (
          <AnimatedElement 
            key={index}
            src={element.src}
            alt={element.alt}
            size={element.size}
            position={element.position}
            floatAnimation={element.floatAnimation}
            spinAnimation={element.spinAnimation}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimatedBackground;
