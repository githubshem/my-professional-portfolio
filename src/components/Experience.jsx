import { useState, useRef } from 'react';
import { experiences } from '../data/experience';

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabRefs = useRef([]);

  const handleTabKeyDown = (e) => {
    const count = experiences.length;
    let next = null;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next = (activeTab + 1) % count;
    else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') next = (activeTab - 1 + count) % count;
    else if (e.key === 'Home') next = 0;
    else if (e.key === 'End') next = count - 1;
    if (next !== null) {
      e.preventDefault();
      setActiveTab(next);
      tabRefs.current[next]?.focus();
    }
  };

  return (
    <section id="experience" className="py-24 scroll-mt-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-heading">
          <span className="section-number">02.</span>
          Where I've Worked
        </h2>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Company Tabs */}
          <div
            role="tablist"
            aria-label="Job history"
            className="flex md:flex-col overflow-x-auto md:overflow-x-visible -mx-6 px-6 md:mx-0 md:px-0 border-b border-lighter-midnight md:border-b-0"
          >
            {experiences.map((exp, index) => (
              <button
                key={index}
                ref={(el) => (tabRefs.current[index] = el)}
                role="tab"
                id={`experience-tab-${index}`}
                aria-selected={activeTab === index}
                aria-controls="experience-panel"
                tabIndex={activeTab === index ? 0 : -1}
                onClick={() => setActiveTab(index)}
                onKeyDown={handleTabKeyDown}
                className={`min-w-max px-5 py-4 text-left font-mono text-sm whitespace-nowrap md:border-l-2 border-b-2 md:border-b-0 transition-all ${
                  activeTab === index
                    ? 'border-neon-pink text-neon-pink bg-lighter-midnight/20'
                    : 'border-lighter-midnight text-slate hover:bg-lighter-midnight/10 hover:text-neon-pink'
                }`}
              >
                {exp.company}
              </button>
            ))}
          </div>

          {/* Experience Details */}
          <div
            role="tabpanel"
            id="experience-panel"
            aria-labelledby={`experience-tab-${activeTab}`}
            className="flex-1"
          >
            <h3 className="text-lightest-slate text-xl md:text-2xl font-bold mb-1">
              {experiences[activeTab].position}
              <span className="text-neon-pink-bright">
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
                  <span className="text-neon-pink-bright mr-3 mt-1">▹</span>
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
