import React from 'react'
import { motion } from 'framer-motion'

export const HeroSection = () => {
  return (
    <section className="home-hero">
      <motion.div 
        className="hero-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <h1 className="hero-title display-xl">
          <span className="hero-line hero-line-1">We build</span>
          <span className="hero-line hero-line-2">digital</span>
          <span className="hero-line hero-line-3">experiences</span>
          <span className="hero-line hero-line-4 muted-text">people remember.</span>
        </h1>
      </motion.div>
    </section>
  )
}

export default HeroSection
