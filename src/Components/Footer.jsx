import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <p>
          Built with <span className="footer__heart">♥</span> using React &amp; React Router
        </p>
        <p>© {new Date().getFullYear()} MyApp. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer