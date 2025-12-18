import { GuardrailBoard } from "@/components/guardrail-board";
import { StatusBadge } from "@/components/status-badge";
import { guardrails } from "@/lib/data";

export default function GuardrailsPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <StatusBadge label="Safety & policy" tone="ready" />
          <h2 className="mt-4 text-2xl font-semibold text-white">
            Guardrails, escalation plans, and manual overrides
          </h2>
          <p className="mt-2 max-w-3xl text-sm text-slate-300">
            Configure what your digital avatar must never do without explicit approval.
            Apply precision policies across finance, infrastructure, and communication surfaces.
          </p>
        </div>
        <button className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-2 text-xs uppercase tracking-[0.25em] text-slate-200 transition hover:border-emerald-400/40 hover:text-white">
          New guardrail
        </button>
      </div>

      <GuardrailBoard items={guardrails} />
    </div>
  );
}
