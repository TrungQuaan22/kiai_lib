import React from 'react'
import Footer from 'src/pages/components/Footer/Footer'
import Header from 'src/pages/components/Header'

interface Props {
  children?: React.ReactNode
}
const RegisterLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default RegisterLayout
