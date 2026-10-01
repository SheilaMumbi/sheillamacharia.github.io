import { ArrowUpRight } from 'lucide-react';
import FadeIn from './FadeIn';
import { MORE_WORK, PILLARS } from '../data/portfolio';

export default function MoreWorkSection() {
  return (
    <section id="more-work" className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <FadeIn>
        <h2
          className="hero-heading font-black uppercase text-center mb-16 sm:mb-20"
          style={{ fontSize: 'clamp(2.5rem, 9vw, 120px)' }}
        >
          More work
        </h2>
      </FadeIn>

      <div className="max-w-6xl mx-auto flex flex-col gap-16 sm:gap-20">
        {PILLARS.map((pillar) => {
          const items = MORE_WORK.filter((p) => p.pillar === pillar.id);
          if (items.length === 0) return null;
          return (
            <div key={pillar.id}>
              <FadeIn>
                <h3 className="text-[#D7E2EA] font-medium uppercase tracking-widest text-sm sm:text-base pb-4 border-b border-[#D7E2EA]/25">
                  {pillar.label}
                </h3>
              </FadeIn>
              <ul>
                {items.map((p) => (
                  <li key={p.name} className="border-b border-[#D7E2EA]/15">
                    <FadeIn>
                      <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-8 py-6">
                        <div className="md:w-[34%]">
                          <a
                            href={p.liveUrl ?? p.repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-2 text-[#D7E2EA] font-medium text-lg sm:text-xl hover:opacity-70 transition-opacity"
                          >
                            {p.name}
                            <ArrowUpRight className="w-5 h-5 shrink-0" aria-hidden />
                          </a>
                          <p className="text-[#D7E2EA]/50 uppercase tracking-widest text-[0.65rem] sm:text-xs mt-1">
                            {p.category}
                          </p>
                        </div>
                        <p className="text-[#D7E2EA]/80 font-light md:flex-1 text-sm sm:text-base">{p.description}</p>
                        <ul className="flex flex-wrap gap-2 md:w-[24%] md:justify-end">
                          {p.tags.map((tag) => (
                            <li
                              key={tag}
                              className="text-[#D7E2EA] uppercase tracking-wide text-[0.65rem] border border-[#D7E2EA]/30 rounded-full px-3 py-1"
                            >
                              {tag}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </FadeIn>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      <FadeIn>
        <p className="text-center mt-16 sm:mt-20">
          <a
            href="https://github.com/SheilaMumbi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#D7E2EA] uppercase tracking-widest text-sm border-b border-[#D7E2EA]/40 pb-1 hover:opacity-70 transition-opacity"
          >
            Everything else on GitHub
          </a>
        </p>
      </FadeIn>
    </section>
  );
}
