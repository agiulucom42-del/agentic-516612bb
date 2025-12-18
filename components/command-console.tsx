"use client";

import { useState, useTransition } from "react";
import { motion } from "framer-motion";
import { Loader2, Send, Sparkles } from "lucide-react";
import toast from "react-hot-toast";

type ConsoleResponse = {
  id: string;
  overview: string;
  tasks: { title: string; owner: string; status: string }[];
};

export function CommandConsole() {
  const [command, setCommand] = useState("");
  const [history, setHistory] = useState<ConsoleResponse[]>([]);
  const [isPending, startTransition] = useTransition();

  const submitCommand = () => {
    if (!command.trim()) return;

    startTransition(async () => {
      try {
        const res = await fetch("/api/console", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ command }),
        });

        if (!res.ok) {
          throw new Error("Failed to process command");
        }

        const data = (await res.json()) as ConsoleResponse;
        setHistory((prev) => [data, ...prev]);
        setCommand("");
      } catch (error) {
        console.error(error);
        toast.error("Command processing failed");
      }
    });
  };

  return (
    <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-emerald-200/70">
            Directive uplink
          </p>
          <h2 className="text-lg font-semibold text-white">
            Issue a natural language command
          </h2>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-slate-300">
          <Sparkles className="h-4 w-4 text-emerald-300" />
          Persona mesh ready
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-2">
        <div className="relative">
          <textarea
            value={command}
            onChange={(event) => setCommand(event.target.value)}
            placeholder="Example: audit all active GitHub projects, ensure deploy pipelines are healthy, prepare weekly client status packets…"
            rows={3}
            className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition focus:border-emerald-400/60 focus:ring-2 focus:ring-emerald-500/30"
          />
          <button
            onClick={submitCommand}
            className="absolute bottom-3 right-3 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-500 px-5 py-2 text-sm font-semibold text-slate-950 transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
            disabled={isPending}
          >
            {isPending ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Send className="h-4 w-4" />
            )}
            Execute
          </button>
        </div>
        <p className="text-xs text-slate-400">
          Commands orchestrate automations across repos, infrastructure, social
          presence, and finance rails.
        </p>
      </div>

      {history.length > 0 ? (
        <div className="mt-6 space-y-4">
          {history.map((entry) => (
            <motion.article
              key={entry.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-emerald-200/70">
                {entry.id}
              </p>
              <p className="mt-2 text-sm text-slate-200">{entry.overview}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {entry.tasks.map((task) => (
                  <span
                    key={task.title}
                    className="rounded-full bg-white/[0.06] px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-slate-300"
                  >
                    {task.owner} · {task.title} ({task.status})
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      ) : null}
    </section>
  );
}
