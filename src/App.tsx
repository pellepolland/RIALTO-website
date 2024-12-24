import { FC } from 'react'
import { motion } from 'framer-motion'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ContentSection from './components/ContentSection'

const App: FC = () => {
  return (
    <div className="app">
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        
        <ContentSection 
          title={[
            "Cut the admin.",
            "Do only what you love.",
            "Make more profit."
          ]}
        />

        <ContentSection 
          title={[
            "Your own pixel-perfect website.",
            "On your domain.",
            "Launched in hours, not weeks."
          ]}
          isReversed
        />

        <ContentSection 
          title={[
            "Connected to an automation engine.",
            "Saving you hours every week."
          ]}
        />

        <ContentSection 
          title={[
            "Capabilities you've wanted but never had access to.",
            "At your fingertips."
          ]}
          isReversed
        />
      </main>
    </div>
  )
}

export default App
