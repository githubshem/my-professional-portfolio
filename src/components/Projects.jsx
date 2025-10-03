import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description:
        'A full-featured e-commerce platform with user authentication, product management, shopping cart, and payment integration. Built with React, Node.js, Express, and MongoDB.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
      github: 'https://github.com/yourusername/project1',
      external: 'https://project1.com',
      image: 'https://via.placeholder.com/600x400?text=E-Commerce+Platform',
    },
    {
      title: 'Task Management App',
      description:
        'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features. Inspired by Trello and Asana.',
      tech: ['React', 'Firebase', 'Material-UI', 'Redux'],
      github: 'https://github.com/yourusername/project2',
      external: 'https://project2.com',
      image: 'https://via.placeholder.com/600x400?text=Task+Manager',
    },
    {
      title: 'Weather Dashboard',
      description:
        'A beautiful weather dashboard that displays current weather conditions and forecasts for multiple cities. Features include geolocation, favorites, and detailed weather metrics.',
      tech: ['React', 'OpenWeather API', 'Chart.js', 'CSS3'],
      github: 'https://github.com/yourusername/project3',
      external: 'https://project3.com',
      image: 'https://via.placeholder.com/600x400?text=Weather+Dashboard',
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
              <div className="w-full md:w-3/5 relative group">
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
              </div>

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
                    <FiExternalLink className="text-2xl" />
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