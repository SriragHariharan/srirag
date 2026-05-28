import {
  LayoutGrid,
  Wrench,
  FolderGit2,
  GraduationCap,
  BriefcaseBusiness,
} from 'lucide-react'
import { useLocation } from 'wouter'
import { profileTabs } from '../data/profileTabs'

const tabIcons = {
  overview: LayoutGrid,
  skills: Wrench,
  projects: FolderGit2,
  education: GraduationCap,
  experience: BriefcaseBusiness,
}

export function ProfileTabs() {
  const [location, navigate] = useLocation()

  return (
    <nav
      className="mb-4 flex overflow-x-auto border-b border-border"
      aria-label="Profile"
    >
      <ul className="flex min-w-full gap-0">
        {profileTabs.map((tab) => {
          const isRootRoute = tab.path === '/' && location === '/'
          const isPathRoute = tab.path !== '/' && location.startsWith(tab.path)
          const isActive = isRootRoute || isPathRoute
          const Icon = tabIcons[tab.id]

          return (
            <li key={tab.id} className="shrink-0">
              <button
                type="button"
                onClick={() => navigate(tab.path)}
                className={`inline-flex cursor-pointer items-center gap-1.5 border-b-2 px-4 py-3 text-sm font-medium transition-colors ${
                  isActive
                    ? 'border-[#f78166] text-fg'
                    : 'border-transparent text-fg-muted hover:text-fg'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                {Icon && <Icon className="h-3.5 w-3.5" aria-hidden="true" />}
                {tab.label}
                {tab.count !== undefined && (
                  <span
                    className={`ml-1 rounded-full px-2 py-[1px] text-xs font-medium ${
                      isActive ? 'bg-tab-count text-fg' : 'bg-tab-count text-fg-muted'
                    }`}
                  >
                    {tab.count}
                  </span>
                )}
              </button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
