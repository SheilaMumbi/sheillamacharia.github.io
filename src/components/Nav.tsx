import { useEffect, useState } from 'react';

const ITEMS = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#work', label: 'Work' },
  { href: '#tools', label: 'Tools' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <a href="#top" className="nav__logo" aria-label="Sheilla Macharia, back to top">
          <span className="nav__mark">SM</span>
          <span className="nav__name">Sheilla Macharia</span>
        </a>
        <nav className="nav__pill" aria-label="Sections">
          {ITEMS.map((i) => (
            <a key={i.href} href={i.href}>
              {i.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="btn btn--accent btn--sm">
          Contact me
        </a>
      </div>
    </header>
  );
}
