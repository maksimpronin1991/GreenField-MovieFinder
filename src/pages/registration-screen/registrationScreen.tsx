import React from 'react';
import styles from "./registrationScreen.module.css"
import { Link } from 'react-router-dom';

const RegistrationScreen: React.FC = () => {
  return (
    <div className={styles.registration}>
      {/* Бегущая строка во весь экран */}
      <div className={styles.scrollingHeader}>
        <h1 className={styles.scrollingText}>
          The Movie Tracker
        </h1>
      </div>

      {/* Форма регистрации */}
      <form className={styles.formContainer}>
        <input type="text" placeholder="Username" className={styles.inputField} />
        <input type="email" placeholder="Email Address" className={styles.inputField} />
        <input type="password" placeholder="Password" className={styles.inputField} />
        <input type="password" placeholder="Confirm Password" className={styles.inputField} />

        {/* Кнопка регистрации */}
        <button className={styles.registerButton}>Register</button>


      {/* Ссылка для входа */}
      <p className={styles.loginLink}>
        Already have an account?{' '}
        <Link to="/" className={styles.link}>Login</Link>
      </p>
      </form>

      {/* Нижняя часть экрана */}
      <div className={styles.footer}>
      Built with ❤️ GreenField
      </div>
    </div>
  );
};

export default RegistrationScreen;