/**
 * Site identity and one-off copy.
 *
 * Edit content here rather than in the components. Collections that grow over
 * time (jobs, projects, skills, certifications) live in `src/data/` instead.
 *
 * NOTE: index.html cannot import this module — the <title> and the meta
 * description there are static HTML and stay hardcoded. If the name or role
 * below changes, update index.html:8 and index.html:14 to match.
 */

export const site = {
  name: 'Shem',

  // Rendered by the navbar logo as <PlatformEngineer />
  role: 'PlatformEngineer',

  email: 'shemsumbelingforwork@gmail.com',

  // Split into parts because Hero highlights the '@' in its own colour.
  terminal: {
    user: 'shem',
    host: 'tech',
  },

  hero: {
    // The hero kicker renders as a shell prompt built from `terminal` above,
    // and the name below it reads as this command's output.
    command: 'whoami',
    tagline:
      'I work at the layer where electrical signals become computation and where computation becomes the experiences people see online.',
    primaryCta: 'Check out my work!',
    secondaryCta: 'Get in touch',
    status: 'status --online',
  },

  about: {
    paragraphs: [
      'I am an engineer who loves working in tech. I explore, build, experiment and ship projects.',
    ],
    // Rendered directly above the skill domains rather than in the block beside
    // the photo, so the colon lands next to the list it introduces.
    skillsLead: 'Here are the list of technologies that I have worked with:',
  },

  contact: {
    eyebrow: "What's Next?",
    heading: 'Please get in touch!',
    body: "I'm currently looking for new opportunities, and my inbox is always open.",
    cta: 'Send me an email!',
  },

  footer: {
    builtBy: 'Built by Shem',
    inspiredBy: 'Inspired by Brittany Chiang',
  },
};

/** `shem@tech:~$` — the prompt shown in the loader boot sequence. */
const prompt = `${site.terminal.user}@${site.terminal.host}:~$`;

export const bootLines = [
  `${prompt} ./portfolio --init`,
  'loading modules .......... ok',
  'applying synthwave theme .. ok',
  'render --start',
];

/**
 * One source of truth for both consumers: the fixed left rail (SocialLinks)
 * and the mobile footer row. Icons are mapped by `id` in each component so
 * this stays a plain data module.
 */
export const socialLinks = [
  { id: 'github', url: 'https://github.com/githubshem', label: 'GitHub' },
  { id: 'linkedin', url: 'https://www.linkedin.com/in/ssum/', label: 'LinkedIn' },
  { id: 'email', url: `mailto:${site.email}`, label: 'Email' },
];

export const navItems = [
  { number: '01', title: 'About', href: '#about' },
  { number: '02', title: 'Experience', href: '#experience' },
  { number: '03', title: 'Work', href: '#projects' },
  { number: '04', title: 'Certifications', href: '#certifications' },
  { number: '05', title: 'Contact', href: '#contact' },
];
