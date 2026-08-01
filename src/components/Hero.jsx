import { useRef } from 'react';
import casualAttire from '../assets/casual-attire.png';

const Hero = () => {
    const tiltRef = useRef(null);

    // Rotate the photo frame toward a pointer position. Tilt only — no highlight.
    const applyTilt = (clientX, clientY) => {
      const el = tiltRef.current;
      if (!el) return;
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

      const rect = el.getBoundingClientRect();
      const rotateX = ((clientY - rect.top) / rect.height - 0.5) * -8;
      const rotateY = ((clientX - rect.left) / rect.width - 0.5) * 8;
      el.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    };

    // Guarded so the synthetic mousemove a tap emits can't re-tilt after reset
    const handleMouseTilt = (e) => {
      if (!window.matchMedia('(hover: hover)').matches) return;
      applyTilt(e.clientX, e.clientY);
    };

    // Passive: never calls preventDefault, so a swipe still scrolls the page
    // normally — the photo just tilts along the way.
    const handleTouchTilt = (e) => {
      const touch = e.touches[0];
      if (touch) applyTilt(touch.clientX, touch.clientY);
    };

    const resetTilt = () => {
      if (tiltRef.current) tiltRef.current.style.transform = '';
    };

    return (
      <section id="home" className="min-h-screen flex items-center pt-24 pb-12 relative">
        <div className="w-full relative z-10 flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
          {/* Hero Text Content */}
          <div className="flex-1 motion-safe:animate-fade-in md:max-w-2xl">
            <h1 className="text-neon-pink font-mono text-base md:text-lg mb-5 neon-text">
              Hi there, I am
            </h1>
            <h2 className="text-lightest-slate font-bold text-4xl md:text-6xl lg:text-7xl mb-6" style={{textShadow: '0 0 20px rgba(255, 0, 110, 0.5), 0 0 40px rgba(185, 28, 46, 0.3)'}}>
              Shem
            </h2>
            <h3 className="text-light-slate font-semibold text-xl md:text-2xl lg:text-3xl leading-snug mb-10 max-w-xl">
              I work at the layer where electrical signals become computation and where computation becomes the experiences people see online.
            </h3>
            {/* Stacked and full-width on phones so the two CTAs share an edge
                and give a full-width tap target; unchanged from sm upwards. */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-4">
              <a
                href="#projects"
                className="btn-sheen no-touch-callout block w-full sm:w-auto text-center px-8 py-4 border-2 border-neon-pink text-neon-pink rounded font-mono text-sm hover:bg-neon-pink/10 hover:shadow-neon-pink transition-all"
                style={{textShadow: '0 0 10px rgba(255, 0, 110, 0.8)'}}
              >
                Check out my work!
              </a>
              <a
                href="#contact"
                className="no-touch-callout block w-full sm:w-auto text-center px-8 py-4 border border-neon-cyan/50 text-neon-cyan rounded font-mono text-sm hover:border-neon-cyan hover:bg-neon-cyan/10 hover:shadow-neon-cyan transition-all"
              >
                Get in touch
              </a>
            </div>
          </div>

          {/* Retro Synthwave Profile Picture */}
          <div className="flex-shrink-0 motion-safe:animate-fade-in">
            <div className="relative group">
              <div className="relative w-64 h-80 sm:w-80 sm:h-96 md:w-96 md:h-[450px]">
                {/* Ambient Glow */}
                <div className="absolute -inset-6 bg-gradient-to-br from-neon-pink/25 via-neon-purple/15 to-neon-cyan/25 blur-2xl motion-safe:animate-pulse" style={{animationDuration: '4s'}}></div>

                <div
                  ref={tiltRef}
                  onMouseMove={handleMouseTilt}
                  onMouseLeave={resetTilt}
                  onTouchStart={handleTouchTilt}
                  onTouchMove={handleTouchTilt}
                  onTouchEnd={resetTilt}
                  onTouchCancel={resetTilt}
                  className="tilt-card no-touch-callout relative w-full h-full"
                >
                  {/* Gradient Border Frame */}
                  <div className="relative w-full h-full p-[2px] rounded-lg bg-gradient-to-br from-neon-pink via-neon-purple to-neon-cyan"
                       style={{boxShadow: '0 0 25px rgba(255, 0, 110, 0.35)'}}>
                    <div className="relative w-full h-full overflow-hidden rounded-lg bg-midnight">

                      {/* Casual Attire Image */}
                      <img
                        src={casualAttire}
                        alt="Profile in casual attire"
                        className="w-full h-full object-cover object-center"
                      />

                      {/* Retro Color Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-neon-pink/10 via-transparent to-neon-cyan/10 mix-blend-overlay"></div>

                      {/* VHS Scan Lines */}
                      <div className="absolute inset-0 opacity-20 pointer-events-none"
                           style={{
                             backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255, 0, 110, 0.1) 2px, rgba(255, 0, 110, 0.1) 4px)'
                           }}>
                      </div>

                      {/* Animated Scan Line Effect */}
                      <div className="scan-line absolute inset-0 bg-gradient-to-b from-transparent via-neon-cyan/15 to-transparent opacity-60 pointer-events-none"></div>

                      {/* Chromatic Aberration Effect on Hover */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                           style={{
                             mixBlendMode: 'screen',
                             background: 'linear-gradient(90deg, rgba(255,0,110,0.1) 0%, transparent 50%, rgba(5,217,232,0.1) 100%)'
                           }}>
                      </div>

                      {/* Bottom Fade */}
                      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-midnight via-midnight/70 to-transparent pointer-events-none"></div>

                      {/* Terminal Status Line */}
                      <div className="absolute bottom-0 left-0 right-0 bg-midnight/70 backdrop-blur-sm border-t border-neon-pink/20 py-2.5 px-4">
                        <p className="flex items-center gap-2 font-mono text-xs text-light-slate">
                          <span className="text-neon-pink" style={{textShadow: '0 0 8px rgba(255, 0, 110, 0.6)'}}>&gt;</span>
                          <span>shem<span className="text-neon-pink">@</span>tech:~$ status --online</span>
                          <span className="cursor-blink inline-block w-2 h-3.5 bg-neon-pink/80"
                                style={{boxShadow: '0 0 6px rgba(255, 0, 110, 0.5)'}}></span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  export default Hero;
