import {
  siFastapi,
  siFlask,
  siGit,
  siGithub,
  siGooglegemini,
  siJupyter,
  siPandas,
  siPlotly,
  siPostgresql,
  siPython,
  siReact,
  siScikitlearn,
  siStreamlit,
  siTypescript,
  siVitest,
  type SimpleIcon,
} from 'simple-icons';

const ICONS: Record<string, SimpleIcon> = {
  Python: siPython,
  FastAPI: siFastapi,
  Flask: siFlask,
  PostgreSQL: siPostgresql,
  React: siReact,
  TypeScript: siTypescript,
  pandas: siPandas,
  'scikit-learn': siScikitlearn,
  Streamlit: siStreamlit,
  Plotly: siPlotly,
  Jupyter: siJupyter,
  Vitest: siVitest,
  Git: siGit,
  Gemini: siGooglegemini,
  GitHub: siGithub,
};

// Some brand colours are too pale to read on white.
const DARKEN: Record<string, string> = { React: '#149eca', Vitest: '#3c8a4f', Flask: '#1c3a3f' };

export default function BrandIcon({ name, size = 28, mono }: { name: string; size?: number; mono?: boolean }) {
  const icon = ICONS[name];
  if (!icon) {
    const initials = name
      .split(/\s+/)
      .map((w) => w[0])
      .join('')
      .slice(0, 2);
    return (
      <span className="brand-fallback" style={{ width: size, height: size }} aria-hidden="true">
        {initials}
      </span>
    );
  }
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path d={icon.path} fill={mono ? 'currentColor' : (DARKEN[name] ?? `#${icon.hex}`)} />
    </svg>
  );
}
