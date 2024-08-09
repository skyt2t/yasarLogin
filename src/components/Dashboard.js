import React from 'react'
import {useNavigate} from 'react-router-dom'
import './Dashboard.css'

const Dashboard = () => {
  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem('user'))

  if (!user) {
    navigate('/login')
    return null
  }

  const handleLogout = () => {
    localStorage.removeItem('user')
    navigate('/login')
  }

  return (
    <div className='dashboard-container'>
      <div className='profile-section'>
        <h1>Welcome, {user.user_firstname}!</h1>
        <div className='profile-details'>
          <p>
            <strong>Full Name:</strong> {user.user_firstname}{' '}
            {user.user_lastname}
          </p>
          <p>
            <strong>Email:</strong> {user.user_email}
          </p>
          <p>
            <strong>Phone:</strong> {user.user_phone}
          </p>
          <p>
            <strong>City:</strong> {user.user_city}
          </p>
          <p>
            <strong>Zip Code:</strong> {user.user_zipcode}
          </p>
        </div>
        <button onClick={handleLogout} className='logout-button'>
          Logout
        </button>
      </div>
    </div>
  )
}

export default Dashboard
