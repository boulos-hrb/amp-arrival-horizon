
import React from 'react';
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { useNewsletterForm } from "@/hooks/use-newsletter-form";
import { ASSETS } from "@/constants/animations";

interface NewsletterFormProps {
  className?: string;
}

const ThankYouMessage = () => (
  <div className="bg-amp-black border border-amp-orange/30 rounded-md p-4 shadow-md animate-fade-in">
    <div className="flex items-center justify-center space-x-2">
      <span className="h-2 w-2 rounded-full bg-amp-orange animate-pulse"></span>
      <p className="text-amp-green font-gotham font-bold">Thanks for signing up - we will let you know once Amp is live!</p>
    </div>
  </div>
);

// We're keeping the FormImages component definition but not using it
const FormImages = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className={`flex justify-center items-center space-x-4 ${isMobile ? 'mt-0' : 'mt-6'}`}>
      <img 
        src={ASSETS.IMAGES.PURPLE_ICON} 
        alt="Purple Star" 
        className="w-16 h-16"
      />
      <img 
        src={ASSETS.IMAGES.ORANGE_BARS} 
        alt="Orange Sound Bars" 
        className="w-16 h-16"
      />
      <img 
        src={ASSETS.IMAGES.GREEN_ICON} 
        alt="Green Star" 
        className="w-16 h-16"
      />
    </div>
  );
};

const NewsletterForm: React.FC<NewsletterFormProps> = ({ className }) => {
  const { email, isLoading, showThankYou, setEmail, handleSubmit } = useNewsletterForm();
  const isMobile = useIsMobile();

  return (
    <div className={className}>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <p className="text-amp-grey text-sm mb-2 font-gotham font-bold">
          Be the first to know when we launch.
        </p>
        
        <div className={`${isMobile ? 'flex flex-col space-y-3' : 'sm:flex sm:space-x-3'} form-container`}>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`form-input ${isMobile ? 'rounded-md' : 'sm:rounded-md'} mb-3 sm:mb-0 font-gotham font-bold`}
            disabled={isLoading}
          />
          <Button 
            type="submit" 
            className={`bg-amp-button text-amp-green font-gotham font-bold text-sm h-10 px-4 py-2 rounded-md ${isMobile ? 'w-full' : ''} hover:bg-opacity-90 transition-all shadow-sm`}
            disabled={isLoading}
          >
            <span className="font-gotham font-bold text-[1.15em] uppercase">
              {isLoading ? 'Sending...' : 'Sign me Up'}
            </span>
          </Button>
        </div>
        
        {/* Removed the FormImages component from here */}
      </form>
      
      {/* Animated thank you message */}
      <div className={`mt-6 overflow-hidden transition-all duration-500 ease-in-out ${showThankYou ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'}`}>
        <ThankYouMessage />
      </div>
    </div>
  );
};

export default NewsletterForm;
