/**
 * Featured work.
 *
 * KNOWN ISSUE: all three entries currently point at the same `deployment-tools`
 * repo. That was true before this data moved out of Projects.jsx and is carried
 * across verbatim — the second and third entries likely need their own URLs.
 */
export const projects = [
  {
    title: 'Deployment Scripts',
    description:
      'Internal deployment automation scripts built at my previous employer to streamline releases, reduce manual steps, and improve consistency across environments.',
    tech: ['PowerShell', 'PDQ Deploy', 'GitHub'],
    github: 'https://github.com/githubshem/deployment-tools',
  },
  {
    title: 'YouTrack Ticket Creation',
    description:
      'An internal automation script my team and I used daily to streamline administrative tasks and reduce operational friction.',
    tech: ['JetBrains YouTrack', 'Python', 'Change Management', 'Leadership', 'GitHub'],
    github: 'https://github.com/githubshem/deployment-tools',
  },
  {
    title: 'RDP into multiple nodes using Powershell Script',
    description:
      'A personal PowerShell automation script that cuts down repetitive logins by streamlining Windows Server access across multiple nodes.',
    tech: ['RDP', 'PowerShell', 'Amazon EC2', 'GitHub', 'Windows Server 2022'],
    github: 'https://github.com/githubshem/deployment-tools',
  },
];
