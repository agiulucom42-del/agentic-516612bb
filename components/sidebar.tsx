"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Bot,
  Cable,
  Cloud,
  Command,
  GitBranch,
  LayoutDashboard,
  Settings,
  Shield,
  Workflow,
} from "lucide-react";
import { clsx } from "clsx";

const navigation = [
  { href: "/", label: "Command Center", icon: LayoutDashboard },
  { href: "/automations", label: "Automations", icon: Workflow },
  { href: "/connectors", label: "Integrations", icon: Cable },
  { href: "/operations", label: "Runbooks", icon: Command },
  { href: "/deployments", label: "Deployments", icon: GitBranch },
  { href: "/infrastructure", label: "Infrastructure", icon: Cloud },
  { href: "/guardrails", label: "Guardrails", icon: Shield },
  { href: "/settings", label: "Settings", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden border-r border-white/5 bg-slate-950/90 px-6 pb-6 pt-10 text-slate-200 backdrop-blur lg:flex lg:w-72 lg:flex-col">
      <div className="flex items-center gap-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400/80 to-cyan-500/80 text-slate-950 shadow-lg shadow-emerald-500/40">
          <Bot className="h-5 w-5" />
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
            Avatar OS
          </p>
          <p className="text-lg font-semibold text-white">Operator Console</p>
        </div>
      </div>

      <nav className="mt-12 flex flex-1 flex-col gap-1">
        {navigation.map((item) => {
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);

          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                "group flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition",
                isActive
                  ? "bg-white/[0.07] text-white"
                  : "text-slate-400 hover:bg-white/[0.04] hover:text-white"
              )}
            >
              <Icon
                className={clsx(
                  "h-5 w-5 transition",
                  isActive ? "text-emerald-300" : "text-slate-500 group-hover:text-emerald-300"
                )}
              />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-cyan-500 text-slate-950">
            <Command className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm text-slate-400">Operator Status</p>
            <p className="text-sm font-semibold text-white">Synced · v1.0.0</p>
          </div>
        </div>
        <p className="mt-3 text-xs text-slate-500">
          Autonomous agent network connected. Escalations route to{" "}
          <span className="text-emerald-300">manual override</span>.
        </p>
      </div>
    </aside>
  );
}
