# AWS Networking (Serve an App from a Private Network) — Resources

All links verified canonical as of 2026-07-13. Prefer these over parametric guesses.

## Knowledge

### The anchor
- [Tutorial: "VPC with servers in private subnets and NAT" — AWS VPC User Guide](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-example-private-subnets-nat.html)
  **This is essentially our exact target architecture**: public + private subnets across 2 AZs,
  load balancer, app servers in private subnets, NAT gateway, with example route tables and
  security-group rules. The single best artifact to anchor the whole course.

### Building blocks
- [What is Amazon VPC — VPC User Guide](https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html)
  Defines VPC, subnets, gateways, routing. Use for: the top-level mental model.
- [VPC CIDR blocks](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-cidr-blocks.html)
  /16–/28 rules, RFC 1918 private ranges. Use for: choosing the VPC's address range.
- [Subnet sizing](https://docs.aws.amazon.com/vpc/latest/userguide/subnet-sizing.html)
  How to divide a CIDR; the 5 AWS-reserved addresses per subnet. Use for: "why a /24 gives 251 usable IPs."
- [Configure subnets (public/private/isolated)](https://docs.aws.amazon.com/vpc/latest/userguide/configure-subnets.html)
  Subnet types. Key rule: a subnet's type is set by its **route table**, not a checkbox. Use for: Lesson 1 & 2.
- [Route tables](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Route_Tables.html)
  Routes = destination + target (IGW, NAT, VPN). Use for: Lesson 2 (what makes a subnet public).
- [Internet Gateway](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Internet_Gateway.html)
  Crispest one-sentence definition: "a route to an IGW = public subnet." Use for: Lesson 2.
- [NAT Gateway](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html)
  Outbound-only internet for private instances. Use for: Lesson 3.
- [Security Groups vs Network ACLs (Infrastructure security)](https://docs.aws.amazon.com/vpc/latest/userguide/infrastructure-security.html)
  Official side-by-side: instance vs subnet level, stateful vs stateless. Use for: Lesson 5.
- [What is an Application Load Balancer](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/introduction.html)
  Layer-7 concepts: listeners, rules, target groups, health checks. Use for: Lesson 4.
- [What is AWS Client VPN](https://docs.aws.amazon.com/vpn/latest/clientvpn-admin/what-is.html)
  OpenVPN-based managed remote access; endpoint, target network, authorization rules. Use for: Lesson 6.
- [Regions and Availability Zones](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html)
  AZ definition + HA rationale (spread across AZs to survive a location failure). Use for: Lesson 1.

### Cost (call these out — the learner is cost-aware)
- [VPC / NAT Gateway pricing](https://aws.amazon.com/vpc/pricing/)
  Gotcha: NAT gateway is billed **both** per hour (~$0.045) **and** per GB processed. Public IPv4 ~$0.005/hr each.
- [Client VPN pricing](https://aws.amazon.com/vpn/pricing/)
  Gotcha: billed per **endpoint-association-hour** AND per **connection-hour** — two meters.

## Wisdom (Communities)
- [AWS re:Post — Amazon VPC tag](https://repost.aws/tags/TATGuEiYydTVCPMhSnXFN6gA/amazon-vpc)
  AWS's own moderated Q&A (successor to AWS Forums). Answers often from AWS staff. Use for:
  "is my architecture sane?" and troubleshooting once we start building.

## Gaps
- No hands-on lab surfaced yet that is free/cheap and matches concepts-first. When the user is
  ready to build, evaluate: AWS Skill Builder free tier, or a locally-run diagram tool. Search then.
