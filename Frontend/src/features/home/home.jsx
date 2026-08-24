import React from 'react'
import './home.css'

import HeroSection from './pages/HeroSection.jsx'
import IntentSection from './pages/IntentSection.jsx'
import SelectedWorkSection from './pages/SelectedWorkSection.jsx'
import CapabilitiesSection from './pages/CapabilitiesSection.jsx'
import StartDialogueSection from './pages/StartDialogueSection.jsx'
import FooterSection from './pages/FooterSection.jsx'

export const Home = () => {
  return (
    <div className="home-wrapper">
      {/* 1. HERO / LANDING PAGE & INTENT (Light Surface) */}
      <div className="home-light-surface bg-dot-matrix">
        <div className="content-container">
          <HeroSection />
          <IntentSection />
        </div>
      </div>

      {/* 2. SELECTED WORK PAGE (Dark Surface - Lumina Foundation & Aura Capital) */}
      <SelectedWorkSection />

      {/* 3. CAPABILITIES PAGE (Light Surface - Digital Identity, Design Engineering, Editorial Platforms) */}
      <div className="home-light-surface bg-dot-matrix">
        <div className="content-container">
          <CapabilitiesSection />
        </div>
      </div>

      {/* 4. START A DIALOGUE PAGE */}
      <StartDialogueSection />

      {/* 5. FOOTER */}
      <FooterSection />
    </div>
  )
}

export default Home
