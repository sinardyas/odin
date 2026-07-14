# Mission: AWS Networking — Serving an App from a Private Network

## Why
To genuinely understand how a real production app is served to the internet on AWS while
the servers themselves stay hidden in a private network — and how an admin still reaches
those hidden servers securely. The user can launch an EC2 instance but the networking layer
(VPC, subnets, route tables, security groups, VPN) is a black box, and they want to open it.

## Success looks like
- Can draw the full target architecture from memory and explain the one-line role of every box:
  VPC, public/private subnets, Internet Gateway, NAT Gateway, route tables, Application Load
  Balancer, EC2 app servers, Security Groups, Client VPN.
- Can trace the path of a user's HTTP request from the internet all the way to a private app server.
- Can trace how *they* (an admin) reach a private server that has no public IP — via Client VPN.
- Can explain *why* a subnet is "public" or "private" (it's the route table, not the name).
- Can reason about which piece costs money and roughly why.

## Constraints
- Concepts-first. Diagrams and reference docs now; real console clicks / build come later.
- Mindful of cost — real AWS resources (NAT Gateway, Client VPN) bill by the hour, so we learn
  the mental model before spending.
- Level: comfortable with EC2/S3 and the console; shaky on the networking layer specifically.

## Out of scope (for now)
- Site-to-Site VPN (connecting an office/on-prem network) — the VPN we care about is Client VPN.
- Infrastructure-as-code (Terraform / CloudFormation) — console mental model first.
- Kubernetes / ECS / containers, DNS/Route 53 deep-dives, TLS certificate management.
- Actually provisioning billable resources until the architecture is understood.
