import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Discover from './Discover'; 
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Routes>
  <Route path="/" element={<App />} />
  <Route path="/discover" element={<Discover />} />
</Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
 