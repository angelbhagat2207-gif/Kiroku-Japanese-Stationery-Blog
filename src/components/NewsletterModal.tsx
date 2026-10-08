import React, { useState } from 'react';
import { X, Send, CheckCircle2 } from 'lucide-react';

interface NewsletterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NewsletterModal: React.FC<NewsletterModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-[#1C1917]/60 backdrop-blur-xs flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md bg-[#FAF8F5] border border-[#E8E2D5] shadow-2xl p-6 sm:p-8 relative animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 text-[#78716C] hover:text-[#1C1917] cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <div className="w-9 h-9 mx-auto mb-3 rounded-full border border-[#BA3829]/40 bg-[#BA3829]/5 text-[#BA3829] flex items-center justify-center text-xs font-serif font-bold">
            便り
          </div>
          <h3 className="font-serif text-2xl font-medium text-[#1C1917]">
            The Kiroku Sunday Letter
          </h3>
          <p className="text-xs text-[#57534E] mt-2 leading-relaxed">
            A quiet weekend digest on Japanese pens, paper mills, and studio routines.
          </p>
        </div>

        {submitted ? (
          <div className="py-6 text-center space-y-3">
            <CheckCircle2 className="w-10 h-10 text-[#5F7161] mx-auto" />
            <p className="font-serif text-lg font-medium text-[#1C1917]">
              Welcome to Kiroku.
            </p>
            <p className="text-xs text-[#57534E]">
              We have dispatched your first letter to {email}.
            </p>
            <button
              onClick={onClose}
              className="mt-2 px-4 py-2 text-xs font-semibold text-[#1C1917] border border-[#D6CEBE] hover:border-[#1C1917] rounded-xs"
            >
              Return to reading
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address..."
                className="w-full px-4 py-2.5 text-sm bg-white border border-[#D6CEBE] text-[#1C1917] focus:border-[#BA3829] focus:outline-hidden"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2.5 text-xs font-semibold tracking-wider text-white bg-[#1C1917] hover:bg-[#BA3829] transition-colors uppercase rounded-xs cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Subscribe</span>
              <Send className="w-3.5 h-3.5" />
            </button>
            <p className="text-[10px] text-center text-[#78716C]">
              No ads, no trackers. You can unsubscribe at any moment.
            </p>
          </form>
        )}
      </div>
    </div>
  );
};
