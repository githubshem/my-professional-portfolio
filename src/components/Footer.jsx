import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { site, socialLinks } from '../config/site';

const ICONS = {
  github: FiGithub,
  linkedin: FiLinkedin,
  email: FiMail,
};

const githubUrl = socialLinks.find((social) => social.id === 'github').url;

const Footer = () => {
  return (
    <footer className="py-8 text-center">
      <div className="md:hidden flex justify-center gap-6 mb-6">
        {socialLinks.map((social) => {
          const Icon = ICONS[social.id];
          return (
            <a
              key={social.id}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-light-slate hover:text-neon-pink transition-colors"
              aria-label={social.label}
            >
              <Icon className="text-xl" />
            </a>
          );
        })}
      </div>
      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-slate hover:text-neon-pink font-mono text-sm transition-colors"
      >
        <p>{site.footer.builtBy}</p>
        <p className="mt-2">{site.footer.inspiredBy}</p>
      </a>
    </footer>
  );
};

export default Footer;
