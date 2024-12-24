import { motion } from 'framer-motion'
import AnimatedText from './hero/AnimatedText'
import monogramLogo from '../assets/images/RIALTO_MonogramLogo_White.png'
import './Hero.css'

const Hero = () => {
  const texts = ["art galleries.", "antique dealers.", "design galleries."]
  
  return (
    <section className="hero">
      <div className="container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img 
            src={monogramLogo} 
            alt="Rialto" 
            className="hero-logo"
          />
          <div className="hero-text">
            <span className="hero-prefix">An automation engine for </span>
            <AnimatedText texts={texts} />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero