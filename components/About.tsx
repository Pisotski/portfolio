import { siteConfig } from "@/lib/site";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-4xl px-6 py-16">
      <h2 className="text-2xl font-bold tracking-tight">About</h2>
      <p className="mt-6 max-w-2xl leading-relaxed text-zinc-600 dark:text-zinc-300">
        {siteConfig.about}
      </p>
      <h3 className="mt-10 text-sm font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
        Education
      </h3>
      <ul className="mt-4 space-y-3">
        {siteConfig.education.map((entry) => (
          <li
            key={entry.school}
            className="flex flex-wrap items-baseline justify-between gap-2 border-b border-zinc-200 pb-3 text-sm dark:border-zinc-800"
          >
            <span>
              <span className="font-medium">{entry.school}</span>
              <span className="text-zinc-500 dark:text-zinc-400">
                {" "}
                — {entry.program}
              </span>
            </span>
            <span className="text-zinc-500 dark:text-zinc-400">
              {entry.year}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
