import { useState, useEffect } from 'react'
import { Route, Switch } from 'wouter'
import { profile } from './data/profileData'
import { GitHubHeader } from './components/GitHubHeader'
import { ProfileLayout } from './components/ProfileLayout'
import { ProfileSidebar } from './components/ProfileSidebar'
import { ProfileTabs } from './components/ProfileTabs'
import { ProfileReadme } from './components/ProfileReadme'
import { SkillsCardsPanel } from './components/SkillsCardsPanel'
import { EducationPanel } from './components/EducationPanel'
import { ProjectsPanel } from './components/ProjectsPanel'
import { ExperiencePanel } from './components/ExperiencePanel'

const THEME_KEY = 'theme'

function getInitialTheme() {
  if (typeof window === 'undefined') return 'dark'
  const stored = localStorage.getItem(THEME_KEY)
  if (stored === 'dark' || stored === 'light') return stored
  return 'dark'
}

function App() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', theme === 'dark')
    localStorage.setItem(THEME_KEY, theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'))
  }

  return (
    <div className="min-h-screen bg-page text-fg">
      <GitHubHeader theme={theme} onToggleTheme={toggleTheme} />
      <ProfileLayout sidebar={<ProfileSidebar profile={profile} />}>
        <ProfileTabs />
        <Switch>
          <Route path="/">
            <ProfileReadme profile={profile} />
          </Route>
          <Route path="/skills">
            <SkillsCardsPanel />
          </Route>
          <Route path="/projects">
            <ProjectsPanel />
          </Route>
          <Route path="/education">
            <EducationPanel />
          </Route>
          <Route path="/experience">
            <ExperiencePanel />
          </Route>
        </Switch>
      </ProfileLayout>
    </div>
  )
}

export default App
