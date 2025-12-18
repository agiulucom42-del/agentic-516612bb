import { AutomationRun } from "@/lib/data";
import { clsx } from "clsx";
import { Activity, AlertTriangle, CheckCircle, Clock, Loader2 } from "lucide-react";

type AutomationTimelineProps = {
  runs: AutomationRun[];
};

const statusIcon = {
  success: CheckCircle,
  running: Loader2,
  failed: AlertTriangle,
  scheduled: Clock,
};

const statusStyle: Record<AutomationRun["status"], string> = {
  success: "border-emerald-400/60 bg-emerald-400/10 text-emerald-200",
  running: "border-blue-400/60 bg-blue-400/10 text-blue-200",
  failed: "border-rose-500/50 bg-rose-500/10 text-rose-200",
  scheduled: "border-amber-400/60 bg-amber-400/10 text-amber-200",
};

export function AutomationTimeline({ runs }: AutomationTimelineProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03]">
      <div className="flex items-center gap-2 border-b border-white/5 px-6 py-5">
        <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-200">
          <Activity className="h-5 w-5" />
        </span>
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-emerald-200/70">
            Execution stream
          </p>
          <p className="text-sm text-slate-300">
            The most recent runs across autonomous units.
          </p>
        </div>
      </div>

      <ul className="relative">
        <span className="absolute left-10 top-0 h-full w-px bg-gradient-to-b from-emerald-500/40 via-white/10 to-transparent" />
        {runs.map((run, index) => {
          const Icon = statusIcon[run.status];
          const isLast = index === runs.length - 1;
          return (
            <li
              key={run.id}
              className={clsx(
                "relative flex gap-6 px-6 py-6",
                !isLast && "border-b border-white/5"
              )}
            >
              <div className="relative flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-white/[0.04]">
                <div
                  className={clsx(
                    "flex h-10 w-10 items-center justify-center rounded-2xl border text-sm uppercase tracking-[0.2em]",
                    statusStyle[run.status]
                  )}
                >
                  <Icon className="h-5 w-5" />
                </div>
              </div>

              <div className="flex-1">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-white">
                      {run.name}
                    </p>
                    <p className="text-xs text-slate-400">#{run.id}</p>
                  </div>
                  <span className="rounded-full bg-white/[0.04] px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-300">
                    {run.timestamp}
                  </span>
                </div>
                <p className="mt-3 text-sm text-slate-300">{run.description}</p>
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  {run.signals.map((signal) => (
                    <span
                      key={signal}
                      className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-slate-300"
                    >
                      {signal}
                    </span>
                  ))}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
