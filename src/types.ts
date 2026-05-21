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
  /** Optional per-strategy app URL. Falls back to the generic app entry. */
  href?: string
  /** Optional live APY lookup config. If present, `apr` is replaced with
   *  the live value from the Lucidly API (or "__" when negative/loading). */
  apy?: { vaultAddress: string; duration: 'inception' | '30d' | string }
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

import type { ReactNode } from 'react'

export interface FaqItem {
  q: string
  a: ReactNode
}

export interface NavLink {
  label: string
  href: string
  /** When true, render with target=_blank + rel=noopener noreferrer. */
  external?: boolean
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
