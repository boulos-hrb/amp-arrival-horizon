
import { useState } from 'react';
import { toast } from "@/components/ui/use-toast";

export interface NewsletterFormState {
  email: string;
  isLoading: boolean;
  showThankYou: boolean;
}

export function useNewsletterForm() {
  const [state, setState] = useState<NewsletterFormState>({
    email: '',
    isLoading: false,
    showThankYou: false
  });

  const setEmail = (email: string) => {
    setState(prev => ({ ...prev, email }));
  };

  const resetForm = () => {
    setState(prev => ({ ...prev, email: '' }));
  };

  const showThankYouMessage = () => {
    setState(prev => ({ ...prev, showThankYou: true }));
    
    // Hide thank you message after 5 seconds
    setTimeout(() => {
      setState(prev => ({ ...prev, showThankYou: false }));
    }, 5000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!state.email) {
      toast({
        title: "Email required",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(state.email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    setState(prev => ({ ...prev, isLoading: true }));
    
    try {
      // Send form data to Formspree
      const response = await fetch("https://formspree.io/f/mwplarkw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: state.email }),
      });

      if (response.ok) {
        resetForm();
        showThankYouMessage();
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
      setState(prev => ({ ...prev, isLoading: false }));
    }
  };

  return {
    ...state,
    setEmail,
    handleSubmit
  };
}
