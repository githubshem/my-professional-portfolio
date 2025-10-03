import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';

const Footer = () => {
  const socialLinks = [
    { icon: FiGithub, url: 'https://github.com/yourusername', label: 'GitHub' },
    { icon: FiLinkedin, url: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
    { icon: FiTwitter, url: 'https://twitter.com/yourusername', label: 'Twitter' },
    { icon: FiMail, url: 'mailto:your.email@example.com', label: 'Email' },
  ];

  return (
    <footer className="py-8 text-center">
      <div className="md:hidden flex justify-center gap-6 mb-6">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-light-slate hover:text-green transition-colors"
            aria-label={social.label}
          >
            <social.icon className="text-xl" />
          </a>
        ))}
      </div>
      <a
        href="https://github.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="text-slate hover:text-green font-mono text-sm transition-colors"
      >
        <p>Built by Your Name</p>
        <p className="mt-2">Inspired by Brittany Chiang</p>
      </a>
    </footer>
  );
};

export default Footer;