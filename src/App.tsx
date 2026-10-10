import { useEffect } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import { Contact, Experience, Skills, StackBand, Stats, Toolkit, Work } from './components/Sections';

export default function App() {
  // Fade sections in as they scroll into view.
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      els.forEach((el) => el.classList.add('in'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        }),
      { rootMargin: '0px 0px -8% 0px' },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Experience />
        <Skills />
        <StackBand />
        <Work />
        <Toolkit />
      </main>
      <Contact />
    </>
  );
}
