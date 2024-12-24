import { useState, useEffect } from 'react'

export function useScrollPosition(threshold: number) {
  const [isPassedThreshold, setIsPassedThreshold] = useState(false)

  useEffect(() => {
    const updateScroll = () => {
      const viewportHeight = window.innerHeight
      setIsPassedThreshold(window.scrollY > viewportHeight - threshold)
    }
    
    window.addEventListener('scroll', updateScroll)
    window.addEventListener('resize', updateScroll)
    updateScroll()
    
    return () => {
      window.removeEventListener('scroll', updateScroll)
      window.removeEventListener('resize', updateScroll)
    }
  }, [threshold])

  return isPassedThreshold
} 