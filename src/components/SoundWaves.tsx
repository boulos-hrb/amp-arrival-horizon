
import React from 'react';

const SoundWaves: React.FC = () => {
  return (
    <div className="sound-waves opacity-70 flex items-center justify-center gap-1.5 h-16 my-6">
      <div className="bar h-10 animate-wave-1"></div>
      <div className="bar h-16 animate-wave-2"></div>
      <div className="bar h-8 animate-wave-3"></div>
      <div className="bar h-24 animate-wave-4"></div>
      <div className="bar h-12 animate-wave-5"></div>
      <div className="bar h-20 animate-wave-1"></div>
      <div className="bar h-8 animate-wave-2"></div>
      <div className="bar h-16 animate-wave-3"></div>
      <div className="bar h-10 animate-wave-4"></div>
      <div className="bar h-14 animate-wave-5"></div>
    </div>
  );
};

export default SoundWaves;
