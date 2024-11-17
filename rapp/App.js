// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';

const API_BASE_URL = "http://localhost:8000";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MagicLinkRequest />} />
        <Route path="/verify-magic-link" element={<MagicLinkVerify />} />
        <Route path="/protected" element={<ProtectedResource />} />
      </Routes>
    </Router>
  );
}

function MagicLinkRequest() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleRequest = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_BASE_URL}/request-magic-link`, { email });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(`Error: ${error.response?.data?.detail || 'Something went wrong'}`);
    }
  };

  return (
    <div>
      <h1>Request Magic Link</h1>
      <form onSubmit={handleRequest}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Send Magic Link</button>
      </form>
      {message && <p>{message}</p>}
      <button onClick={() => navigate('/protected')}>Go to Protected Resource</button>
    </div>
  );
}

function MagicLinkVerify() {
  const [message, setMessage] = useState('');
  const params = new URLSearchParams(window.location.search);

  React.useEffect(() => {
    const token = params.get('token');
    if (token) {
      axios
        .get(`${API_BASE_URL}/verify-magic-link`, { params: { token }, withCredentials: true })
        .then((response) => setMessage(response.data.message))
        .catch((error) =>
          setMessage(`Error: ${error.response?.data?.detail || 'Invalid or expired link'}`)
        );
    } else {
      setMessage('No token provided.');
    }
  }, [params]);

  return (
    <div>
      <h1>Verify Magic Link</h1>
      <p>{message}</p>
    </div>
  );
}

function ProtectedResource() {
  const [message, setMessage] = useState('');

  const fetchResource = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/protected-resource`, {
        withCredentials: true,
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(`Error: ${error.response?.data?.detail || 'Unauthorized'}`);
    }
  };

  return (
    <div>
      <h1>Protected Resource</h1>
      <button onClick={fetchResource}>Access Protected Resource</button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default App;
