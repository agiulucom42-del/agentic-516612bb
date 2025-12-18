A fully client-facing cockpit for a digital freelance avatar. The interface is built on Next.js App Router with Tailwind CSS and orchestrates every surface the clone touches: automations, connectors, runbooks, deployments, infrastructure, and policy guardrails.

## Features

- Command Console to issue natural-language directives that fan out into execution shards.
- Real-time mission queue, automation timeline, and guardrail board surfaces.
- Detailed views for automation blueprints, connectors, runbooks, deployments, infrastructure, and control-plane settings.
- Responsive, glassmorphism UI suited for Vercel deployment.

## Local Development

```bash
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to access the operator console.

## Production Build

```bash
npm run build
npm run start
```

The project is pre-configured for deployment on Vercel.
