// src/components/Auth/index.tsx

import React, { useState } from 'react';
import './Auth.css';

const Auth = () => {
  const [showSignUp, setShowSignUp] = useState(false);

  const switchAuth = () => {
    setShowSignUp(!showSignUp);
  };

  return (
    <div className="auth">
      {showSignUp ? (
        <div className="sign-up">
          <h2>Sign Up</h2>
          <form>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="submit">Sign Up</button>
          </form>
          <p>
            Already have an account?{' '}
            <span onClick={switchAuth} className="auth-switch">
              Log In
            </span>
          </p>
        </div>
      ) : (
        <div className="log-in">
          <h2>Log In</h2>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button type="submit">Log In</button>
          </form>
          <p>
            Don't have an account?{' '}
            <span onClick={switchAuth} className="auth-switch">
              Sign Up
            </span>
          </p>
        </div>
      )}
    </div>
  );
};

export default Auth;
