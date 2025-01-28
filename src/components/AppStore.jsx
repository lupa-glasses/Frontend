import React, { useState } from 'react';

function AppStore() {
  // Example data: a list of apps/apps that use your SDK
  const [apps] = useState([
    {
      name: 'Analytics Pro',
      description:
        'Advanced analytics tool leveraging the MyApp SDK for powerful insights into user behavior.',
    },
    {
      name: 'Chat Booster',
      description:
        'Enhance your chat experience with real-time updates powered by the MyApp Chat SDK.',
    },
    {
      name: 'Theme Switcher',
      description:
        'Allows seamless light/dark theme transitions across all MyApp-enabled interfaces.',
    },
    {
      name: 'Reports Generator',
      description:
        'Automates daily, weekly, or monthly report creation by integrating with MyApp’s data SDK.',
    },
    {
      name: 'SecureAuth',
      description:
        'Offers two-factor authentication and secure login flows through the MyApp security SDK.',
    },
  ]);

  // Search term to filter apps
  const [searchTerm, setSearchTerm] = useState('');

  // Filter the apps based on name or description (case-insensitive)
  const filteredApps = apps.filter((ext) => {
    const lowerSearch = searchTerm.toLowerCase();
    return (
      ext.name.toLowerCase().includes(lowerSearch) ||
      ext.description.toLowerCase().includes(lowerSearch)
    );
  });

  // Simple install handler (mock)
  const handleInstall = (appName) => {
    alert(`You installed: ${appName}`);
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.storeContainer}>
        <h1 style={styles.heading}>App Store</h1>
        <p style={styles.description}>
          Browse and install apps built on our SDKs:
        </p>

        {/* Search input to filter list */}
        <input
          style={styles.searchInput}
          type="text"
          placeholder="Search apps..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* List of (filtered) apps */}
        <div style={styles.resultsContainer}>
          {filteredApps.length > 0 ? (
            filteredApps.map((ext, index) => (
              <div key={index} style={styles.appCard}>
                <div style={styles.appName}>{ext.name}</div>
                <div style={styles.appDesc}>{ext.description}</div>
                <button
                  style={styles.installButton}
                  onClick={() => handleInstall(ext.name)}
                >
                  Install
                </button>
              </div>
            ))
          ) : (
            <div style={styles.noResults}>No matching apps found.</div>
          )}
        </div>
      </div>
    </div>
  );
}

// Basic inline styling, similar to the History component
const styles = {
  pageContainer: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'sans-serif',
    padding: '20px',
  },
  storeContainer: {
    width: '100%',
    maxWidth: '600px',
    backgroundColor: '#98AB8E',
    borderRadius: '10px',
    boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
    padding: '30px',
  },
  heading: {
    textAlign: 'center',
    margin: '0 0 10px 0',
  },
  description: {
    textAlign: 'center',
    color: '#555',
    marginBottom: '20px',
    fontSize: '14px',
  },
  searchInput: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    marginBottom: '20px',
    outline: 'none',
  },
  resultsContainer: {
    maxHeight: '300px',
    overflowY: 'auto',
    paddingRight: '8px',
  },
  appCard: {
    backgroundColor: '#fafafa',
    borderRadius: '8px',
    padding: '15px',
    marginBottom: '10px',
    boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
    display: 'flex',
    flexDirection: 'column',
  },
  appName: {
    fontSize: '16px',
    fontWeight: 'bold',
    marginBottom: '6px',
    color: '#007bff',
  },
  appDesc: {
    fontSize: '14px',
    lineHeight: '1.5',
    color: '#333',
    marginBottom: '10px',
  },
  installButton: {
    alignSelf: 'flex-end',
    padding: '8px 12px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#28a745',
    color: '#fff',
    cursor: 'pointer',
    fontSize: '14px',
  },
  noResults: {
    textAlign: 'center',
    color: '#999',
    marginTop: '20px',
    fontStyle: 'italic',
  },
};

export default AppStore;
