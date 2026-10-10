const gh = (path: string) => `https://github.com/${path}`;

export const LINKS = {
  email: 'sheilamacharia8@gmail.com',
  github: gh('SheilaMumbi'),
  linkedin: 'https://www.linkedin.com/in/sheilla-macharia-458422324',
  cv: 'Sheilla_Macharia_CV.pdf',
};

export const ROLES = ['Backend Developer', 'Front-end Developer', 'Data Scientist'];

// Counted from GitHub and the project list below, October 2026.
export const STATS = [
  { value: '24', label: 'Public repositories' },
  { value: '6', label: 'Apps live online' },
];

/* ------------------------------------------------------------------ */

export interface Role {
  title: string;
  org: string;
  when: string;
  tags: string[];
  points: string[];
}

export const EXPERIENCE: Role[] = [
  {
    title: 'Data Scientist Consultant',
    org: 'Genesis Design Factory (Jitume Digital Media Factory)',
    when: 'Aug 2026 – Present',
    tags: ['FastAPI', 'Data science'],
    points: [
      'I build the data science and AI parts of products alongside the Flask and FastAPI backend team.',
      'Delivered the client payment-risk engine for Tafsiri: invoice-lateness predictions, Gemini-written briefings, and reminder and escalation queues for managers.',
    ],
  },
  {
    title: 'Backend developer, Tafsiri',
    org: 'Genesis AI Hackathon, team of five',
    when: '2026',
    tags: ['Backend', 'PostgreSQL'],
    points: [
      'Built the payment-risk and cash-flow engine as a FastAPI service inside an end-to-end agency workflow tool.',
      'Found and fixed two data-leakage issues that were inflating the model’s performance, plus an import-order bug and a Postgres sequence desync.',
    ],
  },
  {
    title: 'Data Science Bootcamp',
    org: 'Moringa School',
    when: 'Aug 2025 – Feb 2026',
    tags: ['Machine learning', 'Python'],
    points: [
      'Intensive hands-on programme in Python, machine learning and data visualisation.',
      'Capstones: SyriaTel churn prediction (92% accuracy) and Kenya regional crop yield prediction.',
    ],
  },
  {
    title: 'B.Sc. Applied Mathematics',
    org: 'University of Nairobi',
    when: 'Sep 2021 – Sep 2026',
    tags: ['Mathematics'],
    points: ['Where the statistics behind my modelling work comes from.'],
  },
];

/* ------------------------------------------------------------------ */

export type SkillIcon = 'server' | 'layout' | 'chart' | 'workflow';

export const SKILLS: { icon: SkillIcon; title: string; text: string }[] = [
  {
    icon: 'server',
    title: 'Backend APIs',
    text: 'FastAPI and Flask services backed by PostgreSQL, built so other people can call them.',
  },
  {
    icon: 'layout',
    title: 'Front-end',
    text: 'React and TypeScript interfaces that work on a 360px phone and with a keyboard.',
  },
  {
    icon: 'workflow',
    title: 'Pipelines',
    text: 'Scheduled jobs that pull data, compute the numbers and send the result without anyone pressing a button.',
  },
  {
    icon: 'chart',
    title: 'Data & ML',
    text: 'pandas, scikit-learn and SQL, with a habit of checking whether a score is too good to be true.',
  },
];

/* ------------------------------------------------------------------ */

export interface Link {
  label: string;
  url: string;
}

export interface Featured {
  id: 'sokolive' | 'tafsiri' | 'autobrief' | 'pulse-metrix';
  name: string;
  meta: string;
  tags: string[];
  brief: string;
  built: string;
  results: { value: string; label: string }[];
  links: Link[];
}

