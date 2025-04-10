
import React from 'react';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-amp-orange/5 blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-amp-purple/5 blur-3xl animate-pulse-slow"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-amp-green/5 blur-3xl animate-pulse-slow"></div>
    </div>
  );
};

export default AnimatedBackground;
