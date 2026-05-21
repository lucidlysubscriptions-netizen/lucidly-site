import { useEffect, useState } from 'react'
import { LucidlyLogo } from '../components/Brand'
import { LUCIDLY_DATA } from '../data'

/* Sticky top navigation */
export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: scrolled ? 'rgba(244, 240, 255, 0.85)' : 'transparent',
        backdropFilter: scrolled ? 'saturate(180%) blur(14px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'saturate(180%) blur(14px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--line)' : '1px solid transparent',
        transition: 'background .2s ease, border-color .2s ease',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 72,
        }}
      >
        {/* Brand */}
        <a href="#" style={{ display: 'inline-flex', alignItems: 'center' }} aria-label="Lucidly">
          <LucidlyLogo />
        </a>

        {/* Right cluster */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <nav
            className="nav-pill"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              height: 40,
              padding: '0 6px',
              borderRadius: 99,
              background: '#F4F0FF',
              boxShadow:
                '4px 4px 4px 0 rgba(0, 0, 0, 0.08) inset, -4px -4px 4px 0 #FFF inset',
            }}
          >
            {LUCIDLY_DATA.navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.external ? '_blank' : undefined}
                rel={l.external ? 'noopener noreferrer' : undefined}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '0 16px',
                  height: 30,
                  borderRadius: 999,
                  fontFamily: '"Hanken Grotesk", var(--font-sans)',
                  fontSize: 16,
                  fontWeight: 600,
                  lineHeight: '26px',
                  color: 'rgba(0, 0, 0, 0.60)',
                  whiteSpace: 'nowrap',
                  transition: 'background .15s ease, color .15s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--paper)'
                  e.currentTarget.style.color = 'rgba(0, 0, 0, 0.88)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent'
                  e.currentTarget.style.color = 'rgba(0, 0, 0, 0.60)'
                }}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href="#allocate"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              height: 40,
              padding: '0 24px',
              borderRadius: 99,
              fontSize: 15,
              fontWeight: 600,
              letterSpacing: '-0.005em',
              color: 'var(--accent-ink)',
              background: 'rgba(127, 86, 217, 0.15)',
              boxShadow: '-4px -4px 5px 0 #FFF, 4px 4px 5px 0 rgba(0, 0, 0, 0.04)',
              whiteSpace: 'nowrap',
              transition: 'background .15s ease, transform .15s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(127, 86, 217, 0.24)'
              e.currentTarget.style.transform = 'translateY(-1px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(127, 86, 217, 0.15)'
              e.currentTarget.style.transform = 'none'
            }}
          >
            Launch App
          </a>
        </div>
      </div>
      <style>{`
        @media (max-width: 860px) { .nav-pill { display: none !important; } }
      `}</style>
    </header>
  )
}
