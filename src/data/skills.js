/**
 * Skills grouped by domain, in the order they appear under the About copy.
 *
 * `accent` is a key, not a value — About.jsx maps it to complete Tailwind class
 * strings for the label, bullet, and rule. Same rule as `focusAreas` below:
 * Tailwind only emits CSS for class names written out in full, so these must
 * stay keys rather than interpolated colour names.
 *
 * Order is deliberate: infrastructure and delivery first (the day job), then
 * the observability stack, then languages, data, and tooling.
 */
export const skillDomains = [
  {
    title: 'Cloud & Infrastructure',
    accent: 'cyan',
    items: [
      'Amazon Web Services',
      'Google Cloud Platform',
      'Microsoft Azure',
      'Terraform',
      'Kubernetes',
      'Docker',
      'NGINX',
      'Linux',
      'Microsoft Windows',
      'Networking',
      'CloudFlare',
      'Vercel',
      'Railway',
    ],
  },
  {
    title: 'CI/CD & Automation',
    accent: 'pink',
    items: [
      'CI/CD',
      'Jenkins',
      'GitLab',
      'Git & GitHub',
      'Bash Script',
      'PowerShell',
    ],
  },
  {
    title: 'Observability',
    accent: 'purple',
    items: [
      'OpenTelemetry',
      'Prometheus',
      'Grafana',
      'Datadog',
      'Elasticsearch',
      'Logstash',
      'Kibana',
    ],
  },
  {
    title: 'Languages & Frameworks',
    accent: 'magenta',
    items: ['Python', 'Golang', 'Rust', 'TypeScript', 'Node.js', 'React.js'],
  },
  {
    title: 'Data & Messaging',
    accent: 'blue',
    items: [
      'PostgreSQL',
      'MongoDB',
      'Redis',
      'SQL',
      'IBM DB2',
      'Neo4j',
      'RabbitMQ',
    ],
  },
  {
    // Pinecone sits here rather than under Data & Messaging so the AI cluster
    // reads as one pipeline: framework, pattern, vector store, local runtime.
    title: 'AI & Dev Tooling',
    accent: 'bright-pink',
    items: [
      'Claude Code',
      'Cursor',
      'ChatGPT',
      'LangChain',
      'Retrieval Augmented Generation',
      'Pinecone',
      'Ollama',
      'DeepSeek-R1',
    ],
  },
];

/** Flat list of every skill, for anything that wants them ungrouped. */
export const skills = skillDomains.flatMap((domain) => domain.items);

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
