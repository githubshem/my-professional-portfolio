import { FiExternalLink } from 'react-icons/fi';
import saaBadge from '../assets/SAA.png';

const Certifications = () => {
  const certifications = [
    {
      name: 'AWS Certified Solutions Architect – Associate',
      organization: 'Amazon Web Services (AWS)',
      issueDate: 'March 2024',
      credentialId: 'baa8bfdf-5cd0-4c84-974b-cb89c48e2c0c',
      credentialUrl: 'https://www.credly.com/badges/baa8bfdf-5cd0-4c84-974b-cb89c48e2c0c',
      image: saaBadge,
      skills: ['AWS', 'Cloud Architecture', 'VPC', 'EC2', 'IAM'],
    },
  ];

  return (
    <section id="certifications" className="py-24">
      <div className="max-w-6xl">
        <h2 className="section-heading">
          <span className="section-number">04.</span>
          Certifications
        </h2>

        <div className="space-y-24">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } gap-8 items-center`}
            >
              {/* Certification Image */}
              <div className="w-full md:w-3/5 relative group">
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative overflow-hidden rounded-lg"
                >
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="w-full h-auto max-h-72 rounded-lg object-contain p-4 mx-auto"
                  />
                </a>
              </div>

              {/* Certification Details */}
              <div className="w-full md:w-2/5 text-left">
                <p className="text-neon-purple font-mono text-sm mb-2">Featured Certification</p>
                <h3 className="text-lightest-slate text-2xl font-bold mb-4 hover:text-neon-purple transition-colors">
                  <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer">
                    {cert.name}
                  </a>
                </h3>
                <div className="bg-light-navy p-6 rounded-lg mb-4 shadow-lg">
                  <div className="text-light-slate text-sm space-y-2 text-left">
                    <p><span className="text-neon-pink font-mono">Issuing Organization:</span> {cert.organization || '________'}</p>
                    <p><span className="text-neon-pink font-mono">Issue Date:</span> {cert.issueDate || '________'}</p>
                    <p><span className="text-neon-pink font-mono">Credential ID:</span> {cert.credentialId || '________'}</p>
                  </div>
                </div>
                <ul className="flex flex-wrap gap-3 mb-4 font-mono text-sm text-slate">
                  {cert.skills.map((skill, skillIndex) => (
                    <li key={skillIndex}>{skill || '________'}</li>
                  ))}
                </ul>
                <div className="flex gap-4 text-lightest-slate">
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-neon-purple transition-colors"
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

export default Certifications;
