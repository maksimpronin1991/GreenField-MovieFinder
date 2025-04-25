import React from 'react';

const LoginScreen: React.FC = () => {
  return (
    <div className="login-screen">
      {/* Бегущая строка во весь экран */}
      <div className="scrolling-header">
        <h1 className="scrolling-text">
          The Movie Tracker
        </h1>
      </div>

      {/* Форма для входа */}
      <div className="form-container">
        <input type="text" placeholder="Login" className="input-field" />
        <input type="password" placeholder="Password" className="input-field" />
        <button className="login-button">Login</button>
        <p className="signup-text">
          You don’t have an account?{' '}
          <span className="signup-link">SignUp</span>
        </p>
      </div>

      {/* Нижняя часть экрана */}
      <div className="footer">
        Built with ❤️ GreenField
      </div>
    </div>
  );
};

export default LoginScreen;