import { Connector } from "@/lib/data";
import { clsx } from "clsx";
import { ArrowUpRight, RefreshCcw } from "lucide-react";

type ConnectorsTableProps = {
  items: Connector[];
};

const statusStyles: Record<Connector["status"], string> = {
  online: "text-emerald-300 bg-emerald-400/10 border-emerald-400/40",
  degraded: "text-amber-200 bg-amber-400/10 border-amber-400/40",
  offline: "text-rose-200 bg-rose-500/10 border-rose-500/40",
};

const categoryLabels: Record<Connector["category"], string> = {
  code: "Code",
  deploy: "Deploy",
  infra: "Infrastructure",
  comms: "Communication",
  data: "Data",
};

export function ConnectorsTable({ items }: ConnectorsTableProps) {
  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
      <div className="flex items-center justify-between border-b border-white/5 px-6 py-4">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-emerald-200/70">
            Connectors
          </p>
          <p className="mt-1 text-sm text-slate-300">
            Credential health and last sync signals
          </p>
        </div>
        <button className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-200 transition hover:border-emerald-400/40 hover:text-white">
          <RefreshCcw className="h-4 w-4" />
          Rescan
        </button>
      </div>

      <ul className="divide-y divide-white/5">
        {items.map((connector) => (
          <li key={connector.id} className="grid grid-cols-[1.5fr,1fr,1fr,1fr,auto] items-center gap-6 px-6 py-5 text-sm text-slate-200 max-md:grid-cols-1 max-md:gap-3">
            <div>
              <p className="font-semibold text-white">{connector.name}</p>
              <p className="text-xs text-slate-400">ID · {connector.id}</p>
            </div>

            <div className="max-md:flex max-md:flex-wrap max-md:gap-3">
              <span className="inline-flex rounded-full border px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-300 max-md:mr-2">
                {categoryLabels[connector.category]}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span
                className={clsx(
                  "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-[0.2em]",
                  statusStyles[connector.status]
                )}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-current" />
                {connector.status}
              </span>
            </div>

            <div className="text-xs text-slate-400">
              Last sync
              <p className="text-sm font-medium text-white">
                {connector.lastSync}
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-400 max-md:pt-2">
              <span className="hidden text-xs uppercase tracking-[0.2em] text-slate-500 md:inline">
                Scopes
              </span>
              <div className="flex flex-wrap items-center gap-2">
                {connector.scopes.map((scope) => (
                  <span
                    key={scope}
                    className="rounded-full bg-white/[0.06] px-3 py-1 text-[11px] font-medium text-slate-200"
                  >
                    {scope}
                  </span>
                ))}
              </div>
              <button className="ml-2 inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-300 transition hover:border-emerald-400/40 hover:text-white">
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
