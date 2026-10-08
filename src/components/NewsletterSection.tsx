import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

interface NewsletterSectionProps {
  compact?: boolean;
}

export const NewsletterSection: React.FC<NewsletterSectionProps> = ({ compact = false }) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setIsSubmitted(true);
  };

  if (compact) {
    return (
      <div className="w-full">
        {isSubmitted ? (
          <div className="flex items-center gap-2 text-xs text-[#5F7161] py-2 font-medium">
            <CheckCircle2 className="w-4 h-4 text-[#5F7161]" />
            <span>Thank you. You are on the dispatch list.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-2">
            <div className="flex items-stretch gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.name@domain.com"
                aria-label="Email address for newsletter"
                className="w-full px-3 py-2 text-xs bg-white border border-[#D6CEBE] text-[#1C1917] placeholder-[#A8A29E] focus:border-[#BA3829] focus:outline-hidden"
              />
              <button
                type="submit"
                className="px-3.5 py-2 text-xs font-medium text-white bg-[#1C1917] hover:bg-[#BA3829] transition-colors whitespace-nowrap"
              >
                Join
              </button>
            </div>
            {error && <p className="text-[11px] text-[#BA3829]">{error}</p>}
          </form>
        )}
      </div>
    );
  }

  return (
    <section className="py-16 sm:py-20 bg-[#F4EFE6] border-y border-[#E8E2D5]" aria-labelledby="newsletter-heading">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-[#BA3829]/30 bg-[#BA3829]/5 text-[#BA3829] text-xs font-serif mb-4">
          便り
        </div>

        <h2
          id="newsletter-heading"
          className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#1C1917] font-medium tracking-tight mb-3"
        >
          The Kiroku Sunday Letter
        </h2>

        <p className="text-sm sm:text-base text-[#57534E] max-w-xl mx-auto mb-8 font-normal leading-relaxed">
          Once each Sunday, a short contemplation on paper mills, ink surface tension, and quiet desks. No spam, ever.
        </p>

        {isSubmitted ? (
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-white border border-[#5F7161]/30 rounded-xs text-[#2A402E]">
            <CheckCircle2 className="w-5 h-5 text-[#5F7161]" />
            <div className="text-left">
              <p className="text-sm font-semibold">You are now subscribed to the Kiroku Letter.</p>
              <p className="text-xs text-[#57534E]">A welcome note has been dispatched to {email}.</p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-0">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error) setError('');
                }}
                placeholder="Enter your email address..."
                aria-label="Email address for Kiroku newsletter"
                className="w-full sm:flex-1 px-4 py-3 text-sm bg-white border border-[#D6CEBE] text-[#1C1917] placeholder-[#A8A29E] focus:border-[#BA3829] focus:outline-hidden"
              />
              <button
                type="submit"
                className="px-6 py-3 text-sm font-medium text-white bg-[#1C1917] hover:bg-[#BA3829] transition-colors whitespace-nowrap flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Subscribe</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
            {error && <p className="text-xs text-[#BA3829] mt-2 text-left">{error}</p>}
            <p className="text-[11px] text-[#78716C] mt-3">
              Unsubscribe anytime. We respect your attention and your inbox privacy.
            </p>
          </form>
        )}

      </div>
    </section>
  );
};
