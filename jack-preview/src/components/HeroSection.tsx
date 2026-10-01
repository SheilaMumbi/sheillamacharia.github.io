import FadeIn from './FadeIn';
import Magnet from './Magnet';
import ContactButton from './ContactButton';

const NAV_LINKS = ['About', 'Skills', 'Projects', 'Journey', 'Contact'];

export default function HeroSection() {
  return (
    <section className="relative h-screen flex flex-col" style={{ overflowX: 'clip' }}>
      <FadeIn
        as="nav"
        delay={0}
        y={-20}
        className="flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8"
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200"
          >
            {link}
          </a>
        ))}
      </FadeIn>

      <div className="overflow-hidden">
        <FadeIn delay={0.15} y={40}>
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[13.5vw] sm:text-[13.5vw] md:text-[14vw] lg:text-[14vw] mt-6 sm:mt-4 md:-mt-5">
            Hi, i&apos;m sheilla
          </h1>
        </FadeIn>
      </div>

      <div className="flex-1 hidden sm:flex lg:hidden justify-center pt-10">
        <p className="text-[#D7E2EA] font-light uppercase tracking-wide text-center max-w-[420px] text-base">
          data scientist &amp; backend engineer, learning front-end in public
        </p>
      </div>
      <div className="flex-1 sm:hidden lg:block" />

      <div className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10">
        <FadeIn delay={0.35} y={20} className="sm:invisible lg:visible">
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] lg:max-w-[200px] xl:max-w-[260px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            data scientist & backend engineer, learning front-end in public
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 z-10 w-[280px] sm:w-[320px] md:w-[360px] lg:w-[520px]">
        <FadeIn delay={0.6} y={30}>
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
          >
            <img
              src={`${import.meta.env.BASE_URL}sheilla-portrait.jpeg`}
              alt="Sheilla Mumbi Macharia"
              className="w-full aspect-[4/5] object-cover rounded-[32px] border-2 border-[#D7E2EA]/40"
            />
          </Magnet>
        </FadeIn>
      </div>
    </section>
  );
}
