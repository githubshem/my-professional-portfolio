export const skills = [
  'Amazon Web Services',
  'Google Cloud Platform',
  'Microsoft Azure',
  'Kubernetes',
  'Python',
  'Terraform',
  'PowerShell',
  'NGINX',
  'MongoDB',
  'Git & GitHub',
  'React.js',
  'SQL',
  'Networking',
  'Linux',
  'Microsoft Windows',
  'Bash Script',
  'GitLab',
  'Jenkins',
  'CI/CD',
  'Golang',
  'Node.js',
  'OpenTelemetry',
];

/**
 * The four highlight cards under the skills grid.
 *
 * `icon` and `accent` are keys, not values — About.jsx maps them to the actual
 * icon component and to complete Tailwind class strings. They must stay keys:
 * Tailwind only emits CSS for class names it finds written out in full, so an
 * interpolated `border-neon-${accent}/30` would silently produce no border.
 */
export const focusAreas = [
  {
    icon: 'ai',
    accent: 'pink',
    title: 'Artificial Intelligence',
    description:
      'Implementing MCP servers and schema‑driven tools to integrate LLMs with real systems',
  },
  {
    icon: 'backend',
    accent: 'purple',
    title: 'Backend Development',
    description:
      'Building and maintaining scalable server-side applications and RESTful APIs',
  },
  {
    icon: 'cloud',
    accent: 'cyan',
    title: 'Cloud & Infrastructure',
    description:
      'Architecting, implementing, and automating scalable cloud infrastructure',
  },
  {
    icon: 'edge',
    accent: 'magenta',
    title: 'Edge Devices',
    description:
      'Managing self-service kiosk and bag drop fleets with deployment automation and monitoring',
  },
];
