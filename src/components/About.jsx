import { FiCode, FiServer, FiCloud } from 'react-icons/fi';
import profilePic from '../assets/profile-picture.png';

const About = () => {
  const skills = [
    'AWS',
    'Kubernetes',
    'Python',
    'PowerShell',
    'Terraform',
    'MongoDB',
    'NGINX',
    'Git & GitHub',
    'React.js',
    'APIs',
    'Change Management',
  ];

  return (
    <section id="about" className="py-24">
      <div className="max-w-4xl">
        <h2 className="section-heading">
          <span className="section-number">01.</span>
          About Me
        </h2>

        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Profile Picture with Synthwave Effects */}
          <div className="md:col-span-1 flex justify-center items-start">
            <div className="relative group">
              {/* Animated Border Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-neon-pink via-neon-purple to-neon-cyan rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              
              {/* Profile Image Container */}
              <div className="relative">
                <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-neon-pink relative">
                  <img 
                    src={profilePic} 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-neon-pink/20 via-transparent to-neon-purple/20 mix-blend-overlay"></div>
                </div>
                
                {/* Corner Accents */}
                <div className="absolute -top-2 -left-2 w-8 h-8 border-t-4 border-l-4 border-neon-cyan"></div>
                <div className="absolute -top-2 -right-2 w-8 h-8 border-t-4 border-r-4 border-neon-pink"></div>
                <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-4 border-l-4 border-neon-purple"></div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-4 border-r-4 border-neon-magenta"></div>
              </div>
            </div>
          </div>

          {/* About Text */}
          <div className="md:col-span-2 space-y-4 text-slate">
            <p>
              Hello! I'm Shem Sumbeling, a passionate DevOps Engineer based in Manila, Philippines.
              I enjoy creating things that live on the internet, whether that be websites,
              applications, or anything in between.
            </p>
            <p>
              My interest in DevOps started back in 2019 when I decided to try
              editing custom themes — turns out hacking together HTML & CSS taught me a lot
              about web development!
            </p>
            <p>
              Fast-forward to today, and I've had the privilege of working at a variety of
              companies and projects. My main focus these days is building accessible,
              inclusive products and digital experiences.
            </p>
            <p>Here are a few technologies I've been working with recently:</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-8">
          {skills.map((skill, index) => (
            <div key={index} className="flex items-center text-slate font-mono text-sm">
              <span className="text-neon-pink mr-2">▹</span>
              {skill}
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-light-midnight p-6 rounded-lg border border-neon-pink/30 hover:border-neon-pink hover:transform hover:-translate-y-2 transition-all" style={{boxShadow: '0 0 20px rgba(255, 0, 110, 0.1)'}}>
            <FiCode className="text-neon-pink text-4xl mb-4" style={{filter: 'drop-shadow(0 0 10px rgba(255, 0, 110, 0.8))'}} />
            <h3 className="text-lightest-slate font-bold text-lg mb-2">Frontend Development</h3>
            <p className="text-slate text-sm">
              Creating responsive and interactive user interfaces with modern frameworks
            </p>
          </div>

          <div className="bg-light-midnight p-6 rounded-lg border border-neon-purple/30 hover:border-neon-purple hover:transform hover:-translate-y-2 transition-all" style={{boxShadow: '0 0 20px rgba(185, 103, 255, 0.1)'}}>
            <FiServer className="text-neon-purple text-4xl mb-4" style={{filter: 'drop-shadow(0 0 10px rgba(185, 103, 255, 0.8))'}} />
            <h3 className="text-lightest-slate font-bold text-lg mb-2">Backend Development</h3>
            <p className="text-slate text-sm">
              Building scalable server-side applications and RESTful APIs
            </p>
          </div>

          <div className="bg-light-midnight p-6 rounded-lg border border-neon-cyan/30 hover:border-neon-cyan hover:transform hover:-translate-y-2 transition-all" style={{boxShadow: '0 0 20px rgba(5, 217, 232, 0.1)'}}>
            <FiCloud className="text-neon-cyan text-4xl mb-4" style={{filter: 'drop-shadow(0 0 10px rgba(5, 217, 232, 0.8))'}} />
            <h3 className="text-lightest-slate font-bold text-lg mb-2">Cloud & Infrastructure</h3>
            <p className="text-slate text-sm">
              Architecting and automating scalable cloud infrastructure with IaC
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;