import { technicalSkillsCards } from '../data/skills'

export function SkillsCardsPanel() {
  return (
    <section className="mb-6 rounded-md border border-border bg-canvas-inset p-4 sm:p-6">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-fg">Technical Skills</h2>
        <p className="mt-1 text-sm text-fg-muted">
          A categorized snapshot of technologies I use regularly.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {technicalSkillsCards.map((category) => (
          <article
            key={category.id}
            className="rounded-md border border-border bg-canvas p-4 transition-colors hover:bg-card-hover"
          >
            <h3 className="mb-3 text-sm font-semibold text-fg">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.items.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-border bg-canvas-inset px-2.5 py-1 text-xs font-medium text-fg-muted"
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
