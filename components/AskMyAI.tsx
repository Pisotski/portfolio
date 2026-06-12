export function AskMyAI() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <div className="rounded-xl border border-dashed border-zinc-300 p-8 text-center dark:border-zinc-700">
        <h2 className="text-xl font-semibold tracking-tight">
          Ask my AI <span aria-hidden>·</span>{" "}
          <span className="text-emerald-600 dark:text-emerald-400">
            coming soon
          </span>
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
          I build RAG chat systems for a living, so this site will get one too:
          an interactive assistant trained on my projects and experience.
          Until then, the projects above are the best place to start.
        </p>
      </div>
    </section>
  );
}
