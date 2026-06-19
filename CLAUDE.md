# Portfolio site — working notes

Personal portfolio for an AI/LLM full-stack engineer. The build *is* part of the showcase: TDD, CI-gated, agentic-engineering workflow.

## Load on demand (don't inline — read when the task needs it)

- **Roadmap, decisions, day-by-day plan, mistakes-to-avoid:** `../../docs/portfolio-plan.md`
- **Build method (Karpathy agentic flow):** §6a of the plan
- **Owner/identity context:** parent `../../CLAUDE.md` (auto-loaded)
- Conventions skills live in `.claude/skills/` once built (next-conventions, tdd-flow, add-project, case-study, ship-check)

## Always-true repo rules (thin — these stay here)

- Content is data: edit `lib/projects.ts` and `lib/site.ts`, not component JSX.
- TDD: write/extend a Vitest test with each change. Gates: `npm run lint && npm run typecheck && npm test && npm run build`.
- Server components by default; client islands only where interaction needs them.
- Conventional commits, small PRs. Push to `main` = prod deploy; PR = preview.

## Status

- **Day 1 done:** repo + scaffold pushed, Vitest+RTL (13 tests), GitHub Actions CI green, README. Vercel hookup pending (owner).
- **Next (Day 2):** trim `lib/projects.ts` to the focused set (drop AVAX, VanLife, algo-practice), fix TODO links (LinkedIn, Chef Jul repo), Problem→Built→Impact blurbs — all via TDD.
- Open decisions blocking later days: see plan §8.
