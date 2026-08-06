import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SocialLinks from './components/SocialLinks';
import Email from './components/Email';
import CustomCursor from './components/CustomCursor';
import { bootLines as BOOT_LINES } from './config/site';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [visibleLines, setVisibleLines] = useState(() =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches ? BOOT_LINES.length : 1
  );

  useEffect(() => {
    if (visibleLines >= BOOT_LINES.length) return;
    const timer = setTimeout(() => setVisibleLines((v) => v + 1), 300);
    return () => clearTimeout(timer);
  }, [visibleLines]);

  // iOS Safari ignores :active unless some ancestor has a touch listener.
  // This empty one is the standard unlock — without it the press-to-pulse
  // treatment on touch devices silently never fires.
  useEffect(() => {
    const noop = () => {};
    document.body.addEventListener('touchstart', noop, { passive: true });
    return () => document.body.removeEventListener('touchstart', noop);
  }, []);

  useEffect(() => {
    const minDisplay = new Promise((resolve) => setTimeout(resolve, 1400));
    const fontsReady = document.fonts?.ready ?? Promise.resolve();
    Promise.all([minDisplay, fontsReady]).then(() => {
      setIsFadingOut(true);
      setTimeout(() => setIsLoading(false), 500);
    });
  }, []);

  if (isLoading) {
    return (
      <div
        role="status"
        aria-label="Loading"
        className={`h-screen bg-midnight flex items-center justify-center px-6 transition-opacity duration-500 ${
          isFadingOut ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <div className="font-mono text-sm md:text-base text-light-slate space-y-2">
          {BOOT_LINES.slice(0, visibleLines).map((line, i) => (
            <p key={i} className="flex items-center gap-2">
              <span className="text-neon-pink neon-text">&gt;</span>
              <span>{line}</span>
              {i === visibleLines - 1 && (
                <span
                  className="cursor-blink inline-block w-2 h-4 bg-neon-pink/80"
                  style={{ boxShadow: '0 0 6px rgba(255, 0, 110, 0.5)' }}
                ></span>
              )}
            </p>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-midnight min-h-screen text-slate relative">
      {/* Global Synthwave Grid Background */}
      <div className="fixed inset-0 opacity-30 pointer-events-none z-0" style={{
        backgroundImage: `
          linear-gradient(rgba(255, 0, 110, 0.15) 2px, transparent 2px),
          linear-gradient(90deg, rgba(255, 0, 110, 0.15) 2px, transparent 2px),
          linear-gradient(rgba(139, 10, 26, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(139, 10, 26, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '100px 100px, 100px 100px, 20px 20px, 20px 20px',
        backgroundPosition: '-2px -2px, -2px -2px, -1px -1px, -1px -1px',
      }}></div>

      {/* Radial gradient overlay for depth */}
      <div className="fixed inset-0 bg-gradient-radial from-transparent via-midnight/50 to-midnight pointer-events-none z-0"></div>

      <CustomCursor />
      <Navbar />
      <SocialLinks />
      <Email />

      <main className="mx-auto max-w-7xl px-6 md:px-12 lg:px-24">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
