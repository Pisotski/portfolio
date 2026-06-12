import type { Project } from "@/lib/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold tracking-tight">
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
            {project.role}
          </p>
        </div>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 text-sm font-medium text-emerald-600 underline-offset-4 hover:underline dark:text-emerald-400"
        >
          GitHub ↗
        </a>
      </div>
      {project.highlight && (
        <p className="mt-3 inline-flex w-fit items-center rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-800 dark:bg-amber-950 dark:text-amber-300">
          {project.highlight}
        </p>
      )}
      <ul className="mt-4 flex-1 space-y-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
        {project.bullets.map((bullet) => (
          <li key={bullet} className="flex gap-2">
            <span aria-hidden className="mt-1 text-emerald-600 dark:text-emerald-400">
              ▹
            </span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
      <ul className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((tag) => (
          <li
            key={tag}
            className="rounded-md bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300"
          >
            {tag}
          </li>
        ))}
      </ul>
    </article>
  );
}
