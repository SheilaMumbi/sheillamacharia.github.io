import { useEffect, useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Check,
  ChevronDown,
  Copy,
  FileText,
  LayoutTemplate,
  Rocket,
  Search,
  Server,
  Workflow,
} from 'lucide-react';
import {
  EXPERIENCE,
  FEATURED,
  LINKS,
  MORE_PROJECTS,
  PROCESS,
  SKILLS,
  STATS,
  TOOLS,
  type Featured,
  type Project,
  type SkillIcon,
} from '../content';
import BrandIcon from './BrandIcon';
import Waves from './Waves';

/* The hero's dot-and-line connector leads into every heading. */
function Heading({ title, intro, small }: { title: string; intro?: string; small?: boolean }) {
  return (
    <header className={`heading reveal${small ? ' heading--small' : ''}`}>
      <span className="heading__motif" aria-hidden="true" />
      <h2>{title}</h2>
      {intro && <p>{intro}</p>}
    </header>
  );
}

/* ------------------------------------------------------------------ */

export function Stats() {
  return (
    <section className="container stats reveal" aria-label="In numbers">
      {STATS.map((s) => (
        <div key={s.label} className="stats__item">
          <strong>{s.value}</strong>
          <span>{s.label}</span>
        </div>
      ))}
    </section>
  );
}

/* ------------------------------------------------------------------ */

