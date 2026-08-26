import { useRef, type CSSProperties } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, Workflow, Plane, type LucideIcon } from 'lucide-react';
import FadeIn from './FadeIn';
import LiveProjectButton from './LiveProjectButton';

interface Project {
  number: string;
  category: string;
  name: string;
  icon: LucideIcon;
  stat: string;
  statLabel: string;
  tags: string[];
  repoUrl: string;
}

const PROJECTS: Project[] = [
  {
    number: '01',
    category: 'Automation · AI Reporting',
    name: 'AutoBrief',
    icon: Sparkles,
    stat: '6',
    statLabel: 'departments on one shared pipeline',
    tags: ['Python', 'Flask', 'Gemini API', 'Jinja2'],
    repoUrl: 'https://github.com/SheilaMumbi/AutoBrief',
  },
  {
    number: '02',
    category: 'AI Automation · Agency Workflow',
    name: 'Tafsiri',
    icon: Workflow,
    stat: '5',
    statLabel: 'person team, full agency workflow',
    tags: ['Python', 'FastAPI', 'PostgreSQL', 'Gemini API'],
    repoUrl: 'https://github.com/DanDev014/Genesis-AI-Hackathon',
  },
  {
    number: '03',
    category: 'Aviation · Risk Analytics',
    name: 'Aviation Risk Insights',
    icon: Plane,
    stat: '100+',
    statLabel: 'years of global accident data analyzed',
    tags: ['Python', 'Tableau', 'Pandas'],
    repoUrl: 'https://github.com/SheilaMumbi/aviation_risk_insights.git',
  },
];

function ProjectCard({
  project,
  index,
  total,
}: {
  project: Project;
  index: number;
  total: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  const stickyStyle = {
    '--card-top-base': `${96 + index * 28}px`,
    '--card-top-md': `${128 + index * 28}px`,
  } as CSSProperties;

  const Icon = project.icon;

  return (
    <div
      ref={containerRef}
      className="h-[85vh] sticky top-[var(--card-top-base)] md:top-[var(--card-top-md)]"
      style={stickyStyle}
    >
      <motion.div
        style={{ scale }}
        className="h-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col gap-6 sm:gap-8"
      >
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-4 sm:gap-6">
            <span
              className="font-black text-[#D7E2EA] leading-none"
              style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
            >
              {project.number}
            </span>
            <div className="flex flex-col gap-1">
              <span className="text-[#D7E2EA] uppercase tracking-widest text-xs sm:text-sm opacity-60">
                {project.category}
              </span>
              <span className="text-[#D7E2EA] font-medium uppercase text-lg sm:text-2xl md:text-3xl">
                {project.name}
              </span>
            </div>
          </div>
          <LiveProjectButton href={project.repoUrl} label="View Repository" />
        </div>

        <div className="flex gap-3 sm:gap-4 flex-1 min-h-0">
          <div className="flex flex-col gap-3 sm:gap-4" style={{ width: '40%' }}>
            <div
              className="w-full flex items-center justify-center rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border border-[#D7E2EA]/25"
              style={{
                height: 'clamp(130px, 16vw, 230px)',
                background: 'linear-gradient(135deg, rgba(86,47,69,0.5) 0%, rgba(12,12,12,0.9) 100%)',
              }}
            >
              <Icon className="w-[35%] h-[35%] text-[#D7E2EA]" strokeWidth={1.25} />
            </div>
            <div
              className="w-full flex flex-col items-center justify-center gap-2 rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border border-[#D7E2EA]/25 px-4 text-center"
              style={{
                height: 'clamp(160px, 22vw, 340px)',
                background: 'linear-gradient(135deg, rgba(92,40,64,0.5) 0%, rgba(12,12,12,0.9) 100%)',
              }}
            >
              <span
                className="hero-heading font-black leading-none"
                style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
              >
                {project.stat}
              </span>
              <span className="text-[#D7E2EA] uppercase tracking-wide text-xs sm:text-sm opacity-60">
                {project.statLabel}
              </span>
            </div>
          </div>
          <div
            className="flex flex-col justify-between rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border border-[#D7E2EA]/25 p-6 sm:p-8"
            style={{ width: '60%', background: 'linear-gradient(160deg, rgba(58,23,41,0.5) 0%, rgba(12,12,12,0.95) 100%)' }}
          >
            <span className="text-[#D7E2EA]/50 uppercase tracking-widest text-xs sm:text-sm">
              Tech stack
            </span>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[#D7E2EA] uppercase tracking-wide text-xs sm:text-sm border border-[#D7E2EA]/30 rounded-full px-3 py-1.5 sm:px-4 sm:py-2"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <FadeIn delay={0}>
        <h2
          className="hero-heading font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Project
        </h2>
      </FadeIn>

      <div className="max-w-6xl mx-auto flex flex-col gap-8">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.number} project={project} index={i} total={PROJECTS.length} />
        ))}
      </div>
    </section>
  );
}
