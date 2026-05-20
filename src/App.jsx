import { ThemeProvider } from './context/ThemeContext'
import ScrollProgress from './components/ScrollProgress'
import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Contact from './sections/Contact'

export default function App() {
  return (
    <ThemeProvider>
      {/* ── Global UI overlays ───────────────── */}
      <ScrollProgress />
      <CustomCursor />

      {/* ── Navigation ───────────────────────── */}
      <Navbar />

      {/* ── Main Content ─────────────────────── */}
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      {/* ── Footer ───────────────────────────── */}
      <Footer />
    </ThemeProvider>
  )
}
