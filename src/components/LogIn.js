import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LogIn.css';

const LogIn = () => {
  const [formData, setFormData] = useState({
    user_email: '',
    user_password: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://syoft.dev/Api/userlogin/api/userlogin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        localStorage.setItem('user', JSON.stringify(result)); // Save user data to local storage
        navigate('/dashboard');
      } else {
        console.error('Login failed:', response.status);
      }
    } catch (error) {
      console.error('Network error:', error);
    }
  };

  return (
    <div className="login-container">
      <h2>Log In</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="email"
          name="user_email"
          placeholder="Email"
          value={formData.user_email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="user_password"
          placeholder="Password"
          value={formData.user_password}
          onChange={handleChange}
          required
        />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default LogIn;
