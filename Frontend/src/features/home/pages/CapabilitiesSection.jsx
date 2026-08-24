import React from 'react'

export const CapabilitiesSection = () => {
  const capabilities = [
    { num: '01', title: 'Digital Identity' },
    { num: '02', title: 'Design Engineering' },
    { num: '03', title: 'Editorial Platforms' }
  ]

  return (
    <section className="home-capabilities">
      <div className="capabilities-header-grid">
        <div className="capabilities-left">
          <span className="label-caps capabilities-tag">[ CAPABILITIES ]</span>
        </div>
        <div className="capabilities-right">
          <p className="capabilities-statement headline-lg">
            We engineer digital environments that balance technical rigor with editorial grace.
          </p>
        </div>
      </div>

      {/* Capability Items */}
      <div className="capabilities-list">
        {capabilities.map((item) => (
          <div key={item.num} className="capability-item hairline-top">
            <span className="capability-num label-caps">{item.num}</span>
            <h3 className="capability-title display-lg">{item.title}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CapabilitiesSection
