import { LazyMotion, domAnimation } from 'framer-motion'

const ContentSection: FC<SectionProps> = (props) => {
  const reducedMotion = useReducedMotion()
  
  // Only load animations if reduced motion is not preferred
  return reducedMotion ? (
    <section>{/* Static content */}</section>
  ) : (
    <LazyMotion features={domAnimation}>
      {/* Animated content */}
    </LazyMotion>
  )
} 