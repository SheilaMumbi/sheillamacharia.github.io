import FadeIn from './FadeIn';
import { CERTIFICATIONS, JOURNEY } from '../data/portfolio';

export default function JourneySection() {
  return (
    <section id="journey" className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <FadeIn>
        <h2
          className="hero-heading font-black uppercase text-center mb-16 sm:mb-20"
          style={{ fontSize: 'clamp(2.5rem, 9vw, 120px)' }}
        >
          Journey
        </h2>
      </FadeIn>

      <ol className="max-w-4xl mx-auto border-t border-[#D7E2EA]/25">
        {JOURNEY.map((step, i) => (
          <li key={step.title} className="border-b border-[#D7E2EA]/25">
            <FadeIn delay={i * 0.08}>
              <div className="flex flex-col md:flex-row gap-2 md:gap-10 py-7 sm:py-9">
                <span className="text-[#D7E2EA]/50 uppercase tracking-widest text-xs sm:text-sm md:w-[28%] md:pt-1.5">
                  {step.when}
                </span>
                <div className="flex flex-col gap-1.5 md:flex-1">
                  <h3 className="text-[#D7E2EA] font-medium text-xl sm:text-2xl">{step.title}</h3>
                  <p className="text-[#D7E2EA]/60 uppercase tracking-wide text-xs sm:text-sm">{step.place}</p>
                  <p className="text-[#D7E2EA]/80 font-light text-sm sm:text-base mt-1">{step.note}</p>
                </div>
              </div>
            </FadeIn>
          </li>
        ))}
      </ol>

      <FadeIn>
        <ul className="max-w-4xl mx-auto flex flex-wrap justify-center gap-2 sm:gap-3 mt-12">
          {CERTIFICATIONS.map((c) => (
            <li
              key={c}
              className="text-[#D7E2EA] text-xs sm:text-sm border border-[#D7E2EA]/30 rounded-full px-4 py-2"
            >
              {c}
            </li>
          ))}
        </ul>
      </FadeIn>
    </section>
  );
}
