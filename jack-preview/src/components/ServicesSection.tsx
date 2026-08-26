import FadeIn from './FadeIn';

const SKILLS = [
  {
    number: '01',
    name: 'Languages & Core',
    description: 'Python, SQL, Git, GitHub — core tools for data wrangling, querying, and version control.',
  },
  {
    number: '02',
    name: 'Data Science & ML',
    description:
      'Pandas, NumPy, Scikit-learn, Matplotlib, Seaborn, Jupyter — the full Python data stack, from EDA to model evaluation.',
  },
  {
    number: '03',
    name: 'Backend & Automation',
    description:
      'FastAPI, Flask, PostgreSQL — building backend services, APIs, and scheduled pipelines that deliver insights automatically.',
  },
  {
    number: '04',
    name: 'Visualization & BI',
    description: 'Tableau, Power BI, Streamlit, Excel — building executive-ready dashboards and interactive reports.',
  },
  {
    number: '05',
    name: 'Frontend',
    description: 'React, Tailwind CSS — building the UI layer for dashboards and internal tools.',
  },
  {
    number: '06',
    name: 'Analytics & Business',
    description:
      'KPI design, churn & sentiment analysis, trend forecasting, and time-series causal analysis.',
  },
];

export default function ServicesSection() {
  return (
    <section id="skills" className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <FadeIn delay={0}>
        <h2
          className="text-[#0C0C0C] font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Skills
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto" style={{ borderTop: '1px solid rgba(12, 12, 12, 0.15)' }}>
        {SKILLS.map((skill, i) => (
          <FadeIn key={skill.number} delay={i * 0.1}>
            <div
              className="flex items-start gap-6 sm:gap-10 py-8 sm:py-10 md:py-12"
              style={{ borderBottom: '1px solid rgba(12, 12, 12, 0.15)' }}
            >
              <span
                className="font-black text-[#0C0C0C] leading-none flex-shrink-0"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
              >
                {skill.number}
              </span>
              <div className="flex flex-col gap-3 sm:gap-4 pt-2 sm:pt-4">
                <h3
                  className="font-medium uppercase text-[#0C0C0C]"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {skill.name}
                </h3>
                <p
                  className="font-light leading-relaxed max-w-2xl text-[#0C0C0C]"
                  style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)', opacity: 0.6 }}
                >
                  {skill.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
