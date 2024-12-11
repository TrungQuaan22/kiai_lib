import React from 'react'
import styles from './bookCard.module.scss'
import { Flex, Image, Text } from '@chakra-ui/react'
import { Rating } from 'src/components/ui/rating'
import { FiHeart, FiEye, FiTrash2 } from 'react-icons/fi'
import { Book } from 'src/@types/book.type'
import { useNavigate } from 'react-router-dom'
import { roundToNearestHalf } from 'src/utils/utils'

interface BookCardProps extends Book {
  onAddToCart?: () => void;
  onRemoveFromWishlist?: () => void; 
  mode?: 'default' | 'wishlist' | 'justforyou' 
}
export default function BookCard(props: BookCardProps) {
  const book = props
  const navigate = useNavigate()
  return (
    <div className={styles.card}>
      <div className={styles.imageCard}>
        <Image
          className={styles.image}
          src={book.imgUrl}
          alt='Book' />
        <div className={book.mode === 'wishlist'|| book.mode === 'justforyou' ? styles.addToCartWish : styles.addToCart} onClick={book.onAddToCart}>Add To Cart</div>
      </div>
      <div className={styles.icons}>
      {props.mode === 'wishlist' ? (
    // Hiển thị icon Xoá
    <div className={styles.icon} onClick={props.onRemoveFromWishlist}>
      <FiTrash2  color='rgba(255, 69, 0, 0.78)'/>
    </div>
  ) : (
    // Hiển thị icon Heart và Eye (mặc định)
    <>
      {book.mode !== 'justforyou' &&  <div className={styles.icon}>
        <FiHeart />
      </div>} 
      <div className={styles.icon} onClick={() => navigate(`/books/${book.id}`)}>
        <FiEye />
      </div>
    </>
  )}
    </div><div className={styles.body}>
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
