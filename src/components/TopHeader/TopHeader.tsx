import React from 'react'
import styles from './topHeader.module.scss'
import { Link } from 'react-router-dom'
export default function TopHeader() {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! </p>{' '}
        <Link to='/' className={styles.link}>
          ShopNow
        </Link>
      </div>
      <div className={styles.language}>
        <select name='' id=''>
          <option value='vn'>Việt Nam</option>
          <option value='en'>English</option>
          <option value='jp'>日本語</option>
        </select>
      </div>
    </div>
  )
}
