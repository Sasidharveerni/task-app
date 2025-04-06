import React from 'react';
import './AuthPages.css';

function Login() {
  return (
    <div className="auth-page">
      <div className="auth-box">
        <h2>Log in to Taskify</h2>
        <form>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit" className="btn primary">Log In</button>
        </form>
        <p>Don't have an account? <a href="/register">Register</a></p>
      </div>
    </div>
  );
}

export default Login;
