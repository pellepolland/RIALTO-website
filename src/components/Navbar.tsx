import { FC, useEffect, useState } from 'react'
import './Navbar.css'
import monogram from '../assets/images/RIALTO_Monogram_White.png'

const Navbar: FC = () => {
  const [showLogo, setShowLogo] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const updateScroll = () => {
      const viewportHeight = window.innerHeight
      setShowLogo(window.scrollY > viewportHeight - 100)
    }
    
    window.addEventListener('scroll', updateScroll)
    window.addEventListener('resize', updateScroll)
    updateScroll()
    
    return () => {
      window.removeEventListener('scroll', updateScroll)
      window.removeEventListener('resize', updateScroll)
    }
  }, [])

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsTransitioning(true)
    
    // Wait for fade out
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'instant' })
      // Wait a bit after scroll before fading back in
      setTimeout(() => {
        setIsTransitioning(false)
      }, 50)
    }, 400) // Match this with CSS transition duration
  }

  return (
    <>
      <nav className="navbar">
        <div className="nav-content">
          <div className={`logo ${showLogo ? 'visible' : ''}`}>
            <a href="#" onClick={handleLogoClick}>
              <img src={monogram} alt="RIALTO" className="monogram" />
            </a>
          </div>
          <div className="nav-links">
            <a href="#manifesto">MANIFESTO</a>
            <a href="#vibes">VIBES</a>
            <a href="#waitlist" className="shimmer">JOIN WAITLIST</a>
          </div>
        </div>
      </nav>
      <div className={`page-transition ${isTransitioning ? 'active' : ''}`} />
    </>
  )
}

export default Navbar 