interface LogoProps {
  size?: number
  showWordmark?: boolean
}

export function Logo({ size = 32, showWordmark = true }: LogoProps) {
  return (
    <div className="flex items-center gap-2.5">
      <svg
        width={size}
        height={size}
        viewBox="0 0 90 90"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Koder logo"
      >
        <rect width="90" height="90" rx="18" fill="#010C1E" />
        <rect
          width="90"
          height="90"
          rx="18"
          fill="none"
          stroke="rgba(255,60,0,0.3)"
          strokeWidth="1.5"
        />
        <polygon points="45,10 80,47 45,47" fill="#FFFFFF" />
        <polygon points="45,51 80,51 45,80" fill="#FF3C00" />
      </svg>
      {showWordmark && (
        <span className="text-off-white font-semibold tracking-tight" style={{ fontSize: size * 0.56 }}>
          koder
        </span>
      )}
    </div>
  )
}
