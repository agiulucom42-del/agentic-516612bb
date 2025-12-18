import { Bell, Clock, Sparkles, Wifi } from "lucide-react";
import Image from "next/image";

export function Topbar() {
  return (
    <header className="sticky top-0 z-20 flex h-20 items-center justify-between border-b border-white/5 bg-slate-950/80 px-6 backdrop-blur">
      <div>
        <p className="text-xs uppercase tracking-[0.35em] text-emerald-300">
          Autonomous Ops
        </p>
        <h1 className="text-xl font-semibold text-white">Operator cockpit</h1>
      </div>

      <div className="flex items-center gap-6">
        <div className="hidden items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-slate-300 md:flex">
          <Wifi className="h-4 w-4 text-emerald-300" />
          Live mesh
          <div className="flex items-center gap-1 text-emerald-200">
            <Sparkles className="h-4 w-4" />
            Predictive
          </div>
        </div>

        <div className="hidden items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-slate-400 md:flex">
          <Clock className="h-4 w-4 text-emerald-300" />
          Next job in <span className="font-semibold text-white">2m</span>
        </div>

        <button className="relative flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-300 transition hover:text-white">
          <Bell className="h-5 w-5" />
          <span className="absolute right-2 top-2 block h-2 w-2 rounded-full bg-emerald-400" />
        </button>

        <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.02] px-3 py-2">
          <div className="relative h-9 w-9 overflow-hidden rounded-full">
            <Image
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80"
              alt="Operator avatar"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-medium text-white">Avatar Core</p>
            <p className="text-xs text-emerald-300">Authority: unrestricted</p>
          </div>
        </div>
      </div>
    </header>
  );
}
