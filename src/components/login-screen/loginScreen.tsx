import React from 'react';
import styles from "./loginScreen.module.css"

const LoginScreen: React.FC = () => {
  return (
    <div className={styles.loginScreen}>
      {/* Бегущая строка во весь экран */}
      <div className={styles.scrollingHeader}>
        <h1 className={styles.scrollingText}>
          The Movie Tracker
        </h1>
      </div>

      {/* Форма для входа */}
      <form className={styles.formContainer}>
        <input type="text" placeholder="Login" className={styles.inputField} />
        <input type="password" placeholder="Password" className={styles.inputField} />
        <button className={styles.loginButton}>Login</button>
        <p className={styles.signupText}>
          You don’t have an account?{' '}
          <span className={styles.signupLink}>SignUp</span>
        </p>
      </form>

      {/* Нижняя часть экрана */}
      <div className={styles.footer}>
        Built with ❤️ GreenField
      </div>
    </div>
  );
};

export default LoginScreen;