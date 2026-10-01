export type PillarId = 'backend' | 'data' | 'frontend';

export interface Pillar {
  id: PillarId;
  label: string;
  short: string;
}

export const PILLARS: Pillar[] = [
  { id: 'backend', label: 'Backend Engineering', short: 'Backend' },
  { id: 'data', label: 'Data Science', short: 'Data Science' },
  { id: 'frontend', label: 'Front-end', short: 'Front-end' },
];

export interface Project {
  name: string;
  pillar: PillarId;
  category: string;
  description: string;
  tags: string[];
  repoUrl: string;
  liveUrl?: string;
}

const gh = (path: string) => `https://github.com/${path}`;

export const FEATURED: (Project & { stat: string; statLabel: string })[] = [
  {
    name: 'AutoBrief',
    pillar: 'backend',
    category: 'Automation · AI Reporting',
    description:
      'Config-driven pipeline: pull data, compute KPIs, let Gemini narrate them, ship the report. Python does the maths, never the AI.',
    stat: '6',
    statLabel: 'departments on one shared pipeline',
    tags: ['Python', 'Flask', 'Gemini API', 'Jinja2'],
    repoUrl: gh('SheilaMumbi/AutoBrief'),
  },
  {
    name: 'Tafsiri',
    pillar: 'backend',
    category: 'AI Automation · Agency Workflow',
    description:
      'Client calls to proposals, quotes and QuickBooks. I owned the payment-risk FastAPI service and fixed two data-leakage bugs.',
    stat: '5',
    statLabel: 'person team, full agency workflow',
    tags: ['Python', 'FastAPI', 'PostgreSQL', 'Gemini API'],
    repoUrl: gh('DanDev014/Genesis-AI-Hackathon'),
  },
  {
    name: 'SokoLive',
    pillar: 'frontend',
    category: 'Front-end · Live Commerce',
    description:
      'Mobile-first live-drop storefront with optimistic claims and rollback, a simulated API, and timers that never re-render the feed.',
    stat: '100',
    statLabel: 'Lighthouse accessibility score',
    tags: ['React', 'TypeScript', 'Zustand', 'MSW'],
    repoUrl: gh('SheilaMumbi/sokolive'),
    liveUrl: 'https://sokolive.vercel.app',
  },
  {
    name: 'Pulse Metrix',
    pillar: 'data',
    category: 'Health · Predictive Modeling',
    description:
      '10-year cardiovascular risk engine on the Framingham data, tuned for clinical safety, with an interactive Streamlit dashboard.',
    stat: '91%',
    statLabel: 'recall on the risk model',
    tags: ['Python', 'Scikit-learn', 'Streamlit'],
    repoUrl: gh('SheilaMumbi/Pulse_Metrix'),
  },
];

