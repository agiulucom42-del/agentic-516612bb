import { clsx } from "clsx";

const variants = {
  ready: "border-emerald-400/70 text-emerald-300 bg-emerald-400/10",
  warning: "border-amber-400/70 text-amber-200 bg-amber-400/10",
  offline: "border-rose-400/70 text-rose-200 bg-rose-500/5",
  default: "border-white/20 text-slate-300 bg-white/[0.02]",
} as const;

type StatusBadgeProps = {
  label: string;
  tone?: keyof typeof variants;
};

export function StatusBadge({ label, tone = "default" }: StatusBadgeProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-[0.2em]",
        variants[tone]
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {label}
    </span>
  );
}
