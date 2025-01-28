import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../assets/images/background.webp';


function Home() {
  const [isPlaying, setIsPlaying] = useState(false);

  const pageStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `url(${backgroundImage})`,
    // backgroundImage: 'url("/images/background.webp")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    zIndex: -1
  };

  const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    zIndex: -1
  };

  const contentStyle = {
    textAlign: 'center',
    padding: '4rem 2rem',
    maxWidth: '1200px',
    margin: '0 auto',
    position: 'relative'
  };

  const textContainerStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: '2rem',
    borderRadius: '15px',
    backdropFilter: 'blur(5px)',
    maxWidth: '800px',
    margin: '0 auto'
  };

  const headingStyle = {
    fontSize: '3.5rem',
    marginBottom: '1.5rem',
    background: 'linear-gradient(45deg, #00f2ff, #4CAF50)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
    fontWeight: '700'
  };

  const subheadingStyle = {
    fontSize: '1.5rem',
    color: '#ffffff',
    marginBottom: '2rem',
    lineHeight: '1.6',
    textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
    fontWeight: '500'
  };

  const buttonStyle = {
    display: 'inline-block',
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '1rem 2rem',
    borderRadius: '30px',
    textDecoration: 'none',
    fontSize: '1.2rem',
    marginTop: '2rem',
    transition: 'all 0.3s ease',
    border: 'none',
    cursor: 'pointer',
    fontWeight: '600',
    boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
  };

  const videoSectionStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: '4rem 2rem',
    marginTop: '10rem',
    backdropFilter: 'blur(10px)',
    borderRadius: '15px',
    textAlign: 'center'
  };

  const videoContainerStyle = {
    position: 'relative',
    maxWidth: '1000px',
    margin: '2rem auto',
    borderRadius: '15px',
    overflow: 'hidden',
    cursor: 'pointer',
    boxShadow: '0 8px 30px rgba(0,0,0,0.3)'
  };

  const videoThumbnailStyle = {
    width: '100%',
    height: 'auto',
    display: 'block',
    borderRadius: '15px'
  };

  const playButtonStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100px',
    height: '100px',
    backgroundColor: 'rgba(76, 175, 80, 0.9)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    border: '4px solid white'
  };

  const playIconStyle = {
    width: 0,
    height: 0,
    borderTop: '20px solid transparent',
    borderBottom: '20px solid transparent',
    borderLeft: '35px solid white',
    marginLeft: '10px'
  };

  const handleVideoClick = () => {
    setIsPlaying(true);
  };

  return (
    <>
      <div style={pageStyle}></div>
      <div style={overlayStyle}></div>
      <div style={contentStyle}>
        <div style={textContainerStyle}>
          <h1 style={headingStyle}>Welcome to Lupa</h1>
          <p style={subheadingStyle}>
            Experience the future of everyday life with AI-powered smart glasses
          </p>

          <Link 
            to="/order" 
            style={buttonStyle}
            onMouseOver={e => {
              e.target.style.backgroundColor = '#45a049';
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 6px 20px rgba(0,0,0,0.3)';
            }}
            onMouseOut={e => {
              e.target.style.backgroundColor = '#4CAF50';
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
            }}
          >
            Pre-order Now
          </Link>
        </div>

        <div style={videoSectionStyle}>
          <h2 style={{
            fontSize: '2.5rem',
            color: '#00f2ff',
            marginBottom: '1.5rem'
          }}>
            Hear Customer Stories
          </h2>
          <div 
            style={videoContainerStyle}
            onClick={handleVideoClick}
          >
            {!isPlaying ? (
              <>
                <img 
                  src="/images/video-thumbnail.jpg" 
                  alt="Customer Stories"
                  style={videoThumbnailStyle}
                />
                <div 
                  style={playButtonStyle}
                  onMouseOver={e => {
                    e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1.1)';
                    e.currentTarget.style.backgroundColor = 'rgba(76, 175, 80, 1)';
                  }}
                  onMouseOut={e => {
                    e.currentTarget.style.transform = 'translate(-50%, -50%)';
                    e.currentTarget.style.backgroundColor = 'rgba(76, 175, 80, 0.9)';
                  }}
                >
                  <div style={playIconStyle}></div>
                </div>
              </>
            ) : (
              <video
                autoPlay
                controls
                style={videoThumbnailStyle}
              >
                <source src="/videos/customer-stories.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home; 