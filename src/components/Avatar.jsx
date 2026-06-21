import { useState } from 'react'
import { User } from 'lucide-react'

export default function Avatar({ src, alt, className = '' }) {
  const [hasError, setHasError] = useState(false)

  if (!src || hasError) {
    return (
      <div className={`flex items-center justify-center bg-slate-800/80 ${className}`}>
        <User className="w-1/2 h-1/2 text-slate-500" />
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setHasError(true)}
      className={`object-cover ${className}`}
      draggable={false}
    />
  )
}
