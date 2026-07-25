import { useState } from 'react';

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  const experiences = [
    {
      company: 'Service First',
      position: 'DevOps Engineer',
      duration: 'May 2026 - Present',
      url: 'https://www.servicefirstcx.com/',
      responsibilities: [
        'AWS Infrastructure Automation: Built and standardized Jenkins pipelines for Terraform-managed ECS, RDS, Redis, RabbitMQ, ALB, and VPC resources, reducing repetitive pipeline maintenance.',
        'Infrastructure as Code Governance: Improved Terraform repository structure, provider configuration, naming standards, approval gates, and state safety across more than 80 workspaces.',
        'Monitoring and Alerting: Designed and implemented Grafana and CloudWatch alerts for ECS, ALB, RDS, Redis, and RabbitMQ, improving visibility into infrastructure and application health.',
        'Certificate Lifecycle Management: Developed an automated ACM certificate expiration alert system using Lambda, EventBridge, SES, IAM, and STS, helping prevent TLS outages across multiple AWS accounts and regions.',
        'CI/CD Optimization: Consolidated legacy Jenkins jobs into reusable, parameter-driven pipelines with validation, plan artifacts, rollback controls, and manual approval before infrastructure changes.',
        'Production Troubleshooting: Investigated ECS, EC2, Grafana, Redis, RDS, ALB, and application incidents using AWS CLI, CloudWatch Logs, Grafana, and service configuration mappings.',
        'Developer Support: Worked closely with developers to trace infrastructure dependencies, validate database and Redis requests, restart ECS services safely, and resolve deployment or connectivity issues.',
        'Operational Documentation: Created runbooks, testing procedures, implementation plans, rollback guides, and troubleshooting references that improved knowledge sharing and repeatability.',
        'Risk and Change Management: Applied read-first investigation, least-privilege access, verification steps, approval gates, backups, and rollback planning before executing infrastructure changes.',
        'Security: Implemented infrastructure controls supporting SOC 2 principles, including access management, monitoring, backup and recovery.',
      ],
    },
    {
      company: 'Amadeus',
      position: 'Automation and Deployment Engineer (DevOps Engineer)',
      duration: 'Aug 2024 - Nov 2025',
      url: 'https://amadeus.com/',
      responsibilities: [
        'Executed production deployments for airport self-service platforms including CUSS, SSBD, and PRS, ensuring high availability and minimal disruption across international airport environments.',
        'Managed containerized microservice deployments for WLA modernization, supporting migration from legacy architecture to a more scalable platform.',
        'Configured and maintained NGINX reverse proxy and load balancing across multiple AWS regions, managing 30+ upstream clusters with round-robin distribution to ensure high availability for baggage processing, passenger reconciliation, and airport web applications.',
        'Managed blue/green deployment routing through NGINX upstream configuration and map-based traffic steering, enabling zero-downtime releases across multiple Service Fabric production environments.',
        'Troubleshot and managed configuration of biometric identity verification applications deployed on airport self-service kiosks, including service endpoint tuning, device connectivity settings, and IATA CUSS platform integration to support stable production operations.',
        'Implemented centralized logging and monitoring solutions using ELK and Datadog to improve observability and incident response.',
        'Managed SSL/TLS certificate renewals across Ubuntu servers using Certbot, maintaining secure communications with zero service disruption.',
        'Conducted AWS IAM access reviews and security audits to support least-privilege access and configuration compliance.',
        'Troubleshot Kubernetes and Octopus Deploy pipeline issues by analyzing deployment logs, variables, and Helm chart configurations.',
        'Contributed to modernization architecture planning, including monitoring and alerting requirements for proactive incident detection.',
        'Used Postman to validate service endpoints and support deployment verification during release activities and production issue investigations.',
        'Used Chrome DevTools in the Chromium-based CUSS platform to investigate performance issues, review console logs, and report findings to developers.',
      ],
    },
    {
      company: 'Dynasty Gaming and Media',
      position: 'Platform Engineer',
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
        'Supported QA and release validation by reproducing defects, verifying fixes, and documenting findings for collaboration with engineering teams.',
        'Used Chrome DevTools to inspect frontend behavior, network activity, and client-side issues during hotfix validation and production support.',
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