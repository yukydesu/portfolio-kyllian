import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

function Header({ toggleTheme, isDark }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const scrollToSection = (id) => {
    setMenuOpen(false)

    // Si on est sur la page principale
    if (location.pathname === '/') {
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      // Si on est sur une autre page, naviguer vers la page principale avec l'ancre
      navigate('/')
      // Attendre que la navigation soit terminée puis scroller
      setTimeout(() => {
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    }
  }

  return (
    <header className="header">
      <div className="header-container">
        <button onClick={() => scrollToSection('hero')} className="logo" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
          KD
        </button>

        <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
          <button onClick={() => scrollToSection('hero')} className="nav-link">
            Accueil
          </button>
          <button onClick={() => scrollToSection('about')} className="nav-link">
            À propos
          </button>
          <button onClick={() => scrollToSection('projects')} className="nav-link">
            Projets
          </button>
          <button onClick={() => scrollToSection('skills')} className="nav-link">
            Compétences
          </button>
          <button onClick={() => scrollToSection('ai-workflow')} className="nav-link">
            IA & Workflow
          </button>
          <button onClick={() => scrollToSection('learning-portfolio')} className="nav-link">
            Bilan BUT 3
          </button>
          <button onClick={() => scrollToSection('contact')} className="nav-link">
            Contact
          </button>
        </nav>

        <div className="header-actions">
          <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
            {isDark ? '☀️' : '🌙'}
          </button>
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
