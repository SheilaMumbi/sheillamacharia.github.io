import { useRef, type CSSProperties } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: CSSProperties;
}

export default function AnimatedText({ text, className, style }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  });

  const total = text.length;
  // Split on spaces but keep them, so each word can be kept unbroken while letters still animate one by one.
  const tokens = text.split(/( )/).map((token, i, all) => ({
    token,
    start: all.slice(0, i).reduce((sum, t) => sum + t.length, 0),
  }));

  return (
    <p ref={ref} className={className} style={style}>
      {tokens.map(({ token, start }) => {
        const chars = token.split('').map((char, j) => {
          const from = (start + j) / total;
          return <Char key={j} char={char} progress={scrollYProgress} range={[from, from + 1 / total]} />;
        });
        return token === ' ' ? (
          chars
        ) : (
          <span key={start} style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
            {chars}
          </span>
        );
      })}
    </p>
  );
}

function Char({
  char,
  progress,
  range,
}: {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  const display = char === ' ' ? ' ' : char;

  return (
    <span style={{ position: 'relative', display: 'inline-block' }}>
      <span style={{ visibility: 'hidden' }}>{display}</span>
      <motion.span style={{ opacity, position: 'absolute', left: 0, top: 0 }}>
        {display}
      </motion.span>
    </span>
  );
}
