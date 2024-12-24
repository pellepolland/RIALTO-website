import { FC, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import './ContentSection.css'

interface ContentSectionProps {
  title: string[];
  isReversed?: boolean;
}

const ContentSection: FC<ContentSectionProps> = ({ title }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const lineAnimations = title.map((_, index) => {
    const startProgress = (index / title.length)
    const endProgress = ((index + 1) / title.length)
    
    return {
      y: useTransform(scrollYProgress, [startProgress, endProgress], [50, 0]),
      opacity: useTransform(scrollYProgress, [startProgress, endProgress], [0, 1])
    }
  })

  return (
    <section 
      ref={containerRef}
      className="content-section"
      style={{ height: '300vh' }}
    >
      <div className="content-section-sticky">
        <div className="container">
          <div className="section-content">
            <div className="section-text">
              {title.map((line, index) => (
                <motion.h2 
                  key={index}
                  style={{ 
                    y: lineAnimations[index].y,
                    opacity: lineAnimations[index].opacity
                  }}
                >
                  {line}
                </motion.h2>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContentSection 