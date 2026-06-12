import { siteConfig } from "@/lib/site";

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-4xl px-6 pb-16 pt-24">
      <p className="mb-3 text-sm font-medium uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
        {siteConfig.title} · {siteConfig.location}
      </p>
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
        {siteConfig.name}
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-300">
        {siteConfig.pitch}
      </p>
      <div className="mt-8 flex flex-wrap items-center gap-4 text-sm">
        <a
          href={siteConfig.links.resume}
          download
          className="rounded-lg bg-zinc-900 px-4 py-2 font-medium text-white transition-opacity hover:opacity-85 dark:bg-zinc-100 dark:text-zinc-900"
        >
          Download resume
        </a>
        <a
          href={siteConfig.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border border-zinc-300 px-4 py-2 font-medium transition-colors hover:border-zinc-500 dark:border-zinc-700 dark:hover:border-zinc-500"
        >
          GitHub
        </a>
        <a
          href={siteConfig.links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border border-zinc-300 px-4 py-2 font-medium transition-colors hover:border-zinc-500 dark:border-zinc-700 dark:hover:border-zinc-500"
        >
          LinkedIn
        </a>
        <a
          href={`mailto:${siteConfig.email}`}
          className="font-medium text-zinc-600 underline-offset-4 hover:underline dark:text-zinc-300"
        >
          {siteConfig.email}
        </a>
      </div>
    </section>
  );
}
