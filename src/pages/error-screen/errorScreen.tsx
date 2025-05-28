import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ErrorScreen.module.css";

interface ErrorScreenProps {
  errorCode?: number;
  errorMessage?: string;
  showActions?: boolean;
}

const ErrorScreen: React.FC<ErrorScreenProps> = ({
  errorCode = 404,
  errorMessage = "Something went wrong. The page you're looking for doesn't exist or an error occurred.",
  showActions = true,
}) => {
  const navigate = useNavigate();

  const getErrorTitle = () => {
    switch (errorCode) {
      case 404:
        return "Page Not Found";
      case 500:
        return "Server Error";
      case 403:
        return "Access Denied";
      default:
        return "Oops!";
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.animation}>
          <div className={styles.icon}>⚠️</div>
        </div>
        <h1 className={styles.title}>{getErrorTitle()}</h1>
        <p className={styles.message}>{errorMessage}</p>
        
        {showActions && (
          <div className={styles.actions}>
            <button
              className={styles.buttonPrimary}
              onClick={() => navigate(-1)}
            >
              Go Back
            </button>
            <button
              className={styles.buttonSecondary}
              onClick={() => navigate("/home")}
            >
              Return Home
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ErrorScreen;