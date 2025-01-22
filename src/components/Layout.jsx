import React from 'react';
import Navbar from './Navbar';
import { useLocation } from 'react-router-dom';

function Layout({ children }) {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const layoutStyle = {
    minHeight: '100vh',
    margin: 0,
    padding: 0
  };

  const contentStyle = {
    color: 'white',
    backgroundColor: isHomePage ? 'transparent' : 'rgba(0, 0, 0, 0.9)',
    minHeight: 'calc(100vh - 64px)',
    margin: 0
  };

  // Add this to ensure no default margins/padding from the body
  React.useEffect(() => {
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    return () => {
      document.body.style.margin = '';
      document.body.style.padding = '';
    };
  }, []);

  return (
    <div style={layoutStyle}>
      <Navbar />
      <div style={contentStyle}>
        {children}
      </div>
    </div>
  );
}

export default Layout; 