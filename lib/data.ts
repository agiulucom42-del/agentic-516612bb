export type IntelligenceThread = {
  id: string;
  title: string;
  context: string;
  priority: "critical" | "high" | "medium";
  status: "running" | "queued" | "paused";
  eta: string;
  owner: string;
};

export type Connector = {
  id: string;
  name: string;
  category: "code" | "deploy" | "infra" | "comms" | "data";
  status: "online" | "degraded" | "offline";
  lastSync: string;
  scopes: string[];
};

export type AutomationRun = {
  id: string;
  name: string;
  status: "success" | "running" | "failed" | "scheduled";
  description: string;
  timestamp: string;
  signals: string[];
};

export type Guardrail = {
  id: string;
  name: string;
  description: string;
  status: "enforced" | "monitoring" | "draft";
  owner: string;
};

export type AutomationBlueprint = {
  id: string;
  name: string;
  objective: string;
  triggers: string[];
  actions: string[];
  owner: string;
  status: "stable" | "in-review" | "beta";
};

export type DeploymentRecord = {
  id: string;
  project: string;
  environment: "production" | "staging" | "preview";
  status: "success" | "running" | "failed";
  author: string;
  timestamp: string;
  summary: string;
};

export type InfrastructureService = {
  id: string;
  name: string;
  provider: string;
  status: "healthy" | "watch" | "outage";
  footprint: string;
  insights: string[];
};

export type Runbook = {
  id: string;
  name: string;
  objective: string;
  sla: string;
  lastRun: string;
  owner: string;
  steps: string[];
};

export const commandQueue: IntelligenceThread[] = [
  {
    id: "ops-4021",
    title: "Stabilize production pipeline",
    context:
      "Monitor Github PR queue, auto-merge green builds, escalate flaky tests to manual triage.",
    priority: "critical",
    status: "running",
    eta: "Live",
    owner: "Avatar Core",
  },
  {
    id: "ops-3984",
    title: "Social presence equity",
    context:
      "Schedule weekly updates across LinkedIn, Twitter, and Medium. Draft content from repo changelog.",
    priority: "high",
    status: "queued",
    eta: "14 min",
    owner: "Narrative Model",
  },
  {
    id: "ops-3950",
    title: "Client project sync",
    context:
      "Review open freelance boards, auto-bid on matching projects, prep discovery call briefs.",
    priority: "medium",
    status: "paused",
    eta: "Awaiting credential",
    owner: "Dealflow Agent",
  },
];

export const connectors: Connector[] = [
  {
    id: "github-core",
    name: "GitHub Operator",
    category: "code",
    status: "online",
    lastSync: "2 min ago",
    scopes: ["repos:full", "issues:write", "projects:admin"],
  },
  {
    id: "vercel-deploy",
    name: "Vercel Production",
    category: "deploy",
    status: "online",
    lastSync: "5 min ago",
    scopes: ["deploy:prod", "secrets:write"],
  },
  {
    id: "digitalocean-fleet",
    name: "DigitalOcean Fleet",
    category: "infra",
    status: "degraded",
    lastSync: "21 min ago",
    scopes: ["droplet:full", "k8s:admin"],
  },
  {
    id: "google-suite",
    name: "Google Workspace",
    category: "comms",
    status: "online",
    lastSync: "8 min ago",
    scopes: ["mail:send", "calendar:write"],
  },
  {
    id: "x-social",
    name: "X / Twitter",
    category: "comms",
    status: "online",
    lastSync: "4 min ago",
    scopes: ["content:write", "analytics:read"],
  },
  {
    id: "figma-design",
    name: "Figma",
    category: "data",
    status: "offline",
    lastSync: "3 hours ago",
    scopes: ["files:read", "projects:write"],
  },
];

export const automationRuns: AutomationRun[] = [
  {
    id: "run-2390",
    name: "Freelance pipeline sweep",
    status: "success",
    description:
      "Synced Upwork, Toptal, Contra feeds, drafted three proposals, scheduled follow-up cadence.",
    timestamp: "Just now",
    signals: ["12 new leads", "2 follow-ups", "1 call booked"],
  },
  {
    id: "run-2389",
    name: "Repository patrol",
    status: "running",
    description:
      "Linting across active repos, verifying open PR statuses, ensuring CD pipelines healthy.",
    timestamp: "2 min ago",
    signals: ["17 repos", "3 warnings"],
  },
  {
    id: "run-2388",
    name: "Infrastructure drift audit",
    status: "failed",
    description:
      "Mismatch detected between IaC definitions and staging cluster. Awaiting manual approval.",
    timestamp: "12 min ago",
    signals: ["Terraform", "Kubernetes", "Pager escalation"],
  },
  {
    id: "run-2387",
    name: "Social cadence emission",
    status: "scheduled",
    description:
      "Preparing multi-channel content for upcoming launch, staging assets in Contentful.",
    timestamp: "Next in 45 min",
    signals: ["Contentful", "Buffer"],
  },
];

export const guardrails: Guardrail[] = [
  {
    id: "gr-01",
    name: "Production deploy requires green CI",
    description: "Block production releases unless integration pipeline is green.",
    status: "enforced",
    owner: "Ops Council",
  },
  {
    id: "gr-02",
    name: "Financial transactions dual-signed",
    description: "Any billing or invoicing action must request human co-sign.",
    status: "monitoring",
    owner: "Finance Sentinel",
  },
  {
    id: "gr-03",
    name: "Credential vault isolation",
    description: "Secrets only accessible via short-lived delegated tokens.",
    status: "enforced",
    owner: "Security Fabric",
  },
];

