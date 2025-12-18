import { StatusBadge } from "@/components/status-badge";
import { infrastructure } from "@/lib/data";
import { clsx } from "clsx";

const statusTone = {
  healthy: "border-emerald-400/50 bg-emerald-500/10 text-emerald-200",
  watch: "border-amber-400/50 bg-amber-500/10 text-amber-200",
  outage: "border-rose-500/50 bg-rose-500/10 text-rose-200",
} as const;

export default function InfrastructurePage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <StatusBadge label="Infrastructure fabric" tone="ready" />
          <h2 className="mt-4 text-2xl font-semibold text-white">
            Compute, storage, and analytics mesh
          </h2>
          <p className="mt-2 max-w-3xl text-sm text-slate-300">
            Real-time visibility of environments your digital twin stewards, with insights to
            surface drifts, incidents, and capacity signals before they escalate.
          </p>
        </div>
        <button className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-2 text-xs uppercase tracking-[0.25em] text-slate-200 transition hover:border-emerald-400/40 hover:text-white">
          Provision resource
        </button>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {infrastructure.map((service) => (
          <article
            key={service.id}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <span className="rounded-full bg-white/[0.05] px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-slate-400">
                  #{service.id}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-white">
                  {service.name}
                </h3>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                  {service.provider}
                </p>
              </div>
              <span
                className={clsx(
                  "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs uppercase tracking-[0.2em]",
                  statusTone[service.status]
                )}
              >
                {service.status}
              </span>
            </div>

            <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-xs uppercase tracking-[0.2em] text-slate-400">
              Footprint · {service.footprint}
            </div>

            <ul className="mt-4 space-y-2 text-sm text-slate-200">
              {service.insights.map((insight) => (
                <li
                  key={insight}
                  className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2"
                >
                  {insight}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}
