import React, { useState } from 'react';
import './LoginForm.css';
import { Navigate } from 'react-router-dom'; 

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [redirectToDashboard, setRedirectToDashboard] = useState(false); 
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };

    // Update to use Navigate
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Email validation
      if (!validateEmail(email)) {
        setEmailError('Please enter a valid email address');
        return;
      } else {
        setEmailError('');
      }
        if (password === 'SmartServTest@123') {
                setRedirectToDashboard(true);
            } else {
                setPasswordError('Incorrect password');
            }
      // Password validation
      if (!validatePassword(password)) {
        setPasswordError('Password must contain an uppercase letter, a number, and no special characters except "@"');
        return;
      } else {
        setPasswordError('');
      }
  
      // Check if password is correct
      
    };
  
    const validateEmail = (email) => {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
    };
  
    const validatePassword = (password) => {
      const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?!.*[@\s])[A-Za-z\d@]{8,}$/;
      return passwordPattern.test(password);
    };
  
    if (redirectToDashboard) {
      return <Navigate to="/dashboard" />; // Redirect to the dashboard page
    }

  return (
    <div className="login-container">
      <div className="form-container">
        {/* <img src="https://ibb.co/R2qqfBT" alt="Logo" className="logo" /> */}
        <h1 className='smrt'>SMART SERV</h1>
        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            className="input"
            required
          />
          {emailError && <span className="error">{emailError}</span>}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            className="input"
            required
          />
          {passwordError && <span className="error">{passwordError}</span>}
          <button type="submit" className="button">Login</button>
        </form>
        <div className="forgot-password">
          <a href="#" className="forgot-password-link">Forgot Password?</a>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
