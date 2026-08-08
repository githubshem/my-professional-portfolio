# Security Policy

This repository holds the source for my personal portfolio site, deployed at
[shemportfolio.tech](https://www.shemportfolio.tech/). It is a static single-page
site with no backend, no user accounts, and no database. Reports are still
welcome, and this page explains where to send them.

## Supported versions

The site is deployed continuously from `main`, so there is only ever one version
in service. Older commits and tags are historical and receive no fixes.

| Version | Supported |
| ------------------------- | ------------------ |
| Latest deploy from `main` | :white_check_mark: |
| Any earlier commit or tag | :x:                |

## Reporting a vulnerability

Please report privately, not in a public issue.

1. **Preferred:** open a private report through GitHub at
   [Security > Report a vulnerability](https://github.com/githubshem/my-professional-portfolio/security/advisories/new).
2. **Alternative:** email <shemsumbelingforwork@gmail.com> with `SECURITY` in the
   subject line.

Helpful details to include:

- What the issue is and why it matters.
- Steps to reproduce it, or a proof of concept.
- The affected URL, file, or dependency.
- Any suggested fix, if you have one.

### What to expect

- **Acknowledgement:** within 5 business days.
- **Assessment:** within 14 days I will confirm whether the report is accepted,
  and give a rough timeline for a fix if it is.
- **Progress:** an update at least every 14 days while the report stays open.
- **Resolution:** accepted issues are fixed on `main` and deployed. I will tell
  you when the fix is live, and credit you in the commit or advisory unless you
  prefer to stay anonymous.
- **Declined reports:** if I decide something is out of scope or not a
  vulnerability, I will explain the reasoning rather than close it silently.

## Scope

In scope:

- The deployed site and its assets.
- Source code in this repository.
- Dependencies declared in `package.json`, where the issue is reachable from
  this site's build or runtime.
- Repository or deployment configuration that exposes secrets or allows
  unauthorised changes.

Out of scope:

- Findings against third-party services I only link to, such as GitHub or
  LinkedIn. Report those to the service concerned.
- Volumetric testing: denial of service, load or stress testing, and automated
  scanning that generates significant traffic.
- Social engineering, phishing, or physical attacks against me or any host.
- Missing hardening headers, missing SPF or DMARC records, and similar
  best-practice gaps with no demonstrated impact. These are welcome as normal
  issues rather than security reports.
- Vulnerabilities that require an already-compromised browser, device, or
  network position.

## Testing guidelines

If you are probing the live site, please stay non-destructive: use your own
data, do not attempt to access or modify anything that is not yours, and stop as
soon as you have confirmed a finding. Testing that follows this policy in good
faith is welcome, and I will not pursue any action over it.

## Disclosure

Please give me 90 days to ship a fix before publishing details. If the issue is
being actively exploited, contact me and we will move faster.

There is no bug bounty for this project. It is a personal site, so reports are
handled on a best-effort basis, and thanks is the only reward on offer.
