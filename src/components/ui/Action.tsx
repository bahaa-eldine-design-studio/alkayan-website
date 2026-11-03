import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowIcon, ArrowUpRightIcon } from './Icons'

type Variant = 'primary' | 'outline' | 'light' | 'dark'
type Size = 'md' | 'lg'

interface ButtonLinkProps {
  to: string
  children: ReactNode
  variant?: Variant
  size?: Size
  withArrow?: boolean
  diagonal?: boolean
  className?: string
  onClick?: () => void
  ariaLabel?: string
}

export function ButtonLink({
  to,
  children,
  variant = 'primary',
  size = 'md',
  withArrow = true,
  diagonal = false,
  className = '',
  onClick,
  ariaLabel,
}: ButtonLinkProps) {
  return (
    <Link
      to={to}
      className={`btn btn--${variant} btn--${size} ${className}`.trim()}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      <span>{children}</span>
      {diagonal ? <ArrowUpRightIcon /> : withArrow ? <ArrowIcon /> : null}
    </Link>
  )
}

interface TextLinkProps {
  to: string
  children: ReactNode
  className?: string
  diagonal?: boolean
}

export function TextLink({ to, children, className = '', diagonal = false }: TextLinkProps) {
  return (
    <Link to={to} className={`text-link ${className}`.trim()}>
      <span>{children}</span>
      {diagonal ? <ArrowUpRightIcon /> : <ArrowIcon />}
    </Link>
  )
}

interface ActionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: Variant
  size?: Size
}

export function ActionButton({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  ...rest
}: ActionButtonProps) {
  return (
    <button
      type={type}
      className={`btn btn--${variant} btn--${size} ${className}`.trim()}
      {...rest}
    >
      <span>{children}</span>
      <ArrowIcon />
    </button>
  )
}
