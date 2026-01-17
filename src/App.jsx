import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import LearningPortfolio from './sections/LearningPortfolio'
import Contact from './sections/Contact'
import ProjectDetail from './pages/ProjectDetail'
import { portfolioData } from './data/portfolioData'
import './App.css'

function HomePage({ portfolioData, isDark, toggleTheme }) {
  return (
    <>
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
    </>
  )
}

function App() {
  const [isDark, setIsDark] = useState(false)

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  return (
    <Router basename="/portfolio-kyllian">
      <ScrollToTop />
      <div className={`app ${isDark ? 'dark-theme' : 'light-theme'}`}>
        <Routes>
          <Route
            path="/"
            element={<HomePage portfolioData={portfolioData} isDark={isDark} toggleTheme={toggleTheme} />}
          />
          <Route
            path="/project/:id"
            element={
              <>
                <Header toggleTheme={toggleTheme} isDark={isDark} />
                <main>
                  <ProjectDetail />
                </main>
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  )
}

export default App
