import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { socialLinks } from '../config/site';

const ICONS = {
  github: FiGithub,
  linkedin: FiLinkedin,
};

// The rail deliberately omits email — the fixed Email component on the right
// already shows it. Everything else comes from the shared config list.
const railLinks = socialLinks.filter((social) => social.id !== 'email');

const SocialLinks = () => {
  return (
    <div className="hidden md:block fixed left-8 bottom-0 z-10">
      {/* gap-0 like the footer rail: the 44px tap targets supply the spacing
          the old gap-6 used to, so the icons sit exactly where they did. */}
      <ul className="flex flex-col items-center gap-0 after:content-[''] after:block after:w-px after:h-24 after:bg-light-slate after:mt-6">
        {railLinks.map((social) => {
          const Icon = ICONS[social.id];
          return (
            <li key={social.id}>
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-11 h-11 text-light-slate hover:text-neon-pink hover:-translate-y-1 transition-all"
                aria-label={social.label}
              >
                <Icon className="text-xl" />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SocialLinks;
