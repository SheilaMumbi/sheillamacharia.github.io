import { useEffect, useRef, useState } from 'react';

interface MarqueeProject {
  domain: string;
  name: string;
  tag: string;
}

const ROW_1: MarqueeProject[] = [
  { domain: 'Automation · AI Reporting', name: 'AutoBrief', tag: 'Flask' },
  { domain: 'AI Automation · Agency Workflow', name: 'Tafsiri', tag: 'FastAPI' },
  { domain: 'Telecom · Churn Analysis', name: 'SyriaTel Retention & Revenue Insights', tag: 'Scikit-learn' },
  { domain: 'Health · Predictive Modeling', name: 'Pulse Metrix', tag: 'EDA' },
];

const ROW_2: MarqueeProject[] = [
  { domain: 'Aviation · Risk Analytics', name: 'Aviation Risk Insights', tag: 'Tableau' },
  { domain: 'Agriculture · ML Forecasting', name: 'Regional Crop Yield Prediction', tag: 'Climate Data' },
  { domain: 'Retail · Business Intelligence', name: 'Supermarket Sales Analysis', tag: 'Seaborn' },
  { domain: 'Tools · Streamlit App', name: 'Data Refinery Studio', tag: 'Plotly' },
];

function triple<T>(arr: T[]): T[] {
  return [...arr, ...arr, ...arr];
}

const ROW_1_TRIPLED = triple(ROW_1);
const ROW_2_TRIPLED = triple(ROW_2);

function Tile({ project }: { project: MarqueeProject }) {
  return (
    <div
      className="w-[420px] h-[270px] rounded-2xl flex-shrink-0 border border-[#D7E2EA]/15 p-7 flex flex-col justify-between"
      style={{ background: 'linear-gradient(135deg, rgba(86,47,69,0.35) 0%, rgba(12,12,12,0.9) 100%)' }}
    >
      <span className="text-[#D7E2EA] uppercase tracking-widest text-xs opacity-60">
        {project.domain}
      </span>
      <div className="flex items-end justify-between gap-4">
        <span className="text-[#D7E2EA] font-semibold text-xl leading-tight">{project.name}</span>
        <span className="text-[#D7E2EA] uppercase tracking-wider text-[0.65rem] border border-[#D7E2EA]/30 rounded-full px-3 py-1 flex-shrink-0">
          {project.tag}
        </span>
      </div>
    </div>
  );
}

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      const value = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(value);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10">
      <div className="overflow-hidden mb-3">
        <div
          className="flex gap-3"
          style={{ transform: `translateX(${offset - 200}px)`, willChange: 'transform' }}
        >
          {ROW_1_TRIPLED.map((project, i) => (
            <Tile key={i} project={project} />
          ))}
        </div>
      </div>
      <div className="overflow-hidden">
        <div
          className="flex gap-3"
          style={{ transform: `translateX(${-(offset - 200)}px)`, willChange: 'transform' }}
        >
          {ROW_2_TRIPLED.map((project, i) => (
            <Tile key={i} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
