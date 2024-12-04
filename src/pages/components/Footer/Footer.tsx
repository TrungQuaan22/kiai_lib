import React from 'react'
import styles from './footer.module.scss'
import { Facebook, Instagram, LinkedIn, Send, Twitter } from '@mui/icons-material'
import { downloadAppStore, downloadGoogle, qrDownload } from 'src/assets/images'
const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.section}>
          <h2>Exclusive</h2>
          <h3>Subscribe</h3>
          <p>Get 10% off your first order</p>
          <div className={styles.subscribe}>
            <input type='email' placeholder='Enter your email' className={styles.input} />
            <button className={styles.button}>
              <Send />
            </button>
          </div>
        </div>

        <div className={styles.section}>
          <h3>Support</h3>
          <address>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</address>
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
          <div className={styles.download}>
            <div className={styles.imgQr}>
              <img src={qrDownload} alt='' />
            </div>
            <div className={styles.imgStore}>
              <img src={downloadGoogle} alt='' />
              <img src={downloadAppStore} />
            </div>
          </div>
          <div className={styles.socials}>
            <a href='#facebook'>
              <Facebook />
            </a>
            <a href='#twitter'>
              <Twitter />
            </a>
            <a href='#instagram'>
              <Instagram />
            </a>
            <a href='#linkedin'>
              <LinkedIn />
            </a>
          </div>
        </div>
      </div>
      <p className={styles.copyright}>&copy; Copyright Rimel 2022. All rights reserved.</p>
    </footer>
  )
}

export default Footer
