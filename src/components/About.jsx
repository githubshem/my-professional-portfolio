import { FiCode, FiCloud, FiCpu } from 'react-icons/fi';
import { RiRobot2Line } from 'react-icons/ri';
import profilePic from '../assets/profile-picture.png';
import { site } from '../config/site';
import { skillDomains, focusAreas } from '../data/skills';

const FOCUS_ICONS = {
  ai: RiRobot2Line,
  backend: FiCode,
  cloud: FiCloud,
  edge: FiCpu,
};

/**
 * Accent styles for the skill-domain headings, keyed by the `accent` field on
 * each entry of `skillDomains`.
 *
 * Every Tailwind class is written out in full and never interpolated —
 * Tailwind only generates CSS for class names it can find as complete literals
 * in the source, so building these by template string would drop the colours
 * without any build error. The same rule governs ACCENTS below.
 */
const DOMAIN_ACCENTS = {
  cyan: { label: 'text-neon-cyan', rule: 'bg-neon-cyan/20' },
  pink: { label: 'text-neon-pink', rule: 'bg-neon-pink/20' },
  purple: { label: 'text-neon-purple', rule: 'bg-neon-purple/20' },
  magenta: { label: 'text-neon-magenta', rule: 'bg-neon-magenta/20' },
  blue: { label: 'text-neon-blue', rule: 'bg-neon-blue/20' },
  'bright-pink': { label: 'text-neon-pink-bright', rule: 'bg-neon-pink-bright/20' },
};

/**
 * Accent styles for the focus-area cards, keyed by the `accent` field on each
 * entry of `focusAreas`. Full literals only, same reason as above.
 */
const ACCENTS = {
  pink: {
    card: 'border-neon-pink/30 hover:border-neon-pink',
    icon: 'text-neon-pink',
    shadow: '0 0 20px rgba(255, 0, 110, 0.1)',
    glow: 'drop-shadow(0 0 10px rgba(255, 0, 110, 0.8))',
  },
  purple: {
    card: 'border-neon-purple/30 hover:border-neon-purple',
    icon: 'text-neon-purple',
    shadow: '0 0 20px rgba(185, 103, 255, 0.1)',
    glow: 'drop-shadow(0 0 10px rgba(185, 103, 255, 0.8))',
  },
  cyan: {
    card: 'border-neon-cyan/30 hover:border-neon-cyan',
    icon: 'text-neon-cyan',
    shadow: '0 0 20px rgba(5, 217, 232, 0.1)',
    glow: 'drop-shadow(0 0 10px rgba(5, 217, 232, 0.8))',
  },
  magenta: {
    card: 'border-neon-magenta/30 hover:border-neon-magenta',
    icon: 'text-neon-magenta',
    shadow: '0 0 20px rgba(255, 20, 147, 0.1)',
    glow: 'drop-shadow(0 0 10px rgba(255, 20, 147, 0.8))',
  },
};

const About = () => {
  return (
    <section id="about" className="py-24 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading">
          <span className="section-number">01.</span>
          About Me
        </h2>

        {/* items-center, not the default stretch: the About copy is short by
            design, so centring it against the photo splits the leftover height
            evenly instead of pooling it all under the text. */}
        <div className="grid md:grid-cols-3 gap-12 mb-16 md:items-center">
          {/* Profile Picture with Synthwave Effects */}
          <div className="md:col-span-1 flex justify-center">
            <div className="no-touch-callout relative group">
              {/* Animated Border Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-neon-pink via-neon-purple to-neon-cyan rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 motion-safe:animate-pulse"></div>

              {/* Profile Image Container */}
              <div className="relative">
                <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-neon-pink relative">
                  <img
                    src={profilePic}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-neon-pink/20 via-transparent to-neon-purple/20 mix-blend-overlay"></div>
                </div>

                {/* Corner Accents — disabled 2026-08-01, uncomment to restore
                <div className="absolute -top-2 -left-2 w-8 h-8 border-t-4 border-l-4 border-neon-cyan"></div>
                <div className="absolute -top-2 -right-2 w-8 h-8 border-t-4 border-r-4 border-neon-pink"></div>
                <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-4 border-l-4 border-neon-purple"></div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-4 border-r-4 border-neon-magenta"></div>
                */}
              </div>
            </div>
          </div>

          {/* About Text */}
          <div className="md:col-span-2 space-y-4 text-slate text-lg max-w-2xl">
            {site.about.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>

        {site.about.skillsLead && (
          <p className="text-slate font-mono text-sm mb-6">{site.about.skillsLead}</p>
        )}

        <div className="space-y-8">
          {skillDomains.map((domain) => {
            const accent = DOMAIN_ACCENTS[domain.accent];
            return (
              <div key={domain.title}>
                <div className="flex items-center gap-3 mb-3">
                  <h3
                    className={`${accent.label} font-mono text-xs uppercase tracking-[0.2em] whitespace-nowrap`}
                  >
                    {domain.title}
                  </h3>
                  <span className={`${accent.rule} h-px flex-1`} aria-hidden="true" />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-y-2 gap-x-6">
                  {domain.items.map((skill) => (
                    <div key={skill} className="text-slate font-mono text-sm">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {focusAreas.map((area) => {
            const accent = ACCENTS[area.accent];
            const Icon = FOCUS_ICONS[area.icon];
            return (
              <div
                key={area.title}
                className={`bg-light-midnight p-6 rounded-lg border ${accent.card} hover:transform hover:-translate-y-2 transition-all`}
                style={{ boxShadow: accent.shadow }}
              >
                <Icon className={`${accent.icon} text-4xl mb-4`} style={{ filter: accent.glow }} />
                <h3 className="text-lightest-slate font-bold text-lg mb-2">{area.title}</h3>
                <p className="text-slate text-sm">{area.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
