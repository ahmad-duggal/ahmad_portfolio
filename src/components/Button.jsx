import { motion } from 'framer-motion'
import { buttonTap } from '../animations/variants'

/**
 * Button component with variant support.
 * @param {'primary'|'secondary'|'ghost'|'outline'} variant
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  external,
  onClick,
  className = '',
  icon,
  ...props
}) {
  const base =
    'inline-flex items-center gap-2 font-semibold rounded-xl transition-all duration-200 cursor-pointer select-none'

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  }

  const variants = {
    primary:
      'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40',
    secondary:
      'bg-white/10 hover:bg-white/15 text-white border border-white/10 hover:border-white/20 backdrop-blur-sm',
    ghost:
      'text-slate-300 hover:text-white hover:bg-white/8',
    outline:
      'border border-indigo-500/50 text-indigo-400 hover:bg-indigo-500/10 hover:border-indigo-500',
  }

  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`

  const content = (
    <>
      {icon && <span className="w-4 h-4">{icon}</span>}
      {children}
    </>
  )

  if (href) {
    return (
      <motion.a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={classes}
        {...buttonTap}
        {...props}
      >
        {content}
      </motion.a>
    )
  }

  return (
    <motion.button
      onClick={onClick}
      className={classes}
      {...buttonTap}
      {...props}
    >
      {content}
    </motion.button>
  )
}
