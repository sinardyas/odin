# Teaching Notes

## Learner profile
- Email: sinar.dyas@soechi.id
- **Level:** Some AWS — comfortable launching EC2, using S3, navigating the console.
  The gap is the *networking layer*: VPC, subnets, CIDR, route tables, security groups, NAT, VPN.
- **Mission type:** Understand the architecture (no deadline app driving it). Curiosity/mastery-driven.

## Preferences
- **Concepts first, build later.** Lead with diagrams and mental models. Real AWS clicks come
  after the concept clicks. Do NOT push them to provision billable resources yet.
- Cost-aware — call out which components bill by the hour (NAT Gateway, Client VPN, ALB).
- When they said "VPN" they meant **Client VPN** (admin → private servers), NOT Site-to-Site.
  Watch for this term being used loosely; clarify when relevant.

## Teaching approach for this topic
- The topic is knowledge-heavy (they want to understand), so lessons can lean explanatory —
  but still end with a retrieval check (quiz) to build storage strength, not just fluency.
- The full target architecture is the compass. Keep a "blueprint" reference doc they return to,
  and fill it in one building block per lesson.
- Recurring "gotcha" worth reinforcing: a subnet is public because of its **route table**
  (route to Internet Gateway), not because of its name.

## Planned lesson arc (revise as we go)
1. The VPC & subnets — the private network foundation (CIDR, public vs private, AZs). ← START HERE
2. Route tables + Internet Gateway — what actually makes a subnet "public".
3. NAT Gateway — how private servers get outbound internet without being reachable.
4. Application Load Balancer — serving the app to the internet from public subnets.
5. Security Groups (& NACLs) — the firewall layer.
6. Client VPN — reaching private servers as an admin.
7. Capstone: trace a request end-to-end + trace an admin connection end-to-end.
