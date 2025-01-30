import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Chatbot from './components/Chatbot';
import ChatbotPerson from './components/ChatbotPerson';
import Diary from './components/Diary';
import AppStore from './components/AppStore';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/chatbot-person" element={<ChatbotPerson />} />
          <Route path="/diary" element={<Diary />} />
          <Route path="/app-store" element={<AppStore />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

