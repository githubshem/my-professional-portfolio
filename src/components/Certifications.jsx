import { useEffect, useRef } from 'react';
import { FiExternalLink } from 'react-icons/fi';
import { handleSpotlight, handleTouchSpotlight, clearTouchSpotlight } from '../utils/spotlight';
import { certifications } from '../data/certifications';

const Certifications = () => {
  const sectionRef = useRef(null);

  /* Touch has no cursor, so on those devices the beam is driven by how far the
     card has travelled through the viewport: it sweeps down the card as you
     scroll past, weaving side to side. Chosen over touch-dragging because
     holding a finger on this card selects the credential ID instead — and
     keeping that text copyable matters more than tracking the finger. */
  useEffect(() => {
    if (!window.matchMedia('(hover: none)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const cards = sectionRef.current?.querySelectorAll('.card-torch');
    if (!cards?.length) return;

    let frame = null;

    const update = () => {
      frame = null;
      cards.forEach((el) => {
        // A finger on the card owns the beam; don't fight it mid-drag
        if (el.dataset.touching) return;
        const rect = el.getBoundingClientRect();
        // 0 as the card enters from the bottom, 1 as it leaves past the top
        const raw = 1 - (rect.top + rect.height) / (window.innerHeight + rect.height);
        const p = Math.min(Math.max(raw, 0), 1);
        el.style.setProperty('--spot-y', `${p * rect.height}px`);
        el.style.setProperty(
          '--spot-x',
          `${rect.width * (0.5 + 0.32 * Math.sin(p * Math.PI * 2))}px`
        );
      });
    };

    const onScroll = () => {
      if (frame === null) frame = requestAnimationFrame(update);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.target.classList.toggle('is-lit', e.isIntersecting));
      },
      { threshold: 0.35 }
    );
    cards.forEach((el) => observer.observe(el));

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section ref={sectionRef} id="certifications" className="py-24 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading">
          <span className="section-number">04.</span>
          Certifications
        </h2>

        <div className="space-y-12">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-8 items-center"
            >
              {/* Certification Image */}
              <div className="w-full md:w-3/5 relative group">
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative overflow-hidden rounded-lg"
                >
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="w-full h-auto max-h-72 rounded-lg object-contain p-4 mx-auto"
                  />
                </a>
              </div>

              {/* Certification Details */}
              <div className="w-full md:w-2/5 text-left">
                <p className="text-neon-purple font-mono text-sm mb-2">Featured Certification</p>
                <h3 className="text-lightest-slate text-2xl font-bold mb-4 hover:text-neon-purple transition-colors">
                  <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer">
                    {cert.name}
                  </a>
                </h3>
                <div
                  onMouseMove={handleSpotlight}
                  onTouchStart={handleTouchSpotlight}
                  onTouchMove={handleTouchSpotlight}
                  onTouchEnd={clearTouchSpotlight}
                  onTouchCancel={clearTouchSpotlight}
                  data-cursor-quiet
                  className="card-torch bg-light-midnight border border-neon-purple/20 rounded-lg p-6 mb-4 shadow-glow-pink hover:border-neon-purple/50 hover:-translate-y-1 transition-all duration-300 ease-out"
                >
                  <div className="text-light-slate text-sm space-y-2 text-left">
                    <p><span className="text-neon-pink font-mono">Issuing Organization:</span> {cert.organization || '________'}</p>
                    <p><span className="text-neon-pink font-mono">Issue Date:</span> {cert.issueDate || '________'}</p>
                    <p><span className="text-neon-pink font-mono">Credential ID:</span> {cert.credentialId || '________'}</p>
                  </div>
                </div>
                <ul className="flex flex-wrap gap-3 mb-4 font-mono text-sm text-slate">
                  {cert.skills.map((skill, skillIndex) => (
                    <li key={skillIndex}>{skill || '________'}</li>
                  ))}
                </ul>
                <div className="flex gap-4 text-lightest-slate">
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-neon-purple transition-colors"
                  >
                    <FiExternalLink className="text-2xl" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