export const blueprints: AutomationBlueprint[] = [
  {
    id: "bp-101",
    name: "Freelance lead ingestion",
    objective:
      "Sweep platforms, evaluate opportunity quality, auto-compose proposals and follow-ups.",
    triggers: ["Hourly cron", "Inbound webhook"],
    actions: [
      "Fetch marketplace feeds",
      "Rank by ICP resonance",
      "Generate personalized proposal",
      "Schedule outreach follow-up",
    ],
    owner: "Dealflow Agent",
    status: "stable",
  },
  {
    id: "bp-079",
    name: "GitHub repo stewardship",
    objective:
      "Triage incoming issues, ensure stale branches pruned, verify pipeline health.",
    triggers: ["Repo event", "Nightly cron"],
    actions: [
      "Run lint & security audits",
      "Sync project board status",
      "Escalate blocked PRs",
      "Publish daily changelog",
    ],
    owner: "Code Custodian",
    status: "stable",
  },
  {
    id: "bp-054",
    name: "Client reporting autopilot",
    objective:
      "Prepare weekly summaries, financial snapshots, and send updates across channels.",
    triggers: ["Calendar cadence"],
    actions: [
      "Compile metrics from analytics",
      "Draft narrative updates",
      "Queue emails and posts",
      "Archive in knowledge base",
    ],
    owner: "Narrative Model",
    status: "in-review",
  },
  {
    id: "bp-024",
    name: "Infrastructure reconciliation",
    objective:
      "Detect drift between Terraform stacks and live clusters, self-heal safe deviations.",
    triggers: ["Terraform apply", "Kubernetes event"],
    actions: [
      "Snapshot live cluster state",
      "Diff against IaC definitions",
      "Attempt automated remediation",
      "Escalate on policy violation",
    ],
    owner: "Ops Mesh",
    status: "beta",
  },
];

export const deploymentHistory: DeploymentRecord[] = [
  {
    id: "rel-8821",
    project: "persona-console",
    environment: "production",
    status: "success",
    author: "Avatar Core",
    timestamp: "7m ago",
    summary: "Rolled out autonomous runbook visualization module.",
  },
  {
    id: "rel-8819",
    project: "client-hub",
    environment: "staging",
    status: "running",
    author: "Dealflow Agent",
    timestamp: "12m ago",
    summary: "Testing new CRM sync pipeline and risk heuristics.",
  },
  {
    id: "rel-8814",
    project: "social-beacon",
    environment: "production",
    status: "failed",
    author: "Narrative Model",
    timestamp: "26m ago",
    summary: "LinkedIn API credential expired during webhook handshake.",
  },
  {
    id: "rel-8809",
    project: "inference-compute",
    environment: "preview",
    status: "success",
    author: "Ops Mesh",
    timestamp: "1h ago",
    summary: "Spun up GPU burst capacity for upcoming campaign.",
  },
];

export const infrastructure: InfrastructureService[] = [
  {
    id: "svc-01",
    name: "Kubernetes · production-fleet",
    provider: "DigitalOcean",
    status: "healthy",
    footprint: "9 nodes · 34 workloads",
    insights: ["Autoscaler balanced", "Istio mesh nominal", "Latency 42ms"],
  },
  {
    id: "svc-02",
    name: "Vercel · edge runtime",
    provider: "Vercel",
    status: "healthy",
    footprint: "12 regions · 4 projects",
    insights: ["Fresh production build", "No regressions flagged"],
  },
  {
    id: "svc-03",
    name: "AWS · credential vault",
    provider: "AWS",
    status: "watch",
    footprint: "3 secret stores · 21 tokens",
    insights: ["Token expiry in 3 days", "Rotation policy pending"],
  },
  {
    id: "svc-04",
    name: "GCP · analytics stack",
    provider: "Google Cloud",
    status: "outage",
    footprint: "BigQuery / Looker",
    insights: ["Ingest pipeline paused", "Retry scheduled in 14m"],
  },
];

export const runbooks: Runbook[] = [
  {
    id: "rb-401",
    name: "Production incident triage",
    objective:
      "Contain customer impact, roll back safely, coordinate comms within 5 minutes of alert.",
    sla: "5 min response",
    lastRun: "2 days ago",
    owner: "Ops Mesh",
    steps: [
      "Classify severity from telemetry",
      "Engage rollback or feature flag",
      "Notify clients & stakeholders",
      "Create retrospective entry",
    ],
  },
  {
    id: "rb-312",
    name: "Client onboarding",
    objective:
      "Provision accounts, seed knowledge base, confirm billing + comms automation before kickoff.",
    sla: "6 hours",
    lastRun: "21 hours ago",
    owner: "Dealflow Agent",
    steps: [
      "Generate welcome packet",
      "Provision dashboards and access",
      "Sync payment schedule",
      "Schedule recurring updates",
    ],
  },
  {
    id: "rb-207",
    name: "Weekly intelligence digest",
    objective:
      "Compile repo diffs, analytics, and social performance into a unified human briefing.",
    sla: "Every Friday",
    lastRun: "5 hours ago",
    owner: "Narrative Model",
    steps: [
      "Collect metrics from data sources",
      "Draft insights and recommendations",
      "Publish to portal + email",
      "Archive summary in vault",
    ],
  },
];
