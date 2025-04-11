
import React from 'react';

interface ScrollingHeaderProps {
  position: 'top' | 'bottom';
}

const ScrollingHeader: React.FC<ScrollingHeaderProps> = ({ position }) => {
  const baseClasses = "w-full bg-amp-black py-1 overflow-hidden whitespace-nowrap";
  const positionClasses = position === 'top' ? "top-0" : "bottom-0";
  
  // Create repeating text for scrolling effect
  const repeatedText = Array(10).fill("Coming Soon").join(" • ");
  
  return (
    <div className={`fixed ${positionClasses} ${baseClasses} z-10`}>
      <div className="flex relative w-full">
        {/* First copy of the text */}
        <div className="animate-[marquee_20s_linear_infinite]">
          <span className="text-xs uppercase tracking-wider text-amp-green font-semibold inline-block">
            {repeatedText}
          </span>
        </div>
        
        {/* Second copy of the text that follows the first one */}
        <div className="animate-[marquee_20s_linear_infinite] absolute top-0 left-full">
          <span className="text-xs uppercase tracking-wider text-amp-green font-semibold inline-block">
            {repeatedText}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ScrollingHeader;
