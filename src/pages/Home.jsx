import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <section className="home page">
      <div className="home__content">
        <span className="home__badge">Welcome</span>
        <h1 className="home__title">
          Explore the <span className="gradient-text">Modern Web</span>
        </h1>
        <p className="home__subtitle">
          A simple three-page React application showcasing client-side routing
          with React Router, beautiful UI, and reusable components.
        </p>
        <div className="home__actions">
          <Link to="/about" className="btn btn--primary">
            Learn More →
          </Link>
          <Link to="/skills" className="btn btn--secondary">
            View Skills
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Home