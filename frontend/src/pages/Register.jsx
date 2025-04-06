import React from 'react';
import './AuthPages.css';

function Register() {
  return (
    <div className="auth-page">
      <div className="auth-box">
        <h2>Create Your Account</h2>
        <form>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit" className="btn primary">Register</button>
        </form>
        <p>Already have an account? <a href="/login">Log in</a></p>
      </div>
    </div>
  );
}

export default Register;
