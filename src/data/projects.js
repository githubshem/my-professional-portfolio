/**
 * Featured work.
 *
 * NOTE: `Deployment Scripts` still points at the shared `deployment-tools` repo,
 * which is where those scripts live. The other two entries have their own repos.
 */
export const projects = [
  {
    title: 'AWS Certificate Expiration Alert System',
    description:
      'A serverless alerting system that scans ACM certificates across multiple AWS accounts and every enabled region, groups them into severity buckets from 30 days out through expired, and emails the DevOps team via SES on a daily schedule so no certificate lapses unnoticed.',
    tech: [
      'AWS Lambda',
      'Python',
      'AWS Certificate Manager',
      'Amazon SES',
      'EventBridge Scheduler',
      'AWS STS',
    ],
    github: 'https://github.com/githubshem/aws-expiration-alert-acm-scanner',
  },
  {
    title: 'Grafana Alert Provisioning Toolkit',
    description:
      'A provisioning toolkit that compiles an AWS resource inventory and a set of threshold definitions into Grafana alert rules, then applies them as rule groups routed to a Microsoft Teams contact point. Compilation is fully offline and covered by a pytest suite that proves zero drift against a frozen baseline.',
    tech: ['Grafana', 'Python', 'Amazon CloudWatch', 'Microsoft Power Automate', 'PowerShell'],
    github: 'https://github.com/githubshem/grafana_alerts',
  },
  {
    title: 'Deployment Scripts',
    description:
      'Internal deployment automation scripts built at my previous employer to streamline releases, reduce manual steps, and improve consistency across environments.',
    tech: ['PowerShell', 'PDQ Deploy', 'GitHub'],
    github: 'https://github.com/githubshem/deployment-tools',
  },
];
