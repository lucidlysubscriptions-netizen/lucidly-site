// Lucidly content data - strategies, faq, etc.
import type { LucidlyData } from './types'

export const LUCIDLY_DATA: LucidlyData = {
  metrics: [
    { id: 'strategies', value: 4, suffix: '', label: 'live strategies' },
    { id: 'chains', value: 7, suffix: '', label: 'chains in production' },
    { id: 'apr', value: 9.8, suffix: '%', label: 'syUSD net APR since inception' },
    { id: 'tvl', value: 41.2, prefix: '$', suffix: 'M', label: 'live AUM' },
  ],

  strategies: [
    {
      token: 'syUSD',
      benchmark: 'USD',
      summary:
        'The institutional dollar account, onchain. Engineered USD yield from a hedged lending spread.',
      chain: 'Base',
      liveSince: 'Sep 2025',
      apr: '9.8%',
      status: 'live',
      tags: ['Leveraged loop', 'Lending'],
      href: 'https://app.lucidly.finance/yields?vaultAddress=0x279CAD277447965AF3d24a78197aad1B02a2c589',
      apy: { vaultAddress: '0x279CAD277447965AF3d24a78197aad1B02a2c589', duration: 'inception' },
    },
    {
      token: 'cyBTC',
      benchmark: 'BTC',
      summary: 'Bitcoin that earns. Basis income in BTC terms, price exposure left untouched.',
      chain: 'Ethereum',
      liveSince: 'May 2026',
      apr: '7.4%',
      status: 'live',
      tags: ['Basis', 'Carry'],
      href: 'https://app.lucidly.finance/yields?vaultAddress=0x272BCD869CbDFcb32c335dB2f1F6C54Eb1A50aCc',
      apy: { vaultAddress: '0x272BCD869CbDFcb32c335dB2f1F6C54Eb1A50aCc', duration: '30d' },
    },
    {
      token: 'cyETH',
      benchmark: 'ETH',
      summary: 'Your ETH stack, now a carry book - yield without giving up the upside.',
      chain: 'Ethereum',
      liveSince: 'May 2026',
      apr: '6.1%',
      status: 'live',
      tags: ['Basis', 'Carry'],
      href: 'https://app.lucidly.finance/yields?vaultAddress=0x5373690c930553648f0aaA2e53B51f0C59290B7d',
      apy: { vaultAddress: '0x5373690c930553648f0aaA2e53B51f0C59290B7d', duration: '30d' },
    },
    {
      token: 'jrRoycoUSDC',
      benchmark: 'USD',
      summary:
        'The high-octane USDC sleeve - junior, first-loss capital into Royco Dawn markets for the richest stablecoin yield on the stack.',
      chain: 'Ethereum',
      liveSince: 'May 2026',
      apr: '12.4%',
      status: 'live',
      tags: ['Tranched', 'Incentives'],
      href: 'https://app.lucidly.finance/yields?vaultAddress=0x71861827Aa95cA48148bdA0b40BC740d1c421070',
      apy: { vaultAddress: '0x71861827Aa95cA48148bdA0b40BC740d1c421070', duration: '30d' },
    },
    {
      token: 'dnCluster',
      benchmark: 'USD',
      summary:
        'Pure funding yield. Market-neutral by construction, eight assets, one auto-rotating book.',
      chain: 'Hyperliquid',
      liveSince: 'TBA',
      apr: 'TBA',
      status: 'building',
      tags: ['Delta-neutral', 'Funding'],
    },
    {
      token: 'LP and Hedge',
      benchmark: 'BTC',
      summary:
        'Market-making income, Bitcoin-benchmarked, fees from the range, ETH risk hedged out.',
      chain: 'Arbitrum',
      liveSince: 'TBA',
      apr: 'TBA',
      status: 'building',
      tags: ['Hedged CLMM', 'LP'],
    },
  ],

  chains: ['Ethereum', 'Arbitrum', 'Base', 'Hyperevm', 'Plasma', 'Monad', 'Katana'],

  whyPillars: [
    {
      title: 'We operate, not curate.',
      body: 'Curators allocate capital to other underlying products. Lucidly builds them. The return source, the hedge, the execution policy - all owned. Every basis point we report is one we earned, not one we routed.',
    },
    {
      title: 'Cryptographic safety surface.',
      body: 'The strategist’s universe of permitted actions is fixed in a merkle policy set published per strategy. There is no admin key escape hatch into operations the policies don’t cover.',
    },
    {
      title: 'Engineered, not aggregated.',
      body: 'Each strategy is a structured product - LP leg plus hedge leg plus execution policy, designed together to produce a defined return profile. Documented max-loss functions. Live drawdown reporting.',
    },
    {
      title: 'Multi-chain by default.',
      body: 'The same execution stack ships to every new chain. Live on Ethereum, Arbitrum, Base, Hyperevm, Plasma, Monad, and Katana.',
    },
  ],

  transparency: [
    {
      title: 'Live NAV per strategy',
      detail: 'Net-asset-value computed from live position state. Updated every block.',
      sample: 'syUSD · $1.0742 · +0.0008 / 24h',
    },
    {
      title: 'Strategy state dashboards',
      detail: 'Current LTV, hedge drift, LP range, funding accrual, idle reserves.',
      sample: 'LTV 67.4% · drift 0.31%',
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
      body: 'USD, BTC, and ETH-benchmark exposures with defined drawdown profiles. Per-strategy factsheets, monthly performance memos, dedicated allocator channel.',
    },
    {
      title: 'Funds & funds-of-funds',
      body: 'A diversified set of low-correlation strategies under one operator. Customizable allocation between strategies; sub-account view; reporting in your benchmark of choice.',
    },
    {
      title: 'DAOs & protocol treasuries',
      body: 'Idle treasury deployed into syUSD or cyETH with onchain reporting your community can audit. Optional fixed-rate wrappers via partner protocols.',
    },
  ],

  risk: [
    {
      title: 'Cryptographic bounds.',
      body: 'Every strategist action must match a pre-authorized merkle policy. The strategist cannot operate outside the documented surface - not because we ask them not to, but because the contract reverts. Every policy set is published per strategy.',
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
      a: 'Aggregators route capital between existing pools. Lucidly builds the strategies. Each strategy is a proprietary structured product with its own hedge, its own execution policy, and its own risk framework.',
    },
    {
      q: 'How is Lucidly different from a DeFi risk curator?',
      a: 'Curators allocate capital to other underlying products. Lucidly builds and operates the strategies and the execution stack underneath them.',
    },
    {
      q: 'What stops the strategist from doing something stupid or malicious?',
      a: 'The vault’s Manager contract verifies every transaction against a Merkle-proven policy set. Anything that isn’t pre-authorized in the policies reverts. The strategist cannot operate outside that surface.',
    },
    {
      q: 'Where can I see live performance?',
      a: 'Live NAV, AUM, and per-strategy state are on the allocator dashboard. Net APR per strategy is computed from live position state every block.',
    },
    {
      q: 'How do I allocate?',
      a: (
        <>
          Access our strategies on{' '}
          <a
            href="https://app.lucidly.finance/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--accent-ink)', borderBottom: '1px solid var(--line-2)' }}
          >
            app.lucidly.finance
          </a>
          . For custom strategies, Request access via the allocator memo. We onboard institutional
          allocators directly; minimum varies by strategy.
        </>
      ),
    },
  ],

  backers: ['Skycatcher', 'Investor 02', 'Investor 03', 'Investor 04'],

  navLinks: [
    { label: 'Strategies', href: '#strategies' },
    { label: 'Execution', href: '#engine' },
    { label: 'Research', href: 'https://research.lucidly.finance/', external: true },
    { label: 'Docs', href: 'https://docs.lucidly.finance/', external: true },
    { label: 'Blogs', href: 'https://www.lucidly.finance/blog', external: true },
  ],
}
