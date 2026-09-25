import React, { useEffect, useRef } from 'react'

const skills = [
  { icon: '⚛️', name: 'React', level: 'Advanced', percent: 90 },
  { icon: '🟨', name: 'JavaScript', level: 'Advanced', percent: 85 },
  { icon: '🎨', name: 'CSS', level: 'Intermediate', percent: 75 },
  { icon: '🌐', name: 'HTML', level: 'Advanced', percent: 95 },
  { icon: '🧭', name: 'React Router', level: 'Intermediate', percent: 70 },
  { icon: '⚡', name: 'Vite', level: 'Intermediate', percent: 65 },
]

const Skills = () => {
  const barsRef = useRef([])

  useEffect(() => {
    // Animate bars on mount
    const timeout = setTimeout(() => {
      barsRef.current.forEach((bar, i) => {
        if (bar) {
          bar.style.width = `${skills[i].percent}%`
        }
      })
    }, 100)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <section className="skills page">
      <div className="container">
        <div className="skills__header">
          <h1 className="skills__title">
            My <span className="gradient-text">Skills</span>
          </h1>
          <p className="skills__desc">
            Technologies and tools I work with, visualized with animated progress bars.
          </p>
        </div>
        <div className="skills__grid">
          {skills.map((skill, i) => (
            <div className="skill-card" key={skill.name}>
              <div className="skill-card__icon">{skill.icon}</div>
              <h3 className="skill-card__name">{skill.name}</h3>
              <p className="skill-card__level">{skill.level}</p>
              <div className="skill-card__bar">
                <div
                  className="skill-card__fill"
                  ref={(el) => (barsRef.current[i] = el)}
                  style={{ width: '0%' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
