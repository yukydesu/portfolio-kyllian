import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import LearningPortfolio from './sections/LearningPortfolio'
import Contact from './sections/Contact'
import { portfolioData } from './data/portfolioData'
import './App.css'

function App() {
  const [isDark, setIsDark] = useState(false)

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  return (
    <div className={`app ${isDark ? 'dark-theme' : 'light-theme'}`}>
      <Header toggleTheme={toggleTheme} isDark={isDark} />

      <main>
        <Hero data={portfolioData} />
        <About data={portfolioData} />
        <Projects data={portfolioData} />
        <Skills data={portfolioData} />
        <LearningPortfolio data={portfolioData} />
        <Contact data={portfolioData} />
      </main>

      <Footer />
    </div>
  )
}

export default App
