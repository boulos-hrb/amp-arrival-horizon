
import React, { useState } from 'react';
import { toast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

interface NewsletterFormProps {
  className?: string;
}

const NewsletterForm: React.FC<NewsletterFormProps> = ({ className }) => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const isMobile = useIsMobile();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    try {
      // Send form data to Formspree
      const response = await fetch("https://formspree.io/f/mwplarkw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setEmail('');
        setShowThankYou(true);
        // Hide thank you message after 5 seconds
        setTimeout(() => {
          setShowThankYou(false);
        }, 5000);
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={className}>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className={`${isMobile ? 'flex flex-col space-y-3' : 'sm:flex'} form-container`}>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`form-input ${isMobile ? 'rounded-md' : 'sm:rounded-r-none'} mb-3 sm:mb-0`}
            disabled={isLoading}
          />
          <Button 
            type="submit" 
            className={`bg-amp-button text-amp-green font-medium text-sm h-10 px-4 py-2 rounded-md ${isMobile ? 'w-full' : 'sm:rounded-l-none'} hover:bg-opacity-90 transition-all shadow-sm`}
            disabled={isLoading}
          >
            <span className="font-bold text-[1.15em] uppercase">
              {isLoading ? 'Sending...' : 'Notify Me'}
            </span>
          </Button>
        </div>
        <p className="text-amp-grey text-sm mt-2 mb-2">
          Be the first to know when we launch.
        </p>
        
        {/* Added images side by side horizontally with reduced spacing */}
        <div className="flex justify-center items-center space-x-4 mt-0">
          <img 
            src="/lovable-uploads/55f51c73-ff50-4405-9b95-be5469c05fe2.png" 
            alt="Purple Star" 
            className="w-16 h-16"
          />
          <img 
            src="/lovable-uploads/1301ea30-2dee-4bd3-8510-d3c86070a1e3.png" 
            alt="Orange Sound Bars" 
            className="w-16 h-16"
          />
          <img 
            src="/lovable-uploads/8cbac6f5-e89d-4726-9d75-2820c55152cf.png" 
            alt="Green Star" 
            className="w-16 h-16"
          />
        </div>
      </form>
      
      {/* Animated thank you message */}
      <div className={`mt-6 overflow-hidden transition-all duration-500 ease-in-out ${showThankYou ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-amp-black border border-amp-orange/30 rounded-md p-4 shadow-md animate-fade-in">
          <div className="flex items-center justify-center space-x-2">
            <span className="h-2 w-2 rounded-full bg-amp-orange animate-pulse"></span>
            <p className="text-amp-green font-medium">Thanks for signing up - we will let you know once Amp is live!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterForm;
