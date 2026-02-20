import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Projects = () => {
  const projects = [
    {
      title: 'Deployment Scripts',
      description:
        'Internal deployment automation scripts built at my previous employer to streamline releases, reduce manual steps, and improve consistency across environments.',
      //tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
      tech: ['PowerShell', 'PDQ Deploy', 'GitHub'],
      github: 'https://github.com/githubshem/deployment-tools',
      //external: 'https://project1.com',
      image: 'https://via.placeholder.com/600x400?text=E-Commerce+Platform',
    },
    {
      title: 'YouTrack Ticket Creation',
      description:
        'An internal automation script my team and I used daily to streamline administrative tasks and reduce operational friction.',
      //tech: ['React', 'Firebase', 'Material-UI', 'Redux'],
      tech: ['JetBrains YouTrack', 'Python', 'Change Management', 'Leadership', 'GitHub'],
      github: 'https://github.com/githubshem/deployment-tools',
      //external: 'https://project2.com',
      //image: 'https://via.placeholder.com/600x400?text=Task+Manager',
    },
    {
      title: 'RDP into multiple nodes using Powershell Script',
      description:
        'A personal PowerShell automation script that cuts down repetitive logins by streamlining Windows Server access across multiple nodes.',
      tech: ['RDP', 'PowerShell', 'Amazon EC2', 'GitHub', 'Windows Server 2022'],
      github: 'https://github.com/githubshem/deployment-tools',
      //external: 'https://project3.com',
      //image: 'https://via.placeholder.com/600x400?text=Weather+Dashboard',
    },
  ];

  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl">
        <h2 className="section-heading">
          <span className="section-number">03.</span>
          Some Things I've Built
        </h2>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } gap-8 items-center`}
            >
              {/* Project Image */}
              {/* <div className="w-full md:w-3/5 relative group">
                <a
                  href={project.external}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative overflow-hidden rounded-lg"
                >
                  <div className="absolute inset-0 bg-green/20 group-hover:bg-transparent transition-all z-10" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto rounded-lg"
                  />
                </a>
              </div> */}

              {/* Project Details */}
              <div className={`w-full md:w-2/5 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                <p className="text-green font-mono text-sm mb-2">Featured Project</p>
                <h3 className="text-lightest-slate text-2xl font-bold mb-4 hover:text-green transition-colors">
                  <a href={project.external} target="_blank" rel="noopener noreferrer">
                    {project.title}
                  </a>
                </h3>
                <div className="bg-light-navy p-6 rounded-lg mb-4 shadow-lg">
                  <p className="text-light-slate">{project.description}</p>
                </div>
                <ul className={`flex flex-wrap gap-3 mb-4 font-mono text-sm text-slate ${
                  index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
                }`}>
                  {project.tech.map((tech, techIndex) => (
                    <li key={techIndex}>{tech}</li>
                  ))}
                </ul>
                <div className={`flex gap-4 text-lightest-slate ${
                  index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
                }`}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-green transition-colors"
                  >
                    <FiGithub className="text-2xl" />
                  </a>
                  <a
                    href={project.external}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-green transition-colors"
                  >
                    {/* <FiExternalLink className="text-2xl" /> */}
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

export default Projects;