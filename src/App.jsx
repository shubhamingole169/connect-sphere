import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './pages/Home';
import { ChatProvider } from './context/ChatContext';
import './styles/main.css';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ChatProvider>
      <Router>
        <div className="app">
          <Toaster position="top-right" />
          <Routes>
            <Route path="/" element={<Home theme={theme} setTheme={setTheme} />} />
          </Routes>
        </div>
      </Router>
    </ChatProvider>
  );
}

export default App;