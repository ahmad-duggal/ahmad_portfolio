import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Github, Linkedin, Mail, CheckCircle, AlertCircle, MapPin } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import { personalInfo, socialLinks } from '../data/portfolio'
import { fadeLeft, fadeRight, staggerContainer, staggerItem, viewportOnce } from '../animations/variants'

const iconMap = { Github, Linkedin, Mail }

const socialColors = {
  github:   { bg: 'bg-slate-500/10',  border: 'border-slate-500/20',  text: 'text-slate-400',  hover: 'hover:border-slate-400/40' },
  linkedin: { bg: 'bg-blue-500/10',   border: 'border-blue-500/20',   text: 'text-blue-400',   hover: 'hover:border-blue-400/40' },
  email:    { bg: 'bg-indigo-500/10', border: 'border-indigo-500/20', text: 'text-indigo-400', hover: 'hover:border-indigo-400/40' },
}

const INITIAL = { name: '', email: '', subject: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(INITIAL)
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!form.name.trim())    e.name    = 'Name is required'
    if (!form.email.trim())   e.email   = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email'
    if (!form.message.trim()) e.message = 'Message is required'
    return e
  }

  const handleChange = e => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
    setErrors(er => ({ ...er, [e.target.name]: '' }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }

    setStatus('loading')
    
    try {
      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        }),
      })
      
      const data = await response.json()
      
      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Failed to send message')
      }
      
      setStatus('success')
      setForm(INITIAL)
      setTimeout(() => setStatus('idle'), 5000)
    } catch (error) {
      console.error('Email Send Error:', error)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  return (
    <section id="contact" className="section relative overflow-hidden">
      {/* Bg accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-64 rounded-full bg-indigo-500/8 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Let's Talk"
          title="Get In Touch"
          subtitle="Have a project in mind, an internship opportunity, or just want to say hi? My inbox is always open."
        />

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start">

          {/* ── Left — Info (2 cols) ────────────────────── */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="lg:col-span-2 space-y-6"
          >
            {/* Intro */}
            <div className="bento-card border border-white/8 p-6">
              <h3 className="font-bold text-white text-lg mb-2">Muhammad Ahmad Duggal</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                I'm currently open to internship roles and exciting freelance projects. Whether you have a question or just want to connect — let's talk!
              </p>
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <MapPin className="w-4 h-4 text-indigo-400" />
                Pakistan — Remote friendly
              </div>
            </div>

            {/* Social links */}
            <div className="space-y-3">
              {socialLinks.map(({ id, label, url, icon }) => {
                const Icon = iconMap[icon]
                const c = socialColors[id] || socialColors.email
                return (
                  <motion.a
                    key={id}
                    href={url}
                    target={id !== 'email' ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    whileHover={{ x: 4 }}
                    className={`flex items-center gap-4 p-4 rounded-xl bento-card border ${c.border} ${c.hover} transition-all duration-200 group`}
                  >
                    <div className={`w-10 h-10 flex items-center justify-center rounded-xl ${c.bg}`}>
                      <Icon className={`w-5 h-5 ${c.text}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-slate-500 font-mono">{label}</p>
                      <p className="text-sm text-slate-300 group-hover:text-white truncate transition-colors">
                        {id === 'github'   && 'github.com/ahmad-duggal'}
                        {id === 'linkedin' && 'linkedin.com/in/muhammad-ahmad-duggal'}
                        {id === 'email'    && personalInfo.email}
                      </p>
                    </div>
                  </motion.a>
                )
              })}
            </div>
          </motion.div>

          {/* ── Right — Form (3 cols) ───────────────────── */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="bento-card border border-white/8 p-6 sm:p-8 space-y-5"
              noValidate
            >
              {/* Name + Email row */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-2">
                    Name <span className="text-indigo-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={`w-full bg-white/4 border rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition-all duration-200 focus:bg-white/6 focus:border-indigo-500/60 ${
                      errors.name ? 'border-red-500/50' : 'border-white/10'
                    }`}
                  />
                  {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-2">
                    Email <span className="text-indigo-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className={`w-full bg-white/4 border rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition-all duration-200 focus:bg-white/6 focus:border-indigo-500/60 ${
                      errors.email ? 'border-red-500/50' : 'border-white/10'
                    }`}
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-xs font-mono text-slate-400 mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  className="w-full bg-white/4 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition-all duration-200 focus:bg-white/6 focus:border-indigo-500/60"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-mono text-slate-400 mb-2">
                  Message <span className="text-indigo-400">*</span>
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or opportunity..."
                  rows={5}
                  className={`w-full bg-white/4 border rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition-all duration-200 focus:bg-white/6 focus:border-indigo-500/60 resize-none ${
                    errors.message ? 'border-red-500/50' : 'border-white/10'
                  }`}
                />
                {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                whileHover={{ scale: status === 'idle' ? 1.01 : 1 }}
                whileTap={{ scale: status === 'idle' ? 0.98 : 1 }}
                className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
                  status === 'success'
                    ? 'bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 cursor-default'
                    : status === 'loading'
                    ? 'bg-indigo-500/50 text-white/60 cursor-not-allowed'
                    : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40'
                }`}
              >
                {status === 'loading' && (
                  <motion.div
                    className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                  />
                )}
                {status === 'success' && <CheckCircle className="w-4 h-4" />}
                {status === 'error' && <AlertCircle className="w-4 h-4 text-red-400" />}
                {status === 'idle' && <Send className="w-4 h-4" />}
                {status === 'loading' ? 'Sending...' : status === 'success' ? 'Message Sent!' : status === 'error' ? 'Failed to Send' : 'Send Message'}
              </motion.button>
              
              {status === 'error' && (
                <p className="text-xs text-red-400 text-center font-mono">
                  Failed to send message. Please try again or email directly.
                </p>
              )}

              <p className="text-xs text-slate-600 text-center font-mono">
                I typically respond within 24 hours ⚡
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
