// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import Men from './components/Men';
import Women from './components/Women';
import Children from './components/Children';
import Login from './components/Login'; 

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check localStorage on initial load
  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', 'true'); // Persist login state
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated'); // Clear login state
  };

  return (
    <Router>
      <div>
        {/* Show navigation only if authenticated */}
        {isAuthenticated && (
          <nav className="bg-gray-800 text-white p-4">
            <ul className="flex space-x-4">
              <li>
                <Link to="/men">Men</Link>
              </li>
              <li>
                <Link to="/women">Women</Link>
              </li>
              <li>
                <Link to="/children">Children</Link>
              </li>
              <li>
                <button onClick={handleLogout} className="text-white">
                  Logout
                </button>
              </li>
            </ul>
          </nav>
        )}

        <Routes>
          <Route path="/login" element={!isAuthenticated ? <Login onLogin={handleLogin} /> : <Navigate to="/men" />} />
          <Route path="/men" element={isAuthenticated ? <Men /> : <Navigate to="/login" />} />
          <Route path="/women" element={isAuthenticated ? <Women /> : <Navigate to="/login" />} />
          <Route path="/children" element={isAuthenticated ? <Children /> : <Navigate to="/login" />} />
          <Route path="*" element={<Navigate to="/login" />} /> {/* Redirect to login for any other route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
