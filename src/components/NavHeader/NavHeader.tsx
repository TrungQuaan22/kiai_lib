import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './NavHeader.module.scss'

export default function NavHeader() {
  return (
    <div className={styles.container}>
      <ul className={styles.nav}>
        <li>
          <NavLink className={({ isActive }) => (isActive ? styles.activeNavLink : styles.navLink)} to='/' end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => (isActive ? styles.activeNavLink : styles.navLink)} to='/contact'>
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => (isActive ? styles.activeNavLink : styles.navLink)} to='/about'>
            About
          </NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => (isActive ? styles.activeNavLink : styles.navLink)} to='/register'>
            Sign Up
          </NavLink>
        </li>
      </ul>
    </div>
  )
}
