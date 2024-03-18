import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./containers/Home/Home";
import Footer from "./components/Footer";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

import "./App.scss";
import "./dark-mode.scss";
import Projects from "./containers/Projects/Projects";

import About from "./containers/About/About";

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'light'
  );
  const onUpdateTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = theme;
  }, [theme]);

  return (
    <Router>
      <div className="app">
        <Navbar onUpdateTheme={onUpdateTheme} theme={theme} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