export function Experience() {
  const [open, setOpen] = useState(0);
  return (
    <section className="section container" id="experience">
      <Heading title="Where I’ve been building" intro="From a maths degree to shipping services with a product team." />
      <div className="xp">
        {EXPERIENCE.map((r, i) => {
          const isOpen = open === i;
          return (
            <article key={r.title} className="xp__item reveal" data-open={isOpen}>
              <button
                type="button"
                className="xp__head"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? -1 : i)}
              >
                <span className="xp__title">
                  <strong>
                    {r.title} <span>– {r.org}</span>
                  </strong>
                  <small>{r.when}</small>
                </span>
                <span className="xp__tags">
                  {r.tags.map((t) => (
                    <span key={t} className="pill">
                      {t}
                    </span>
                  ))}
                </span>
                <ChevronDown className="xp__chev" size={20} aria-hidden="true" />
              </button>
              <div className="xp__body">
                <div>
                  <ul>
                    {r.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

const SKILL_ICONS: Record<SkillIcon, typeof Server> = {
  server: Server,
  layout: LayoutTemplate,
  workflow: Workflow,
  chart: BarChart3,
};

export function Skills() {
  return (
    <section className="section container" id="skills">
      <Heading title="What I build" intro="Most of my work sits where the data, the service and the screen meet." />
      <div className="skills">
        {SKILLS.map((s) => {
          const Icon = SKILL_ICONS[s.icon];
          return (
            <article key={s.title} className="skill reveal">
              <span className="icon-tile icon-tile--soft" aria-hidden="true">
                <Icon size={22} />
              </span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

function BandList({ hidden }: { hidden?: boolean }) {
  return (
    <ul className="band__list" aria-hidden={hidden || undefined}>
      {TOOLS.map((t) => (
        <li key={t}>
          <BrandIcon name={t} size={22} mono />
          {t}
        </li>
      ))}
    </ul>
  );
}

export function StackBand() {
  return (
    <section className="band" aria-label="Tools I use">
      <div className="band__track">
        <BandList />
        <BandList hidden />
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

interface Shot {
  src: string;
  label: string;
  alt: string;
}

/* Stills from each project's own walkthrough recording. */
const SOKOLIVE_SHOTS: Shot[] = [
  { src: 'work/sokolive-drop.jpg', label: 'Live drop', alt: 'A sneaker on air with a countdown and a Claim button' },
  {
    src: 'work/sokolive-claim.jpg',
    label: 'Claim & rollback',
    alt: 'One item claiming while another rolls back with “Sorry, the Suede Classic is gone”',
  },
  {
    src: 'work/sokolive-dark.jpg',
    label: 'Dark mode',
    alt: 'Dark mode with a new drop arriving and the live activity feed',
  },
  { src: 'work/sokolive-checkout.jpg', label: 'M-Pesa checkout', alt: 'Cart checkout with an M-Pesa number field' },
];

const AUTOBRIEF_SHOTS: Shot[] = [
  {
    src: 'work/autobrief-dashboard.jpg',
    label: 'Dashboard',
    alt: 'AutoBrief dashboard with KPI cards for six departments',
  },
  {
    src: 'work/autobrief-report.jpg',
    label: 'Report',
    alt: 'Sales report with revenue against the prior period, an AI insight and a weekly send schedule',
  },
  { src: 'work/autobrief-upload.jpg', label: 'Upload data', alt: 'Upload form for your own CSV or JSON file' },
  {
    src: 'work/autobrief-columns.jpg',
    label: 'Map columns',
    alt: 'Choosing the date, metric and breakdown columns for an uploaded file',
  },
];

const TAFSIRI_SHOTS: Shot[] = [
  {
    src: 'work/tafsiri-dashboard.jpg',
    label: 'Dashboard',
    alt: 'Tafsiri dashboard with clients, meetings and the proposal pipeline',
  },
  {
    src: 'work/tafsiri-summary.jpg',
    label: 'Call summary',
    alt: 'A discovery call summary generated from a meeting transcript',
  },
  { src: 'work/tafsiri-proposal.jpg', label: 'Proposal', alt: 'A branded proposal preview for a brand video package' },
  { src: 'work/tafsiri-quickbooks.jpg', label: 'Quote', alt: 'A quotation with line items, sent to QuickBooks' },
];

/* Cycles through the stills on a timer until someone picks one themselves. */
function Gallery({ shots, frame, title }: { shots: Shot[]; frame: 'phone' | 'browser'; title: string }) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = window.setInterval(() => setI((n) => (n + 1) % shots.length), 3800);
    return () => window.clearInterval(id);
  }, [paused, shots.length]);

  const images = (
    <div className="shots">
      {shots.map((s, n) => (
        <img key={s.src} src={s.src} alt={s.alt} loading="lazy" data-on={n === i} aria-hidden={n !== i} />
      ))}
    </div>
  );

  return (
    <div className={`gallery gallery--${frame}`}>
      {frame === 'phone' ? (
        <div className="phone">{images}</div>
      ) : (
        <div className="browser browser--flat">
          <div className="browser__bar" aria-hidden="true">
            <i />
            <i />
            <i />
            <span>{title}</span>
          </div>
          {images}
        </div>
      )}
      <div className="shots__tabs" role="group" aria-label={`${title} screens`}>
        {shots.map((s, n) => (
          <button
            key={s.src}
            type="button"
            aria-pressed={n === i}
            onClick={() => {
              setI(n);
              setPaused(true);
            }}
          >
            {s.label}
          </button>
        ))}
      </div>
    </div>
  );
}

function TafsiriMedia() {
  return (
    <div className="tafsiri">
      <Gallery shots={TAFSIRI_SHOTS} frame="browser" title="Tafsiri" />
      <div className="mine">
        <span className="mine__badge">My part</span>
        <div>
          <strong>Payment-risk engine</strong>
          <small>FastAPI · PostgreSQL</small>
        </div>
        <ul>
          <li>Invoice lateness prediction</li>
          <li>Gemini briefings for managers</li>
          <li>Reminder &amp; escalation queues</li>
        </ul>
      </div>
    </div>
  );
}

function PulseMedia() {
  return (
    <div className="pulse">
      <div className="browser">
        <div className="browser__bar" aria-hidden="true">
          <i />
          <i />
          <i />
          <span>pulsemetrics.streamlit.app</span>
        </div>
        <img src="work/pulse-metrix.jpg" alt="Pulse Metrix risk assessment with a 39.3% risk gauge" loading="lazy" />
      </div>
      <div className="recall" aria-label="Recall at each decision threshold">
        <div className="recall__row">
          <span>Threshold 0.50</span>
          <span className="recall__bar">
            <span style={{ width: '63%' }} />
          </span>
          <strong>63%</strong>
        </div>
        <div className="recall__row recall__row--pick">
          <span>Threshold 0.30</span>
          <span className="recall__bar">
            <span style={{ width: '91%' }} />
          </span>
          <strong>91%</strong>
        </div>
      </div>
    </div>
  );
}

function FeatureMedia({ id }: { id: Featured['id'] }) {
  if (id === 'sokolive') return <Gallery shots={SOKOLIVE_SHOTS} frame="phone" title="SokoLive" />;
  if (id === 'tafsiri') return <TafsiriMedia />;
  if (id === 'autobrief') return <Gallery shots={AUTOBRIEF_SHOTS} frame="browser" title="AutoBrief" />;
  return <PulseMedia />;
}

function FeatureCard({ f, flip }: { f: Featured; flip: boolean }) {
  return (
    <article id={f.id} className={`feature reveal${flip ? ' feature--flip' : ''}`}>
      <Waves strength={0.55} phase={flip ? 1.4 : 0} />
      <div className="feature__text">
        <p className="feature__meta">{f.meta}</p>
        <h3>{f.name}</h3>
        <div className="feature__block">
          <h4>The brief</h4>
          <p>{f.brief}</p>
        </div>
        <div className="feature__block">
          <h4>What I built</h4>
          <p>{f.built}</p>
        </div>
        <dl className="feature__results">
          {f.results.map((r) => (
            <div key={r.label}>
              <dt>{r.label}</dt>
              <dd>{r.value}</dd>
            </div>
          ))}
        </dl>
        <div className="feature__tags">
          {f.tags.map((t) => (
            <span key={t} className="pill pill--dark">
              {t}
            </span>
          ))}
        </div>
        <div className="feature__links">
          {f.links.map((l, i) => (
            <a
              key={l.url}
              className={`btn ${i === 0 ? 'btn--accent' : 'btn--ghost-light'}`}
              href={l.url}
              target="_blank"
              rel="noreferrer"
            >
              {l.label} <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
      <div className="feature__media">
        <FeatureMedia id={f.id} />
      </div>
    </article>
  );
}

function ProjectCard({ p }: { p: Project }) {
  const dark = !p.image;
  return (
    <article id={p.id} className={`project reveal${dark ? ' project--dark' : ''}`}>
      <div className="project__media">
        {p.image ? (
          <img src={p.image} alt={`${p.name} screenshot`} loading="lazy" />
        ) : (
          <ol className="flow" aria-label="Pipeline steps">
            {(p.flow ?? []).map((s, i, all) => (
              <li key={s}>
                <span>{s}</span>
                {i < all.length - 1 && <ArrowRight size={14} aria-hidden="true" />}
              </li>
            ))}
          </ol>
        )}
      </div>
      <div className="project__body">
        <div className="project__tags">
          {p.tags.map((t) => (
            <span key={t} className="pill">
              {t}
            </span>
          ))}
        </div>
        <h3>{p.name}</h3>
        <p>{p.text}</p>
        <div className="project__links">
          {p.links.map((l) => (
            <a key={l.url} href={l.url} target="_blank" rel="noreferrer">
              {l.label} <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}

export function Work() {
  return (
    <section className="section container" id="work">
      <Heading title="Selected work" intro="Four projects in depth: the brief, what I built, and how it turned out." />
      <div className="features">
        {FEATURED.map((f, i) => (
          <FeatureCard key={f.id} f={f} flip={i % 2 === 1} />
        ))}
      </div>

      <div className="more">
        <Heading title="More projects" intro="Data apps, dashboards and smaller builds." small />
        <div className="projects">
          {MORE_PROJECTS.map((p) => (
            <ProjectCard key={p.id} p={p} />
          ))}
        </div>
        <p className="more-link reveal">
          <a href={LINKS.github} target="_blank" rel="noreferrer">
            Everything else on GitHub <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

const PROCESS_ICONS = [Search, Server, LayoutTemplate, Rocket];

export function Toolkit() {
  return (
    <section className="section container" id="tools">
      <Heading title="How I work" intro="The tools I use most, and the order I tend to use them in." />
      <div className="toolkit">
        <div className="panel reveal">
          <h3 className="panel__title">Tools & technologies</h3>
          <ul className="tools">
            {TOOLS.map((t) => (
              <li key={t}>
                <span className="tools__icon">
                  <BrandIcon name={t} size={26} />
                </span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="panel reveal">
          <h3 className="panel__title">My process</h3>
          <ol className="process">
            {PROCESS.map((s, i) => {
              const Icon = PROCESS_ICONS[i];
              return (
                <li key={s.title}>
                  <span className="icon-tile icon-tile--soft" aria-hidden="true">
                    <Icon size={20} />
                  </span>
                  <span>
                    <small>Step {i + 1}</small>
                    <strong>{s.title}</strong>
                    <span>{s.text}</span>
                  </span>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

export function Contact() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(LINKS.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${LINKS.email}`;
    }
  };

  return (
    <section className="container" id="contact">
      <div className="cta reveal">
        <Waves strength={0.6} phase={0.7} />
        <div>
          <span className="heading__motif" aria-hidden="true" />
          <h2>Let’s build something together</h2>
          <p>Have a role or a project that needs a backend, a front-end, or both? I’d love to hear about it.</p>
        </div>
        <div className="cta__actions">
          <a className="btn btn--accent" href={`mailto:${LINKS.email}`}>
            {LINKS.email}
          </a>
          <div className="cta__row">
            <button type="button" className="btn btn--ghost-light" onClick={copy}>
              {copied ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
              <span aria-live="polite">{copied ? 'Copied' : 'Copy email'}</span>
            </button>
            <a className="btn btn--ghost-light" href={LINKS.cv} target="_blank" rel="noreferrer">
              <FileText size={16} aria-hidden="true" /> Download CV
            </a>
          </div>
        </div>
      </div>
      <footer className="footer">
        <span>© 2026 Sheilla Macharia</span>
        <span className="footer__links">
          <a href={LINKS.github}>GitHub</a>
          <a href={LINKS.linkedin}>LinkedIn</a>
          <a href={`mailto:${LINKS.email}`}>Email</a>
        </span>
      </footer>
    </section>
  );
}
