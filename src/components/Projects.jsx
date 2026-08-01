import { FiGithub } from 'react-icons/fi';
// import { useEffect, useRef } from 'react'; // needed by touch Option B or C

const Projects = () => {
  const projects = [
    {
      title: 'Deployment Scripts',
      description:
        'Internal deployment automation scripts built at my previous employer to streamline releases, reduce manual steps, and improve consistency across environments.',
      tech: ['PowerShell', 'PDQ Deploy', 'GitHub'],
      github: 'https://github.com/githubshem/deployment-tools',
    },
    {
      title: 'YouTrack Ticket Creation',
      description:
        'An internal automation script my team and I used daily to streamline administrative tasks and reduce operational friction.',
      tech: ['JetBrains YouTrack', 'Python', 'Change Management', 'Leadership', 'GitHub'],
      github: 'https://github.com/githubshem/deployment-tools',
    },
    {
      title: 'RDP into multiple nodes using Powershell Script',
      description:
        'A personal PowerShell automation script that cuts down repetitive logins by streamlining Windows Server access across multiple nodes.',
      tech: ['RDP', 'PowerShell', 'Amazon EC2', 'GitHub', 'Windows Server 2022'],
      github: 'https://github.com/githubshem/deployment-tools',
    },
  ];

  /* ==========================================================================
     TOUCH ACTIVATION — JS halves of the options described in index.css.
     Option A (press) is pure CSS and needs nothing here, so both blocks below
     are commented out. Uncomment ONE, plus its matching CSS block, plus the
     useEffect/useRef import above, and attach `ref={listRef}` to the wrapper.
     ========================================================================== */

  /* ---- Option B — tap to toggle -------------------------------------------
  const listRef = useRef(null);

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

  /* ---- Option C — activate on scroll into view -----------------------------
  const listRef = useRef(null);

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
  ---- end Option C ---- */

  return (
    <section id="projects" className="py-24 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading">
          <span className="section-number">03.</span>
          Some Things I've Built
        </h2>

        {/* Options B and C need: <div ref={listRef} className="space-y-12"> */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="card-pulse bg-light-midnight border border-neon-pink/20 rounded-lg p-8 shadow-glow-pink transition-all duration-300 ease-out hover:border-neon-cyan/50 hover:-translate-y-2"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <h3 className="text-lightest-slate text-2xl font-bold">
                  {project.title}
                </h3>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} on GitHub`}
                  className="p-2 text-lightest-slate hover:text-neon-pink transition-colors"
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
