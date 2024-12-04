import React from 'react'
import Logo from 'src/components/LogoHeader/LogoHeader'
import NavHeader from 'src/components/NavHeader'
import styles from './header.module.scss'
import SearchHeader from 'src/components/SearchHeader/SearchHeader'
export default function HeaderAuth() {
  return (
    
    <header className={styles.container}>
      <Logo />
      <NavHeader />
      <SearchHeader />
    </header>
  )
}
