export const profile = {
  name: 'Huzaifa',
  tagline: 'Roblox Scripting Services',
  discord: 'h._.k._.321',
  xUrl: 'https://x.com/luaulabs',
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
}

export const projects: Project[] = [
  {
    title: 'Combat System',
    description:
      'Frame data, hitbox detection, and combo logic with anti-exploit validation and network ownership handled server-side.',
    tags: ['#Luau', '#Knit', '#Hitbox'],
    gradient: 'from-violet-600/40 via-fuchsia-600/30 to-transparent',
    icon: '⚔️',
  },
  {
    title: 'Save & Data System',
    description:
      'ProfileService-driven saves with inventory management, session locking, autosave, and rollback protection.',
    tags: ['#ProfileService', '#DataStore'],
    gradient: 'from-cyan-500/40 via-blue-600/30 to-transparent',
    icon: '💾',
  },
  {
    title: 'Weather / Environment',
    description:
      'Dynamic lighting cycles, ambient audio, and weather states synced across players without hiccups.',
    tags: ['#Lighting', '#Audio'],
    gradient: 'from-sky-500/40 via-indigo-600/30 to-transparent',
    icon: '🌦️',
  },
  {
    title: 'Custom UI & Animations',
    description:
      'Spring-based animations, custom UI components, and framerate-independent motion for buttery menus.',
    tags: ['#Spring', '#UI', '#Fusion'],
    gradient: 'from-purple-600/40 via-pink-600/30 to-transparent',
    icon: '✨',
  },
  {
    title: 'Admin Panel & Tools',
    description:
      'Permission hierarchy, moderation commands, and an in-game admin panel built for fast iteration.',
    tags: ['#Permissions', '#Tools'],
    gradient: 'from-fuchsia-600/40 via-rose-600/30 to-transparent',
    icon: '🛠️',
  },
  {
    title: 'Emote & Movement Mechanics',
    description:
      'Networked emotes, animation queues, and movement feel passes — consistent across devices.',
    tags: ['#Animation', '#Knit', '#Matter'],
    gradient: 'from-teal-500/40 via-emerald-600/30 to-transparent',
    icon: '🎮',
  },
]

export type Review = {
  handle: string
  quote: string
  project: string
  initials: string
  color: string
}

export const reviews: Review[] = [
  {
    handle: '@matt_9086',
    quote:
      'Delivered a full combat framework in under a week. The code was immaculate — every system documented, zero lag in 40-player fights. Best hire I have made on DevForum.',
    project: 'Combat System',
    initials: 'MA',
    color: 'from-violet-500 to-fuchsia-500',
  },
  {
    handle: '@neonshift',
    quote:
      'My save system was a nightmare before this. Session locking, inventory, the works — and they answered every question within hours. Communication was perfect.',
    project: 'Save & Data System',
    initials: 'NS',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    handle: '@pixelwyre',
    quote:
      'Hands down the cleanest Luau I have ever received. Optimized to the point of ridiculousness — frame rate actually improved after they refactored my UI.',
    project: 'Custom UI & Animations',
    initials: 'PW',
    color: 'from-purple-500 to-indigo-500',
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
