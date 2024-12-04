import React from 'react';
import styles from './register.module.scss';
import { imgResLog } from 'src/assets/images'; 

const Register: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageSection}>
        <img
          src={imgResLog}
          alt="Shopping and phone"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      </div>
      <div className={styles.formSection}>
        <form className={styles.form}>
          <h2>Create an account</h2>
          <p>Enter your details below</p>

          <div className={styles.inputGroup}>
            <input
              type="text"
              placeholder="Name"
              className={styles.inputField}
            />
          </div>

          <div className={styles.inputGroup}>
            <input
              type="email"
              placeholder="Email"
              className={styles.inputField}
            />
          </div>

          <div className={styles.inputGroup}>
            <input
              type="password"
              placeholder="Password"
              className={styles.inputField}
            />
          </div>

          <div className={styles.inputGroup}>
            <input
              type="password"
              placeholder="Confirm Password"
              className={styles.inputField}
            />
          </div>

          <button type="submit" className={styles.submitButton}>
            Create Account
          </button>

          <button type="button" className={styles.googleButton}>
            Sign up with Google
          </button>

          <p className={styles.link}>
            Already have an account? <a href="/login">Log in</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
