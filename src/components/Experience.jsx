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
        'Executed production deployments for airport self-service platforms including CUSS, SSBD, and PRS, ensuring high availability and minimal disruption across international airport environments.',
        'Managed containerized microservice deployments for WLA modernization, supporting migration from legacy architecture to a more scalable platform.',
        'Implemented centralized logging and monitoring solutions using ELand Datadog to improve observability and incident response.',
        'Managed SSL/TLS certificate renewals across Ubuntu servers usingCertbot, maintaining secure communications with zero service disruption.',
        'Conducted AWS IAM access reviews and security audits to supportleast-privilege access and configuration compliance.',
        'Troubleshot Kubernetes and Octopus Deploy pipeline issues by analyzing deployment logs, variables, and Helm chart configurations.',
        'Contributed to modernization architecture planning, including monitoring and alerting requirements for proactive incident detection.',
      ],
    },
    {
      company: 'Dynasty Gaming and Media',
      position: 'Technical Operations Engineer',
      duration: 'Jan 2023 - Nov 2023',
      url: 'https://www.dynastygm.com/',
      responsibilities: [
        'Designed and implemented AWS infrastructure using Terraform to support scalable and repeatable cloud deployments.',
        'Contributed to the development and maintenance of an Internal Developer Platform (IDP) that enabled self-service deployment capabilities for developers.',
        'Created and maintained documentation for internal platform tools to improve usability and cross-team adoption.',
        'Participated in on-call support and post-incident reviews, helping identify root causes and corrective actions to improve reliability.',
        'Investigated platform issues through log analysis in CloudWatch and Kibana, collaborating with DevOps and backend teams to resolve root causes.',
        'Supported hotfix validation and deployment monitoring across web, mobile, tablet, and iOS platforms.',
        'Worked closely with cross-functional teams including frontend, backend, QA, design, and project management to support successful delivery.',
      ],
    },
    {
      company: 'F45 Training',
      position: 'L2 Technical Support Engineer',
      duration: 'May 2021 - Jan 2023',
      url: 'https://f45training.com/',
      responsibilities: [
        'Supported cloud and operational tasks across AWS environments, including EC2 instance management through both the AWS Console and CLI.',
        'Assisted in troubleshooting software and platform issues through triage, investigation, and collaboration with development teams.',
        'Used Postman, MongoDB, and BigQuery to support testing, data validation, investigation, and issue resolution.',
        'Identified recurring issues and communicated trends to engineering teams to support product and platform improvements.',
        'Authored and maintained SOPs to improve operational consistency and knowledge sharing.',
        'Delivered training and guidance to team members on process and system updates.',
      ],
    },
    {
      company: 'FIS Global',
      position: 'IT Helpdesk',
      duration: 'May 2020 - Feb 2021',
      url: 'https://www.fisglobal.com/',
      responsibilities: [
        'Provided technical support for desktop systems, workstations, servers, and network-related issues in a 24/7 production environment.',
        'Logged, tracked, prioritized, and escalated incidents based on business impact and resolution guidelines.',
        'Communicated technical issues clearly to both technical and non-technical users.',
        'Supported installations, repairs, upgrades, backups, and ongoing maintenance tasks.',
      ],
    },
    {
      company: 'TELUS International Philippines, Inc.',
      position: 'Customer Support Representative',
      duration: 'May 2020 - Feb 2021',
      url: 'https://www.telus.com/',
      responsibilities: [
        'Resolved customer inquiries and complaints through phone, chat, and email support channels.',
        'Maintained accurate records of customer interactions using ticketing tools.',
        'Coordinated with internal teams to support timely issue resolution.',
      ],
    },
    {
      company: 'Forever 21',
      position: 'IT Service Desk',
      duration: 'May 2020 - Feb 2021',
      url: 'https://www.forever21.com/',
      responsibilities: [
        'Provided Tier 1 and Tier 2 support for store systems, POS, desktops, peripherals, and software issues.',
        'Logged, tracked, and escalated incidents using ticketing systems in line with service level expectations.',
        'Collaborated with internal teams and vendors to support troubleshooting and hardware replacement.',
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