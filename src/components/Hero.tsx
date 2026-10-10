import { ArrowUpRight, FileText, Mail, MapPin, MonitorSmartphone, Server } from 'lucide-react';
import { LINKS, ROLES } from '../content';
import BrandIcon from './BrandIcon';
import Waves from './Waves';

function LinkedInGlyph() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4V21H3V9.75Zm6.5 0h3.8v1.6h.06c.53-1 1.84-2.06 3.79-2.06 4.05 0 4.8 2.6 4.8 6V21h-4v-5.1c0-1.22-.02-2.78-1.7-2.78-1.7 0-1.95 1.32-1.95 2.69V21h-4V9.75Z"
      />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="hero container" id="top" aria-labelledby="hero-name">
      <div className="hero__panel">
        <Waves />

        <div className="hero__grid">
          <div className="hero__left">
            <p className="hero__hello">Hello,</p>
            <p className="hero__tagline">
              I build backend services and the front-ends people use, with a data science foundation underneath.
            </p>
            <ul className="hero__roles" aria-label="What I do">
              {ROLES.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </div>

          <div className="hero__portrait">
            <div className="hero__ring" aria-hidden="true" />
            <img src="sheilla-cutout.webp" alt="Sheilla Macharia" width="900" height="838" />
          </div>

          <div className="hero__right">
            <div className="hero__social">
              <svg className="hero__social-lines" viewBox="0 0 260 104" aria-hidden="true">
                <path d="M0 22 H56 M94 22 H122 V78 H146 M184 78 H214" />
                <circle cx="0" cy="22" r="3" />
              </svg>
              <a className="chip chip--gh" href={LINKS.github} aria-label="GitHub">
                <BrandIcon name="GitHub" size={18} mono />
              </a>
              <a className="chip chip--in" href={LINKS.linkedin} aria-label="LinkedIn">
                <LinkedInGlyph />
              </a>
              <a className="chip chip--mail" href={`mailto:${LINKS.email}`} aria-label="Email">
                <Mail size={18} />
              </a>
            </div>

            <h1 className="hero__name" id="hero-name">
              <span>I am</span> Sheilla Macharia
            </h1>
            <p className="hero__based">
              <MapPin size={16} aria-hidden="true" /> Based in Nairobi
            </p>
            <div className="hero__cta">
              <a className="btn btn--accent" href="#work">
                View my work
              </a>
              <a className="btn btn--ghost-light" href={LINKS.cv} target="_blank" rel="noreferrer">
                <FileText size={16} aria-hidden="true" /> CV
              </a>
            </div>
          </div>
        </div>

        <div className="about-card" id="about">
          <div>
            <h2>About me</h2>
            <p>
              I’m Sheilla, a developer in Nairobi with a degree in Applied Mathematics. I build APIs and pipelines in
              Python and interfaces in React and TypeScript, and I work as a data science consultant at Genesis Design
              Factory alongside their Flask and FastAPI team.
            </p>
          </div>
          <ul className="about-card__list">
            <li>
              <span className="icon-tile" aria-hidden="true">
                <Server size={20} />
              </span>
              <span>Build APIs and pipelines with FastAPI, Flask and PostgreSQL</span>
              <a className="round-link" href="#tafsiri" aria-label="See Tafsiri">
                <ArrowUpRight size={18} />
              </a>
            </li>
            <li>
              <span className="icon-tile" aria-hidden="true">
                <MonitorSmartphone size={20} />
              </span>
              <span>Build fast, accessible interfaces with React and TypeScript</span>
              <a className="round-link" href="#sokolive" aria-label="See SokoLive">
                <ArrowUpRight size={18} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
