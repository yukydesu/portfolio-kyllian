import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    // Scroll immédiatement
    window.scrollTo(0, 0)

    // Et aussi après un petit délai pour être sûr
    const timeoutId = setTimeout(() => {
      window.scrollTo(0, 0)
    }, 0)

    return () => clearTimeout(timeoutId)
  }, [pathname])

  return null
}

export default ScrollToTop
