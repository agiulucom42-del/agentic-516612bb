import { Guardrail } from "@/lib/data";
import { ShieldAlert, ShieldCheck, ShieldHalf } from "lucide-react";

const statusBadge: Record<Guardrail["status"], { label: string; icon: React.ElementType; tone: string }> = {
  enforced: {
    label: "Enforced",
    icon: ShieldCheck,
    tone: "text-emerald-200 bg-emerald-500/10 border-emerald-400/50",
  },
  monitoring: {
    label: "Monitoring",
    icon: ShieldHalf,
    tone: "text-amber-200 bg-amber-500/10 border-amber-400/50",
  },
  draft: {
    label: "Draft",
    icon: ShieldAlert,
    tone: "text-slate-200 bg-white/[0.05] border-white/20",
  },
};

type GuardrailBoardProps = {
  items: Guardrail[];
};

export function GuardrailBoard({ items }: GuardrailBoardProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-emerald-200/70">
            Policy matrix
          </p>
          <h3 className="text-lg font-semibold text-white">
            Safety rails & escalation logic
          </h3>
        </div>
        <button className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs uppercase tracking-[0.2em] text-slate-200 transition hover:border-emerald-400/50 hover:text-white">
          Edit guardrails
        </button>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {items.map((item) => {
          const status = statusBadge[item.status];
          const Icon = status.icon;
          return (
            <div
              key={item.id}
              className="flex h-full flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-white/[0.04] px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-slate-400">
                  #{item.id}
                </span>
                <span
                  className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] ${status.tone}`}
                >
                  <Icon className="h-4 w-4" />
                  {status.label}
                </span>
              </div>
              <p className="text-sm font-semibold text-white">{item.name}</p>
              <p className="text-sm text-slate-400">{item.description}</p>
              <div className="mt-auto">
                <p className="text-xs text-slate-500">Owner</p>
                <p className="text-sm font-medium text-slate-200">
                  {item.owner}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
