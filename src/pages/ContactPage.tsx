import React, { useState } from 'react';
import { Send, CheckCircle2, ChevronDown, Mail, MapPin, Clock } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: 'general',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  const faqs = [
    {
      q: 'Where can I purchase authentic Japanese stationery if I live outside Japan?',
      a: 'We recommend established independent retailers such as JetPens, Yoseka Stationery, Cult Pens, Tokyo Pen Shop, and Amazon Japan (which ships globally with competitive rates). Many brands like Midori and Kokuyo also distribute directly via authorized global boutiques.',
    },
    {
      q: 'What is the difference between original Tomoe River paper and Tomoe River Sanzen?',
      a: 'In 2020, the original manufacturer (Tomoegawa) ceased production. The recipe, machinery, and trademark were acquired by Sanzen Paper Co. While Sanzen retains the 52 gsm weight and high sheen/shading properties, it features slightly more paper tooth and marginally faster dry times.',
    },
    {
      q: 'How do I submit an article pitch or request a product benchmark?',
      a: 'We welcome editorial contributions from stationery archivists and researchers. Please select "Editorial Pitch" in the form below and include a 200-word synopsis with testing methodologies.',
    },
    {
      q: 'How do I care for ultra-fine 0.38mm Japanese gel pen nibs?',
      a: 'Never press down with heavy force—Japanese gel pens flow under their own weight. Always store capped pens vertically or horizontally, and avoid leaving them in hot environments (such as sunlit cars) which can cause air bubbles in the feed reservoir.',
    },
  ];

  return (
    <div className="min-h-screen py-12 sm:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <header className="mb-14 pb-8 border-b border-[#E8E2D5]">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#BA3829] mb-2">
            <span>連絡 · INQUIRIES & CORRESPONDENCE</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-[#1C1917] tracking-tight">
            Contact the Kiroku Editorial Desk
          </h1>
          <p className="text-sm sm:text-base text-[#57534E] max-w-2xl mt-3 leading-relaxed">
            Have a question about a paper benchmark, a Tokyo stationery itinerary, or an editorial inquiry? We read every letter with care.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          
          {/* Left Column: Form (7 cols) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 border border-[#E8E2D5]">
            <h2 className="font-serif text-2xl font-medium text-[#1C1917] mb-6">
              Send a Message
            </h2>

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-[#5F7161] mx-auto" />
                <h3 className="font-serif text-2xl font-medium text-[#1C1917]">
                  Thank You, {formData.name}.
                </h3>
                <p className="text-xs sm:text-sm text-[#57534E] max-w-md mx-auto leading-relaxed">
                  Your dispatch has been delivered to our editorial desk. We typically respond within two to three business days.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      inquiryType: 'general',
                      subject: '',
                      message: '',
                    });
                  }}
                  className="mt-4 px-4 py-2 text-xs font-semibold text-[#1C1917] border border-[#D6CEBE] hover:border-[#1C1917] transition-colors rounded-xs"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#78716C] mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Maya Lin"
                    className="w-full px-3.5 py-2.5 text-sm bg-[#FAF8F5] border border-[#D6CEBE] text-[#1C1917] focus:border-[#BA3829] focus:bg-white focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#78716C] mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. maya@example.com"
                    className="w-full px-3.5 py-2.5 text-sm bg-[#FAF8F5] border border-[#D6CEBE] text-[#1C1917] focus:border-[#BA3829] focus:bg-white focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#78716C] mb-1.5">
                    Inquiry Topic
                  </label>
                  <select
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-[#FAF8F5] border border-[#D6CEBE] text-[#1C1917] focus:border-[#BA3829] focus:bg-white focus:outline-hidden"
                  >
                    <option value="general">General Inquiry or Feedback</option>
                    <option value="pitch">Editorial Pitch & Paper Studies</option>
                    <option value="press">Press & Media Inquiries</option>
                    <option value="corrections">Factual Correction / Typo</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#78716C] mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Brief summary of your note..."
                    className="w-full px-3.5 py-2.5 text-sm bg-[#FAF8F5] border border-[#D6CEBE] text-[#1C1917] focus:border-[#BA3829] focus:bg-white focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#78716C] mb-1.5">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your thoughts here..."
                    className="w-full px-3.5 py-2.5 text-sm bg-[#FAF8F5] border border-[#D6CEBE] text-[#1C1917] focus:border-[#BA3829] focus:bg-white focus:outline-hidden"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3 text-xs font-semibold tracking-wider text-white bg-[#1C1917] hover:bg-[#BA3829] transition-colors uppercase rounded-xs cursor-pointer inline-flex items-center justify-center gap-2"
                >
                  <span>Dispatch Letter</span>
                  <Send className="w-3.5 h-3.5" />
                </button>

              </form>
            )}

          </div>

          {/* Right Column: Studio Info & Etiquette (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="bg-[#FAF8F5] p-6 border border-[#E8E2D5]">
              <h3 className="font-serif text-lg font-semibold text-[#1C1917] mb-4">
                The Yanaka Writing Room
              </h3>
              
              <div className="space-y-3 text-xs text-[#57534E]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#BA3829] shrink-0 mt-0.5" />
                  <p>
                    Kiroku Editorial Desk <br />
                    3-Chome, Yanaka, Taito-ku <br />
                    Tokyo 110-0001, Japan
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#BA3829] shrink-0 mt-0.5" />
                  <p>letters@kiroku-stationery.com</p>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#BA3829] shrink-0 mt-0.5" />
                  <p>Desk Hours: Mon – Fri, 09:00 – 17:00 JST</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white border border-[#E8E2D5]">
              <h4 className="font-serif text-base font-medium text-[#1C1917] mb-2">
                Press & Review Samples
              </h4>
              <p className="text-xs text-[#57534E] leading-relaxed">
                We accept paper samples and prototypes from independent mills and craft ateliers. However, in accordance with our Monozukuri charter, sending products guarantees honest, empirical benchmark evaluation rather than positive placement.
              </p>
            </div>

          </div>

        </div>

        {/* FAQ Accordion Section */}
        <section className="pt-12 border-t border-[#E8E2D5]">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-[#BA3829] block mb-1">
              Common Questions
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#1C1917]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="divide-y divide-[#E8E2D5] border-y border-[#E8E2D5] bg-white">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={idx} className="transition-colors">
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-hidden hover:bg-[#FAF8F5]"
                  >
                    <span className="font-serif text-base font-medium text-[#1C1917]">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#78716C] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#BA3829]' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#57534E] leading-relaxed animate-in fade-in duration-200">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

      </div>
    </div>
  );
};
