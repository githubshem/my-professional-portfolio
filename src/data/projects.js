/**
 * Featured work.
 *
 * NOTE: `platform-terraform-aws` is a private repo, so its GitHub link 404s for
 * anyone not signed in with access. It is listed anyway, deliberately: the point
 * is to show the work exists, not to hand out the source.
 *
 * `cover` is optional: import a banner from `src/assets/` and assign it to give
 * a card a strip of art above the title. Leave it off and the card renders as
 * plain text, which is the default for every entry that doesn't set it.
 *
 * Export covers at 1920x409 — Projects.jsx hardcodes those as the img's
 * intrinsic width/height to reserve space before the lazy load lands, so a
 * different ratio would reserve the wrong box and shift the layout. The card
 * fades the bottom of the strip into its own surface, so keep the subject in
 * the upper two thirds of the frame or the fade will swallow it.
 */
import acmScannerCover from '../assets/acm-scanner-cover.webp';
import grafanaAlertsCover from '../assets/grafana-alerts-cover.webp';
import terraformPlatformCover from '../assets/terraform-platform-cover.webp';

export const projects = [
  {
    title: 'AWS Certificate Expiration Alert System',
    cover: acmScannerCover,
    description:
      'A serverless alerting system that scans ACM certificates across multiple AWS accounts and every enabled region, groups them into severity buckets from 30 days out through expired, and emails the DevOps team via SES on a daily schedule so no certificate lapses unnoticed.',
    tech: ['AWS Lambda','Python','AWS Certificate Manager','Amazon SES','EventBridge Scheduler','AWS STS','AWS IAM'],
    github: 'https://github.com/githubshem/acm-scanner',
  },
  {
    title: 'Grafana Alert Provisioning Toolkit',
    cover: grafanaAlertsCover,
    description:
      'A provisioning toolkit that compiles an AWS resource inventory and a set of threshold definitions into Grafana alert rules, then applies them as rule groups routed to a Microsoft Teams contact point. Compilation is fully offline and covered by a pytest suite that proves zero drift against a frozen baseline.',
    tech: ['Grafana', 'Python','Amazon CloudWatch','Microsoft Power Automate','PowerShell','Prometheus'],
    github: 'https://github.com/githubshem/grafana_alerts',
  },
  {
    title: 'Terraform AWS Platform Infrastructure',
    cover: terraformPlatformCover,
    description:
      'A layered Terraform monorepo that provisions an entire AWS engineering platform: VPC and security groups, then Aurora, ElastiCache, RabbitMQ and OpenSearch, then the load balancers, EKS clusters and ECS workloads that sit on top, mirrored across symmetric test and prod environments. Layers are numbered in dependency order, so reading the tree top to bottom is reading apply order, and Jenkins pipelines gate every change behind fmt, validate, TFLint and Trivy checks before a plan reaches an approved apply, with scheduled drift detection and state backups covering the rest.',
    tech: ['Terraform','AWS','Jenkins','Amazon EKS','Amazon ECS','Amazon Aurora','Trivy'],
    github: 'https://github.com/githubshem/platform-terraform-aws',
  },
];
