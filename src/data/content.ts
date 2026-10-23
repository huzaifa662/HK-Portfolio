export const profile = {
  name: 'Huzaifa',
  tagline: 'Roblox Scripting Services',
  discord: 'h._.k._.321',
  xUrl: 'https://x.com/GaMiNgExPeRtYt1',
  email: 'contact@luaulabs.dev',
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Work', href: '#work' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export const specialties = [
  'Combat Systems',
  'Frameworks',
  'Data Management',
  'Custom UI Animations',
]

export type Project = {
  title: string
  description: string
  tags: string[]
  gradient: string
  icon: string
  demoUrl: string
  videoUrl: string
}

export const projects: Project[] = [
  {
    title: 'Combat System',
    description:
      'Frame data, hitbox detection, and combo logic with anti-exploit validation and network ownership handled server-side.',
    tags: ['#Luau', '#Knit', '#Hitbox'],
    gradient: 'from-violet-600/40 via-fuchsia-600/30 to-transparent',
    icon: '⚔️',
    demoUrl: 'https://www.roblox.com/games/PLACE_ID_1',
    videoUrl: './videos/combat-system.mp4',
  },
  {
    title: 'Placement System',
    description:
      'Smooth object placement, grid snapping, and rotation controls for building systems — reliable across devices.',
    tags: ['#Placement', '#Build', '#Input'],
    gradient: 'from-cyan-500/40 via-blue-600/30 to-transparent',
    icon: '🧱',
    demoUrl: 'https://www.roblox.com/games/PLACE_ID_2',
    videoUrl: './videos/placement-system.mp4',
  },
  {
    title: 'Fully Working Tycoon',
    description:
      'Complete tycoon setup — claiming, purchases, conveyor pipelines, and cash economy running end to end.',
    tags: ['#Tycoon', '#Economy'],
    gradient: 'from-sky-500/40 via-indigo-600/30 to-transparent',
    icon: '🏭',
    demoUrl: 'https://www.roblox.com/games/PLACE_ID_3',
    videoUrl: './videos/fully-working-tycoon.mp4',
  },
  {
    title: 'Rebirth with Multiplier System',
    description:
      'Rebirth progression with stacking multipliers, VIP and boost bonuses, and synced leaderboard stats.',
    tags: ['#Rebirth', '#Progression', '#Multiplier'],
    gradient: 'from-purple-600/40 via-pink-600/30 to-transparent',
    icon: '🔁',
    demoUrl: 'https://www.roblox.com/games/PLACE_ID_4',
    videoUrl: './videos/rebirth-multiplier.mp4',
  },
  {
    title: 'Matchmaking System',
    description:
      'Skill-based matchmaking with party support, lobby management, queue states, and cross-server teleportation — handles player pools efficiently with minimal wait times.',
    tags: ['#Matchmaking', '#Lobby', '#Teleport', '#Knit'],
    gradient: 'from-indigo-500/40 via-purple-600/30 to-transparent',
    icon: '🔍',
    demoUrl: 'https://www.roblox.com/games/PLACE_ID_7',
    videoUrl: './videos/MatchMaking%20%20-%20Roblox%20Studio%202026-10-24%2000-09-07-compressed.mp4',
  },
  {
    title: 'Save & Data System',
    description:
      'ProfileService-driven saves with inventory management, session locking, autosave, and rollback protection — zero data loss under load.',
    tags: ['#ProfileService', '#DataStore', '#Inventory'],
    gradient: 'from-emerald-500/40 via-teal-600/30 to-transparent',
    icon: '💾',
    demoUrl: 'https://www.roblox.com/games/PLACE_ID_8',
    videoUrl: './videos/save-data-system.mp4',
  },
]

export type Review = {
  handle: string
  quote: string
  project: string
}

export const reviews: Review[] = [
  {
    handle: '@matt_9086',
    quote:
      'Delivered a full combat framework in under a week. The code was immaculate — every system documented, zero lag in 40-player fights. Best hire I have made on DevForum.',
    project: 'Combat System',
  },
  {
    handle: '@neonshift',
    quote:
      'My save system was a nightmare before this. Session locking, inventory, the works — and they answered every question within hours. Communication was perfect.',
    project: 'Save & Data System',
  },
  {
    handle: '@pixelwyre',
    quote:
      'Hands down the cleanest Luau I have ever received. Optimized to the point of ridiculousness — frame rate actually improved after they refactored my UI.',
    project: 'Custom UI & Animations',
  },
]

export const stats = [
  { value: 4, suffix: '+', label: 'Years Scripting' },
  { value: 70, suffix: '+', label: 'Projects Shipped' },
  { value: 50, suffix: '+', label: 'Happy Clients' },
]

export const techStack = [
  'Luau',
  'TypeScript',
  'roblox-ts',
  'Rojo',
  'Wally',
  'Knit',
  'Matter (ECS)',
  'ProfileService',
  'Fusion',
  'Promise',
  'Janitor',
]

export const requirements = [
  'Brief project overview',
  'Scope & key features',
  'Budget (USD or Robux)',
  'Timeline / Deadline',
]
