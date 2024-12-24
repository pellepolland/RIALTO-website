import { motion, useInView } from "framer-motion"
import { ReactNode, useRef } from "react"

interface Props {
  children: ReactNode
  className?: string
  delay?: number
}

export function AnimateInView({ children, className = "", delay = 0 }: Props) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-10%" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0.21, 0.47, 0.32, 0.98]
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
} 