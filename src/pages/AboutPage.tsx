import React from 'react';
import { AUTHORS } from '../data/articles.ts';
import { StationeryImage } from '../components/StationeryImage.tsx';
import { Feather, CheckCircle, ShieldCheck, Heart } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen py-12 sm:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <header className="mb-14 pb-10 border-b border-[#E8E2D5] text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#BA3829] mb-3">
            <span>記録 · OUR STORY & PHILOSOPHY</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-medium text-[#1C1917] tracking-tight leading-tight">
            Small Things. <br />
            <span className="italic text-[#57534E]">Beautifully Written.</span>
          </h1>

          <p className="text-base sm:text-lg text-[#57534E] mt-6 leading-relaxed">
            Kiroku was born from a simple conviction: in an increasingly fast, digitized world, the intentional friction of ink on paper is an essential sanctuary for human thought.
          </p>
        </header>

        {/* Studio Visual Feature */}
        <div className="mb-16">
          <StationeryImage
            src="/src/assets/images/japanese_journaling_desk_1791468786611.jpg"
            alt="The quiet morning studio desk in Yanaka, Tokyo with open notebook and green tea"
            aspectRatio="16/9"
          />
          <p className="text-xs font-serif italic text-[#78716C] pt-2 text-center">
            Our writing room in Yanaka, Tokyo — where every pen, paper, and planner is placed through rigorous daily use.
          </p>
        </div>

        {/* Narrative & Origin */}
        <div className="prose prose-stone max-w-none space-y-6 text-[#292524] text-base leading-[1.85] mb-16 pb-16 border-b border-[#E8E2D5]">
          <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#1C1917]">
            Why Japanese Stationery?
          </h2>

          <p>
            When you hold an ordinary Japanese ballpoint pen or unwrap an unadorned notebook, you immediately notice a distinct tactile quality. There are no garish logos or excessive claims. Instead, there is quiet precision: the click of the retracting mechanism is dampened to a gentle acoustic snap; the paper lies completely flat at 180 degrees without cracking the spine; and the ink flows continuously under the lightest brush against the page.
          </p>

          <p>
            This is not accidental. In Japan, stationery design is guided by centuries of calligraphic tradition (shodō), an acute awareness of seasonal transience (mono no aware), and an industrial ethos known as <strong className="text-[#1C1917]">monozukuri</strong>—the sincere, humble art of making things well.
          </p>

          <p>
            At Kiroku, we document this fascinating world. We do not write sponsored puff pieces or surface-level summaries. We benchmark paper weights, examine tungsten carbide ball bearings under microscopes, visit independent paper mills, and explore how intentional tools cultivate mindfulness.
          </p>
        </div>

        {/* The Three Pillars of Japanese Craftsmanship */}
        <section className="mb-20">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-[#BA3829] block mb-1">
              Guiding Principles
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#1C1917]">
              The Three Pillars of Japanese Craft
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="p-6 bg-white border border-[#E8E2D5]">
              <span className="font-serif text-3xl text-[#BA3829] block mb-2">
                ものづくり
              </span>
              <h3 className="font-serif text-lg font-semibold text-[#1C1917] mb-2">
                Monozukuri
              </h3>
              <p className="text-xs text-[#57534E] leading-relaxed">
                The philosophy of craftsmanship that merges technical mastery with a spiritual dedication to the user's experience. It treats even an inexpensive school pencil with immense reverence.
              </p>
            </div>

            <div className="p-6 bg-white border border-[#E8E2D5]">
              <span className="font-serif text-3xl text-[#5F7161] block mb-2">
                こだわり
              </span>
              <h3 className="font-serif text-lg font-semibold text-[#1C1917] mb-2">
                Kodawari
              </h3>
              <p className="text-xs text-[#57534E] leading-relaxed">
                An uncompromising personal standard of excellence. It is the refusal to compromise on microscopic tolerances—even when 99% of people would never consciously perceive the difference.
              </p>
            </div>

            <div className="p-6 bg-white border border-[#E8E2D5]">
              <span className="font-serif text-3xl text-[#B07D62] block mb-2">
                もったいない
              </span>
              <h3 className="font-serif text-lg font-semibold text-[#1C1917] mb-2">
                Mottainai
              </h3>
              <p className="text-xs text-[#57534E] leading-relaxed">
                An aversion to waste and a deep gratitude for natural materials. It inspires Japan's ubiquitous refillable pen cartridges, recyclable packaging, and durable tools built to last generations.
              </p>
            </div>

          </div>
        </section>

        {/* Editorial Standards & Testing Methodology */}
        <section className="p-8 bg-[#F4EFE6] border border-[#E8E2D5] mb-20">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#BA3829] block mb-1">
              Transparency & Ethics
            </span>
            <h2 className="font-serif text-2xl font-medium text-[#1C1917] mb-4">
              Our 4-Point Testing Standard
            </h2>
            <div className="space-y-4 text-xs sm:text-sm text-[#44403C]">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-[#BA3829] mt-0.5 shrink-0" />
                <p>
                  <strong className="text-[#1C1917]">Independent Sourcing:</strong> Every pen, notebook, and planner tested on Kiroku is purchased anonymously from standard retail channels.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-[#BA3829] mt-0.5 shrink-0" />
                <p>
                  <strong className="text-[#1C1917]">Laboratory Ink Verification:</strong> We test paper against liquid dye inks, pigment inks, alcohol markers, and wet stub nibs under consistent humidity.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-[#BA3829] mt-0.5 shrink-0" />
                <p>
                  <strong className="text-[#1C1917]">Real Life Duration:</strong> We never review a planner or notebook based on a single page spread. Every tool undergoes at least 30 continuous days of field testing.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-[#BA3829] mt-0.5 shrink-0" />
                <p>
                  <strong className="text-[#1C1917]">Zero Hallucinated Recommendations:</strong> Every product recommendation is backed by empirical measurements and user ergonomics.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Editorial Team */}
        <section className="mb-16">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#BA3829] block mb-1">
              Voices Behind Kiroku
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#1C1917]">
              The Editorial Board
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {Object.values(AUTHORS).map((author) => (
              <div key={author.name} className="p-6 bg-white border border-[#E8E2D5] flex gap-5 items-start">
                <div className="w-14 h-14 rounded-full overflow-hidden border border-[#D6CEBE] bg-[#FAF8F5] shrink-0">
                  <img
                    src={author.avatar}
                    alt={author.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-[#1C1917]">
                    {author.name}
                    {author.japaneseName && (
                      <span className="text-xs text-[#78716C] font-serif font-normal ml-1.5">
                        {author.japaneseName}
                      </span>
                    )}
                  </h3>
                  <p className="text-xs font-mono text-[#BA3829] mb-2">
                    {author.role}
                  </p>
                  <p className="text-xs text-[#57534E] leading-relaxed">
                    {author.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <div className="text-center pt-8 border-t border-[#E8E2D5]">
          <button
            onClick={() => onNavigate('/blog')}
            className="px-6 py-3 text-xs font-semibold tracking-wider text-white bg-[#1C1917] hover:bg-[#BA3829] transition-colors uppercase rounded-xs"
          >
            Read Our Latest Dispatches
          </button>
        </div>

      </div>
    </div>
  );
};
