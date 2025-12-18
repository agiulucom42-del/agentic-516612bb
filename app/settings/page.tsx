export default function SettingsPage() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-xs uppercase tracking-[0.25em] text-emerald-200/70">
          Control plane
        </p>
        <h2 className="mt-3 text-2xl font-semibold text-white">Settings</h2>
        <p className="mt-2 max-w-2xl text-sm text-slate-300">
          Configure identity, escalation preferences, and resource guardrails for your digital twin.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
          <h3 className="text-lg font-semibold text-white">Identity & persona</h3>
          <p className="mt-2 text-sm text-slate-300">
            Define how the clone represents you to clients, collaborators, and services.
          </p>
          <form className="mt-4 space-y-4">
            <div>
              <label className="text-xs uppercase tracking-[0.2em] text-slate-400">
                Codename
              </label>
              <input
                className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.05] px-4 py-2 text-sm text-white outline-none focus:border-emerald-400/50 focus:ring-2 focus:ring-emerald-500/20"
                defaultValue="Avatar Core"
                type="text"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.2em] text-slate-400">
                Voice & tone directives
              </label>
              <textarea
                rows={4}
                className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.05] px-4 py-2 text-sm text-white outline-none focus:border-emerald-400/50 focus:ring-2 focus:ring-emerald-500/20"
                defaultValue="Professional, decisive, strategically empathetic. Prioritize clarity and outcome."
              />
            </div>
            <button className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs uppercase tracking-[0.2em] text-slate-200 transition hover:border-emerald-400/40 hover:text-white">
              Save persona
            </button>
          </form>
        </section>

        <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
          <h3 className="text-lg font-semibold text-white">Escalation policy</h3>
          <p className="mt-2 text-sm text-slate-300">
            Decide when the clone should request human confirmation and who to alert.
          </p>
          <form className="mt-4 space-y-4">
            <div>
              <label className="text-xs uppercase tracking-[0.2em] text-slate-400">
                Notify via
              </label>
              <select className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.05] px-4 py-2 text-sm text-white outline-none focus:border-emerald-400/50 focus:ring-2 focus:ring-emerald-500/20">
                <option>Email & SMS</option>
                <option>Only email</option>
                <option>Slack channel</option>
              </select>
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.2em] text-slate-400">
                Escalate on
              </label>
              <div className="mt-3 space-y-2 text-sm text-slate-200">
                {[
                  "Financial transactions above threshold",
                  "Production infrastructure changes",
                  "Public communication & social publishing",
                  "Third-party account provisioning",
                ].map((item) => (
                  <label
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2"
                  >
                    <input type="checkbox" defaultChecked className="accent-emerald-400" />
                    <span>{item}</span>
                  </label>
                ))}
              </div>
            </div>
            <button className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs uppercase tracking-[0.2em] text-slate-200 transition hover:border-emerald-400/40 hover:text-white">
              Save policy
            </button>
          </form>
        </section>
      </div>

      <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
        <h3 className="text-lg font-semibold text-white">
          API & delegated access
        </h3>
        <p className="mt-2 text-sm text-slate-300">
          Manage tokens your digital twin can use when operating independently.
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {[
            { name: "GitHub Operator", scope: "repos, issues, projects", lastRotated: "6 days ago" },
            { name: "Vercel Production", scope: "deploy, env, analytics", lastRotated: "12 days ago" },
            { name: "Google Workspace", scope: "mail, calendar", lastRotated: "3 days ago" },
          ].map((token) => (
            <div
              key={token.name}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm text-slate-200"
            >
              <p className="text-sm font-semibold text-white">{token.name}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-400">
                {token.scope}
              </p>
              <p className="mt-2 text-xs text-slate-400">
                Last rotated ·{" "}
                <span className="font-semibold text-white">
                  {token.lastRotated}
                </span>
              </p>
              <div className="mt-3 flex gap-2">
                <button className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-200 transition hover:border-emerald-400/40 hover:text-white">
                  Rotate
                </button>
                <button className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs uppercase tracking-[0.2em] text-rose-200 transition hover:border-rose-400/40 hover:text-rose-100">
                  Revoke
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
