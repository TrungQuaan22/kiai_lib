import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import PersonIcon from '@mui/icons-material/Person'
import styles from './UserHeader.module.scss'

interface UserHeaderProps {
  isLoggedIn: boolean
}

export default function UserHeader({ isLoggedIn }: UserHeaderProps) {
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    setShowMenu((prev) => !prev)
  }

  return (
    <div className={styles.userHeader}>
      {/* Wishlist Icon */}
      <Link to='/wishlist' className={styles.icon}>
        <FavoriteBorderIcon />
      </Link>

      {/* Cart Icon */}
      <Link to='/cart' className={styles.icon}>
        <ShoppingCartIcon />
      </Link>

      {/* User Icon */}
      {isLoggedIn && (
        <div className={styles.userMenuContainer}>
          <PersonIcon className={styles.icon} onClick={toggleMenu} />
          {showMenu && (
            <div className={styles.userMenu}>
              <Link to='/profile' className={styles.menuItem}>
                <PersonIcon className={styles.menuIcon} /> Manage My Account
              </Link>
              <Link to='/orders' className={styles.menuItem}>
                <img className={styles.menuIcon} src='/icons/orders.svg' alt='Orders' />
                My Order
              </Link>
              <Link to='/cancellations' className={styles.menuItem}>
                <img className={styles.menuIcon} src='/icons/cancellations.svg' alt='Cancellations' />
                My Cancellations
              </Link>
              <Link to='/reviews' className={styles.menuItem}>
                <img className={styles.menuIcon} src='/icons/reviews.svg' alt='Reviews' />
                My Reviews
              </Link>
              <Link to='/logout' className={styles.menuItem}>
                <img className={styles.menuIcon} src='/icons/logout.svg' alt='Logout' />
                Logout
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
