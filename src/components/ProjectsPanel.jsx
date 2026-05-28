import { projectEntries, moreProjects } from '../data/projects'

export function ProjectsPanel() {
  const openExternal = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="mb-6 rounded-md border border-border bg-canvas-inset p-4 sm:p-6">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-fg">Projects</h2>
        <p className="mt-1 text-sm text-fg-muted">
          Featured projects from my resume, with architecture and technology highlights.
        </p>
      </div>

      <div className="space-y-4">
        {projectEntries.map((project) => (
          <article
            key={project.id}
            className="rounded-md border border-border bg-canvas p-4 transition-colors hover:bg-card-hover"
          >
            <h3 className="text-lg font-semibold text-fg">{project.title}</h3>

            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-fg-muted">
              {project.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((item) => (
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

        <article className="rounded-md border border-border bg-canvas p-4 transition-colors hover:bg-card-hover">
          <h3 className="text-base font-semibold text-fg">More projects</h3>
          <p className="mt-1 text-sm text-fg-muted">
            Explore additional projects and repositories on my GitHub profile.
          </p>
          <button
            type="button"
            onClick={() => openExternal(moreProjects.href)}
            className="cursor-pointer mt-3 rounded-md border border-btn-border bg-btn-bg px-3 py-1.5 text-sm font-medium text-fg hover:bg-btn-hover"
            aria-label="Open more projects on GitHub"
          >
            {moreProjects.label}
          </button>
        </article>
      </div>
    </section>
  )
}
