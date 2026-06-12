import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-zinc-200 dark:border-zinc-800"
    >
      <div className="mx-auto max-w-4xl px-6 py-12">
        <h2 className="text-xl font-semibold tracking-tight">Get in touch</h2>
        <p className="mt-2 max-w-xl text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
          Open to software engineering roles focused on full-stack and AI/LLM
          product work. The fastest way to reach me is email.
        </p>
        <div className="mt-6 flex flex-wrap gap-6 text-sm font-medium">
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-emerald-600 underline-offset-4 hover:underline dark:text-emerald-400"
          >
            {siteConfig.email}
          </a>
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-600 underline-offset-4 hover:underline dark:text-zinc-300"
          >
            GitHub
          </a>
          <a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-600 underline-offset-4 hover:underline dark:text-zinc-300"
          >
            LinkedIn
          </a>
        </div>
        <p className="mt-10 text-xs text-zinc-400 dark:text-zinc-500">
          © {new Date().getFullYear()} {siteConfig.name}. Built with Next.js
          and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
