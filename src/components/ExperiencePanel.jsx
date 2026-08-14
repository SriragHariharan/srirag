import { experienceEntries } from '../data/experience'

export function ExperiencePanel() {
  return (
    <section className="mb-6 rounded-md border border-border bg-canvas-inset p-4 sm:p-6">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-fg">Experience</h2>
        <p className="mt-1 text-sm text-fg-muted">
          Professional experience, roles, and key contributions.
        </p>
      </div>

      <div className="space-y-4">
        {experienceEntries.map((entry) => (
          <article
            key={entry.id}
            className="rounded-md border border-border bg-canvas p-4 transition-colors hover:bg-card-hover"
          >
            <p className="text-xs font-medium uppercase tracking-wide text-fg-muted">{entry.period}</p>
            <h3 className="mt-1 text-lg font-semibold text-fg">{entry.role}</h3>
            <p className="mt-1 text-sm text-fg-muted">{entry.company}</p>

            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-fg-muted">
              {entry.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>

            <div className="mt-4 flex flex-wrap gap-2">
              {entry.tech.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border bg-canvas-inset px-2.5 py-1 text-xs font-medium text-fg-muted"
                >
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
