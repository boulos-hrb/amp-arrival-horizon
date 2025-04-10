
import React, { useState } from 'react';
import { toast } from "@/components/ui/use-toast";

interface NewsletterFormProps {
  className?: string;
}

const NewsletterForm: React.FC<NewsletterFormProps> = ({ className }) => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

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
        toast({
          title: "Thanks for signing up!",
          description: "We'll let you know when Amp launches.",
        });
        setEmail('');
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
    <form onSubmit={handleSubmit} className={`${className} max-w-md mx-auto`}>
      <div className="sm:flex form-container">
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-input sm:rounded-r-none"
          disabled={isLoading}
        />
        <button 
          type="submit" 
          className="submit-button sm:rounded-l-none"
          disabled={isLoading}
        >
          {isLoading ? 'Sending...' : 'Notify Me'}
        </button>
      </div>
      <p className="text-amp-grey text-sm mt-2">
        Be the first to know when we launch.
      </p>
    </form>
  );
};

export default NewsletterForm;
