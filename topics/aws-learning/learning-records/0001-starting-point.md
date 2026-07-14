# Starting point: comfortable with EC2/S3, black-box on VPC networking

Established at kickoff (2026-07-13). The learner can launch EC2 instances and use S3 and
navigate the console confidently, but the **networking layer is unopened**: VPC, CIDR, subnets,
route tables, security groups, NAT, and VPN are all fuzzy or new. Do not re-teach basic console
navigation or "what is an instance." Start teaching at the VPC boundary and inward.

**Mission stance:** understand-the-architecture (no deadline app), concepts-first, cost-aware.
The compass is the full "serve an app from a private network" design in [[MISSION.md]] /
reference/blueprint.html.

**Implication for sequencing:** the highest-leverage first correction is that *public vs private
is decided by the route table, not a name/checkbox* — seeded in Lesson 1, to be proven in Lesson 2.
Watch for whether the learner internalises this; it predicts whether NAT and IGW will click later.

**Not yet demonstrated:** nothing verified yet — Lesson 1 just delivered. Await quiz/discussion
evidence before assuming CIDR or the public/private mechanism has actually landed.
