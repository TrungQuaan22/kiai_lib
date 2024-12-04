import { useEffect, useState } from 'react'
import { Button, Card, Flex, Image, Text } from "@chakra-ui/react"
import styles from './Home.module.scss'
import Slider from 'react-slick';
import { Rating } from 'src/components/ui/rating';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Home() {

  const mockBooks = [
    {
      "id": 1,
      "title": "The Great Gatsby",
      "coverImage": "https://via.placeholder.com/150",
      "rating": 4.5,
      "reviewCount": 120
    },
    {
      "id": 2,
      "title": "1984",
      "coverImage": "https://via.placeholder.com/150",
      "rating": 4.8,
      "reviewCount": 200
    },
    {
      "id": 3,
      "title": "To Kill a Mockingbird",
      "coverImage": "https://via.placeholder.com/150",
      "rating": 4.7,
      "reviewCount": 180
    },
    {
      "id": 4,
      "title": "Pride and Prejudice",
      "coverImage": "https://via.placeholder.com/150",
      "rating": 4.6,
      "reviewCount": 150
    },
    {
      "id": 5,
      "title": "The Catcher in the Rye",
      "coverImage": "https://via.placeholder.com/150",
      "rating": 4.2,
      "reviewCount": 95
    },
    {
      "id": 6,
      "title": "The Hobbit",
      "coverImage": "https://via.placeholder.com/150",
      "rating": 4.9,
      "reviewCount": 300
    }
  ]
  const mockCategories = [
    'Woman\'s Fashion',
    'Men\'s Fashion',
    'Electronics',
    'Home & Lifestyle',
    'Medicine',
    'Sports & Outdoor',
    'Baby\'s & Toys',
    'Groceries & Pets',
    'Health & Beauty',
    'Books',
    'Gaming',
    'Automotive',
    'Travel',
  ];

  const mockSliderImages = [
    { id: 1, src: 'https://via.placeholder.com/800x300?text=Slider+1' },
    { id: 2, src: 'https://via.placeholder.com/800x300?text=Slider+2' },
    { id: 3, src: 'https://via.placeholder.com/800x300?text=Slider+3' },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % mockSliderImages.length);
    }, 3000);
    return () => clearInterval(slideInterval);
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Số lượng Card hiển thị trong một lần
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Dành cho màn hình lớn hơn 1024px
        settings: {
          slidesToShow: 2, // 2 Card khi màn hình nhỏ hơn 1024px
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600, // Dành cho màn hình nhỏ hơn 600px
        settings: {
          slidesToShow: 1, // 1 Card khi màn hình nhỏ
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (

    <div className={styles.container}>
      {/* Categories & Slide banner */}
      <div className={styles.wrapper}>
        {/* Danh mục */}
        <div className={styles.categoryList}>
          {mockCategories.map((category, index) => (
            <div key={index} className={styles.categoryItem}>
              {category}
            </div>
          ))}
        </div>

        {/* Slider */}
        <div className={styles.slider}>
          {mockSliderImages.map((image, index) => (
            <img
              key={image.id}
              src={image.src}
              alt={`Slide ${index + 1}`}
              className={`${styles.slide} ${currentSlide === index ? styles.active : ''
                }`}
            />
          ))}
          <div className={styles.dots}>
            {mockSliderImages.map((_, index) => (
              <span
                key={index}
                className={`${styles.dot} ${currentSlide === index ? styles.activeDot : ''
                  }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
      {/* Top Book  */}
      <Text fontSize={20} fontWeight={600} m={20}>The Most Borrowed Books</Text>
      <div className={styles.topBookContainer}>
        <Slider {...settings} className={styles.booksSlider}>
          <Card.Root maxW="sm" overflow="hidden" maxWidth={200}>
            <Image
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Green double couch with wooden legs"
            />
            <Card.Body gap="2">
              <Card.Title>Living room Sofa</Card.Title>
              <Flex align="center">
                <Rating readOnly allowHalf defaultValue={4.5} color="yellow" />
                <Text ml="2" fontSize="sm">
                  (86)
                </Text>
              </Flex>
            </Card.Body>
          </Card.Root>
          <Card.Root maxW="sm" overflow="hidden">
            <Image
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Green double couch with wooden legs"
            />
            <Card.Body gap="2">
              <Card.Title>Living room Sofa</Card.Title>
              <Flex align="center">
                <Rating readOnly allowHalf defaultValue={4.5} color="yellow" />
                <Text ml="2" fontSize="sm">
                  (86)
                </Text>
              </Flex>
            </Card.Body>
          </Card.Root>
          <Card.Root maxW="sm" overflow="hidden">
            <Image
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Green double couch with wooden legs"
            />
            <Card.Body gap="2">
              <Card.Title>Living room Sofa</Card.Title>
              <Flex align="center">
                <Rating readOnly allowHalf defaultValue={4.5} color="yellow" />
                <Text ml="2" fontSize="sm">
                  (86)
                </Text>
              </Flex>
            </Card.Body>
          </Card.Root>
          <Card.Root maxW="sm" overflow="hidden">
            <Image
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Green double couch with wooden legs"
            />
            <Card.Body gap="2">
              <Card.Title>Living room Sofa</Card.Title>
              <Flex align="center">
                <Rating readOnly allowHalf defaultValue={4.5} color="yellow" />
                <Text ml="2" fontSize="sm">
                  (86)
                </Text>
              </Flex>
            </Card.Body>
          </Card.Root>
          <Card.Root maxW="sm" overflow="hidden">
            <Image
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Green double couch with wooden legs"
            />
            <Card.Body gap="2">
              <Card.Title>Living room Sofa</Card.Title>
              <Flex align="center">
                <Rating readOnly allowHalf defaultValue={4.5} color="yellow" />
                <Text ml="2" fontSize="sm">
                  (86)
                </Text>
              </Flex>
            </Card.Body>
          </Card.Root>

        </Slider>
      </div>
    </div>
  )
}
