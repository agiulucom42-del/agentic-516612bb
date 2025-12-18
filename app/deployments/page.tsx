import { StatusBadge } from "@/components/status-badge";
import { deploymentHistory } from "@/lib/data";
import { clsx } from "clsx";

const environmentTone = {
  production: "text-emerald-200 bg-emerald-500/10 border-emerald-400/50",
  staging: "text-blue-200 bg-blue-500/10 border-blue-400/50",
  preview: "text-slate-200 bg-white/[0.05] border-white/20",
} as const;

const statusTone = {
  success: "text-emerald-200 bg-emerald-500/10",
  running: "text-blue-200 bg-blue-500/10",
  failed: "text-rose-200 bg-rose-500/10",
} as const;

export default function DeploymentsPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <StatusBadge label="Release pipeline" tone="ready" />
          <h2 className="mt-4 text-2xl font-semibold text-white">
            Deployments across all surfaces
          </h2>
          <p className="mt-2 max-w-3xl text-sm text-slate-300">
            Track automated releases, environment health, and any incidents requiring manual
            attention. Production deploys auto-gate on guardrails.
          </p>
        </div>
        <button className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-2 text-xs uppercase tracking-[0.25em] text-slate-200 transition hover:border-emerald-400/40 hover:text-white">
          Trigger deploy
        </button>
      </div>

      <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
        <table className="w-full text-sm text-slate-200">
          <thead className="border-b border-white/10 text-xs uppercase tracking-[0.2em] text-slate-400">
            <tr className="text-left">
              <th className="px-6 py-4 font-medium">Release</th>
              <th className="px-6 py-4 font-medium">Environment</th>
              <th className="px-6 py-4 font-medium">Status</th>
              <th className="px-6 py-4 font-medium">Author</th>
              <th className="px-6 py-4 font-medium">Timestamp</th>
              <th className="px-6 py-4 font-medium">Summary</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10">
            {deploymentHistory.map((release) => (
              <tr key={release.id} className="align-top">
                <td className="px-6 py-5">
                  <div className="font-semibold text-white">{release.project}</div>
                  <div className="text-xs text-slate-400">#{release.id}</div>
                </td>
                <td className="px-6 py-5">
                  <span
                    className={clsx(
                      "inline-flex rounded-full border px-3 py-1 text-xs uppercase tracking-[0.2em]",
                      environmentTone[release.environment]
                    )}
                  >
                    {release.environment}
                  </span>
                </td>
                <td className="px-6 py-5">
                  <span
                    className={clsx(
                      "inline-flex rounded-full px-3 py-1 text-xs uppercase tracking-[0.2em]",
                      statusTone[release.status]
                    )}
                  >
                    {release.status}
                  </span>
                </td>
                <td className="px-6 py-5 text-xs uppercase tracking-[0.2em] text-slate-400">
                  {release.author}
                </td>
                <td className="px-6 py-5 text-xs text-slate-400">
                  {release.timestamp}
                </td>
                <td className="px-6 py-5 text-sm text-slate-300">
                  {release.summary}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
