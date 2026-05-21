/* Engraved tradfi tableau used as the hero backdrop - ledger paper,
   guilloché rosette, classical bank portico, candlestick fragment,
   drafting dividers. Bleeds in from the right; mask fades it out
   on the left so it never competes with the headline.
   Decorative only; rendered behind hero content. */
export function HeroSketch() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
        zIndex: 0,
        maskImage:
          'linear-gradient(105deg, transparent 0%, transparent 32%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.9) 70%, rgba(0,0,0,1) 100%)',
        WebkitMaskImage:
          'linear-gradient(105deg, transparent 0%, transparent 32%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.9) 70%, rgba(0,0,0,1) 100%)',
      }}
    >
      <svg
        viewBox="0 0 1400 900"
        preserveAspectRatio="xMaxYMid slice"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
      >
        <defs>
          <filter id="pencil" x="-2%" y="-2%" width="104%" height="104%">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="4" />
            <feDisplacementMap in="SourceGraphic" scale="0.9" />
          </filter>
          <filter id="pencilSoft" x="-2%" y="-2%" width="104%" height="104%">
            <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="2" seed="11" />
            <feDisplacementMap in="SourceGraphic" scale="0.5" />
          </filter>

          <pattern
            id="hatch45"
            x="0"
            y="0"
            width="6"
            height="6"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(45)"
          >
            <line x1="0" y1="0" x2="0" y2="6" stroke="var(--ink)" strokeWidth="0.35" opacity="0.55" />
          </pattern>

          <pattern id="ledger" x="0" y="0" width="48" height="32" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="48" y2="0" stroke="var(--ink)" strokeWidth="0.4" opacity="0.06" />
            <line x1="0" y1="0" x2="0" y2="32" stroke="var(--ink)" strokeWidth="0.4" opacity="0.04" />
          </pattern>

          <pattern id="flutes" x="0" y="0" width="8" height="100" patternUnits="userSpaceOnUse">
            <line x1="2" y1="0" x2="2" y2="100" stroke="var(--ink)" strokeWidth="0.4" opacity="0.65" />
          </pattern>

          <style>{`
            .hs-stroke      { stroke: var(--ink);    fill: none; }
            .hs-stroke-acc  { stroke: var(--accent); fill: none; }
            .hs-thin        { stroke-width: 0.4; }
            .hs-base        { stroke-width: 0.7; }
            .hs-bold        { stroke-width: 1.0; }
            .hs-ink-25      { opacity: 0.25; }
            .hs-ink-35      { opacity: 0.35; }
            .hs-ink-45      { opacity: 0.45; }
            .hs-acc-22      { opacity: 0.22; }
            .hs-acc-35      { opacity: 0.35; }
          `}</style>
        </defs>

        {/* Ledger paper backdrop on the right column */}
        <rect x="640" y="0" width="760" height="900" fill="url(#ledger)" />

        {/* Faint accounting column rules */}
        <g opacity="0.10">
          <line className="hs-stroke hs-thin" x1="700" y1="0" x2="700" y2="900" strokeDasharray="2 4" />
          <line className="hs-stroke hs-thin" x1="1000" y1="0" x2="1000" y2="900" />
          <line className="hs-stroke hs-thin" x1="1300" y1="0" x2="1300" y2="900" strokeDasharray="2 4" />
        </g>

        {/* Guilloché rosette (banknote security print) */}
        <g transform="translate(1140 300)" filter="url(#pencilSoft)">
          {Array.from({ length: 20 }).map((_, i) => (
            <circle key={'c' + i} r={28 + i * 11} className="hs-stroke-acc hs-thin hs-acc-22" />
          ))}
          {Array.from({ length: 36 }).map((_, i) => {
            const a = (i / 36) * Math.PI * 2
            return (
              <line
                key={'s' + i}
                x1={Math.cos(a) * 230}
                y1={Math.sin(a) * 230}
                x2={Math.cos(a) * 250}
                y2={Math.sin(a) * 250}
                className="hs-stroke hs-acc-22 hs-thin"
              />
            )
          })}
          <g opacity="0.5">
            {Array.from({ length: 12 }).map((_, i) => {
              const a1 = (i / 12) * Math.PI * 2
              const a2 = ((i + 5) / 12) * Math.PI * 2
              return (
                <line
                  key={'r' + i}
                  x1={Math.cos(a1) * 90}
                  y1={Math.sin(a1) * 90}
                  x2={Math.cos(a2) * 90}
                  y2={Math.sin(a2) * 90}
                  className="hs-stroke-acc hs-thin hs-acc-35"
                />
              )
            })}
          </g>
          <circle r="18" className="hs-stroke-acc hs-base hs-acc-35" />
          <circle r="10" className="hs-stroke-acc hs-thin hs-acc-35" />
          <circle r="3" fill="var(--accent)" opacity="0.35" />
        </g>

        {/* Classical bank portico */}
        <g transform="translate(800 300)" filter="url(#pencil)">
          <path d="M 0 80 L 200 0 L 400 80 Z" fill="url(#hatch45)" opacity="0.32" />

          <g className="hs-stroke hs-ink-45 hs-base">
            <path d="M 0 80 L 200 0 L 400 80" />
            <path d="M 0 80 L 400 80" />
            <path d="M 14 78 L 200 14 L 386 78" className="hs-thin hs-ink-35" />
            <circle cx="200" cy="56" r="14" className="hs-stroke hs-thin hs-ink-45" />
            <circle cx="200" cy="56" r="5" className="hs-stroke hs-thin hs-ink-35" />
          </g>

          <g className="hs-stroke hs-ink-45 hs-thin">
            <line x1="-12" y1="86" x2="412" y2="86" />
            <line x1="-12" y1="94" x2="412" y2="94" />
            <line x1="-12" y1="106" x2="412" y2="106" />
            <line x1="-12" y1="116" x2="412" y2="116" />
          </g>

          <g className="hs-stroke hs-ink-45 hs-thin">
            {Array.from({ length: 9 }).map((_, i) => (
              <g key={i} transform={`translate(${-8 + i * 52}, 0)`}>
                <rect x="0" y="96" width="14" height="10" />
                <line x1="4" y1="96" x2="4" y2="106" />
                <line x1="9" y1="96" x2="9" y2="106" />
              </g>
            ))}
          </g>

          <line x1="-16" y1="124" x2="416" y2="124" className="hs-stroke hs-ink-45 hs-thin" />

          {[10, 120, 230, 340].map((x, i) => (
            <g key={i}>
              <rect x={x - 8} y="124" width="66" height="6" className="hs-stroke hs-ink-45 hs-thin" />
              <path
                d={`M ${x - 4} 130 Q ${x + 25} 138 ${x + 54} 130`}
                className="hs-stroke hs-ink-45 hs-thin"
              />
              <rect x={x} y="136" width="50" height="240" fill="url(#flutes)" opacity="0.55" />
              <rect x={x} y="136" width="50" height="240" className="hs-stroke hs-ink-45 hs-base" />
              <line x1={x + 4} y1="136" x2={x + 4} y2="376" className="hs-stroke hs-ink-25 hs-thin" />
              <line x1={x + 46} y1="136" x2={x + 46} y2="376" className="hs-stroke hs-ink-25 hs-thin" />
              <rect x={x - 6} y="376" width="62" height="10" className="hs-stroke hs-ink-45 hs-thin" />
              <rect x={x - 10} y="386" width="70" height="6" className="hs-stroke hs-ink-45 hs-thin" />
            </g>
          ))}

          <g className="hs-stroke hs-ink-45 hs-thin">
            <rect x="-30" y="394" width="460" height="10" />
            <rect x="-50" y="404" width="500" height="10" />
            <rect x="-70" y="414" width="540" height="10" />
            <rect x="-90" y="424" width="580" height="10" />
          </g>

          <g opacity="0.5">
            {Array.from({ length: 14 }).map((_, i) => (
              <line
                key={i}
                x1={-100 + i * 50}
                y1="438"
                x2={-130 + i * 50}
                y2="462"
                className="hs-stroke hs-thin hs-ink-25"
              />
            ))}
          </g>
        </g>

        {/* Candlestick fragment (spot-perp spread) */}
        <g transform="translate(680 640)" filter="url(#pencilSoft)" opacity="0.55">
          <line x1="0" y1="0" x2="120" y2="0" className="hs-stroke hs-thin hs-ink-45" />
          <line x1="0" y1="0" x2="0" y2="-50" className="hs-stroke hs-thin hs-ink-45" />
          {([
            [10, -22, -32, -18, -36, 'up'],
            [22, -28, -36, -24, -40, 'up'],
            [34, -30, -34, -20, -38, 'down'],
            [46, -20, -24, -10, -28, 'up'],
            [58, -10, -16, -6, -20, 'down'],
            [70, -6, -10, -2, -14, 'down'],
            [82, -4, -8, 0, -12, 'up'],
            [94, -2, -6, 2, -10, 'up'],
            [106, 0, -2, 4, -6, 'up'],
          ] as Array<[number, number, number, number, number, 'up' | 'down']>).map((c, i) => (
            <g key={i}>
              <line
                x1={c[0]}
                y1={c[3]}
                x2={c[0]}
                y2={c[4]}
                className="hs-stroke hs-thin hs-ink-45"
              />
              <rect
                x={c[0] - 3}
                y={Math.min(c[1], c[2])}
                width="6"
                height={Math.abs(c[1] - c[2])}
                fill={c[5] === 'up' ? 'var(--accent)' : 'none'}
                opacity={c[5] === 'up' ? 0.35 : 1}
                className="hs-stroke hs-ink-45 hs-thin"
              />
            </g>
          ))}
          <path
            d="M 4 -28 Q 60 -16 110 -2"
            className="hs-stroke-acc hs-thin hs-acc-35"
            strokeDasharray="2 3"
          />
        </g>

        {/* Drafting dividers (compass) */}
        <g transform="translate(870 100)" filter="url(#pencilSoft)" opacity="0.4">
          <circle cx="0" cy="0" r="6" className="hs-stroke hs-base hs-ink-45" />
          <circle cx="0" cy="0" r="2" className="hs-stroke hs-thin hs-ink-45" />
          <line x1="0" y1="0" x2="-26" y2="60" className="hs-stroke hs-base hs-ink-45" />
          <line x1="0" y1="0" x2="26" y2="60" className="hs-stroke hs-base hs-ink-45" />
          <line x1="-26" y1="60" x2="-28" y2="68" className="hs-stroke hs-bold hs-ink-45" />
          <line x1="26" y1="60" x2="28" y2="68" className="hs-stroke hs-bold hs-ink-45" />
          <path
            d="M -52 90 Q 0 50 52 90"
            className="hs-stroke-acc hs-thin hs-acc-35"
            strokeDasharray="3 3"
          />
        </g>
      </svg>
    </div>
  )
}
