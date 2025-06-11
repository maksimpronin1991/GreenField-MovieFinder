import { AppRoute } from "../../const";
import styles from "./loginScreen.module.css"
import { Link } from 'react-router-dom';

const LoginScreen = () => {
  return (
    <div className={styles.loginScreen}>
      <title>Login screen</title>

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
          <Link to={AppRoute.Registration} className={styles.signupLink}>SignUp</Link> <span>or</span>
          <Link to={AppRoute.SearchScreen} className={styles.freeEnter}>Skip</Link>
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