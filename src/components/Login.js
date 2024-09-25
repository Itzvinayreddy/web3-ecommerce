// src/components/Login.js
import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'user' && password === 'password') {
      // alert('Login successful!');
      onLogin();
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <form className="bg-white p-6 rounded shadow-md w-80 fade-in" onSubmit={handleLogin}>
        <h2 className="text-2xl mb-4 text-center">Login</h2>
        {error && <p className="text-red-500">{error}</p>}
        <div className="mb-4">
          <label className="block text-gray-700">Username</label>
          <input
            type="text"
            className="border rounded w-full py-2 px-3 text-gray-700"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            className="border rounded w-full py-2 px-3 text-gray-700"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded w-full hover:bg-blue-700 transition duration-300"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
