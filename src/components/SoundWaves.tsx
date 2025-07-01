
import React from 'react';

const SoundWaves: React.FC = () => {
  // Generate random delay values for each bar to desynchronize them
  const generateRandomDelay = () => Math.random() * 2; // 0-2 seconds delay

  // Create bars with responsive count based on screen size
  const createBars = (count: number) => {
    return Array.from({ length: count }, (_, i) => {
      const heights = [8, 12, 6, 16, 10, 14, 8, 18, 12, 20, 10, 16, 8, 24, 12, 20, 8, 16, 10, 14, 18, 10, 22, 14, 8, 12, 20, 10, 16, 8];
      const animations = ['animate-wave-1', 'animate-wave-2', 'animate-wave-3', 'animate-wave-4', 'animate-wave-5'];
      
      const height = heights[i % heights.length];
      const animation = animations[i % animations.length];
      
      return (
        <div 
          key={i}
          className={`bar h-${height} ${animation}`} 
          style={{ animationDelay: `${generateRandomDelay()}s` }}
        />
      );
    });
  };

  return (
    <div className="w-full flex justify-center overflow-hidden mt-0 mb-0">
      {/* Mobile: Show fewer bars */}
      <div className="sound-waves opacity-70 flex items-center justify-center gap-1.5 h-8 w-full sm:hidden">
        {createBars(25)}
      </div>
      
      {/* Tablet: Show medium number of bars */}
      <div className="sound-waves opacity-70 hidden sm:flex lg:hidden items-center justify-center gap-1.5 h-8 w-full">
        {createBars(60)}
      </div>
      
      {/* Desktop: Show full number of bars to fill screen */}
      <div className="sound-waves opacity-70 hidden lg:flex items-center justify-center gap-1.5 h-8 w-full">
        {createBars(120)}
      </div>
    </div>
  );
};

export default SoundWaves;
