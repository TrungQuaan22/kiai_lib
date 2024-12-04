import React from 'react';
import styles from './login.module.scss'
import { imgResLog } from 'src/assets/images'; 
import { Link } from 'react-router-dom';

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
          <h2>Log in to Exclusive</h2>
          <p>Enter your details below</p>

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

          <div className={styles.forgetPassword}>
            <Link className={styles.forgetText} to='./forget-password'>Forget Password ?</Link>
          </div>

          <button type="submit" className={styles.submitButton}>
            Sign In
          </button>

          <button type="button" className={styles.googleButton}>
            Sign up with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
