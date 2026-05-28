import { Sun, Moon, Plus, Bell } from 'lucide-react'
import { Link } from 'wouter'

function GitHubMarkIcon({ className }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M8 0a8 8 0 0 0-2.53 15.59c.4.07.55-.17.55-.38v-1.49c-2.24.49-2.71-.95-2.71-.95-.37-.91-.9-1.15-.9-1.15-.74-.5.06-.49.06-.49.82.06 1.25.84 1.25.84.73 1.24 1.9.88 2.36.67.07-.52.29-.88.52-1.09-1.79-.2-3.68-.89-3.68-3.96 0-.88.31-1.59.83-2.16-.08-.2-.36-1.02.08-2.12 0 0 .67-.22 2.2.82a7.65 7.65 0 0 1 4 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.52.57.83 1.28.83 2.16 0 3.08-1.9 3.76-3.7 3.96.29.25.55.74.55 1.49v2.21c0 .21.14.46.55.38A8 8 0 0 0 8 0Z" />
    </svg>
  )
}

export function GitHubHeader({ theme, onToggleTheme }) {
  const isDark = theme === 'dark'

  return (
    <header className="sticky top-0 z-50 border-b border-header-border bg-header-bg text-header-text">
      <div className="mx-auto flex h-16 max-w-[1280px] items-center gap-3 px-4">
        <Link
          to="/"
          className="flex shrink-0 items-center gap-2 text-header-text hover:text-white/90"
          aria-label="Home"
        >
          <GitHubMarkIcon className="h-8 w-8" />
          <span className="text-sm font-semibold">SriragHariharan</span>
        </Link>

        <div className="ml-auto flex shrink-0 items-center gap-2">
          <button
            type="button"
            className="flex h-8 w-8 items-center justify-center rounded-md border border-header-control-border hover:bg-header-control-hover"
            aria-label="Create new"
          >
            <Plus className="h-4 w-4" aria-hidden="true" />
          </button>
          <button
            type="button"
            className="flex h-8 w-8 items-center justify-center rounded-md border border-header-control-border hover:bg-header-control-hover"
            aria-label="Notifications"
          >
            <Bell className="h-4 w-4" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={onToggleTheme}
            className="flex h-8 w-8 items-center justify-center rounded-md border border-header-control-border hover:bg-header-control-hover"
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? (
              <Sun className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Moon className="h-4 w-4" aria-hidden="true" />
            )}
          </button>
          <img
            src="https://github.com/SriragHariharan.png?size=40"
            alt="Profile avatar"
            className="h-7 w-7 rounded-full border border-header-control-border object-cover"
          />
        </div>
      </div>
    </header>
  )
}
