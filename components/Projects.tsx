import { projects } from "@/lib/projects";
import { ProjectCard } from "@/components/ProjectCard";

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-4xl px-6 py-16">
      <h2 className="text-2xl font-bold tracking-tight">Projects</h2>
      <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
        Selected work — production AI systems, hackathon wins, and performance
        deep dives.
      </p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
