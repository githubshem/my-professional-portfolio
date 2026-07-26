import { FiGithub } from 'react-icons/fi';

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

  return (
    <section id="projects" className="py-24 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading">
          <span className="section-number">03.</span>
          Some Things I've Built
        </h2>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-light-midnight border border-neon-pink/20 rounded-lg p-8 shadow-glow-pink hover:border-neon-pink/50 hover:-translate-y-1 transition-all"
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
