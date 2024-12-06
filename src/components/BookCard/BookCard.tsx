import React from 'react'
import styles from './bookCard.module.scss'
import { Flex, Image, Text } from '@chakra-ui/react'
import { Rating } from 'src/components/ui/rating'
import { FiHeart, FiEye } from 'react-icons/fi'
import { Book } from 'src/@types/book.type'

function roundToNearestHalf(value: number): number {

  const integerPart = Math.floor(value); 
  const decimalPart = value - integerPart; 

  if (decimalPart >= 0 && decimalPart < 0.5) {
    return integerPart;
  } else if (decimalPart >= 0.5 && decimalPart < 1) {
    return integerPart + 0.5;
  }
  return value;
}
export default function BookCard(props: Book) {
  const book = props
  return (
    <div className={styles.card}>
      <div className={styles.imageCard}>
        <Image
          className={styles.image}
          src={book.imgUrl}
          alt='Book'
        />
        <div className={styles.addToCart}>Add To Cart</div>
      </div>
      <div className={styles.icons}>
        <div className={styles.icon}>
          <FiHeart />
        </div>
        <div className={styles.icon}>
          <FiEye />
        </div>
      </div>

      <div className={styles.body}>
        <Text className={styles.title}>{book.title}</Text>
        <Flex align='center' justify='center'>
          <Rating colorPalette='yellow' readOnly allowHalf value={roundToNearestHalf(book.rating)} />
          <Text ml='2' fontSize='sm'>
            ({book.reviewCount})
          </Text>
        </Flex>
      </div>
    </div>
  )
}
