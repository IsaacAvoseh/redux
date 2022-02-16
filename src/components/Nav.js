import React from 'react'

export default function Nav() {
  return (
      <div>
          <div class="site-header">
          <div className="container">
              <a href="index.html" className="branding">
                  <img src="images/logo.png" alt="" className="logo" />
                  <div className="logo-type">
                      <h1 className="site-title">Redu</h1>
                      <small className="site-description">tagline goes here</small>
                  </div>
              </a>
              {/* Default snippet for navigation */}
              <div className="main-navigation">
                  <button type="button" className="menu-toggle"><i className="fa fa-bars" /></button>
                  <ul className="menu">
                      <li className="menu-item current-menu-item"><a href="index.html">Home</a></li>
                      <li className="menu-item"><a href="news.html">News</a></li>
                      <li className="menu-item"><a href="live-cameras.html">Live cameras</a></li>
                      <li className="menu-item"><a href="photos.html">Photos</a></li>
                      <li className="menu-item"><a href="contact.html">Contact</a></li>
                  </ul> {/* .menu */}
              </div> {/* .main-navigation */}
              <div className="mobile-navigation" />
          </div>
          {/* .site-header */}
      </div>
      </div>

  )
}
