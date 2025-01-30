import React, { useState } from 'react';

function ChatbotPerson() {
  const [showModal, setShowModal] = useState(false);
  const [userInput, setUserInput] = useState('');

  const handleSend = () => {
    // Your search logic could go here.
    // For now, it just opens the modal:
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div style={styles.container}>
      {/* Keyframe animation for consistency with your existing fade-in-up effect */}
      <style>
        {`
          @keyframes fadeInUp {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>

      {/* Input for chat text */}
      <input
        style={styles.input}
        type="text"
        placeholder="Type a description of a person"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleSend();
          }
        }}
      />

      {/* Button that opens the modal */}
      <button style={styles.sendButton} onClick={handleSend}>
        Search
      </button>

      {showModal && (
        <div style={styles.backdrop}>
          <div style={styles.modal}>
            {/* A flex container that aligns an image on the left and text on the right */}
            <div style={styles.modalContent}>
              <img
                src={require('../assets/images/samplemodal.jpg')}
                alt="Sample"
                style={styles.modalImage}
              />
              <div>
                <h2 style={styles.modalTitle}>Patricia Jansen</h2>
                <p style={styles.modalDescription}>
                  Patricia is a 25-year-old woman who is currently working as a
                  software engineer. She is a very friendly and outgoing person,
                  and she loves to make new friends. She is also very passionate
                  about her work, and she is always looking for ways to improve
                  her skills.
                </p>
              </div>
            </div>
            <button style={styles.closeButton} onClick={handleClose}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// Reuse (and adjust) styling to keep the same “look and feel”
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    width: '100%',
  },
  input: {
    width: '300px',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    marginBottom: '10px',
    fontSize: '16px',
  },
  sendButton: {
    width: '300px',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#28a745',
    color: '#000',
    cursor: 'pointer',
    fontSize: '16px',
  },
  backdrop: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    backgroundColor: '#000',
    padding: '20px',
    borderRadius: '8px',
    animation: 'fadeInUp 0.3s ease-out',
    maxWidth: '400px',
    width: '100%',
  },
  modalContent: {
    display: 'flex',
    alignItems: 'flex-start', // or center if you prefer vertical centering
    marginBottom: '1rem',
  },
  modalImage: {
    width: '150px',
    height: '150px',
    marginRight: '16px',
    objectFit: 'cover',
  },
  modalTitle: {
    marginTop: 0,
  },
  modalDescription: {
    marginBottom: '1rem',
  },
  closeButton: {
    border: 'none',
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '8px 12px',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default ChatbotPerson;

