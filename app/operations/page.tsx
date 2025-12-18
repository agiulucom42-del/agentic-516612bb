import { AutomationTimeline } from "@/components/automation-timeline";
import { StatusBadge } from "@/components/status-badge";
import { automationRuns, runbooks } from "@/lib/data";

export default function OperationsPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <StatusBadge label="Runbooks & execution" tone="ready" />
          <h2 className="mt-4 text-2xl font-semibold text-white">
            Operational choreography
          </h2>
          <p className="mt-2 max-w-3xl text-sm text-slate-300">
            A centralized library of end-to-end procedures your clone executes automatically,
            backed by real-time telemetry from the execution stream.
          </p>
        </div>
        <button className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-2 text-xs uppercase tracking-[0.25em] text-slate-200 transition hover:border-emerald-400/40 hover:text-white">
          New runbook
        </button>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
        <div className="space-y-4">
          {runbooks.map((runbook) => (
            <article
              key={runbook.id}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <span className="rounded-full bg-white/[0.05] px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-slate-400">
                    #{runbook.id}
                  </span>
                  <h3 className="mt-3 text-xl font-semibold text-white">
                    {runbook.name}
                  </h3>
                  <p className="mt-2 text-sm text-slate-300">
                    {runbook.objective}
                  </p>
                </div>
                <div className="text-right text-xs text-slate-400">
                  <p>
                    SLA ·{" "}
                    <span className="font-semibold text-white">
                      {runbook.sla}
                    </span>
                  </p>
                  <p className="mt-1">
                    Last run ·{" "}
                    <span className="font-semibold text-white">
                      {runbook.lastRun}
                    </span>
                  </p>
                  <p className="mt-1">
                    Owner ·{" "}
                    <span className="font-semibold text-white">
                      {runbook.owner}
                    </span>
                  </p>
                </div>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-slate-200">
                {runbook.steps.map((step) => (
                  <li
                    key={step}
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2"
                  >
                    <span className="h-2 w-2 rounded-full bg-emerald-300" />
                    {step}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <AutomationTimeline runs={automationRuns} />
      </div>
    </div>
  );
}
