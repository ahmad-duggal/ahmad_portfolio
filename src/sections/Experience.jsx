import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import { timeline } from '../data/portfolio'
import { staggerContainer, staggerItem, viewportOnce } from '../animations/variants'

const typeConfig = {
  self:       { color: 'indigo', bg: 'bg-indigo-500/10', border: 'border-indigo-500/30', text: 'text-indigo-400',  label: 'Personal'   },
  project:    { color: 'violet', bg: 'bg-violet-500/10', border: 'border-violet-500/30', text: 'text-violet-400',  label: 'Project'    },
  learning:   { color: 'cyan',   bg: 'bg-cyan-500/10',   border: 'border-cyan-500/30',   text: 'text-cyan-400',   label: 'Learning'   },
  education:  { color: 'emerald',bg: 'bg-emerald-500/10',border: 'border-emerald-500/30',text: 'text-emerald-400',label: 'Education'  },
  internship: { color: 'pink',   bg: 'bg-pink-500/10',   border: 'border-pink-500/30',   text: 'text-pink-400',   label: 'Internship' },
}

export default function Experience() {
  return (
    <section id="experience" className="section relative overflow-hidden">
      {/* Bg accent */}
      <div className="absolute top-1/3 right-0 w-64 h-64 rounded-full bg-indigo-500/6 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="My Journey"
          title="Experience & Timeline"
          subtitle="The path that brought me here — from first lines of code to full-stack applications."
        />

        <div className="max-w-3xl mx-auto">
          <motion.div
            variants={staggerContainer(0.12, 0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="relative"
          >
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-px timeline-line hidden sm:block" />

            <div className="space-y-6">
              {timeline.map((item, i) => {
                const cfg = typeConfig[item.type] || typeConfig.self
                const isLast = i === timeline.length - 1

                return (
                  <motion.div
                    key={item.id}
                    variants={staggerItem}
                    className="relative sm:pl-20"
                  >
                    {/* Timeline dot */}
                    <div className="hidden sm:flex absolute left-0 top-6 w-16 items-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={viewportOnce}
                        transition={{ delay: i * 0.1, type: 'spring', stiffness: 300 }}
                        className={`w-9 h-9 rounded-xl ${cfg.bg} border ${cfg.border} flex items-center justify-center text-lg flex-shrink-0 ml-[3px]`}
                      >
                        {item.icon}
                      </motion.div>
                    </div>

                    {/* Card */}
                    <motion.div
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                      className={`bento-card border ${cfg.border} p-5 sm:p-6`}
                    >
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                        <div className="flex items-center gap-3 sm:hidden">
                          <span className="text-2xl">{item.icon}</span>
                          <div>
                            <span className={`text-xs font-mono font-semibold ${cfg.text} px-2 py-0.5 rounded-md ${cfg.bg}`}>
                              {cfg.label}
                            </span>
                          </div>
                        </div>
                        <div className="hidden sm:block">
                          <span className={`text-xs font-mono font-semibold ${cfg.text} px-2.5 py-1 rounded-lg ${cfg.bg} border ${cfg.border}`}>
                            {cfg.label}
                          </span>
                        </div>
                        <span className="text-xs font-mono text-slate-500 bg-white/4 px-3 py-1.5 rounded-lg border border-white/6">
                          {item.year}
                        </span>
                      </div>

                      <h3 className="font-bold text-white text-base sm:text-lg mb-2 leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {item.tags.map(tag => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded-md text-xs font-mono text-slate-500 bg-white/4 border border-white/6"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                )
              })}

              {/* Future placeholder */}
              <motion.div
                variants={staggerItem}
                className="relative sm:pl-20"
              >
                <div className="hidden sm:flex absolute left-0 top-6 w-16 items-center">
                  <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 border-dashed flex items-center justify-center text-slate-600 ml-[3px]">
                    +
                  </div>
                </div>
                <div className="bento-card border border-dashed border-white/10 p-5 sm:p-6 opacity-60">
                  <p className="text-slate-500 text-sm font-mono">
                    🎯 Next chapter loading... — Internship / First role
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
