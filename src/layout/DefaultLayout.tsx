import React from 'react'
import TopHeader from 'src/components/TopHeader'
import Footer from 'src/pages/components/Footer/Footer'
import Header from 'src/pages/components/Header'

interface Props {
  children?: React.ReactNode
}
const DefaultLayout = ({ children }: Props) => {
  return (
    <>
    <TopHeader />
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default DefaultLayout
