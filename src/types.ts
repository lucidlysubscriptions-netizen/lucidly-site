// Shared content types for the Lucidly landing site.

export type StrategyStatus = 'live' | 'pilot' | 'building'

export interface Metric {
  id: string
  value: number
  prefix?: string
  suffix?: string
  label: string
}

export interface Strategy {
  token: string
  benchmark: string
  summary: string
  chain: string
  liveSince: string
  apr: string
  status: StrategyStatus
  tags: string[]
}

export interface Pillar {
  title: string
  body: string
}

export interface TransparencyItem {
  title: string
  detail: string
  sample: string
}

export interface ResearchItem {
  kind: string
  title: string
  date: string
  length: string
  /** Optional external URL. If present, the card opens this in a new tab. */
  href?: string
}

export interface FaqItem {
  q: string
  a: string
}

export interface NavLink {
  label: string
  href: string
}

export interface LucidlyData {
  metrics: Metric[]
  strategies: Strategy[]
  chains: string[]
  whyPillars: Pillar[]
  transparency: TransparencyItem[]
  audiences: Pillar[]
  risk: Pillar[]
  research: ResearchItem[]
  faq: FaqItem[]
  backers: string[]
  navLinks: NavLink[]
}
