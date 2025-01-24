import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navStyle = {
    padding: '0.8rem',
    backgroundColor: '#333333',
    boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
    fontFamily: "'Montserrat', 'Helvetica Neue', sans-serif",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  };

  const logoContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    textDecoration: 'none',
    marginLeft: '1rem'
  };

  const logoStyle = {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    textDecoration: 'none',
    fontFamily: "'Montserrat', sans-serif",
    background: 'linear-gradient(45deg, #4CAF50, #00f2ff)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    letterSpacing: '1px'
  };

  // The nav <ul>, toggled by isOpen on small screens
  const ulStyle = {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    // If isOpen is true, show flex; otherwise hide it for small screens
    display: isOpen ? 'flex' : 'none',
    flexDirection: 'column',
    gap: '1rem',
    textAlign: 'center'
  };

  // We will hide this button above 600px with a media query
  const hamburgerButtonStyle = {
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer'
  };

  // The 3 lines in the hamburger
  const hamburgerLineStyle = {
    width: '25px',
    height: '3px',
    backgroundColor: '#fff',
    margin: '4px 0',
    transition: '0.4s'
  };

  // Link styling
  const linkStyle = {
    color: '#ffffff',
    textDecoration: 'none',
    fontWeight: '500',
    fontSize: '1rem',
    letterSpacing: '0.5px',
    padding: '0.4rem 1rem',
    borderRadius: '4px',
    transition: 'all 0.3s ease',
    textTransform: 'uppercase'
  };

  return (
    <div>
      {/* 
        Media queries to:
        - Hide the hamburger button on screens wider than 600px
        - Always show the nav list in a row when over 600px 
      */}
      <style>
        {`
          /* Hide hamburger button on screens > 600px */
          @media (min-width: 601px) {
            .hamburger-button {
              display: none;
            }
            /* Always show nav links horizontally on larger screens */
            .nav-links {
              display: flex !important;
              flex-direction: row !important;
              gap: 2.5rem;
            }
          }

          /* Show hamburger button on screens <= 600px */
          @media (max-width: 600px) {
            .hamburger-button {
              display: block;
            }
          }
        `}
      </style>

      <nav style={navStyle}>
        {/* LOGO */}
        <Link to="/" style={logoContainerStyle}>
          <div style={logoStyle}>LUPA</div>
        </Link>

        {/* HAMBURGER BUTTON (hidden above 600px) */}
        <button
          className="hamburger-button"
          style={hamburgerButtonStyle}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            // Show "X" when expanded
            <span style={{ fontSize: '1.5rem', color: '#fff' }}>
              &times;
            </span>
          ) : (
            // Show 3 lines (hamburger) when collapsed
            <>
              <div style={hamburgerLineStyle} />
              <div style={hamburgerLineStyle} />
              <div style={hamburgerLineStyle} />
            </>
          )}
        </button>

        {/* NAV LINKS */}
        <ul className="nav-links" style={ulStyle}>
          <li>
            <Link
              to="/"
              style={linkStyle}
              onMouseOver={(e) => (e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)')}
              onMouseOut={(e) => (e.target.style.backgroundColor = 'transparent')}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/chatbot"
              style={linkStyle}
              onMouseOver={(e) => (e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)')}
              onMouseOut={(e) => (e.target.style.backgroundColor = 'transparent')}
            >
              Chatbot
            </Link>
          </li>
          <li>
            <Link
              to="/diary"
              style={linkStyle}
              onMouseOver={(e) => (e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)')}
              onMouseOut={(e) => (e.target.style.backgroundColor = 'transparent')}
            >
              My Diary
            </Link>
          </li>
          <li>
            <Link
              to="/app-store"
              style={linkStyle}
              onMouseOver={(e) => (e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)')}
              onMouseOut={(e) => (e.target.style.backgroundColor = 'transparent')}
            >
              App Store
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;

