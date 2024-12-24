import { AnimateInView } from "./AnimateInView"

export function Section() {
  return (
    <section className="my-section">
      <AnimateInView>
        <h2 className="display-text gradient-text">Section Title</h2>
      </AnimateInView>
      
      <AnimateInView delay={0.2}>
        <p>Section content that fades in after the title</p>
      </AnimateInView>
      
      {/* For lists, stagger the animations */}
      <div className="features-grid">
        {features.map((feature, i) => (
          <AnimateInView key={feature.title} delay={0.1 * i}>
            <div className="feature-card">
              {feature.content}
            </div>
          </AnimateInView>
        ))}
      </div>
    </section>
  )
} 