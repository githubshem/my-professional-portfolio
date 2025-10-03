import { useState } from 'react';

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  const experiences = [
    {
      company: 'Company One',
      position: 'Senior Full Stack Developer',
      duration: 'Jan 2023 - Present',
      url: 'https://company1.com',
      responsibilities: [
        'Led development of customer-facing web applications using React and Node.js',
        'Collaborated with design team to implement responsive UI components',
        'Optimized application performance resulting in 40% faster load times',
        'Mentored junior developers and conducted code reviews',
      ],
    },
    {
      company: 'Company Two',
      position: 'Full Stack Developer',
      duration: 'Jun 2021 - Dec 2022',
      url: 'https://company2.com',
      responsibilities: [
        'Developed and maintained multiple client projects using modern web technologies',
        'Implemented RESTful APIs and integrated third-party services',
        'Worked in an Agile environment with bi-weekly sprints',
        'Improved website accessibility to meet WCAG 2.1 standards',
      ],
    },
    {
      company: 'Company Three',
      position: 'Junior Developer',
      duration: 'Jan 2020 - May 2021',
      url: 'https://company3.com',
      responsibilities: [
        'Built responsive websites and web applications from scratch',
        'Collaborated with designers to translate mockups into functional interfaces',
        'Participated in daily stand-ups and sprint planning meetings',
        'Learned and implemented best practices for clean code and version control',
      ],
    },
  ];

  return (
    <section id="experience" className="py-24">
      <div className="max-w-4xl">
        <h2 className="section-heading">
          <span className="section-number">02.</span>
          Where I've Worked
        </h2>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Company Tabs */}
          <div className="flex md:flex-col overflow-x-auto md:overflow-x-visible">
            {experiences.map((exp, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-5 py-3 text-left font-mono text-sm whitespace-nowrap md:border-l-2 border-b-2 md:border-b-0 transition-all ${
                  activeTab === index
                    ? 'border-green text-green bg-lightest-navy/20'
                    : 'border-lightest-navy text-slate hover:bg-lightest-navy/10 hover:text-green'
                }`}
              >
                {exp.company}
              </button>
            ))}
          </div>

          {/* Experience Details */}
          <div className="flex-1">
            <h3 className="text-lightest-slate text-xl md:text-2xl font-bold mb-1">
              {experiences[activeTab].position}
              <span className="text-green">
                {' '}
                @{' '}
                <a
                  href={experiences[activeTab].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {experiences[activeTab].company}
                </a>
              </span>
            </h3>
            <p className="text-slate font-mono text-sm mb-6">
              {experiences[activeTab].duration}
            </p>
            <ul className="space-y-4">
              {experiences[activeTab].responsibilities.map((item, index) => (
                <li key={index} className="flex items-start text-slate">
                  <span className="text-green mr-3 mt-1">▹</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;