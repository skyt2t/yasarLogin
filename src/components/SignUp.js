import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import './SignUp.css'

const SignUp = () => {
  const [formData, setFormData] = useState({
    user_firstname: '',
    user_email: '',
    user_password: '',
    user_phone: '',
  })

  const navigate = useNavigate()

  const handleChange = e => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleSubmit = async e => {
    e.preventDefault()

    const payload = {
      ...formData,
      user_lastname: 'Doe',
      user_city: 'Hyderabad',
      user_zipcode: '500072',
    }

    try {
      const response = await fetch(
        'https://syoft.dev/Api/user_registeration/api/user_registeration',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        },
      )

      if (response.ok) {
        navigate('/login')
      } else {
        console.error('Sign Up failed:', response.status)
      }
    } catch (error) {
      console.error('Network error:', error)
    }
  }

  return (
    <div className="signup-container">
      <div className="signup-image">
        <img
          src="https://imgcdn.stablediffusionweb.com/2024/3/19/d7725eaa-4788-41c8-8c7c-a087a0e21b5a.jpg"
          alt="Sign Up"
        />
      </div>
      <div className="signup-form-container">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit} className="signup-form">
          <input
            type="text"
            name="user_firstname"
            placeholder="First Name"
            value={formData.user_firstname}
            onChange={handleChange}
            required
          />
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
          <input
            type="text"
            name="user_phone"
            placeholder="Phone"
            value={formData.user_phone}
            onChange={handleChange}
            required
          />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  )
}

export default SignUp
