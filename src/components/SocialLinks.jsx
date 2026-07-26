import { FiGithub, FiLinkedin } from 'react-icons/fi';

const SocialLinks = () => {
  const socialLinks = [
    { icon: FiGithub, url: 'https://github.com/githubshem', label: 'GitHub' },
    { icon: FiLinkedin, url: 'https://www.linkedin.com/in/ssum/', label: 'LinkedIn' },
  ];

  return (
    <div className="hidden md:block fixed left-8 bottom-0 z-10">
      <ul className="flex flex-col items-center gap-6 after:content-[''] after:block after:w-px after:h-24 after:bg-light-slate after:mt-6">
        {socialLinks.map((social, index) => (
          <li key={index}>
            <a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-light-slate hover:text-neon-pink hover:-translate-y-1 transition-all block"
              aria-label={social.label}
            >
              <social.icon className="text-xl" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;