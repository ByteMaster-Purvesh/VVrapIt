import React from 'react'

export const FooterSection = () => {
  return (
    <footer className="home-footer bg-dot-matrix hairline-top">
      <div className="content-container">
        <div className="footer-top-grid">
          {/* Left Brand Identity Column */}
          <div className="footer-brand-col">
            <h2 className="footer-logo">VVrapIt.</h2>
            <p className="footer-tagline">
              Engineering quiet luxury through digital precision and high-end editorial curation.
            </p>
          </div>

          {/* Right Navigation Links Columns */}
          <div className="footer-links-grid">
            <div className="footer-link-group">
              <span className="label-caps footer-group-title">STUDIO</span>
              <ul className="footer-link-list">
                <li><a href="#philosophy">Philosophy</a></li>
                <li><a href="#team">Our Team</a></li>
                <li><a href="#careers">Careers</a></li>
              </ul>
            </div>

            <div className="footer-link-group">
              <span className="label-caps footer-group-title">CONNECT</span>
              <ul className="footer-link-list">
                <li><a href="#instagram">Instagram</a></li>
                <li><a href="#linkedin">LinkedIn</a></li>
                <li><a href="#email">Email</a></li>
              </ul>
            </div>

            <div className="footer-link-group">
              <span className="label-caps footer-group-title">LEGAL</span>
              <ul className="footer-link-list">
                <li><a href="#privacy">Privacy</a></li>
                <li><a href="#terms">Terms</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom-bar hairline-top">
          <span className="label-caps footer-copyright">&copy; 2024 VVRAPIT STUDIO</span>
          <span className="label-caps footer-est">EST. MCMXCIV</span>
        </div>
      </div>
    </footer>
  )
}

export default FooterSection
