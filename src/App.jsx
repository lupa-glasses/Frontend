import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Chatbot from './components/Chatbot';
import History from './components/History';
import ExtensionStore from './components/ExtensionStore';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/history" element={<History />} />
          <Route path="/extension-store" element={<ExtensionStore />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
