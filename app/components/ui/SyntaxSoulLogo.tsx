interface LogoProps {
  size?: number
  showText?: boolean
  className?: string
}

/**
 * Inline SVG logo that mirrors the SyntaxSoul brand identity:
 * glowing "S" formed by flowing curves, code braces ({}), a human silhouette,
 * and the cyan ↔ purple neon palette.
 */
export default function SyntaxSoulLogo({ size = 56, showText = true, className = '' }: LogoProps) {
  const id = `ss-logo-${size}`
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id={`${id}-bg`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#0D1830" />
            <stop offset="100%" stopColor="#080C14" />
          </radialGradient>
          <linearGradient id={`${id}-cyan-purple`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00E5FF" />
            <stop offset="100%" stopColor="#8B2FE8" />
          </linearGradient>
          <linearGradient id={`${id}-purple-cyan`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B2FE8" />
            <stop offset="100%" stopColor="#00E5FF" />
          </linearGradient>
          <filter id={`${id}-glow`} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id={`${id}-glow-strong`} x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="10" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Background circle */}
        <circle cx="100" cy="100" r="95" fill={`url(#${id}-bg)`} />

        {/* Outer ring */}
        <circle cx="100" cy="100" r="92" stroke={`url(#${id}-cyan-purple)`} strokeWidth="1" opacity="0.4" />

        {/* Left brace { */}
        <path
          d="M48 60 C38 60 34 68 34 78 L34 92 C34 98 30 100 26 100 C30 100 34 102 34 108 L34 122 C34 132 38 140 48 140"
          stroke={`url(#${id}-cyan-purple)`}
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          filter={`url(#${id}-glow)`}
          opacity="0.9"
        />

        {/* Right brace } */}
        <path
          d="M152 60 C162 60 166 68 166 78 L166 92 C166 98 170 100 174 100 C170 100 166 102 166 108 L166 122 C166 132 162 140 152 140"
          stroke={`url(#${id}-purple-cyan)`}
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          filter={`url(#${id}-glow)`}
          opacity="0.9"
        />

        {/* S shape — top arc */}
        <path
          d="M130 65 C130 65 115 55 95 58 C75 61 62 72 65 85 C68 98 82 100 95 103 C110 106 125 108 128 121 C131 134 118 145 98 147 C78 149 65 138 65 138"
          stroke={`url(#${id}-cyan-purple)`}
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
          filter={`url(#${id}-glow-strong)`}
          opacity="0.95"
        />

        {/* Human silhouette inside S */}
        {/* Head */}
        <circle cx="100" cy="86" r="6" fill={`url(#${id}-cyan-purple)`} opacity="0.85" filter={`url(#${id}-glow)`} />
        {/* Body */}
        <path
          d="M100 92 L100 112"
          stroke={`url(#${id}-cyan-purple)`}
          strokeWidth="2.5"
          strokeLinecap="round"
          filter={`url(#${id}-glow)`}
          opacity="0.85"
        />
        {/* Arms */}
        <path
          d="M91 98 L109 98"
          stroke={`url(#${id}-cyan-purple)`}
          strokeWidth="2.5"
          strokeLinecap="round"
          filter={`url(#${id}-glow)`}
          opacity="0.85"
        />
        {/* Legs */}
        <path
          d="M100 112 L93 124 M100 112 L107 124"
          stroke={`url(#${id}-cyan-purple)`}
          strokeWidth="2.5"
          strokeLinecap="round"
          filter={`url(#${id}-glow)`}
          opacity="0.85"
        />

        {/* Decorative dots / circuit nodes */}
        <circle cx="60" cy="75" r="2.5" fill="#00E5FF" opacity="0.8" filter={`url(#${id}-glow)`} />
        <circle cx="141" cy="125" r="2.5" fill="#8B2FE8" opacity="0.8" filter={`url(#${id}-glow)`} />
        <circle cx="70" cy="130" r="1.8" fill="#00E5FF" opacity="0.6" />
        <circle cx="132" cy="68" r="1.8" fill="#8B2FE8" opacity="0.6" />
        <circle cx="100" cy="155" r="2" fill="#00E5FF" opacity="0.5" />
        <circle cx="100" cy="44" r="2" fill="#8B2FE8" opacity="0.5" />

        {/* Connector lines (circuit traces) */}
        <line x1="60" y1="75" x2="48" y2="75" stroke="#00E5FF" strokeWidth="1" opacity="0.4" />
        <line x1="141" y1="125" x2="152" y2="125" stroke="#8B2FE8" strokeWidth="1" opacity="0.4" />
      </svg>

      {showText && (
        <div className="flex flex-col leading-none">
          <span
            className="font-black tracking-tight"
            style={{
              fontSize: size * 0.38,
              background: 'linear-gradient(135deg, #00E5FF, #8B2FE8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            SyntaxSoul
          </span>
          <span
            className="font-semibold tracking-widest uppercase text-[#8A9BBF]"
            style={{ fontSize: size * 0.14 }}
          >
            Software Development
          </span>
        </div>
      )}
    </div>
  )
}
