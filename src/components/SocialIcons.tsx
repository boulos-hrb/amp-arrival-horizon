
import React from 'react';
import { Instagram, Linkedin } from 'lucide-react';

const SocialIcons: React.FC = () => {
  return (
    <div className="flex justify-center space-x-4 mt-12">
      <a 
        href="https://instagram.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-amp-grey hover:text-amp-white transition-colors duration-300"
        aria-label="Follow us on Instagram"
      >
        <Instagram size={24} />
      </a>
      <a 
        href="https://linkedin.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-amp-grey hover:text-amp-white transition-colors duration-300"
        aria-label="Connect with us on LinkedIn"
      >
        <Linkedin size={24} />
      </a>
    </div>
  );
};

export default SocialIcons;
