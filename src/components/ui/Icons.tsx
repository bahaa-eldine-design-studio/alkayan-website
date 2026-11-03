interface IconProps {
  className?: string
  size?: number
}

const base = (size: number) => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
  focusable: false,
})

export function ArrowIcon({ className = 'icon-arrow', size = 18 }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M4 12h15" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  )
}

export function ArrowUpRightIcon({ className = 'icon-diagonal', size = 18 }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M6 18L18 6" />
      <path d="M8 6h10v10" />
    </svg>
  )
}

export function ArrowUpIcon({ className = '', size = 18 }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M12 19V5" />
      <path d="M6 11l6-6 6 6" />
    </svg>
  )
}

export function ChevronDownIcon({ className = '', size = 14 }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M5 9l7 7 7-7" />
    </svg>
  )
}

export function MenuIcon({ className = '', size = 22 }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M3 7h18" />
      <path d="M3 12h18" />
      <path d="M3 17h12" />
    </svg>
  )
}

export function CloseIcon({ className = '', size = 22 }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M5 5l14 14" />
      <path d="M19 5L5 19" />
    </svg>
  )
}

export function CheckIcon({ className = '', size = 20 }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M4 12.5l5 5L20 6.5" />
    </svg>
  )
}

export function GlobeIcon({ className = '', size = 16 }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.5 2.6 3.8 5.7 3.8 9S14.5 18.4 12 21c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3z" />
    </svg>
  )
}
