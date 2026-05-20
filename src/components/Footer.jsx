import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart, Code2 } from 'lucide-react'
import { socialLinks, personalInfo } from '../data/portfolio'

const iconMap = { Github, Linkedin, Mail }

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/5 bg-black/20">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Brand */}
          <motion.div
            className="flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
              <Code2 className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="font-bold text-white text-sm">{personalInfo.shortName}</p>
              <p className="text-xs text-slate-500">{personalInfo.title}</p>
            </div>
          </motion.div>

          {/* Copyright */}
          <p className="text-slate-500 text-sm flex items-center gap-1.5">
            © {year} Made with{' '}
            <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500" />
            {' '}by {personalInfo.shortName}
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map(({ id, label, url, icon }) => {
              const Icon = iconMap[icon]
              return (
                <motion.a
                  key={id}
                  href={url}
                  target={id !== 'email' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 flex items-center justify-center rounded-xl glass border border-white/10 text-slate-400 hover:text-indigo-400 hover:border-indigo-500/30 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}
