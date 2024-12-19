import { FC } from 'react'
import { motion } from 'framer-motion'
import './Navbar.css'

const Navbar: FC = () => {
  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const linkVariants = {
    hidden: { opacity: 0, y: -20 },
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
    <motion.nav 
      className="navbar"
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="container">
        <motion.div 
          className="logo"
          variants={linkVariants}
        >
          RIALTO
        </motion.div>
        <motion.ul 
          className="nav-links"
          variants={linkVariants}
        >
          <li><a href="#features">Features</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </motion.ul>
      </div>
    </motion.nav>
  )
}

export default Navbar 