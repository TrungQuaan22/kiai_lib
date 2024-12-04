import React from 'react'
import Logo from 'src/components/LogoHeader/LogoHeader'
import NavHeader from 'src/components/NavHeader'
import SearchHeader from 'src/components/SearchHeader/SearchHeader'
import UserHeader from 'src/components/UserHeader/UserHeader'
import styles from './header.module.scss'

export default function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.section}>
        <Logo />
      </div>
      <div className={styles.section}>
        <NavHeader />
      </div>
      <div className={styles.section}>
        <SearchHeader />
        <UserHeader isLoggedIn={false} />
      </div>
    </header>
  )
}
