import { NextResponse } from "next/server";

const agents = [
  { name: "Code Custodian", focus: "repos" },
  { name: "Dealflow Agent", focus: "clients" },
  { name: "Ops Mesh", focus: "infrastructure" },
  { name: "Narrative Model", focus: "comms" },
];

export async function POST(request: Request) {
  const { command } = await request.json();

  if (!command || typeof command !== "string") {
    return NextResponse.json(
      { error: "Command must be a non-empty string." },
      { status: 400 }
    );
  }

  const id = `uplink-${Date.now().toString(16)}`;
  const summary =
    "Directive received. Generated execution shards across engineering, ops, finance, and comms surfaces.";

  const tasks = agents.map((agent, index) => ({
    title: `Sub-task ${index + 1} · ${agent.focus}`,
    owner: agent.name,
    status: index === 0 ? "running" : index === agents.length - 1 ? "queued" : "scheduled",
  }));

  return NextResponse.json({
    id,
    overview: `${summary} Intent: ${command.slice(0, 240)}`,
    tasks,
  });
}
