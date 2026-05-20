/**
 * Tech stack badge component.
 */
export default function Badge({ children, color = 'indigo', size = 'sm', className = '' }) {
  const colors = {
    indigo:  'bg-indigo-500/10  text-indigo-400  border-indigo-500/20',
    violet:  'bg-violet-500/10  text-violet-400  border-violet-500/20',
    pink:    'bg-pink-500/10    text-pink-400    border-pink-500/20',
    green:   'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    orange:  'bg-orange-500/10  text-orange-400  border-orange-500/20',
    cyan:    'bg-cyan-500/10    text-cyan-400    border-cyan-500/20',
    slate:   'bg-slate-500/10   text-slate-400   border-slate-500/20',
  }

  const sizes = {
    xs: 'px-2 py-0.5 text-xs',
    sm: 'px-2.5 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
  }

  return (
    <span
      className={`inline-flex items-center font-mono font-medium rounded-lg border ${colors[color] || colors.indigo} ${sizes[size]} ${className}`}
    >
      {children}
    </span>
  )
}
