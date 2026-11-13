import { educationEntries } from './education'
import { experienceEntries } from './experience'
import { projectEntries } from './projects'
import { technicalSkillsCards } from './skills'

export const profileTabs = [
  { id: 'overview', label: 'Overview', path: '/', active: true },
  { id: 'skills', label: 'Skills', path: '/skills', count: technicalSkillsCards.length },
  { id: 'projects', label: 'Projects', path: '/projects', count: projectEntries.length },
  { id: 'education', label: 'Education', path: '/education', count: educationEntries.length },
  { id: 'experience', label: 'Experience', path: '/experience', count: experienceEntries.length },
]
