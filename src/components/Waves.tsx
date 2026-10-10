/* Flowing lines: a family of sine waves whose amplitude and phase drift
   a little from one line to the next. Shared by every dark panel. */
function waves(count: number, color: string, offset: number, strength: number) {
  const W = 1200;
  return Array.from({ length: count }, (_, i) => {
    const amp = 60 + i * 4;
    const phase = offset + i * 0.12;
    const base = 330 + i * 7;
    let d = '';
    for (let x = 0; x <= W; x += 20) {
      const y = base + Math.sin(x / 210 + phase) * amp + Math.sin(x / 90 + phase * 2) * 10;
      d += `${x === 0 ? 'M' : 'L'}${x},${y.toFixed(1)} `;
    }
    return (
      <path key={`${color}-${i}`} d={d} stroke={color} strokeOpacity={(0.08 + i * 0.012) * strength} fill="none" />
    );
  });
}

export default function Waves({ strength = 1, phase = 0 }: { strength?: number; phase?: number }) {
  return (
    <svg className="waves" viewBox="0 0 1200 700" preserveAspectRatio="none" aria-hidden="true">
      <g className="waves__a">{waves(14, '#d65f80', phase, strength)}</g>
      <g className="waves__b">{waves(10, '#e8a07a', phase + 2.2, strength)}</g>
    </svg>
  );
}
