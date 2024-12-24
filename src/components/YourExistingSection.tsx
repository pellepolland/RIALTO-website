import { AnimateInView } from "./AnimateInView"

export function YourSection() {
  return (
    <section>
      <AnimateInView>
        <h2>Your Section Title</h2>
      </AnimateInView>
      
      <AnimateInView delay={0.2}>
        <p>Your section content</p>
      </AnimateInView>
    </section>
  )
} 