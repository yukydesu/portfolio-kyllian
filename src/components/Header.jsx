import { useState } from 'react'

function Header({ toggleTheme, isDark }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMenuOpen(false)
    }
  }

  return (
    <header className="header">
      <div className="header-container">
        <h2 className="logo">KD</h2>

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
