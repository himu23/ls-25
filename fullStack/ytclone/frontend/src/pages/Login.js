import React, { useState } from 'react';
import axios from '../axiosConfig';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [form, setForm] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('login/', form);
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('username', res.data.username);
      alert('Login successful!');
      navigate('/');
    } catch (err) {
      alert('Login failed');
      console.error(err);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-primary-subtle" style={{ minHeight: '100vh' }}>
      <div className="card shadow-lg border-0 p-4" style={{ width: '100%', maxWidth: '400px' }}>
        <h3 className="text-center text-primary mb-4">Login to YTClone</h3>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label fw-semibold text-dark">Username</label>
            <input
              type="text"
              className="form-control border-primary"
              id="username"
              name="username"
              value={form.username}
              onChange={handleChange}
              required
              autoComplete="username"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label fw-semibold text-dark">Password</label>
            <input
              type="password"
              className="form-control border-primary"
              id="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              autoComplete="current-password"
            />
          </div>

          <button type="submit" className="btn btn-primary w-100 fw-bold">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
