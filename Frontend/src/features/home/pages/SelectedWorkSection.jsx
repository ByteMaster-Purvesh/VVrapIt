import React from 'react'

export const SelectedWorkSection = () => {
  return (
    <div className="home-dark-surface">
      <div className="content-container">
        <section className="home-selected-work">
          {/* Header with Title and Year Range */}
          <div className="work-header">
            <h2 className="work-title">Selected Work</h2>
            <span className="work-years label-caps">[ 2023 - 2024 ]</span>
          </div>

          {/* Hairline Divider */}
          <div className="work-divider"></div>

          {/* Work Content List */}
          <div className="work-list">
            {/* Item 1: Lumina Foundation */}
            <div className="work-item work-item-right">
              <div className="work-media-col"></div>
              <div className="work-details-col">
                <span className="label-caps project-category">ARCHITECTURE / DIGITAL</span>
                <h3 className="project-title">Lumina Foundation</h3>
                <p className="project-description">
                  A complete digital overhaul focusing on spatial reasoning and typographic hierarchy to reflect their built environments.
                </p>
                <div className="project-indicator"></div>
              </div>
            </div>

            {/* Item 2: Aura Capital */}
            <div className="work-item work-item-left">
              <div className="work-details-col">
                <span className="label-caps project-category">FINANCE / IDENTITY</span>
                <h3 className="project-title">Aura Capital</h3>
                <p className="project-description">
                  Translating quantitative complexity into intuitive, cinematic data visualizations for private wealth management.
                </p>
                <div className="project-indicator"></div>
              </div>
              <div className="work-media-col"></div>
            </div>
          </div>

          {/* View All Archives CTA Button */}
          <div className="work-cta-container">
            <button className="view-archives-btn label-caps">
              VIEW ALL ARCHIVES <span className="btn-arrow">&rarr;</span>
            </button>
          </div>
        </section>
      </div>
    </div>
  )
}

export default SelectedWorkSection
