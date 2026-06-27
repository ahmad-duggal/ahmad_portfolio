import { motion } from 'framer-motion'
import { Award, ExternalLink, Calendar, ShieldCheck } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import { certifications } from '../data/portfolio'
import { staggerContainer, staggerItem, viewportOnce } from '../animations/variants'

export default function Certifications() {
  if (!certifications || certifications.length === 0) return null

  return (
    <section id="certifications" className="section relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Credentials"
          title="Certifications"
          subtitle="Professional credentials validating my technical knowledge and skills."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              whileHover={{ y: -4, scale: 1.01 }}
              className="bento-card p-6 border border-white/5 hover:border-emerald-500/20 transition-colors group flex flex-col h-full"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/20 transition-colors">
                  <Award className="w-6 h-6" />
                </div>
                {cert.status && (
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {cert.status}
                  </span>
                )}
              </div>

              {/* Title & Issuer */}
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                {cert.title}
              </h3>
              <p className="text-slate-400 font-medium mb-4 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                {cert.issuer}
              </p>

              {/* Details */}
              <div className="mt-auto pt-4 border-t border-white/5 space-y-3">
                <div className="flex items-center gap-3 text-sm text-slate-400">
                  <Calendar className="w-4 h-4 text-slate-500" />
                  <span className="font-mono">{cert.date}</span>
                </div>

                {/* Optional Credential ID */}
                {cert.credentialId && (
                  <div className="text-xs font-mono text-slate-500 truncate">
                    ID: {cert.credentialId}
                  </div>
                )}
                
                {/* View Certificate Button */}
                {cert.certificateUrl && (
                  <a
                    href={cert.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 w-full py-2.5 rounded-lg font-mono text-xs font-semibold flex items-center justify-center gap-2 bg-white/5 text-slate-300 hover:bg-emerald-500 hover:text-white transition-all"
                  >
                    View Certificate
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
