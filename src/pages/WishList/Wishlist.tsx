import React, { useState } from 'react';
import { Box, Button, Center, Flex, Text } from '@chakra-ui/react';
import BookCard from 'src/components/BookCard/BookCard';
import styles from './Wishlist.module.scss'

const initialWishlist = [
  {
    id: 1,
    title: 'The Great Gatsby',
    imgUrl: 'https://via.placeholder.com/150',
    rating: 4.5,
    reviewCount: 120,
  },
  {
    id: 2,
    title: '1984',
    imgUrl: 'https://via.placeholder.com/150',
    rating: 4.8,
    reviewCount: 200,
  },
  {
    id: 3,
    title: 'To Kill a Mockingbird',
    imgUrl: 'https://via.placeholder.com/150',
    rating: 4.7,
    reviewCount: 180,
  },
  {
    id: 4,
    title: 'Pride and Prejudice',
    imgUrl: 'https://via.placeholder.com/150',
    rating: 4.6,
    reviewCount: 150,
  },
];

export default function Wishlist() {
  // State quản lý danh sách yêu thích
  const [wishlist, setWishlist] = useState(initialWishlist);
  const [justForYou, setJustForYou] = useState(initialWishlist)

  // Hàm xoá sách khỏi danh sách yêu thích
  const handleRemoveFromWishlist = (bookId: number) => {
    setWishlist((prev) => prev.filter((item) => item.id !== bookId));
  };

  return (
    <Box padding="50px 155px">
    <Flex justifyContent="space-between" alignItems="center">
        <Text fontWeight={500}>{`Wishlist (${wishlist.length})`}</Text>
        <Button variant="outline" padding="20px 50px">Move All To Bag</Button>
    </Flex>
      <Flex flexWrap="wrap" gap={4} justifyContent="space-between" marginTop="80px">
        {wishlist.map((item) => (
          <BookCard
            key={item.id}
            {...item}
            mode="wishlist"
            onRemoveFromWishlist={() => handleRemoveFromWishlist(item.id)}
          />
        ))}
      </Flex>
      <Flex justify="space-between" align="center">
        <Text className={styles.justForYou} fontWeight={500}>Just For You</Text>
        <Button variant="outline" padding="20px 45px">See All</Button>
      </Flex>
      <Flex flexWrap="wrap" gap={4} justifyContent="space-between" marginTop="80px">
        {justForYou.map((item) => (
          <BookCard
            key={item.id}
            {...item}
            mode="justforyou"
            onRemoveFromWishlist={() => handleRemoveFromWishlist(item.id)}
          />
        ))}
      </Flex>
    </Box>
  );
}
