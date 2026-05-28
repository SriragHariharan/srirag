export function RoutePanel({ title, description }) {
  return (
    <section className="mb-6 rounded-md border border-border bg-canvas-inset p-6">
      <h2 className="mb-2 text-2xl font-semibold text-fg">{title}</h2>
      <p className="text-sm text-fg-muted">{description}</p>
    </section>
  )
}
