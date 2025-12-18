import { blueprints } from "@/lib/data";
import { StatusBadge } from "@/components/status-badge";
import { CheckCircle, Clock, Sparkles } from "lucide-react";

const statusLabel = {
  "stable": "Production ready",
  "in-review": "In review",
  "beta": "Beta",
} as const;

const statusTone = {
  "stable": "text-emerald-200 bg-emerald-500/10 border-emerald-400/50",
  "in-review": "text-amber-200 bg-amber-500/10 border-amber-400/50",
  "beta": "text-blue-200 bg-blue-500/10 border-blue-400/50",
} as const;

const statusIcon = {
  "stable": CheckCircle,
  "in-review": Clock,
  "beta": Sparkles,
} as const;

export default function AutomationsPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <StatusBadge label="Autonomy graph · orchestrator" tone="ready" />
          <h2 className="mt-4 text-2xl font-semibold text-white">
            Automation blueprints
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-300">
            Each blueprint captures the objectives, triggers, and actions your digital twin
            executes on your behalf across code, ops, clients, and communications.
          </p>
        </div>
        <button className="rounded-full border border-emerald-400/50 bg-emerald-500/10 px-5 py-2 text-xs uppercase tracking-[0.25em] text-emerald-200 transition hover:bg-emerald-500/20">
          New automation
        </button>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        {blueprints.map((blueprint) => {
          const tone = statusTone[blueprint.status];
          const Icon = statusIcon[blueprint.status];
          return (
            <div
              key={blueprint.id}
              className="flex h-full flex-col gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-6"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <span className="rounded-full bg-white/[0.05] px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-slate-400">
                    #{blueprint.id}
                  </span>
                  <h3 className="mt-3 text-xl font-semibold text-white">
                    {blueprint.name}
                  </h3>
                  <p className="mt-2 text-sm text-slate-300">
                    {blueprint.objective}
                  </p>
                </div>
                <span
                  className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] ${tone}`}
                >
                  <Icon className="h-4 w-4" />
                  {statusLabel[blueprint.status]}
                </span>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                    Triggers
                  </p>
                  <ul className="mt-2 space-y-2 text-sm text-slate-200">
                    {blueprint.triggers.map((trigger) => (
                      <li
                        key={trigger}
                        className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2"
                      >
                        {trigger}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                    Core actions
                  </p>
                  <ul className="mt-2 space-y-2 text-sm text-slate-200">
                    {blueprint.actions.map((action) => (
                      <li
                        key={action}
                        className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2"
                      >
                        {action}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
                <span className="rounded-full bg-white/[0.05] px-3 py-1 uppercase tracking-[0.2em]">
                  Owner · {blueprint.owner}
                </span>
                <button className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs uppercase tracking-[0.25em] text-slate-200 transition hover:border-emerald-400/40 hover:text-white">
                  View run history
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