export const MORE_WORK: Project[] = [
  // Data science
  {
    name: 'Data Refinery Studio',
    pillar: 'data',
    category: 'Tools · Streamlit App',
    description: 'Upload raw datasets, profile missing data with sparsity heatmaps, clean them, export the result.',
    tags: ['Python', 'Streamlit', 'Plotly'],
    repoUrl: gh('SheilaMumbi/Data_Refinery_Studio'),
  },
  {
    name: 'SyriaTel Retention & Revenue Insights',
    pillar: 'data',
    category: 'Telecom · Churn Analysis',
    description: 'Churn classification plus revenue-at-risk segments to target retention.',
    tags: ['Python', 'Scikit-learn', 'Pandas'],
    repoUrl: gh('SheilaMumbi/SyriaTel_Retention_Insights'),
  },
  {
    name: 'Regional Crop Yield Prediction (Kenya)',
    pillar: 'data',
    category: 'Agriculture · ML Forecasting',
    description: 'Supervised model for regional crop yield from production history, climate and input usage. My Moringa capstone.',
    tags: ['Python', 'Scikit-learn', 'Climate Data'],
    repoUrl: gh('SheilaMumbi/Regional_Crop_Yield_Prediction_Kenya'),
  },
  {
    name: 'Heart Failure Prediction',
    pillar: 'data',
    category: 'Health · Predictive Modeling',
    description: 'EDA and a Logistic Regression, SVM and KNN comparison, with an inference pipeline for risk assessment.',
    tags: ['Python', 'Scikit-learn', 'EDA'],
    repoUrl: gh('SheilaMumbi/Heart_failure_Prediction'),
  },
  {
    name: 'Aviation Risk Insights',
    pillar: 'data',
    category: 'Aviation · Risk Analytics',
    description: 'A century of accident data analysed for safety authorities, delivered as a Tableau dashboard.',
    tags: ['Python', 'Tableau', 'Pandas'],
    repoUrl: gh('SheilaMumbi/aviation_risk_insights'),
  },
  {
    name: 'Supermarket Sales Analysis',
    pillar: 'data',
    category: 'Retail · Business Intelligence',
    description: 'Store performance drivers with quartile segmentation. Medium-sized stores led on sales per square foot.',
    tags: ['Python', 'Seaborn', 'Tableau', 'Power BI'],
    repoUrl: gh('SheilaMumbi/supermarket-performance-analytics'),
  },
  {
    name: 'Global Green Real Estate',
    pillar: 'data',
    category: 'Market Analysis',
    description: 'Global market penetration of green-certified buildings from the IFC dataset, with an interactive Tableau dashboard.',
    tags: ['Python', 'Tableau'],
    repoUrl: gh('SheilaMumbi/global-green-real-estate-analysis'),
  },
  {
    name: 'NCAA Tournament Forecast',
    pillar: 'data',
    category: 'Sports · Probabilistic Modeling',
    description: 'Probabilistic forecast of the 2026 NCAA Division I tournament from historical season and tournament results.',
    tags: ['Python', 'Modeling'],
    repoUrl: gh('SheilaMumbi/Forecast_the_2026_NCAA_Basketball_Tournaments_Competition'),
  },
  {
    name: 'Movie Financial Performance',
    pillar: 'data',
    category: 'Entertainment · Analytics',
    description: 'What makes a film profitable: budgets, ratings and ROI from merged TN Movie Budgets and IMDb data.',
    tags: ['Python', 'Pandas'],
    repoUrl: gh('SheilaMumbi/movie-financial-performance-analysis'),
  },
  // Front-end
  {
    name: 'Smart Kitchen Scaler',
    pillar: 'frontend',
    category: 'Web App · Vanilla JS',
    description: 'Scale a recipe up or down, or convert between metric and imperial. HTML, CSS and plain JavaScript.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    repoUrl: gh('SheilaMumbi/smart-kitchen-scaler'),
    liveUrl: 'https://sheilamumbi.github.io/smart-kitchen-scaler/',
  },
  {
    name: 'The Odin Project Foundations',
    pillar: 'frontend',
    category: 'Learning in Public',
    description: 'Semantic HTML, the CSS cascade, selectors and specificity, practised in small repos.',
    tags: ['HTML', 'CSS', 'Git'],
    repoUrl: gh('SheilaMumbi/odin-recipes'),
  },
];

export interface Skill {
  pillar: PillarId;
  number: string;
  name: string;
  status: string;
  blurb: string;
  skills: string[];
}

export const SKILLS: Skill[] = [
  {
    pillar: 'backend',
    number: '01',
    name: 'Backend Engineering',
    status: 'Building daily',
    blurb: 'APIs, databases and pipelines that deliver insights without someone pressing a button.',
    skills: ['Python', 'FastAPI', 'Flask', 'PostgreSQL', 'REST APIs', 'Gemini API', 'Jinja2', 'Scheduled pipelines', 'Git & GitHub'],
  },
  {
    pillar: 'data',
    number: '02',
    name: 'Data Science',
    status: 'Where I started',
    blurb: 'From messy data to models and dashboards a decision-maker can use.',
    skills: [
      'Pandas',
      'NumPy',
      'Scikit-learn',
      'SQL',
      'Matplotlib',
      'Seaborn',
      'Plotly',
      'Tableau',
      'Power BI',
      'Streamlit',
      'Jupyter',
      'Time-series causality',
      'Walk-forward validation',
    ],
  },
  {
    pillar: 'frontend',
    number: '03',
    name: 'Front-end',
    status: 'Learning in public',
    blurb: 'Learning to build the interface layer, with accessibility and performance treated as part of the job.',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Zustand', 'MSW', 'Vitest', 'Framer Motion', 'HTML & CSS', 'Vite'],
  },
];

export const JOURNEY = [
  {
    when: '2021 – 2026',
    title: 'B.Sc. Applied Mathematics',
    place: 'University of Nairobi',
    note: 'Statistical theory, linear algebra and mathematical modeling.',
  },
  {
    when: '2025',
    title: 'Data Science Program',
    place: 'eMobilis Technological Training Institute',
    note: 'Data cleaning, storytelling and statistics.',
  },
  {
    when: 'Aug 2025 – Feb 2026',
    title: 'Data Science Bootcamp',
    place: 'Moringa School',
    note: 'Python, machine learning and visualization. Capstone: Regional Crop Yield Prediction (Kenya).',
  },
  {
    when: '2026',
    title: 'Into backend and front-end',
    place: 'Self-directed · The Odin Project',
    note: 'Moved from notebooks to services with AutoBrief and Tafsiri, and started front-end with The Odin Project, SokoLive and this site.',
  },
];

export const CERTIFICATIONS = [
  'Data Science — Moringa School',
  'Data Science Program — eMobilis',
  'Python for Data Analysis — FreeCodeCamp',
  'Machine Learning & Data Visualization — Kaggle',
];
