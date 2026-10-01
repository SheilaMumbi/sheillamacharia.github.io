import { Mail, Download } from 'lucide-react';
import FadeIn from './FadeIn';

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

const CONTACT_LINKS = [
  { label: 'sheilamacharia8@gmail.com', href: 'mailto:sheilamacharia8@gmail.com', Icon: Mail },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sheilla-macharia-458422324', Icon: LinkedInIcon },
  { label: 'GitHub', href: 'https://github.com/SheilaMumbi', Icon: GitHubIcon },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-24 sm:py-32 md:py-40 flex flex-col items-center text-center gap-8 sm:gap-10"
    >
      <FadeIn delay={0}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight"
          style={{ fontSize: 'clamp(2.5rem, 9vw, 120px)' }}
        >
          Let&apos;s build something
        </h2>
      </FadeIn>

      <FadeIn delay={0.15}>
        <p
          className="text-[#D7E2EA] font-light max-w-[480px]"
          style={{ fontSize: 'clamp(0.95rem, 1.8vw, 1.25rem)' }}
        >
          Open to backend, data and junior full-stack roles, and to collaborations. Based in Nairobi —
          available remotely.
        </p>
      </FadeIn>

      <FadeIn delay={0.3}>
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {CONTACT_LINKS.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="inline-flex items-center gap-2 rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-6 py-3 text-xs sm:text-sm hover:bg-[#D7E2EA]/10 transition-colors duration-200"
            >
              <Icon />
              {label}
            </a>
          ))}
          <a
            href={`${import.meta.env.BASE_URL}Sheilla_Macharia_CV.pdf`}
            download="Sheilla_Mumbi_Macharia_Resume.pdf"
            className="inline-flex items-center gap-2 rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-6 py-3 text-xs sm:text-sm hover:bg-[#D7E2EA]/10 transition-colors duration-200"
          >
            <Download className="w-4 h-4" strokeWidth={2} />
            Resume
          </a>
        </div>
      </FadeIn>

      <p className="text-[#D7E2EA]/40 text-xs sm:text-sm mt-8 sm:mt-12">
        Sheilla Mumbi Macharia © 2026 · Nairobi, Kenya
      </p>
    </section>
  );
}
