// Lucidly content data - strategies, faq, etc.
import type { LucidlyData } from './types'

export const LUCIDLY_DATA: LucidlyData = {
  metrics: [
    { id: 'strategies', value: 4, suffix: '', label: 'live strategies' },
    { id: 'chains', value: 7, suffix: '', label: 'chains in production' },
    { id: 'apr', value: 9.8, suffix: '%', label: 'syUSD net APR since inception' },
    { id: 'tvl', value: 41.2, prefix: '$', suffix: 'M', label: 'live TVL' },
  ],

  strategies: [
    {
      token: 'syUSD',
      benchmark: 'USD',
      summary: 'Leveraged siUSD/USDC loop on Morpho.',
      chain: 'Ethereum',
      liveSince: 'Sep 2025',
      apr: '9.8%',
      status: 'live',
      tags: ['Leveraged loop', 'Lending'],
    },
    {
      token: 'cyBTC',
      benchmark: 'BTC',
      summary: 'WBTC/WETH concentrated-liquidity LP with Aave-hedged ETH delta.',
      chain: 'Arbitrum',
      liveSince: 'Oct 2025',
      apr: '7.4%',
      status: 'live',
      tags: ['Hedged CLMM', 'LP'],
    },
    {
      token: 'cyETH',
      benchmark: 'ETH',
      summary: 'Hedged ETH carry - basis and lending spread capture.',
      chain: 'Ethereum',
      liveSince: 'Nov 2025',
      apr: '6.1%',
      status: 'live',
      tags: ['Basis', 'Carry'],
    },
    {
      token: 'jrRoyUSDC',
      benchmark: 'USD',
      summary:
        'Junior tranche on Royco USDC incentive markets - yield enhancement via subordinated risk.',
      chain: 'Base',
      liveSince: 'Feb 2026',
      apr: '12.4%',
      status: 'live',
      tags: ['Tranched', 'Incentives'],
    },
    {
      token: 'dnCluster',
      benchmark: 'USD',
      summary:
        'Delta-neutral funding capture across BTC, ETH, SOL, HYPE - spot-long / perp-short, hysteresis-gated rotation.',
      chain: 'Hyperliquid',
      liveSince: 'TBA',
      apr: 'TBA',
      status: 'building',
      tags: ['Delta-neutral', 'Funding'],
    },
    {
      token: 'Aero FX MM',
      benchmark: 'USD',
      summary: 'EURC/USDC concentrated-liquidity LP - FX-stable market making.',
      chain: 'Aerodrome',
      liveSince: 'TBA',
      apr: 'TBA',
      status: 'building',
      tags: ['FX', 'CLMM'],
    },
  ],

  chains: ['Ethereum', 'Arbitrum', 'Base', 'Hyperevm', 'Plasma', 'Monad', 'Katana'],

  whyPillars: [
    {
      title: 'We operate, not curate.',
      body: 'Curators allocate to other people’s strategies. Lucidly builds them. The return source, the hedge, the execution policy - all owned. Every basis point we report is one we earned, not one we routed.',
    },
    {
      title: 'Cryptographic safety surface.',
      body: 'The strategist’s universe of permitted actions is fixed in a merkle leaf set published per strategy. There is no admin key escape hatch into operations the leaves don’t cover.',
    },
    {
      title: 'Engineered, not aggregated.',
      body: 'Each syToken is a structured product - LP leg plus hedge leg plus execution policy, designed together to produce a defined return profile. Documented max-loss functions. Live drawdown reporting.',
    },
    {
      title: 'Multi-chain by default.',
      body: 'The same execution stack ships to every new chain. Live on Ethereum, Arbitrum, Base, Hyperevm, Plasma, Monad, and Katana.',
    },
  ],

  transparency: [
    {
      title: 'Live NAV per syToken',
      detail: 'Net-asset-value computed from live position state. Updated every block.',
      sample: 'syUSD · $1.0742 · +0.0008 / 24h',
    },
    {
      title: 'Strategy state dashboards',
      detail: 'Current LTV, hedge drift, LP range, funding accrual, idle reserves.',
      sample: 'LTV 67.4% · drift 0.31%',
    },
    {
      title: 'Merkle leaf sets',
      detail: 'Every authorized action for every strategy, published and addressable on-chain.',
      sample: '0x4f9a…2e1c · 184 leaves',
    },
    {
      title: 'Transaction log',
      detail: 'Every action the agent has taken - signed by KMS, timestamped, indexed.',
      sample: '14,028 txs · last 41s ago',
    },
  ],

  audiences: [
    {
      title: 'Family offices & treasuries',
      body: 'USD, BTC, and ETH-benchmark exposures with defined drawdown profiles. Per-syToken factsheets, monthly performance memos, dedicated allocator channel.',
    },
    {
      title: 'Funds & funds-of-funds',
      body: 'A diversified set of low-correlation strategies under one operator. Customizable allocation between syTokens; sub-account view; reporting in your benchmark of choice.',
    },
    {
      title: 'DAOs & protocol treasuries',
      body: 'Idle treasury deployed into syUSD or cyETH with onchain reporting your community can audit. Optional fixed-rate wrappers via partner protocols.',
    },
  ],

  risk: [
    {
      title: 'Cryptographic bounds.',
      body: 'Every strategist action must match a pre-authorized merkle leaf. The strategist cannot operate outside the documented surface - not because we ask them not to, but because the contract reverts. Every leaf set is published per strategy.',
    },
    {
      title: 'Per-strategy guardrails.',
      body: 'Each strategy ships with a max-loss function, LTV caps, exposure drift thresholds, reserve ratios, and liquidation-risk crons. These live in the strategy’s published documentation and are enforced by the execution agent.',
    },
    {
      title: 'Live monitoring.',
      body: '24/7 alerting on every loop. Liquidation-risk monitors run every 15 minutes; margin coverage runs every 5; hedge drift runs every 5. Every alert and every action is logged.',
    },
  ],

  research: [
    {
      kind: 'Partner',
      title: 'How Lucidly Powers Acid Labs & Telegram’s Mini App Era',
      date: 'May 2026',
      length: '7 min read',
      href: 'https://x.com/LucidlyFi/status/2052767111232270697?s=20',
    },
    {
      kind: 'Note',
      title: 'Are you tired of the same broken DeFi experience?',
      date: 'Apr 2026',
      length: '4 min read',
      href: 'https://x.com/LucidlyFi/status/2044003485843370044',
    },
    {
      kind: 'Product',
      title: 'Access exotic DeFi yield strategies inside Telegram.',
      date: 'Feb 2026',
      length: '5 min read',
      href: 'https://x.com/0xYashish/status/2024221580453446140',
    },
    {
      kind: 'Strategy',
      title: 'We Built a Hedged CLMM Strategy. It Prints Fees.',
      date: 'Feb 2026',
      length: '9 min read',
      href: 'https://x.com/0xYashish/status/2018825304480035113?s=20',
    },
    {
      kind: 'Memo',
      title: 'Treasury Management RFP for Gnosis DAO',
      date: 'Jan 2026',
      length: '14 min read',
      href: 'https://x.com/0xYashish/status/2014666106569675056',
    },
    {
      kind: 'Partner',
      title: 'Lucidly x Spectra: Fixed-rate syUSD+ Drops',
      date: 'Dec 2025',
      length: '5 min read',
      href: 'https://x.com/0xyashish/status/2001312695874912473',
    },
    {
      kind: 'Product',
      title: 'Introducing Lucidly’s Manager Terminal',
      date: 'Dec 2025',
      length: '11 min read',
      href: 'https://x.com/0xyashish/status/1996304132983111891',
    },
    {
      kind: 'Note',
      title: 'Lucidly’s DeFi Curation Breakthrough',
      date: 'Nov 2025',
      length: '6 min read',
      href: 'https://x.com/0xyashish/status/1987010458726133938',
    },
  ],

  faq: [
    {
      q: 'How is Lucidly different from a yield aggregator?',
      a: 'Aggregators route capital between existing pools. Lucidly builds the strategies. Each syToken is a proprietary structured product with its own hedge, its own execution policy, and its own risk framework.',
    },
    {
      q: 'How is Lucidly different from a curator like Gauntlet or Allez?',
      a: 'Curators allocate capital to other people’s strategies. Lucidly builds and operates the strategies and the execution stack underneath them.',
    },
    {
      q: 'What stops the strategist from doing something stupid or malicious?',
      a: 'The vault’s Manager contract verifies every transaction against a Merkle-proven leaf set. Anything that isn’t pre-authorized in the leaves reverts. The strategist cannot operate outside that surface.',
    },
    {
      q: 'Where can I see live performance?',
      a: 'Live NAV, TVL, and per-strategy state are on the allocator dashboard. Net APR per syToken is computed from live position state every block.',
    },
    {
      q: 'How do I allocate?',
      a: 'Request access via the allocator memo. We onboard institutional allocators directly; minimum varies by strategy.',
    },
  ],

  backers: ['Skycatcher', 'Investor 02', 'Investor 03', 'Investor 04'],

  navLinks: [
    { label: 'Strategies', href: '#strategies' },
    { label: 'Execution Engine', href: '#engine' },
    { label: 'Research', href: '#research' },
    { label: 'Docs', href: '#' },
    { label: 'Allocators', href: '#allocate' },
  ],
}
