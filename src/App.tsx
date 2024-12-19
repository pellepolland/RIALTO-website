import { FC } from 'react'
import { motion } from 'framer-motion'
import './App.css'
import Navbar from './components/Navbar'

const App: FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <div className="app">
      <header>
        <Navbar />
      </header>
      <main>
        <section className="hero">
          <motion.div 
            className="container"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h1 variants={itemVariants}>
              Welcome to RIALTO
            </motion.h1>
            <motion.p className="subtitle" variants={itemVariants}>
              Streamline your workflow with our next-generation SaaS platform. 
              Built for modern teams who demand performance and reliability.
            </motion.p>
            <motion.div className="cta-buttons" variants={itemVariants}>
              <a href="#demo" className="button primary">Get Started</a>
              <a href="#learn-more" className="button secondary">Learn More</a>
            </motion.div>
          </motion.div>
        </section>
      </main>
    </div>
  )
}

export default App
