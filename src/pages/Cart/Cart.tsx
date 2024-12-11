import React, { useState } from 'react'
import { Box, For, Stack, Table, Image, Button } from '@chakra-ui/react'
import { BreadcrumbCurrentLink, BreadcrumbLink, BreadcrumbRoot } from 'src/components/ui/breadcrumb'
import { NumberInputField, NumberInputRoot } from "src/components/ui/number-input"

import styles from './Cart.module.scss'
export default function Cart() {
  const [cartItems, setCartItems] = useState([
    { id: 1, title: '1984', imgUrl: 'https://via.placeholder.com/150', quantity: 1 },
    { id: 2, title: 'H1 Gamepad', imgUrl: 'https://via.placeholder.com/150', quantity: 2 },
  ]);

  return (
    <Box padding='50px 155px'>
      {/* breadcrumb */}
      <Box width='full' maxWidth='container.md' mb={8}>
        <BreadcrumbRoot>
          <BreadcrumbLink href='#'>Home</BreadcrumbLink>
          <BreadcrumbCurrentLink>Cart</BreadcrumbCurrentLink>
        </BreadcrumbRoot>
      </Box>

      {/* table */}
      <div className={styles['cart-container']}>
      {/* Header */}
      <div className={styles['cart-header']}>
        <p style={{width: "125px"}}>Product</p>
        <p>Quantity</p>
        <p>Return Date</p>
      </div>

      {/* Rows */}
      {cartItems.map((item) => (
        <div className={styles['cart-row']} key={item.id}>
          {/* Product */}
          <div className={styles['product-info']}>
            <div className={styles['product-img']}>
              <img src={item.imgUrl} alt={item.title} />
            </div>
            <p>{item.title}</p>
          </div>
          {/* Quantity */}
          <NumberInputRoot color="orange.400" width="50px" className={styles.numberInputField} defaultValue="1" min={1} max={50}>
            <NumberInputField padding={2}/>
          </NumberInputRoot>
          {/* Return Date */}
          <div className={styles['return-date']}>
            <input type="date" />
          </div>
        </div>
      ))}
      <div className={styles.actions}>
        <button className={styles['return-btn']}>Return To Shop</button>
        <button className={styles['update-btn']}>Update Cart</button>
      </div>
      </div>


      <div className={styles.btnProcess}>
        <Button className={styles.buttonCheckout}>Process to checkout</Button>
      </div>
    </Box>
  )
}
