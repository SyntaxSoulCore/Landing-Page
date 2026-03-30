interface MascotProps {
  size?: number
  className?: string
}

/**
 * Large version of the SyntaxSoul mascot — the glowing S symbol with braces,
 * inspired by the brand logo. Used in Hero and Tech sections.
 */
export default function SyntaxSoulMascot({ size = 400, className = '' }: MascotProps) {
  const id = `ss-mascot-${size}`
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id={`${id}-bg`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#0D1830" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#080C14" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`${id}-g1`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00E5FF" />
          <stop offset="50%" stopColor="#5E3BEA" />
          <stop offset="100%" stopColor="#8B2FE8" />
        </linearGradient>
        <linearGradient id={`${id}-g2`} x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#8B2FE8" />
          <stop offset="50%" stopColor="#5E3BEA" />
          <stop offset="100%" stopColor="#00E5FF" />
        </linearGradient>
        <linearGradient id={`${id}-g3`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#8B2FE8" stopOpacity="0.6" />
        </linearGradient>
        <filter id={`${id}-glow-xl`} x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="12" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id={`${id}-glow-md`} x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="7" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id={`${id}-glow-sm`} x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <clipPath id={`${id}-clip`}>
          <circle cx="200" cy="200" r="180" />
        </clipPath>
      </defs>

      {/* Background radial glow */}
      <circle cx="200" cy="200" r="190" fill={`url(#${id}-bg)`} />

      {/* Outer orbit ring */}
      <circle cx="200" cy="200" r="175" stroke={`url(#${id}-g1)`} strokeWidth="1" opacity="0.25" strokeDasharray="8 6" />
      <circle cx="200" cy="200" r="155" stroke={`url(#${id}-g3)`} strokeWidth="1" opacity="0.18" />

      {/* ── Left code brace { ──────────────────────────────── */}
      <path
        d="M88 108 C70 108 62 120 62 136 L62 164 C62 176 54 182 46 186 C54 190 62 196 62 208 L62 236 C62 252 70 264 88 264"
        stroke={`url(#${id}-g1)`}
        strokeWidth="5.5"
        strokeLinecap="round"
        fill="none"
        filter={`url(#${id}-glow-md)`}
        opacity="0.95"
      />

      {/* ── Right code brace } ──────────────────────────────── */}
      <path
        d="M312 108 C330 108 338 120 338 136 L338 164 C338 176 346 182 354 186 C346 190 338 196 338 208 L338 236 C338 252 330 264 312 264"
        stroke={`url(#${id}-g2)`}
        strokeWidth="5.5"
        strokeLinecap="round"
        fill="none"
        filter={`url(#${id}-glow-md)`}
        opacity="0.95"
      />

      {/* ── S shape — flowing curves ───────────────────────── */}
      {/* Top arc of S (cyan → purple) */}
      <path
        d="M268 122 C268 122 238 102 194 108 C150 114 120 134 126 158 C132 182 158 188 184 193 C212 199 242 205 248 229 C254 253 230 272 196 275 C162 278 134 260 128 252"
        stroke={`url(#${id}-g1)`}
        strokeWidth="10"
        strokeLinecap="round"
        fill="none"
        filter={`url(#${id}-glow-xl)`}
        opacity="0.95"
      />

      {/* S body highlight */}
      <path
        d="M268 122 C268 122 238 102 194 108 C150 114 120 134 126 158 C132 182 158 188 184 193 C212 199 242 205 248 229 C254 253 230 272 196 275 C162 278 134 260 128 252"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.25"
      />

      {/* ── Human silhouette ───────────────────────────────── */}
      {/* Head */}
      <circle cx="200" cy="164" r="11" fill={`url(#${id}-g1)`} opacity="0.9" filter={`url(#${id}-glow-sm)`} />
      <circle cx="200" cy="164" r="8" fill="rgba(0,229,255,0.15)" />

      {/* Neck */}
      <line x1="200" y1="175" x2="200" y2="183" stroke={`url(#${id}-g1)`} strokeWidth="4" strokeLinecap="round" opacity="0.8" />

      {/* Torso */}
      <path
        d="M200 183 L200 218"
        stroke={`url(#${id}-g1)`}
        strokeWidth="4.5"
        strokeLinecap="round"
        filter={`url(#${id}-glow-sm)`}
        opacity="0.85"
      />

      {/* Arms */}
      <path
        d="M178 193 C185 191 200 188 222 193"
        stroke={`url(#${id}-g1)`}
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
        filter={`url(#${id}-glow-sm)`}
        opacity="0.85"
      />

      {/* Left leg */}
      <path d="M200 218 L185 246" stroke={`url(#${id}-g1)`} strokeWidth="4" strokeLinecap="round" filter={`url(#${id}-glow-sm)`} opacity="0.8" />
      {/* Right leg */}
      <path d="M200 218 L215 246" stroke={`url(#${id}-g2)`} strokeWidth="4" strokeLinecap="round" filter={`url(#${id}-glow-sm)`} opacity="0.8" />

      {/* ── Circuit nodes ──────────────────────────────────── */}
      <circle cx="110" cy="150" r="5" fill="#00E5FF" filter={`url(#${id}-glow-sm)`} opacity="0.85" />
      <circle cx="290" cy="224" r="5" fill="#8B2FE8" filter={`url(#${id}-glow-sm)`} opacity="0.85" />
      <circle cx="126" cy="240" r="3.5" fill="#00E5FF" opacity="0.65" />
      <circle cx="268" cy="140" r="3.5" fill="#8B2FE8" opacity="0.65" />
      <circle cx="200" cy="306" r="4" fill="#00E5FF" opacity="0.55" />
      <circle cx="200" cy="82" r="4" fill="#8B2FE8" opacity="0.55" />
      <circle cx="148" cy="298" r="3" fill="#5E3BEA" opacity="0.5" />
      <circle cx="252" cy="92" r="3" fill="#5E3BEA" opacity="0.5" />

      {/* Circuit traces */}
      <line x1="110" y1="150" x2="88" y2="150" stroke="#00E5FF" strokeWidth="1.5" opacity="0.4" />
      <line x1="290" y1="224" x2="312" y2="224" stroke="#8B2FE8" strokeWidth="1.5" opacity="0.4" />
      <line x1="200" y1="82" x2="200" y2="68" stroke="#8B2FE8" strokeWidth="1.5" opacity="0.3" />
      <line x1="200" y1="306" x2="200" y2="322" stroke="#00E5FF" strokeWidth="1.5" opacity="0.3" />

      {/* Particle stars */}
      <circle cx="152" cy="118" r="1.5" fill="white" opacity="0.5" />
      <circle cx="248" cy="148" r="1.5" fill="white" opacity="0.4" />
      <circle cx="138" cy="270" r="1.5" fill="white" opacity="0.5" />
      <circle cx="262" cy="248" r="1.5" fill="white" opacity="0.4" />
      <circle cx="90" cy="200" r="1.5" fill="white" opacity="0.3" />
      <circle cx="310" cy="186" r="1.5" fill="white" opacity="0.3" />
    </svg>
  )
}
