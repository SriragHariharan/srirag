import { educationEntries } from '../data/education'

export function EducationPanel() {
  const openExternal = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="mb-6 rounded-md border border-border bg-canvas-inset p-4 sm:p-6">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-fg">Education</h2>
        <p className="mt-1 text-sm text-fg-muted">
          Academic background, certifications, and standout milestones.
        </p>
      </div>

      <div className="space-y-4">
        {educationEntries.map((entry) => (
          <article
            key={entry.id}
            className="rounded-md border border-border bg-canvas p-4 transition-colors hover:bg-card-hover"
          >
            <p className="text-xs font-medium uppercase tracking-wide text-fg-muted">{entry.period}</p>
            <h3 className="mt-1 text-lg font-semibold text-fg">{entry.program}</h3>
            <p className="mt-1 text-sm text-fg-muted">{entry.institute}</p>

            {(entry.actions.length > 0 || entry.mediaLinks.length > 0) && (
              <div className="mt-3 flex flex-wrap gap-2">
                {entry.actions.map((action) => (
                  <button
                    key={action.label}
                    type="button"
                    onClick={() => openExternal(action.href)}
                    className="rounded-md border border-btn-border bg-btn-bg px-2.5 py-1 text-xs font-medium text-fg hover:bg-btn-hover"
                    aria-label={`Open ${action.label}`}
                  >
                    {action.label}
                  </button>
                ))}
                {entry.mediaLinks.map((media) => (
                  <button
                    key={media.label}
                    type="button"
                    onClick={() => openExternal(media.href)}
                    className="rounded-md border border-btn-border bg-btn-bg px-2.5 py-1 text-xs font-medium text-fg hover:bg-btn-hover"
                    aria-label={`Open ${media.label}`}
                  >
                    {media.label}
                  </button>
                ))}
              </div>
            )}

            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-fg-muted">
              {entry.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
