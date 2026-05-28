import { MapPin } from 'lucide-react'

export function ProfileSidebar({ profile }) {
  const { name, username, avatarUrl, tagline, location, followers, following } = profile

  return (
    <div className="lg:sticky lg:top-8">
      <div className="flex flex-col">
        <div className="mb-4 flex items-start gap-4 lg:flex-col lg:items-start lg:gap-0">
          <img
            src={avatarUrl}
            alt={`@${username}`}
            className="h-[64px] w-[64px] shrink-0 rounded-full border border-border bg-canvas object-cover ring-2 ring-page lg:mb-4 lg:h-[296px] lg:w-[296px] lg:ring-4"
          />

          <div className="min-w-0 flex-1 lg:w-full">
            <h1 className="text-xl font-semibold leading-tight text-fg lg:text-[26px]">
              {name}
            </h1>
            <p className="text-base font-light text-fg-muted lg:mb-4 lg:text-xl">@{username}</p>
          </div>
        </div>

        <button
          type="button"
          className="mb-4 w-full rounded-md border border-btn-border bg-btn-bg px-4 py-[5px] text-sm font-medium text-fg shadow-sm hover:bg-btn-hover"
        >
          Follow
        </button>

        <p className="mb-4 text-sm text-fg">{tagline}</p>

        <div className="mb-3 flex items-center gap-1 text-sm">
          <span>
            <strong className="font-semibold text-fg">{followers}</strong>{' '}
            <span className="text-fg-muted">followers</span>
          </span>
          <span className="text-fg-muted"> · </span>
          <span>
            <strong className="font-semibold text-fg">{following}</strong>{' '}
            <span className="text-fg-muted">following</span>
          </span>
        </div>

        <div className="mb-6 flex items-center gap-1.5 text-sm text-fg-muted">
          <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
          <span>{location}</span>
        </div>

      </div>
    </div>
  )
}
