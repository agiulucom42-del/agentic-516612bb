import { ConnectorsTable } from "@/components/connectors-table";
import { StatusBadge } from "@/components/status-badge";
import { connectors } from "@/lib/data";

export default function ConnectorsPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <StatusBadge label="Integration fabric" tone="ready" />
          <h2 className="mt-4 text-2xl font-semibold text-white">
            Identity, credentials & service mesh
          </h2>
          <p className="mt-2 max-w-3xl text-sm text-slate-300">
            Manage the full stack of services your digital twin touches — repos,
            deployment surfaces, compute grids, communication platforms, and financial rails.
          </p>
        </div>
        <button className="rounded-full border border-emerald-400/40 bg-emerald-500/10 px-5 py-2 text-xs uppercase tracking-[0.25em] text-emerald-200 transition hover:bg-emerald-500/20">
          Add connector
        </button>
      </div>

      <ConnectorsTable items={connectors} />
    </div>
  );
}
