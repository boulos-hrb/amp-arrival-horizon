
import React from 'react';

const SoundWaves: React.FC = () => {
  // Generate random delay values for each bar to desynchronize them
  const generateRandomDelay = () => Math.random() * 2; // 0-2 seconds delay
  const generateRandomDuration = (base: number) => base + (Math.random() * 0.5 - 0.25); // ±0.25s variation

  return (
    <div className="sound-waves opacity-70 flex items-center justify-center gap-1.5 h-8 mt-0 mb-0 w-full">
      <div className="bar h-8 animate-wave-3" style={{ animationDelay: `${generateRandomDelay()}s` }}></div>
      <div className="bar h-12 animate-wave-5" style={{ animationDelay: `${generateRandomDelay()}s` }}></div>
      <div className="bar h-6 animate-wave-2" style={{ animationDelay: `${generateRandomDelay()}s` }}></div>
      <div className="bar h-16 animate-wave-4" style={{ animationDelay: `${generateRandomDelay()}s` }}></div>
      <div className="bar h-10 animate-wave-1" style={{ animationDelay: `${generateRandomDelay()}s` }}></div>
      <div className="bar h-14 animate-wave-3" style={{ animationDelay: `${generateRandomDelay()}s` }}></div>
      <div className="bar h-8 animate-wave-5" style={{ animationDelay: `${generateRandomDelay()}s` }}></div>
      <div className="bar h-18 animate-wave-2" style={{ animationDelay: `${generateRandomDelay()}s` }}></div>
      <div className="bar h-12 animate-wave-4" style={{ animationDelay: `${generateRandomDelay()}s` }}></div>
      <div className="bar h-20 animate-wave-1" style={{ animationDelay: `${generateRandomDelay()}s` }}></div>
      <div className="bar h-10 animate-wave-3" style={{ animationDelay: `${generateRandomDelay()}s` }}></div>
      <div className="bar h-16 animate-wave-5" style={{ animationDelay: `${generateRandomDelay()}s` }}></div>
      <div className="bar h-8 animate-wave-2" style={{ animationDelay: `${generateRandomDelay()}s` }}></div>
      <div className="bar h-24 animate-wave-4" style={{ animationDelay: `${generateRandomDelay()}s` }}></div>
      <div className="bar h-12 animate-wave-1" style={{ animationDelay: `${generateRandomDelay()}s` }}></div>
      <div className="bar h-20 animate-wave-3" style={{ animationDelay: `${generateRandomDelay()}s` }}></div>
      <div className="bar h-8 animate-wave-5" style={{ animationDelay: `${generateRandomDelay()}s` }}></div>
      <div className="bar h-16 animate-wave-2" style={{ animationDelay: `${generateRandomDelay()}s` }}></div>
      <div className="bar h-10 animate-wave-4" style={{ animationDelay: `${generateRandomDelay()}s` }}></div>
      <div className="bar h-14 animate-wave-1" style={{ animationDelay: `${generateRandomDelay()}s` }}></div>
      <div className="bar h-18 animate-wave-3" style={{ animationDelay: `${generateRandomDelay()}s` }}></div>
      <div className="bar h-10 animate-wave-5" style={{ animationDelay: `${generateRandomDelay()}s` }}></div>
      <div className="bar h-22 animate-wave-2" style={{ animationDelay: `${generateRandomDelay()}s` }}></div>
      <div className="bar h-14 animate-wave-4" style={{ animationDelay: `${generateRandomDelay()}s` }}></div>
      <div className="bar h-8 animate-wave-1" style={{ animationDelay: `${generateRandomDelay()}s` }}></div>
      <div className="bar h-12 animate-wave-3" style={{ animationDelay: `${generateRandomDelay()}s` }}></div>
      <div className="bar h-20 animate-wave-5" style={{ animationDelay: `${generateRandomDelay()}s` }}></div>
      <div className="bar h-10 animate-wave-2" style={{ animationDelay: `${generateRandomDelay()}s` }}></div>
      <div className="bar h-16 animate-wave-4" style={{ animationDelay: `${generateRandomDelay()}s` }}></div>
      <div className="bar h-8 animate-wave-1" style={{ animationDelay: `${generateRandomDelay()}s` }}></div>
      <div className="bar h-14 animate-wave-3" style={{ animationDelay: `${generateRandomDelay()}s` }}></div>
      <div className="bar h-18 animate-wave-5" style={{ animationDelay: `${generateRandomDelay()}s` }}></div>
      <div className="bar h-12 animate-wave-2" style={{ animationDelay: `${generateRandomDelay()}s` }}></div>
      <div className="bar h-24 animate-wave-4" style={{ animationDelay: `${generateRandomDelay()}s` }}></div>
      <div className="bar h-10 animate-wave-1" style={{ animationDelay: `${generateRandomDelay()}s` }}></div>
      <div className="bar h-16 animate-wave-3" style={{ animationDelay: `${generateRandomDelay()}s` }}></div>
      <div className="bar h-8 animate-wave-5" style={{ animationDelay: `${generateRandomDelay()}s` }}></div>
      <div className="bar h-20 animate-wave-2" style={{ animationDelay: `${generateRandomDelay()}s` }}></div>
      <div className="bar h-12 animate-wave-4" style={{ animationDelay: `${generateRandomDelay()}s` }}></div>
      <div className="bar h-14 animate-wave-1" style={{ animationDelay: `${generateRandomDelay()}s` }}></div>
      <div className="bar h-10 animate-wave-3" style={{ animationDelay: `${generateRandomDelay()}s` }}></div>
      <div className="bar h-18 animate-wave-5" style={{ animationDelay: `${generateRandomDelay()}s` }}></div>
      <div className="bar h-8 animate-wave-2" style={{ animationDelay: `${generateRandomDelay()}s` }}></div>
      <div className="bar h-16 animate-wave-4" style={{ animationDelay: `${generateRandomDelay()}s` }}></div>
      <div className="bar h-12 animate-wave-1" style={{ animationDelay: `${generateRandomDelay()}s` }}></div>
      <div className="bar h-22 animate-wave-3" style={{ animationDelay: `${generateRandomDelay()}s` }}></div>
      <div className="bar h-10 animate-wave-5" style={{ animationDelay: `${generateRandomDelay()}s` }}></div>
      <div className="bar h-14 animate-wave-2" style={{ animationDelay: `${generateRandomDelay()}s` }}></div>
      <div className="bar h-20 animate-wave-4" style={{ animationDelay: `${generateRandomDelay()}s` }}></div>
      <div className="bar h-8 animate-wave-1" style={{ animationDelay: `${generateRandomDelay()}s` }}></div>
      <div className="bar h-16 animate-wave-3" style={{ animationDelay: `${generateRandomDelay()}s` }}></div>
      <div className="bar h-12 animate-wave-5" style={{ animationDelay: `${generateRandomDelay()}s` }}></div>
      <div className="bar h-18 animate-wave-2" style={{ animationDelay: `${generateRandomDelay()}s` }}></div>
      <div className="bar h-10 animate-wave-4" style={{ animationDelay: `${generateRandomDelay()}s` }}></div>
      <div className="bar h-24 animate-wave-1" style={{ animationDelay: `${generateRandomDelay()}s` }}></div>
      <div className="bar h-8 animate-wave-3" style={{ animationDelay: `${generateRandomDelay()}s` }}></div>
      <div className="bar h-14 animate-wave-5" style={{ animationDelay: `${generateRandomDelay()}s` }}></div>
      <div className="bar h-12 animate-wave-2" style={{ animationDelay: `${generateRandomDelay()}s` }}></div>
      <div className="bar h-20 animate-wave-4" style={{ animationDelay: `${generateRandomDelay()}s` }}></div>
      <div className="bar h-10 animate-wave-1" style={{ animationDelay: `${generateRandomDelay()}s` }}></div>
      <div className="bar h-16 animate-wave-3" style={{ animationDelay: `${generateRandomDelay()}s` }}></div>
      <div className="bar h-8 animate-wave-5" style={{ animationDelay: `${generateRandomDelay()}s` }}></div>
      <div className="bar h-18 animate-wave-2" style={{ animationDelay: `${generateRandomDelay()}s` }}></div>
      <div className="bar h-12 animate-wave-4" style={{ animationDelay: `${generateRandomDelay()}s` }}></div>
      <div className="bar h-14 animate-wave-1" style={{ animationDelay: `${generateRandomDelay()}s` }}></div>
      <div className="bar h-22 animate-wave-3" style={{ animationDelay: `${generateRandomDelay()}s` }}></div>
      <div className="bar h-10 animate-wave-5" style={{ animationDelay: `${generateRandomDelay()}s` }}></div>
      <div className="bar h-16 animate-wave-2" style={{ animationDelay: `${generateRandomDelay()}s` }}></div>
      <div className="bar h-8 animate-wave-4" style={{ animationDelay: `${generateRandomDelay()}s` }}></div>
      <div className="bar h-20 animate-wave-1" style={{ animationDelay: `${generateRandomDelay()}s` }}></div>
      <div className="bar h-12 animate-wave-3" style={{ animationDelay: `${generateRandomDelay()}s` }}></div>
      <div className="bar h-18 animate-wave-5" style={{ animationDelay: `${generateRandomDelay()}s` }}></div>
      <div className="bar h-10 animate-wave-2" style={{ animationDelay: `${generateRandomDelay()}s` }}></div>
      <div className="bar h-14 animate-wave-4" style={{ animationDelay: `${generateRandomDelay()}s` }}></div>
      <div className="bar h-8 animate-wave-1" style={{ animationDelay: `${generateRandomDelay()}s` }}></div>
      <div className="bar h-24 animate-wave-3" style={{ animationDelay: `${generateRandomDelay()}s` }}></div>
      <div className="bar h-12 animate-wave-5" style={{ animationDelay: `${generateRandomDelay()}s` }}></div>
      <div className="bar h-16 animate-wave-2" style={{ animationDelay: `${generateRandomDelay()}s` }}></div>
      <div className="bar h-10 animate-wave-4" style={{ animationDelay: `${generateRandomDelay()}s` }}></div>
      <div className="bar h-20 animate-wave-1" style={{ animationDelay: `${generateRandomDelay()}s` }}></div>
      <div className="bar h-8 animate-wave-3" style={{ animationDelay: `${generateRandomDelay()}s` }}></div>
      <div className="bar h-14 animate-wave-5" style={{ animationDelay: `${generateRandomDelay()}s` }}></div>
      <div className="bar h-18 animate-wave-2" style={{ animationDelay: `${generateRandomDelay()}s` }}></div>
      <div className="bar h-12 animate-wave-4" style={{ animationDelay: `${generateRandomDelay()}s` }}></div>
      <div className="bar h-10 animate-wave-1" style={{ animationDelay: `${generateRandomDelay()}s` }}></div>
      <div className="bar h-16 animate-wave-3" style={{ animationDelay: `${generateRandomDelay()}s` }}></div>
      <div className="bar h-8 animate-wave-5" style={{ animationDelay: `${generateRandomDelay()}s` }}></div>
      <div className="bar h-22 animate-wave-2" style={{ animationDelay: `${generateRandomDelay()}s` }}></div>
      <div className="bar h-14 animate-wave-4" style={{ animationDelay: `${generateRandomDelay()}s` }}></div>
      <div className="bar h-12 animate-wave-1" style={{ animationDelay: `${generateRandomDelay()}s` }}></div>
      <div className="bar h-20 animate-wave-3" style={{ animationDelay: `${generateRandomDelay()}s` }}></div>
      <div className="bar h-8 animate-wave-5" style={{ animationDelay: `${generateRandomDelay()}s` }}></div>
      <div className="bar h-16 animate-wave-2" style={{ animationDelay: `${generateRandomDelay()}s` }}></div>
      <div className="bar h-12 animate-wave-4" style={{ animationDelay: `${generateRandomDelay()}s` }}></div>
      <div className="bar h-18 animate-wave-1" style={{ animationDelay: `${generateRandomDelay()}s` }}></div>
      <div className="bar h-10 animate-wave-3" style={{ animationDelay: `${generateRandomDelay()}s` }}></div>
      <div className="bar h-14 animate-wave-5" style={{ animationDelay: `${generateRandomDelay()}s` }}></div>
      <div className="bar h-8 animate-wave-2" style={{ animationDelay: `${generateRandomDelay()}s` }}></div>
      <div className="bar h-24 animate-wave-4" style={{ animationDelay: `${generateRandomDelay()}s` }}></div>
      <div className="bar h-12 animate-wave-1" style={{ animationDelay: `${generateRandomDelay()}s` }}></div>
      <div className="bar h-20 animate-wave-3" style={{ animationDelay: `${generateRandomDelay()}s` }}></div>
      <div className="bar h-10 animate-wave-5" style={{ animationDelay: `${generateRandomDelay()}s` }}></div>
      <div className="bar h-16 animate-wave-2" style={{ animationDelay: `${generateRandomDelay()}s` }}></div>
      <div className="bar h-8 animate-wave-4" style={{ animationDelay: `${generateRandomDelay()}s` }}></div>
      <div className="bar h-14 animate-wave-1" style={{ animationDelay: `${generateRandomDelay()}s` }}></div>
      <div className="bar h-18 animate-wave-3" style={{ animationDelay: `${generateRandomDelay()}s` }}></div>
      <div className="bar h-12 animate-wave-5" style={{ animationDelay: `${generateRandomDelay()}s` }}></div>
      <div className="bar h-22 animate-wave-2" style={{ animationDelay: `${generateRandomDelay()}s` }}></div>
      <div className="bar h-10 animate-wave-4" style={{ animationDelay: `${generateRandomDelay()}s` }}></div>
      <div className="bar h-16 animate-wave-1" style={{ animationDelay: `${generateRandomDelay()}s` }}></div>
      <div className="bar h-8 animate-wave-3" style={{ animationDelay: `${generateRandomDelay()}s` }}></div>
    </div>
  );
};

export default SoundWaves;
