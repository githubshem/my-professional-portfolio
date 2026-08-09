import { useEffect, useRef } from 'react';
import { FiGithub } from 'react-icons/fi';
import { projects } from '../data/projects';

const Projects = () => {
  /* ==========================================================================
     TOUCH ACTIVATION — JS halves of the options described in index.css.

     Option A — press      : pure CSS, needs nothing here
     Option B — tap toggle : commented out below
     Option C — scroll     : ACTIVE

     To switch, swap which block is commented here AND in index.css.
     ========================================================================== */

  const listRef = useRef(null);

  /* ---- Option B — tap to toggle -------------------------------------------
  useEffect(() => {
    if (!window.matchMedia('(hover: none)').matches) return;
    const list = listRef.current;
    if (!list) return;

    const onPointerDown = (e) => {
      const card = e.target.closest('.card-pulse');
      // A tap anywhere clears the others, so only one card is ever lit
      list.querySelectorAll('.card-pulse.is-tapped').forEach((el) => {
        if (el !== card) el.classList.remove('is-tapped');
      });
      if (card) card.classList.toggle('is-tapped');
    };

    document.addEventListener('pointerdown', onPointerDown);
    return () => document.removeEventListener('pointerdown', onPointerDown);
  }, []);
  ---- end Option B ---- */

  /* ---- Option C — activate on scroll into view ---- */
  useEffect(() => {
    if (!window.matchMedia('(hover: none)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const list = listRef.current;
    if (!list) return;

    // -35% top and bottom leaves a band across the middle of the screen;
    // a card lights only while it occupies that band.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle('is-in-view', entry.isIntersecting);
        });
      },
      { rootMargin: '-35% 0px -35% 0px', threshold: 0 }
    );

    list.querySelectorAll('.card-pulse').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-24 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading">
          <span className="section-number">03.</span>
          Some Things I've Built
        </h2>

        {/* listRef is used by touch Options B and C — see the note above */}
        <div ref={listRef} className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="card-pulse group bg-light-midnight border border-neon-pink/20 rounded-lg p-8 shadow-glow-pink transition-all duration-300 ease-out hover:border-neon-cyan/50 hover:-translate-y-2"
            >
              {/* Optional cover art. Cards without a `cover` render exactly as
                  they always have — the strip is additive, never required.
                  alt is empty on purpose: the art is decorative and the <h3>
                  below already names the project for screen readers. */}
              {project.cover && (
                <div className="relative -mt-2 mb-6 overflow-hidden rounded-md ring-1 ring-neon-cyan/20">
                  <img
                    src={project.cover}
                    alt=""
                    width="1920"
                    height="409"
                    loading="lazy"
                    decoding="async"
                    className="h-36 w-full object-cover transition-transform duration-500 ease-out motion-safe:group-hover:scale-105 md:h-44"
                  />
                  {/* Fades the art down into the card so it reads as part of the
                      surface rather than a pasted-on screenshot. */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-light-midnight via-transparent to-transparent"
                  />
                </div>
              )}

              <div className="flex items-start justify-between gap-4 mb-4">
                <h3 className="text-lightest-slate text-2xl font-bold">
                  {project.title}
                </h3>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} on GitHub`}
                  className="p-2.5 text-lightest-slate hover:text-neon-pink transition-colors"
                >
                  <FiGithub className="text-2xl" />
                </a>
              </div>
              <p className="text-light-slate mb-6">{project.description}</p>
              <ul className="flex flex-wrap gap-3 font-mono text-sm text-slate">
                {project.tech.map((tech, techIndex) => (
                  <li key={techIndex}>{tech}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
