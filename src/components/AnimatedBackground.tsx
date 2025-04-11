
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

const CornerElement: React.FC<{
  type: 'circle' | 'square' | 'star';
  position: string;
  color: string;
  size: string;
}> = ({ type, position, color, size }) => {
  return (
    <div className={`absolute ${position}`}>
      {type === 'circle' && (
        <div className={`rounded-full ${size} ${color} opacity-70`}></div>
      )}
      {type === 'square' && (
        <div className={`${size} ${color} opacity-70`}></div>
      )}
      {type === 'star' && (
        <img 
          src={ASSETS.IMAGES.GREEN_STAR} 
          alt="Corner Star" 
          className={`${size} opacity-70`}
        />
      )}
    </div>
  );
};

const AnimatedBackground: React.FC = () => {
  const isMobile = useIsMobile();
  
  const cornerElements = [
    {
      type: 'star' as const,
      position: '-top-10 -left-10', 
      color: 'bg-amp-green',
      size: 'w-32 h-32'
    },
    {
      type: 'square' as const,
      position: '-bottom-16 -left-16',
      color: 'bg-amp-purple',
      size: 'w-40 h-40'
    },
    {
      type: 'circle' as const,
      position: '-bottom-20 -right-20',
      color: 'bg-amp-orange',
      size: 'w-48 h-48'
    }
  ];
  
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
        {/* Corner elements - show on both mobile and desktop */}
        {cornerElements.map((element, index) => (
          <CornerElement 
            key={`corner-${index}`}
            type={element.type}
            position={element.position}
            color={element.color}
            size={element.size}
          />
        ))}
        
        {/* Animated elements - only show on desktop */}
        {!isMobile && animatedElements.map((element, index) => (
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
