import { useState } from 'react';

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  const experiences = [
    {
      company: 'Amadeus',
      position: 'Automation and Deployment Engineer (DevOps Engineer)',
      duration: 'Aug 2024 - Nov 2025',
      url: 'https://amadeus.com/',
      responsibilities: [
        'I have led multiple end-to-end infrastructure projects for new client onboarding, taking full ownership from requirements gathering to on-time delivery. I collaborated closely with cross-functional teams specially with developers and QA engineers to align technical and deployment strategies, implemented centralized logging through the ELK stack to enhance observability, and configured NGINX routing to AWS ELB for secure and efficient traffic management. I approach high-priority initiatives with strong ownership, proactively resolving blockers and ensuring successful project execution.',
        'Executed production deployments for version releases of the Common Use Self-Service (CUSS) platform, ensuring high availability and minimal service disruption across international airport environments.',
        'Collaborated cross-functionally with Airport Delivery Management teams across global regions, proactively addressing operational issues, supporting client requirements, and maintaining high service reliability standards.',
        'Collaborated closely with Change Managers to ensure production changes were properly aligned with established governance processes, validating procedures and mitigating operational risks prior to implementation.',
        'Contributed to the architectural design of the modernization of the WLA self-service platform, supporting the transition from legacy systems to a modernized architecture. Defined monitoring and alerting requirements for the new stack, and implemented it to ensure proactive incident detection and operational reliability.',
        'Writing Python and Powershell scripts by the use of the latest frontier models that are highest evaluated in writing code (ChatGPT 5.2 or Anthropic Opus 4.6) on Windsurf.',
        'Utilized Datadog APM traces and centralized logs to perform in-depth root cause analysis (RCA), diagnosing production incidents.',
        'Troubleshooting the pipeline of Octopus Deploy when there is an error occurred during the deployment by inspecting the logs and debugging the issue in the variables, deployment steps and helm charts.',
      ],
    },
    {
      company: 'Dynasty Gaming and Media',
      position: 'Technical Operations Engineer',
      duration: 'Jan 2023 - Nov 2023',
      url: 'https://www.dynastygm.com/',
      responsibilities: [
        'Designed and implemented scalable cloud infrastructure solutions using AWS, using Terraform (IaC).',
        'Contributed to building and maintaining an Internal Developer Platform (IDP) to provide self-service deployment capabilities for developers.',
        'Managed and maintained documentation for the IDP to ensure that developers could easily use the platform and to other internal teams as well.',
        'Collaborated closely with development team to identify and report trending issues in the queue, offering valuable insights and suggestions for resolution.',
        'Participated in on-call support for platform services and led blameless post-incident reviews, identifying root causes and driving corrective actions to improve system reliability and prevent recurrence.',
      ],
    },
    {
      company: 'F45 Training',
      position: 'L2 Technical Support Engineer',
      duration: 'May 2021 - Jan 2023',
      url: 'https://f45training.com/',
      responsibilities: [
        'Configured critical data within our in-house application, serving as a pivotal component of our API, enhancing data integrity and usability.',
        'Troubleshot software issues efficiently using our in-house application for smart TVs, ensuring optimal user experiences and swift issue resolution.',
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