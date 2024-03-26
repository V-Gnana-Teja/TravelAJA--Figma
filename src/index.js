import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Discover from './Discover'; 
import Services from './Services';
import News from './News';
import About from './About'
import Contact from './Contact'
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Routes>
  <Route path="/" element={<App />} />
  <Route path="/discover" element={<Discover />} />
  <Route path="/services" element={<Services />} />
  <Route path="/news" element={<News />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
</Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
 