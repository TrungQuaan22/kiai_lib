import React from 'react'
import styles from './footer.module.scss'

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.section}>
          <h3>Exclusive</h3>
          <p>Subscribe</p>
          <p>Get 10% off your first order</p>
          <div className={styles.subscribe}>
            <input type='email' placeholder='Enter your email' className={styles.input} />
            <button className={styles.button}>
              <span>&#10140;</span> {/* Arrow icon */}
            </button>
          </div>
        </div>

        <div className={styles.section}>
          <h3>Support</h3>
          <address>
            111 Bijoy sarani, Dhaka, <br />
            DH 1515, Bangladesh.
          </address>
          <a href='mailto:exclusive@gmail.com'>exclusive@gmail.com</a>
          <p>+88015-88888-9999</p>
        </div>

        <div className={styles.section}>
          <h3>Account</h3>
          <ul>
            <li>
              <a href='#myaccount'>My Account</a>
            </li>
            <li>
              <a href='#login'>Login / Register</a>
            </li>
            <li>
              <a href='#cart'>Cart</a>
            </li>
            <li>
              <a href='#wishlist'>Wishlist</a>
            </li>
            <li>
              <a href='#shop'>Shop</a>
            </li>
          </ul>
        </div>

        <div className={styles.section}>
          <h3>Quick Link</h3>
          <ul>
            <li>
              <a href='#privacy'>Privacy Policy</a>
            </li>
            <li>
              <a href='#terms'>Terms Of Use</a>
            </li>
            <li>
              <a href='#faq'>FAQ</a>
            </li>
            <li>
              <a href='#contact'>Contact</a>
            </li>
          </ul>
        </div>

        <div className={styles.section}>
          <h3>Download App</h3>
          <p>Save $3 with App New User Only</p>
          <div className={styles.qr}>
            <img src='/qr-google.png' alt='Google Play QR' />
            <img src='/qr-appstore.png' alt='App Store QR' />
          </div>
          <div className={styles.socials}>
            <a href='#facebook'>f</a>
            <a href='#twitter'>t</a>
            <a href='#instagram'>i</a>
            <a href='#linkedin'>in</a>
          </div>
        </div>
      </div>
      <p className={styles.copyright}>&copy; Copyright Rimel 2022. All rights reserved.</p>
    </footer>
  )
}

export default Footer
