import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__logo">
          <span className="gradient-text">MyApp</span>
        </div>
        <ul className="navbar__links">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => `navbar__link ${isActive ? 'active' : ''}`}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => `navbar__link ${isActive ? 'active' : ''}`}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/skills"
              className={({ isActive }) => `navbar__link ${isActive ? 'active' : ''}`}
            >
              Skills
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar