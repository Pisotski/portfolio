# Engineering conventions

Personal portfolio site. The build is part of the showcase: test-driven, CI-gated, built with an agentic-engineering workflow.

## Conventions

- **Content is data.** Edit `lib/projects.ts` and `lib/site.ts`; keep component JSX presentational.
- **Server components by default.** Client islands only where interaction requires them.
- **TDD.** Write or extend a Vitest test with each change.
- **Gates (run before every push; CI enforces them):** `npm run lint && npm run typecheck && npm test && npm run build`.
- **Git.** Conventional commits, small PRs. Push to `main` = production deploy; PR = preview deploy.

## Skills

Workflow skills live in `.claude/skills/` (next-conventions, tdd-flow, add-project, case-study, ship-check) — loaded on demand.

> Personal working notes and roadmap are in `CLAUDE.local.md` (gitignored).
