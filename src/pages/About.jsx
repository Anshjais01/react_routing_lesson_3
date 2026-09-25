import React from 'react'

const cards = [
  {
    icon: '⚡',
    title: 'Fast & Modern',
    text: 'Built with Vite and React 19 for blazing-fast development and optimized production builds.',
  },
  {
    icon: '🧭',
    title: 'Client-Side Routing',
    text: 'Seamless page transitions powered by React Router — no full-page reloads needed.',
  },
  {
    icon: '🎨',
    title: 'Clean Design',
    text: 'A polished dark-themed interface with smooth animations and responsive layouts.',
  },
]

const About = () => {
  return (
    <section className="about page">
      <div className="container">
        <div className="about__header">
          <h1 className="about__title">
            About <span className="gradient-text">This App</span>
          </h1>
          <p className="about__desc">
            A learning project demonstrating React Router fundamentals — pages,
            navigation, and component composition.
          </p>
        </div>
        <div className="about__grid">
          {cards.map((card, i) => (
            <div className="about__card" key={i}>
              <div className="about__card-icon">{card.icon}</div>
              <h3 className="about__card-title">{card.title}</h3>
              <p className="about__card-text">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About