import React from 'react';

const RegistrationScreen: React.FC = () => {
  return (
    <div className="registration-screen">
      {/* Заголовок */}
      <div className="scrolling-header">
        <h1 className="scrolling-text">
          The Movie Tracker
        </h1>
      </div>

      {/* Форма регистрации */}
      <form className="form-container">
        <input type="text" placeholder="Username" className="input-field" />
        <input type="email" placeholder="Email Address" className="input-field" />
        <input type="password" placeholder="Password" className="input-field" />
        <input type="password" placeholder="Confirm Password" className="input-field" />

        {/* Кнопка регистрации */}
        <button className="register-button">Register</button>
      </form>

      {/* Ссылка для входа */}
      <p className="login-link">
        Already have an account?{' '}
        <span className="link">Login</span>
      </p>

      {/* Нижняя часть экрана */}
      <div className="footer">
      Built with ❤️ GreenField
      </div>
    </div>
  );
};

export default RegistrationScreen;