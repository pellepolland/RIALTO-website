import { FC } from 'react'
import { motion } from 'framer-motion'
import './USPSection.css'

const USPSection: FC = () => {
  return (
    <section className="usp-section">
      <div className="usp-background" />
      <motion.div 
        className="container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2
            }
          }
        }}
      >
        <div className="usp-content">
          <motion.div 
            className="usp-text"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeOut" }
              }
            }}
          >
            <h2>Seamless Integration</h2>
            <p>
              Connect and streamline your workflow with zero friction. 
              Our platform integrates seamlessly with your existing tools, 
              making adoption effortless for your entire team.
            </p>
          </motion.div>
          <motion.div 
            className="usp-visual"
            variants={{
              hidden: { opacity: 0, scale: 0.95 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: { duration: 0.8, ease: "easeOut", delay: 0.2 }
              }
            }}
          >
            {/* Placeholder for visual content */}
            <div className="visual-placeholder"></div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default USPSection 