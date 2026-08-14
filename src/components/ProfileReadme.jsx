import { Mail, Link, Globe, FileText, GitBranch } from 'lucide-react'

const linkIcons = {
  gmail: Mail,
  linkedin: Link,
  portfolio: Globe,
  resume: FileText,
  github: GitBranch,
}

export function ProfileReadme({ profile }) {
  const { title, role, links, skills } = profile
  const openExternal = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="mb-6 rounded-md border border-border bg-canvas-inset p-4">
      <article className="prose-github max-w-none">
        <p className="mb-3 text-xs text-fg-muted">SriragHariharan / README.md</p>
        <h1 className="mb-2 border-0 pb-0 text-[32px] font-semibold text-fg">{title}</h1>
        <p className="mb-4 text-base text-fg">{role}</p>

        <div className="mb-4 flex flex-wrap gap-2">
          {links.map((link) => {
            const Icon = linkIcons[link.icon]
            return (
              <button
                key={link.label}
                type="button"
                onClick={() => openExternal(link.href)}
                className="inline-flex cursor-pointer items-center gap-1 rounded-sm border border-black/20 px-2 py-0.5 text-xs font-semibold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: link.bg }}
                aria-label={`Open ${link.label}`}
              >
                {Icon && <Icon className="h-3 w-3" aria-hidden="true" />}
                {link.label}
              </button>
            )
          })}
        </div>

        <hr className="my-4 border-border" />

        <div className="space-y-2 text-sm text-fg">
          {skills.map((skill) => (
            <p key={skill.label}>
              <strong className="font-semibold">{skill.label}</strong>
              {' — '}
              {skill.detail}
            </p>
          ))}
        </div>

        <hr className="my-4 border-border" />
      </article>
    </div>
  )
}
