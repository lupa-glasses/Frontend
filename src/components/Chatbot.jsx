import React, { useState, useEffect, useRef } from 'react';

function SimpleChatbot() {
  // All messages are kept in this array
  const [messages, setMessages] = useState([]);
  
  // How many of the newest messages we display at once
  const INITIAL_VISIBLE_COUNT = 6;    // show last 6 messages by default
  const LOAD_MORE_COUNT = 6;         // load 6 more when scrolling up
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);

  const [userInput, setUserInput] = useState('');
  
  // Reference to the chat box, so we can adjust scroll
  const chatBoxRef = useRef(null);

  // Whenever messages or visibleCount changes,
  // automatically scroll to the bottom (only if a new message was sent).
  useEffect(() => {
    // After a new message, scroll to bottom
    // (But we only do this if the user is actually sending a new message.)
    // A simple approach is to just scroll to bottom every time messages change:
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages, visibleCount]);

  // Handle user sending a new message
  const handleSend = () => {
    if (!userInput.trim()) return;

    // User message
    const userMessage = {
      text: userInput,
      sender: 'user',
    };

    // Mock bot response
    const botMessage = {
      text: `You said: "${userInput}"`,
      sender: 'bot',
    };

    // Update the messages list (keeping all of them)
    setMessages((prevMessages) => [...prevMessages, userMessage, botMessage]);

    // Always display at least the new pair of messages (2 more)
    // in case visibleCount was small
    setVisibleCount((prev) => {
      let newCount = prev;
      // We add 2 messages: userMessage + botMessage
      // If we don't have enough room to show them, increase visibleCount
      if (messages.length + 2 > prev) {
        newCount = messages.length + 2;
      }
      return newCount;
    });

    // Clear the input
    setUserInput('');
  };

  // Handle scrolling up to load older messages
  const handleScroll = () => {
    const box = chatBoxRef.current;
    if (!box) return;

    // If the user is at the top, load older messages
    if (box.scrollTop === 0) {
      setVisibleCount((prev) => {
        // show older messages in increments
        const newCount = prev + LOAD_MORE_COUNT;
        return Math.min(newCount, messages.length);
      });
    }
  };

  // Only render the last `visibleCount` messages
  const startIndex = Math.max(messages.length - visibleCount, 0);
  const visibleMessages = messages.slice(startIndex);

  return (
    <div style={styles.container}>
      {/* Inline keyframe definition for fadeInUp */}
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

      <div style={styles.chatBox} ref={chatBoxRef} onScroll={handleScroll}>
        {visibleMessages.map((msg, index) => (
          <div
            key={index}
            style={
              msg.sender === 'user'
                ? { ...styles.userMessage, ...styles.animatedMessage }
                : { ...styles.botMessage, ...styles.animatedMessage }
            }
          >
            {msg.text}
          </div>
        ))}
      </div>

      <input
        style={styles.input}
        type="text"
        placeholder="Type a message..."
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            handleSend();
          }
        }}
      />
      <button style={styles.sendButton} onClick={handleSend}>
        Send
      </button>
    </div>
  );
}

const styles = {
  container: {
    /* Center the chatbot on the page */
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    /* Take up full viewport height */
    height: '100vh',
    width: '100%',
    backgroundColor: '#f2f2f2',
  },
  chatBox: {
    width: '300px',
    height: '400px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    marginBottom: '10px',
    padding: '10px',
    backgroundColor: '#fff',

    /* Allow scrolling to see older messages */
    overflowY: 'auto',

    display: 'flex',
    flexDirection: 'column',
  },
  userMessage: {
    alignSelf: 'flex-end',
    background: '#007bff',
    color: '#fff',
    padding: '8px 12px',
    borderRadius: '16px',
    margin: '4px 0',
    maxWidth: '70%',
    wordWrap: 'break-word',
  },
  botMessage: {
    alignSelf: 'flex-start',
    background: '#e2e2e2',
    padding: '8px 12px',
    borderRadius: '16px',
    margin: '4px 0',
    maxWidth: '70%',
    wordWrap: 'break-word',
  },
  animatedMessage: {
    /* Apply the fade-in-up animation to new messages */
    animation: 'fadeInUp 0.3s ease-out',
  },
  input: {
    width: '300px',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    marginBottom: '10px',
  },
  sendButton: {
    width: '300px',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#28a745',
    color: '#fff',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default SimpleChatbot;
