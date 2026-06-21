import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import { skillCategories } from '../data/portfolio'
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from '../animations/variants'

const categoryColorMap = {
  indigo:  {
    bg: 'bg-indigo-500/8',  border: 'border-indigo-500/20',
    text: 'text-indigo-400', bar: 'bg-indigo-500', activeBorder: 'border-indigo-500/50',
  },
  violet:  {
    bg: 'bg-violet-500/8',  border: 'border-violet-500/20',
    text: 'text-violet-400', bar: 'bg-violet-500', activeBorder: 'border-violet-500/50',
  },
  green:   {
    bg: 'bg-emerald-500/8', border: 'border-emerald-500/20',
    text: 'text-emerald-400',bar: 'bg-emerald-500',activeBorder: 'border-emerald-500/50',
  },
  orange:  {
    bg: 'bg-orange-500/8',  border: 'border-orange-500/20',
    text: 'text-orange-400', bar: 'bg-orange-500', activeBorder: 'border-orange-500/50',
  },
  pink:    {
    bg: 'bg-pink-500/8',    border: 'border-pink-500/20',
    text: 'text-pink-400',   bar: 'bg-pink-500',   activeBorder: 'border-pink-500/50',
  },
  emerald: {
    bg: 'bg-emerald-500/8', border: 'border-emerald-500/20',
    text: 'text-emerald-400', bar: 'bg-emerald-500', activeBorder: 'border-emerald-500/50',
  },
  cyan:    {
    bg: 'bg-cyan-500/8',    border: 'border-cyan-500/20',
    text: 'text-cyan-400',   bar: 'bg-cyan-500',   activeBorder: 'border-cyan-500/50',
  },
}

function SkillBar({ name, level, icon, color }) {
  const c = categoryColorMap[color]
  return (
    <motion.div
      variants={staggerItem}
      className="group"
    >
      <div className="flex items-center justify-between mb-1.5">
        <div className="flex items-center gap-2">
          <span className="text-base">{icon}</span>
          <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
            {name}
          </span>
        </div>
        <span className={`text-xs font-mono font-semibold ${c.text}`}>{level}%</span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          className={`h-full rounded-full ${c.bar}`}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={viewportOnce}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.1 }}
        />
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState(skillCategories[0].id)
  const activeCategory = skillCategories.find(c => c.id === activeTab)
  const c = categoryColorMap[activeCategory.color]

  return (
    <section id="skills" className="section relative overflow-hidden">
      {/* Bg accent */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-indigo-500/6 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Tech Stack"
          title="Skills & Technologies"
          subtitle="A curated set of tools I use to build modern, full-stack web applications."
        />

        {/* ── Bento Grid: Top Row (Category Cards) ──────── */}
        <motion.div
          variants={staggerContainer(0.08, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8"
        >
          {skillCategories.map((cat) => {
            const cc = categoryColorMap[cat.color]
            const isActive = activeTab === cat.id
            return (
              <motion.button
                key={cat.id}
                type="button"
                variants={staggerItem}
                onClick={() => setActiveTab(cat.id)}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className={`bento-card p-4 text-center cursor-pointer border transition-all duration-200 ${
                  isActive
                    ? `${cc.bg} ${cc.activeBorder} shadow-lg`
                    : 'border-white/7 hover:border-white/15'
                }`}
              >
                <div className="text-2xl mb-2">{cat.emoji}</div>
                <div className={`text-xs font-semibold font-mono ${isActive ? cc.text : 'text-slate-400'}`}>
                  {cat.label}
                </div>
                <div className="text-xs text-slate-600 mt-0.5">
                  {cat.skills.length} skills
                </div>
              </motion.button>
            )
          })}
        </motion.div>

        {/* ── Skill Detail Panel ─────────────────────────── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{   opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className={`bento-card border p-6 sm:p-8 ${c.border}`}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className={`w-10 h-10 rounded-xl ${c.bg} flex items-center justify-center text-xl`}>
                {activeCategory.emoji}
              </div>
              <div>
                <h3 className={`font-bold text-lg ${c.text}`}>{activeCategory.label}</h3>
                <p className="text-xs text-slate-500 font-mono">{activeCategory.skills.length} technologies</p>
              </div>
            </div>

            <motion.div
              variants={staggerContainer(0.08)}
              initial="hidden"
              animate="visible"
              className="grid sm:grid-cols-2 gap-x-12 gap-y-5"
            >
              {activeCategory.skills.map(skill => (
                <SkillBar
                  key={skill.name}
                  {...skill}
                  color={activeCategory.color}
                />
              ))}
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* ── Bottom Bento: Quick Tech Logos ─────────────── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-8 bento-card border border-white/7 p-5"
        >
          <p className="text-xs font-mono text-slate-500 mb-4 text-center">Full technology overview</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {skillCategories.flatMap(cat =>
              cat.skills.map(skill => (
                <span
                  key={`${cat.id}-${skill.name}`}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-slate-400 bg-white/4 border border-white/6 hover:text-slate-200 hover:bg-white/8 transition-all duration-150 cursor-default"
                >
                  <span>{skill.icon}</span>
                  {skill.name}
                </span>
              ))
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
