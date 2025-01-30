import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

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

  const ulStyle = {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    display: isOpen ? 'flex' : 'none',
    flexDirection: 'column',
    gap: '1rem',
    textAlign: 'center'
  };

  const hamburgerButtonStyle = {
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer'
  };

  const hamburgerLineStyle = {
    width: '25px',
    height: '3px',
    backgroundColor: '#fff',
    margin: '4px 0',
    transition: '0.4s'
  };

  const getLinkStyle = (path) => ({
    ...linkStyle,
    backgroundColor: location.pathname === path ? 'rgba(255, 255, 255, 0.2)' : 'transparent',
    color: location.pathname === path ? '#4CAF50' : '#ffffff',
  });

  const linkStyle = {
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
      <style>
        {`
          @media (min-width: 601px) {
            .hamburger-button {
              display: none;
            }
            .nav-links {
              display: flex !important;
              flex-direction: row !important;
              gap: 2.5rem;
            }
          }

          @media (max-width: 600px) {
            .hamburger-button {
              display: block;
            }
          }
        `}
      </style>

      <nav style={navStyle}>
        <Link to="/" style={logoContainerStyle}>
          <div style={logoStyle}>LUPA</div>
        </Link>

        <button
          className="hamburger-button"
          style={hamburgerButtonStyle}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <span style={{ fontSize: '1.5rem', color: '#fff' }}>&times;</span>
          ) : (
            <>
              <div style={hamburgerLineStyle} />
              <div style={hamburgerLineStyle} />
              <div style={hamburgerLineStyle} />
            </>
          )}
        </button>

        <ul className="nav-links" style={ulStyle}>
          <li>
            <Link
              to="/"
              style={getLinkStyle('/')}
              onMouseOver={(e) => {
                if (location.pathname !== '/') {
                  e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                }
              }}
              onMouseOut={(e) => {
                if (location.pathname !== '/') {
                  e.target.style.backgroundColor = 'transparent';
                }
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/chatbot"
              style={getLinkStyle('/chatbot')}
              onMouseOver={(e) => {
                if (location.pathname !== '/chatbot') {
                  e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                }
              }}
              onMouseOut={(e) => {
                if (location.pathname !== '/chatbot') {
                  e.target.style.backgroundColor = 'transparent';
                }
              }}
            >
              Chatbot
            </Link>
          </li>
          <li>
            <Link
              to="/diary"
              style={getLinkStyle('/diary')}
              onMouseOver={(e) => {
                if (location.pathname !== '/diary') {
                  e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                }
              }}
              onMouseOut={(e) => {
                if (location.pathname !== '/diary') {
                  e.target.style.backgroundColor = 'transparent';
                }
              }}
            >
              My Diary
            </Link>
          </li>
          <li>
            <Link
              to="/chatbot-person"
              style={getLinkStyle('/chatbot-person')}
              onMouseOver={(e) => {
                if (location.pathname !== '/chatbot-person') {
                  e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                }
              }}
              onMouseOut={(e) => {
                if (location.pathname !== '/chatbot-person') {
                  e.target.style.backgroundColor = 'transparent';
                }
              }}
            >
              Friend Finder
            </Link>
          </li>
          <li>
            <Link
              to="/app-store"
              style={getLinkStyle('/app-store')}
              onMouseOver={(e) => {
                if (location.pathname !== '/app-store') {
                  e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                }
              }}
              onMouseOut={(e) => {
                if (location.pathname !== '/app-store') {
                  e.target.style.backgroundColor = 'transparent';
                }
              }}
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
