import { IntelligenceThread } from "@/lib/data";
import { BadgeCheck, PauseCircle, PlayCircle } from "lucide-react";
import { clsx } from "clsx";

type IntelligenceThreadsProps = {
  threads: IntelligenceThread[];
};

const priorityTone: Record<IntelligenceThread["priority"], string> = {
  critical: "text-rose-200 border-rose-400/50 bg-rose-500/10",
  high: "text-amber-200 border-amber-400/60 bg-amber-500/10",
  medium: "text-emerald-200 border-emerald-400/60 bg-emerald-500/10",
};

const statusIcon: Record<IntelligenceThread["status"], React.ElementType> = {
  running: PlayCircle,
  queued: BadgeCheck,
  paused: PauseCircle,
};

export function IntelligenceThreads({ threads }: IntelligenceThreadsProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03]">
      <div className="flex items-center justify-between border-b border-white/5 px-6 py-5">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-emerald-200/70">
            Mission queue
          </p>
          <p className="text-sm text-slate-300">
            Active intelligence loops mirroring operator intent.
          </p>
        </div>
        <button className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs uppercase tracking-[0.25em] text-slate-200 transition hover:border-emerald-400/50 hover:text-white">
          Spawn new
        </button>
      </div>

      <ul className="divide-y divide-white/5">
        {threads.map((thread) => {
          const Icon = statusIcon[thread.status];
          return (
            <li key={thread.id} className="grid grid-cols-[1.5fr,auto] gap-6 px-6 py-5 max-lg:grid-cols-1">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-white/[0.06] px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-slate-400">
                    #{thread.id}
                  </span>
                  <span
                    className={clsx(
                      "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-[0.2em]",
                      priorityTone[thread.priority]
                    )}
                  >
                    {thread.priority}
                  </span>
                  <span className="rounded-full bg-white/[0.05] px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-slate-300">
                    {thread.owner}
                  </span>
                </div>
                <h3 className="mt-3 text-lg font-semibold text-white">
                  {thread.title}
                </h3>
                <p className="mt-2 text-sm text-slate-300">{thread.context}</p>
              </div>
              <div className="flex flex-col items-end justify-between max-lg:flex-row max-lg:items-center max-lg:gap-4">
                <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-2 text-xs uppercase tracking-[0.2em] text-slate-300">
                  <Icon className="h-4 w-4 text-emerald-300" />
                  {thread.status}
                </div>
                <p className="text-xs text-slate-400">
                  ETA{" "}
                  <span className="font-semibold text-white">{thread.eta}</span>
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
