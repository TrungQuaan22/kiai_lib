import { useEffect, useRef, useState } from 'react'
import { Button, Image, Text } from '@chakra-ui/react'
import { Toaster, toaster } from 'src/components/ui/toaster'
import { useNavigate } from 'react-router-dom'
import { banner, commit } from 'src/assets/images'
import CustomSlider from 'src/components/CustomSlider'
import styles from './Home.module.scss'
import BookCard from 'src/components/BookCard/BookCard'
import CategoryCard from 'src/components/CategoryCard/CategoryCard'
import { sliderSettings } from 'src/utils/utils'
const mockBooks = [
  {
    id: 1,
    title: 'The Great Gatsby',
    imgUrl: 'https://via.placeholder.com/150',
    rating: 4.5,
    reviewCount: 120
  },
  {
    id: 2,
    title: '1984',
    imgUrl: 'https://via.placeholder.com/150',
    rating: 4.8,
    reviewCount: 200
  },
  {
    id: 3,
    title: 'To Kill a Mockingbird',
    imgUrl: 'https://via.placeholder.com/150',
    rating: 4.7,
    reviewCount: 180
  },
  {
    id: 4,
    title: 'Pride and Prejudice',
    imgUrl: 'https://via.placeholder.com/150',
    rating: 4.6,
    reviewCount: 150
  },
  {
    id: 5,
    title: 'The Catcher in the Rye',
    imgUrl: 'https://via.placeholder.com/150',
    rating: 4.2,
    reviewCount: 95
  },
  {
    id: 6,
    title: 'The Hobbit',
    imgUrl: 'https://via.placeholder.com/150',
    rating: 4.9,
    reviewCount: 300
  },
  {
    id: 7,
    title: 'The Hobbit',
    imgUrl: 'https://via.placeholder.com/150',
    rating: 4.9,
    reviewCount: 300
  },
  {
    id: 8,
    title: 'The Hobbit',
    imgUrl: 'https://via.placeholder.com/150',
    rating: 4.9,
    reviewCount: 300
  },
  {
    id: 9,
    title: 'The Hobbit',
    imgUrl: 'https://via.placeholder.com/150',
    rating: 4.9,
    reviewCount: 300
  },
  {
    id: 10,
    title: 'The Hobbit',
    imgUrl: 'https://via.placeholder.com/150',
    rating: 4.9,
    reviewCount: 300
  },
  {
    id: 11,
    title: 'The Great Gatsby',
    imgUrl: 'https://via.placeholder.com/150',
    rating: 4.5,
    reviewCount: 120
  },
  {
    id: 12,
    title: '1984',
    imgUrl: 'https://via.placeholder.com/150',
    rating: 4.8,
    reviewCount: 200
  },
  {
    id: 13,
    title: 'To Kill a Mockingbird',
    imgUrl: 'https://via.placeholder.com/150',
    rating: 4.7,
    reviewCount: 180
  },
  {
    id: 14,
    title: 'Pride and Prejudice',
    imgUrl: 'https://via.placeholder.com/150',
    rating: 4.6,
    reviewCount: 150
  },
  {
    id: 15,
    title: 'The Catcher in the Rye',
    imgUrl: 'https://via.placeholder.com/150',
    rating: 4.2,
    reviewCount: 95
  },
  {
    id: 16,
    title: 'To Kill a Mockingbird',
    imgUrl: 'https://via.placeholder.com/150',
    rating: 4.7,
    reviewCount: 180
  },
  {
    id: 17,
    title: 'Pride and Prejudice',
    imgUrl: 'https://via.placeholder.com/150',
    rating: 4.6,
    reviewCount: 150
  },
  {
    id: 18,
    title: 'The Catcher in the Rye',
    imgUrl: 'https://via.placeholder.com/150',
    rating: 4.2,
    reviewCount: 95
  }
]
const mockCategories = [
  "Woman's Fashion",
  "Men's Fashion",
  'Electronics',
  'Home & Lifestyle',
  'Medicine',
  'Sports & Outdoor',
  "Baby's & Toys",
  'Groceries & Pets',
  'Health & Beauty',
  'Books',
  'Gaming',
  'Automotive',
  'Travel'
]
const categories = [
  {
    id: 1,
    name: 'Phones',
    icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQfe9n1387magZlSXyYaLCjBXSfuCeqdyE0A&s'
  },
  {
    id: 2,
    name: 'Computers',
    icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQfe9n1387magZlSXyYaLCjBXSfuCeqdyE0A&s'
  },
  {
    id: 3,
    name: 'SmartWatch',
    icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQfe9n1387magZlSXyYaLCjBXSfuCeqdyE0A&s'
  },
  {
    id: 4,
    name: 'Camera',
    icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQfe9n1387magZlSXyYaLCjBXSfuCeqdyE0A&s'
  },
  {
    id: 5,
    name: 'HeadPhones',
    icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQfe9n1387magZlSXyYaLCjBXSfuCeqdyE0A&s'
  },
  {
    id: 6,
    name: 'Gaming',
    icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQfe9n1387magZlSXyYaLCjBXSfuCeqdyE0A&s'
  }
]
const mockSliderImages = [
  { id: 1, src: 'https://via.placeholder.com/800x300?text=Slider+1' },
  { id: 2, src: 'https://via.placeholder.com/800x300?text=Slider+2' },
  { id: 3, src: 'https://via.placeholder.com/800x300?text=Slider+3' }
]
export default function Home() {
  const navigate = useNavigate()
  const [currentSlide, setCurrentSlide] = useState(0)
  const topBookRef = useRef(null)
  const cateRef = useRef(null)
  const allBookRef = useRef(null)
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % mockSliderImages.length)
    }, 3000)
    return () => clearInterval(slideInterval)
  }, [])

  const cateSettings = {
    ...sliderSettings,
    slidesToShow: 6
  }
  const productSetting = {
    ...sliderSettings,
    rows: 2
  }
  const handleAddToCart = () => {
    toaster.create({
      title: `Thêm vào giỏ hàng thành công`,
      type: 'success'
    })
  }
  return (
    <>
      <Toaster />
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
          {/* Slider images */}
          <div className={styles.slider}>
            {mockSliderImages.map((image, index) => (
              <img
                key={image.id}
                src={image.src}
                alt={`Slide ${index + 1}`}
                className={`${styles.slide} ${currentSlide === index ? styles.active : ''}`}
              />
            ))}
            <div className={styles.dots}>
              {mockSliderImages.map((_, index) => (
                <span
                  key={index}
                  className={`${styles.dot} ${currentSlide === index ? styles.activeDot : ''}`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
        {/* Top Book  */}

        <div className={styles.topBookContainer}>
          <Text fontSize={36} fontWeight={600} mt={10}>
            The Most Borrowed Books
          </Text>
          <CustomSlider sliderRef={topBookRef} settings={sliderSettings}>
            {mockBooks.map((item) => (
              <div key={item.id}>
                <BookCard {...item} mode='default' onAddToCart={handleAddToCart} />
              </div>
            ))}
          </CustomSlider>
          <div className={styles.viewAll}>
            <Button className={styles.btnView} padding='25px 50px' variant='outline' onClick={() => navigate('/books')}>
              View All Books
            </Button>
          </div>
        </div>

        {/* Category */}
        <div className={styles.categories}>
          <Text fontSize={36} fontWeight={600} mt={10} className={styles.titleSection}>
            Categories
          </Text>
          <CustomSlider sliderRef={cateRef} settings={cateSettings}>
            {categories.map((category) => (
              <div key={category.id} className={styles.categoriesItem}>
                <CategoryCard name={category.name} icon={category.icon} />
              </div>
            ))}
          </CustomSlider>
        </div>
        <div className={styles.banner}>
          <Image src={banner} marginBottom={20} />
        </div>
        <div className={styles.allBookContainer}>
          <Text className={styles.titleSection}>Our books</Text>
          <Text fontSize={36} fontWeight={600} mt={0}>
            Explore Our Books
          </Text>
          <CustomSlider sliderRef={allBookRef} settings={productSetting}>
            {mockBooks.map((item) => 
            <div key={item.id}>
              <BookCard {...item} mode='default' onAddToCart={handleAddToCart}/>
            </div>
            )}
          </CustomSlider>
          <div className={styles.viewAll}>
            <Button className={styles.btnView} padding='25px 50px' variant='outline' onClick={() => navigate('/books')}>
              View All Books
            </Button>
          </div>
        </div>
        {/* commit */}
        <div className={styles.commit}>
          <Image src={commit} />
        </div>
      </div>
    </>
  )
}
