import { CommandConsole } from "@/components/command-console";
import { GuardrailBoard } from "@/components/guardrail-board";
import { MetricCard } from "@/components/metric-card";
import { AutomationTimeline } from "@/components/automation-timeline";
import { IntelligenceThreads } from "@/components/intelligence-threads";
import { StatusBadge } from "@/components/status-badge";
import {
  automationRuns,
  commandQueue,
  connectors,
  guardrails,
} from "@/lib/data";
import {
  BrainCircuit,
  CloudUpload,
  MessagesSquare,
  Rocket,
} from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <StatusBadge label="Autonomy mesh · active" tone="ready" />
        <div className="flex flex-wrap gap-3">
          <span className="rounded-full border border-emerald-400/40 bg-emerald-500/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-emerald-200">
            Digital clone
          </span>
          <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-300">
            Infinite runtime
          </span>
          <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-300">
            Human override wired
          </span>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-4">
        <MetricCard
          label="Execution velocity"
          value="316 ops / hr"
          delta="12%"
          icon={<Rocket className="h-5 w-5" />}
        />
        <MetricCard
          label="Repositories stewarded"
          value="27 active"
          icon={<CloudUpload className="h-5 w-5" />}
        />
        <MetricCard
          label="Clients under management"
          value="11 retainer"
          delta="2"
          icon={<MessagesSquare className="h-5 w-5" />}
        />
        <MetricCard
          label="Cognitive load"
          value="64% available"
          icon={<BrainCircuit className="h-5 w-5" />}
        />
      </div>

      <CommandConsole />

      <div className="grid gap-6 lg:grid-cols-[1.2fr,0.8fr]">
        <IntelligenceThreads threads={commandQueue} />
        <AutomationTimeline runs={automationRuns} />
      </div>

      <GuardrailBoard items={guardrails} />

      <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-emerald-200/70">
              Integration fabric
            </p>
            <h3 className="text-lg font-semibold text-white">
              Trusted services currently wired
            </h3>
          </div>
          <StatusBadge label="Connectors synced" tone="ready" />
        </div>
        <p className="mt-3 text-sm text-slate-300">
          GitHub, Vercel, DigitalOcean, Google Workspace, X, and Figma linked.
          64 additional services available in the marketplace.
        </p>
        <div className="mt-6 grid gap-3 text-sm text-slate-300 md:grid-cols-3">
          {connectors.slice(0, 6).map((connector) => (
            <div
              key={connector.id}
              className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3"
            >
              <div>
                <p className="text-sm font-medium text-white">
                  {connector.name}
                </p>
                <p className="text-xs text-slate-400">{connector.lastSync}</p>
              </div>
              <span className="rounded-full bg-white/[0.06] px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-slate-400">
                {connector.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
