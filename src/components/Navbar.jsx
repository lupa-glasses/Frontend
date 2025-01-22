import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
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
    display: 'flex',
    gap: '2.5rem',
    margin: 0,
    padding: 0
  };

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
    <nav style={navStyle}>
      <Link to="/" style={logoContainerStyle}>
        <div style={logoStyle}>
          LUPA
        </div>
      </Link>

      <ul style={ulStyle}>
        <li>
          <Link 
            to="/" 
            style={linkStyle}
            onMouseOver={e => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
            onMouseOut={e => e.target.style.backgroundColor = 'transparent'}
          >
            Home
          </Link>
        </li>
        <li>
          <Link 
            to="/chatbot" 
            style={linkStyle}
            onMouseOver={e => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
            onMouseOut={e => e.target.style.backgroundColor = 'transparent'}
          >
            Chatbot
          </Link>
        </li>
        <li>
          <Link 
            to="/history" 
            style={linkStyle}
            onMouseOver={e => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
            onMouseOut={e => e.target.style.backgroundColor = 'transparent'}
          >
            History
          </Link>
        </li>
        <li>
          <Link 
            to="/extension-store" 
            style={linkStyle}
            onMouseOver={e => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
            onMouseOut={e => e.target.style.backgroundColor = 'transparent'}
          >
            Extension Store
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar; 