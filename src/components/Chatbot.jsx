import React, { useState, useEffect, useRef } from 'react';

function SimpleChatbot() {
  // All messages are kept in this array
  const [messages, setMessages] = useState([]);

  // User input state
  const [userInput, setUserInput] = useState('');

  // Reference to the chat box, so we can adjust scroll
  const chatBoxRef = useRef(null);

  // Scroll to the bottom when messages change
  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);

  // Function to handle sending messages
  const handleSend = async () => {
    if (!userInput.trim()) return;

    const userMessage = {
      text: userInput,
      sender: 'user',
    };

    setMessages((prevMessages) => [...prevMessages, userMessage]);

    try {
      const response = await fetch('http://127.0.0.1:8000/api/v1/query', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ chat_query: userInput }),
      });

      if (response.ok) {
        const botResponse = await response.text();

        const botMessage = {
          text: botResponse,
          sender: 'bot',
        };

        setMessages((prevMessages) => [...prevMessages, botMessage]);
      } else {
        const errorMessage = {
          text: 'Sorry, something went wrong with the server.',
          sender: 'bot',
        };

        setMessages((prevMessages) => [...prevMessages, errorMessage]);
      }
    } catch (error) {
      const errorMessage = {
        text: 'Error connecting to the server.',
        sender: 'bot',
      };

      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    }

    setUserInput('');
  };

  return (
    <div style={styles.container}>
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

      <div style={styles.chatBox} ref={chatBoxRef}>
        {messages.map((msg, index) => (
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
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    width: '100%',
    backgroundColor: '#f2f2f2',
  },
  chatBox: {
    width: '300px',
    height: '500px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    marginBottom: '10px',
    padding: '10px',
    backgroundColor: '#98AB8E',
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
  },
  userMessage: {
    alignSelf: 'flex-end',
    background: '#007bff',
    color: '#000',
    padding: '8px 12px',
    borderRadius: '16px',
    margin: '4px 0',
    maxWidth: '70%',
    wordWrap: 'break-word',
  },
  botMessage: {
    color: '#000',
    alignSelf: 'flex-start',
    background: '#e2e2e2',
    padding: '8px 12px',
    borderRadius: '16px',
    margin: '4px 0',
    maxWidth: '70%',
    wordWrap: 'break-word',
  },
  animatedMessage: {
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
    color: '#000',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default SimpleChatbot;
