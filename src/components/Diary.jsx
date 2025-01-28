import React, { useState } from 'react';

function Diary() {
  // Updated mock data: Day-to-day usage of AI-powered glass
  const [dailySummaries] = useState([
    {
      date: '2025-01-20',
      summary: 'Walked to the park and tested real-time translation with neighbors.',
      details: `
• Went for a brisk morning walk wearing AI Glass.
• It recognized my neighbor Bob and displayed his name.
• Used the real-time translation feature during a chat with a new French neighbor.
• Great feedback on accuracy, but found a slight delay in noisy environments.
      `,
    },
    {
      date: '2025-01-21',
      summary: 'Visited a cafe and practiced using gesture-based navigation on Glass.',
      details: `
• Morning coffee with AI Glass on — tried gesture commands to scroll through the news.
• The Glass identified my usual coffee order and showed nutrition info.
• Afternoon grocery shopping: scanned items to compare prices and track ingredients.
• Encountered a bug where voice assistant repeated itself; noted for future fix.
      `,
    },
    {
      date: '2025-01-22',
      summary: 'Went hiking and tested outdoor features like sun glare reduction.',
      details: `
• Headed to the mountains for a day hike. 
• Glass displayed trail maps and recognized local wildlife (deer, squirrels).
• Confirmed the new anti-glare coating works better but still challenging in direct sunlight.
• Battery life lasted about 6 hours with constant GPS usage.
      `,
    },
    {
      date: '2025-01-23',
      summary: 'Tested personal scheduler and face recognition at a networking event.',
      details: `
• AI Glass displayed calendar reminders and alerted me of upcoming meetings.
• At the networking event, it recognized known contacts and showed their LinkedIn details.
• Took voice notes of new connections and automatically saved contact details.
• Observed occasional lag when scanning multiple faces in quick succession.
      `,
    },
    {
      date: '2025-01-24',
      summary: 'Explored workout tracking features during a gym session.',
      details: `
• Used AI Glass to monitor reps and heart rate during weight lifting.
• The Glass auto-logged sets and displayed real-time heart rate.
• Afterwards, an AI-driven summary offered recovery suggestions.
• Overall impressed with the new sensor accuracy but discovered a minor UI glitch in the stats display.
      `,
    },
  ]);

  // Search term
  const [searchTerm, setSearchTerm] = useState('');

  // Modal state
  const [selectedEntry, setSelectedEntry] = useState(null);

  // Handler to show the modal
  const showModal = (entry) => {
    setSelectedEntry(entry);
  };

  // Handler to close the modal
  const closeModal = () => {
    setSelectedEntry(null);
  };

  // Filter logic (case-insensitive) against date or summary text
  const filteredSummaries = dailySummaries.filter((entry) => {
    const lowerSearch = searchTerm.toLowerCase();
    return (
      entry.date.toLowerCase().includes(lowerSearch) ||
      entry.summary.toLowerCase().includes(lowerSearch)
    );
  });

  return (
    <div style={styles.pageContainer}>
      <div style={styles.diaryContainer}>
        <h1 style={styles.heading}>My Diary</h1>
        <p style={styles.description}>
          Search for a particular date or keyword to find the relevant summary:
        </p>
        <input
          style={styles.searchInput}
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div style={styles.resultsContainer}>
          {filteredSummaries.length > 0 ? (
            filteredSummaries.map((entry, index) => (
              <div
                key={index}
                style={styles.entryCard}
                onClick={() => showModal(entry)} // open modal on click
              >
                <div style={styles.entryDate}>{entry.date}</div>
                <div style={styles.entrySummary}>{entry.summary}</div>
              </div>
            ))
          ) : (
            <div style={styles.noResults}>No matching results.</div>
          )}
        </div>
      </div>

      {/* Modal Implementation */}
      {selectedEntry && (
        <div style={styles.modalOverlay} onClick={closeModal}>
          <div
            style={styles.modalContent}
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside modal
          >
            <p>
              {selectedEntry.details}
            </p>
            <button style={styles.closeButton} onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// Basic inline styling
const styles = {
  pageContainer: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'sans-serif',
    padding: '20px',
  },
  diaryContainer: {
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
  entryCard: {
    backgroundColor: '#fafafa',
    borderRadius: '8px',
    padding: '15px',
    marginBottom: '10px',
    boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
    cursor: 'pointer',
  },
  entryDate: {
    fontSize: '16px',
    fontWeight: 'bold',
    marginBottom: '6px',
    color: '#007bff',
  },
  entrySummary: {
    fontSize: '14px',
    lineHeight: '1.5',
    color: '#333',
  },
  noResults: {
    textAlign: 'center',
    color: '#999',
    marginTop: '20px',
    fontStyle: 'italic',
  },
  // Modal styles
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modalContent: {
    backgroundColor: '#98AB8E',
    padding: '20px',
    borderRadius: '8px',
    width: '90%',
    maxWidth: '500px',
    position: 'relative',
  },
  closeButton: {
    backgroundColor: '#007bff',
    color: '#000',
    padding: '8px 16px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    display: 'block',     // Make the button a block-level element
    margin: '20px auto 0' // Center the button horizontally
  },
};

export default Diary;
