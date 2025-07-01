
import React from 'react';

const Footer: React.FC = () => {
  return (
    <div className="mt-2 pt-2 pb-6 text-amp-grey text-sm font-gotham font-bold">
      &copy; {new Date().getFullYear()} Amp. All rights reserved.
    </div>
  );
};

export default Footer;