export const FEATURED: Featured[] = [
  {
    id: 'sokolive',
    name: 'SokoLive',
    meta: 'Front-end · 2026 · built from a client brief',
    tags: ['React', 'TypeScript', 'Zustand', 'MSW', 'Vitest'],
    brief:
      'A Nairobi thrift and sneaker seller sells through live social media sessions, and her buyers get lost in the chat. She wanted a storefront where items go live one at a time and people can claim them instantly, on mid-range Android phones with patchy data.',
    built:
      'Claims update instantly and roll back with a message if the server says someone was faster. One shared timer drives every countdown, so the feed doesn’t re-render each second. MSW fakes the API, and Vitest tests the cart and the rollback.',
    results: [
      { value: '100', label: 'Lighthouse accessibility' },
      { value: '100', label: 'Best practices' },
      { value: '92+', label: 'Performance on mobile' },
    ],
    links: [
      { label: 'Live site', url: 'https://sokolive.vercel.app' },
      { label: 'Code', url: gh('SheilaMumbi/sokolive') },
    ],
  },
  {
    id: 'tafsiri',
    name: 'Tafsiri',
    meta: 'Backend · 2026 · team of five',
    tags: ['Python', 'FastAPI', 'PostgreSQL', 'Gemini API'],
    brief:
      'Creative agencies take every client from discovery call to proposal, quote, approval and invoice by hand, and can’t see which clients are going to pay late.',
    built:
      'I owned the client payment-risk engine: a FastAPI service on PostgreSQL that predicts invoice lateness and feeds Gemini-written briefings and reminder and escalation queues for managers.',
    results: [
      { value: '2', label: 'Data-leakage bugs found and fixed' },
      { value: '2', label: 'Backend bugs fixed and written up in PRs' },
    ],
    links: [{ label: 'Code', url: gh('DanDev014/Genesis-AI-Hackathon') }],
  },
  {
    id: 'autobrief',
    name: 'AutoBrief',
    meta: 'Backend · 2026 · solo',
    tags: ['Python', 'Flask', 'pandas', 'Gemini API', 'Jinja2'],
    brief:
      'Every week each department repeats the same chore: pull the numbers, work out the KPIs, write the commentary and send the report.',
    built:
      'A Flask app that runs one reporting pipeline for six departments, or for any CSV or JSON you upload and map to your own columns. pandas computes every KPI and Gemini only writes about the finished numbers. Reports download as PDF or go out by email on a weekly schedule.',
    results: [
      { value: '6', label: 'Departments on one pipeline' },
      { value: '0', label: 'Calculations left to the AI' },
    ],
    links: [{ label: 'Code', url: gh('SheilaMumbi/AutoBrief') }],
  },
  {
    id: 'pulse-metrix',
    name: 'Pulse Metrix',
    meta: 'Data · 2024',
    tags: ['Python', 'scikit-learn', 'SMOTE', 'Streamlit'],
    brief:
      'Estimate ten-year coronary heart disease risk from the Framingham Heart Study, where missing a high-risk patient costs far more than a false alarm.',
    built:
      'A clinical prediction pipeline with 11 engineered features and a regularised logistic regression, which beat gradient boosting on test ROC-AUC (0.70 against 0.64). It runs behind a Streamlit app with risk gauges and plain-language recommendations.',
    results: [
      { value: '63% → 91%', label: 'Recall after lowering the threshold to 0.30' },
      { value: '0.70', label: 'Test ROC-AUC' },
    ],
    links: [
      { label: 'Live app', url: 'https://pulsemetrics.streamlit.app' },
      { label: 'Code', url: gh('SheilaMumbi/Pulse_Metrix') },
    ],
  },
];

export interface Project {
  id: string;
  name: string;
  tags: string[];
  text: string;
  links: Link[];
  image?: string;
  flow?: string[]; // backend work with nothing to screenshot
}

export const MORE_PROJECTS: Project[] = [
  {
    id: 'data-refinery',
    name: 'Data Refinery Studio',
    tags: ['Streamlit', 'Plotly'],
    text: 'Upload a dataset, see where it is missing data, clean it and download the result.',
    links: [
      { label: 'Live app', url: 'https://datarefinerystudio.streamlit.app' },
      { label: 'Code', url: gh('SheilaMumbi/Data_Refinery_Studio') },
    ],
    image: 'work/data-refinery.jpg',
  },
  {
    id: 'crop-yield',
    name: 'Kenya Crop Yield',
    tags: ['XGBoost', 'Flask'],
    text: 'Regional yield predictions from climate and farming data, served as a Flask app.',
    links: [
      { label: 'Live app', url: 'https://regional-crop-yield-prediction-kenya.onrender.com/' },
      { label: 'Code', url: gh('SheilaMumbi/Regional_Crop_Yield_Prediction_Kenya') },
    ],
    image: 'work/crop-yield.jpg',
  },
  {
    id: 'supermarket',
    name: 'Supermarket Performance',
    tags: ['SQL', 'Tableau', 'Power BI'],
    text: 'What drives store sales, including footfall that didn’t turn into revenue.',
    links: [{ label: 'Code', url: gh('SheilaMumbi/supermarket-performance-analytics') }],
    image: 'work/supermarket.jpg',
  },
  {
    id: 'kitchen-scaler',
    name: 'Smart Kitchen Scaler',
    tags: ['HTML', 'CSS', 'JavaScript'],
    text: 'Scales recipes and converts between metric and imperial. No framework.',
    links: [
      { label: 'Live site', url: 'https://sheilamumbi.github.io/smart-kitchen-scaler/' },
      { label: 'Code', url: gh('SheilaMumbi/smart-kitchen-scaler') },
    ],
    image: 'work/kitchen-scaler.jpg',
  },
];

/* ------------------------------------------------------------------ */

// Brand icons come from simple-icons; tools without one show initials.
export const TOOLS = [
  'Python',
  'FastAPI',
  'Flask',
  'PostgreSQL',
  'React',
  'TypeScript',
  'pandas',
  'scikit-learn',
  'Streamlit',
  'Plotly',
  'Jupyter',
  'Vitest',
  'Git',
  'Gemini',
  'Tableau',
  'Power BI',
];

export const PROCESS = [
  {
    title: 'Understand the data',
    text: 'Check where it came from and what could leak. On Tafsiri this caught two bugs.',
  },
  {
    title: 'Build the service',
    text: 'A FastAPI or Flask endpoint where the code does the maths and the model only explains it.',
  },
  {
    title: 'Build the screen',
    text: 'A React interface that is fast on a mid-range Android phone and works with a keyboard.',
  },
  {
    title: 'Test and ship',
    text: 'Vitest and MSW for the front-end, then deploy to Vercel, Render or Streamlit.',
  },
];
