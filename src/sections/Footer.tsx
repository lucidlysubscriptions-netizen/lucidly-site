import type { ReactNode } from 'react'
import { LucidlyLogo } from '../components/Brand'
import { LiveClock } from '../components/primitives'

interface FooterColProps {
  title: string
  links: string[]
}

function FooterCol({ title, links }: FooterColProps) {
  return (
    <div>
      <div
        className="mono"
        style={{
          fontSize: 10,
          color: 'var(--ink-4)',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          marginBottom: 16,
        }}
      >
        {title}
      </div>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
        {links.map((l) => (
          <li key={l}>
            <a
              href="#"
              style={{ fontSize: 13, color: 'var(--ink-3)', transition: 'color .15s ease' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--ink)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--ink-3)'
              }}
            >
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

/* ---------- Social icons (current brand marks, monochrome, inherit currentColor) ---------- */

function XIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function TelegramIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.7L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z" />
    </svg>
  )
}

function DiscordIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04c-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85c3.61 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12a2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  )
}

const SOCIALS: Array<{ label: string; href: string; icon: ReactNode }> = [
  { label: 'X (Twitter)', href: 'https://x.com/LucidlyFi', icon: <XIcon /> },
  { label: 'Telegram', href: 'https://t.me/lucidlyfi', icon: <TelegramIcon /> },
  { label: 'Discord', href: 'https://discord.com/invite/aJ23YTe4NJ', icon: <DiscordIcon /> },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/lucidlylabs/', icon: <LinkedInIcon /> },
]

/* Footer — light theme */
export function Footer() {
  return (
    <footer
      style={{
        background: 'var(--bg)',
        color: 'var(--ink-3)',
        paddingTop: 80,
        paddingBottom: 32,
        marginTop: 80,
        borderTop: '1px solid var(--line)',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.5fr repeat(4, 1fr)',
            gap: 32,
            paddingBottom: 56,
            borderBottom: '1px solid var(--line)',
          }}
          className="footer-grid"
        >
          <div>
            <LucidlyLogo width={100} />
            <p style={{ fontSize: 13, color: 'var(--ink-4)', lineHeight: 1.6, maxWidth: 320, marginTop: 16 }}>
              Institutional execution for tokenized onchain strategies. Engineered structured products on a
              merkle-permissioned vault stack.
            </p>
            <div style={{ display: 'flex', gap: 8, marginTop: 20 }}>
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="footer-social"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
          <FooterCol title="Product" links={['Strategies', 'syUSD', 'cyBTC', 'cyETH', 'Allocator dashboard']} />
          <FooterCol
            title="Stack"
            links={['Execution engine', 'Vault layer', 'Merkle leaves', 'Agent loops', 'Architecture']}
          />
          <FooterCol title="Company" links={['Research', 'Brand', 'Careers', 'Contact', 'Legal']} />
          <FooterCol
            title="Allocators"
            links={['Request memo', 'Factsheets', 'Risk framework', 'Monthly memo', 'Status']}
          />
        </div>

        <div
          style={{
            paddingTop: 24,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 16,
          }}
        >
          <div style={{ display: 'flex', gap: 18, fontSize: 12, color: 'var(--ink-4)' }}>
            <span>© Lucidly Labs Limited, 2026.</span>
            <a href="#" style={{ borderBottom: '1px solid var(--line-2)', color: 'var(--ink-3)' }}>
              Privacy
            </a>
            <a href="#" style={{ borderBottom: '1px solid var(--line-2)', color: 'var(--ink-3)' }}>
              Terms
            </a>
            <a href="#" style={{ borderBottom: '1px solid var(--line-2)', color: 'var(--ink-3)' }}>
              Disclosures
            </a>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span className="pulse" />
            <span className="mono" style={{ fontSize: 11, color: 'var(--ink-3)' }}>
              All systems operational
            </span>
            <LiveClock />
          </div>
        </div>
      </div>
      <style>{`
        .footer-social {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          border: 1px solid var(--line-2);
          color: var(--ink-3);
          transition: color .15s ease, border-color .15s ease, background .15s ease, transform .15s ease;
        }
        .footer-social:hover {
          color: var(--ink);
          border-color: var(--ink);
          background: var(--bg-elev);
          transform: translateY(-1px);
        }
        @media (max-width: 880px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </footer>
  )
}
