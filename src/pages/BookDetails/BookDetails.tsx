import React, { useRef, useState } from 'react'
import { Box, Flex, Image, Text } from '@chakra-ui/react'
import { BreadcrumbCurrentLink, BreadcrumbLink, BreadcrumbRoot } from 'src/components/ui/breadcrumb'
import { StepperInput } from 'src/components/ui/stepper-input'
import { Rating } from 'src/components/ui/rating'
import { useParams } from 'react-router-dom'
import { roundToNearestHalf } from 'src/utils/utils'
import { Button } from 'src/components/ui/button'
import CustomSlider from 'src/components/CustomSlider'
import BookCard from 'src/components/BookCard'
import { sliderSettings } from 'src/utils/utils'
const fakeBookData = {
  id: 1,
  name: 'Lập trình hiện đại với JavaScript',
  short_description: 'Khám phá các khía cạnh hiện đại của JavaScript thông qua các ví dụ thực tiễn. Kỹ Năng Giao Tiếp Đỉnh Cao cuốn sách giúp bạn trở thành người làm chủ được khả năng giao tiếp, mở rộng mối quan hệ và đạt được thành công.',
  long_description:
    'Cuốn sách này cung cấp một hướng dẫn toàn diện về cách sử dụng JavaScript trong các dự án thực tế. Bao gồm ES6+, lập trình bất đồng bộ, và các framework phổ biến.',
  page_count: 450,
  publication_year: 2021,
  size: '16 x 24 cm',
  status: 1,
  quantity: 120,
  images: [
    'https://m.media-amazon.com/images/I/71I-9NCsYVL._SY425_.jpg',
    'https://m.media-amazon.com/images/S/aplus-media-library-service-media/3a479912-4e72-43ae-982d-59cf50048a9e.__CR0,0,1080,1080_PT0_SX300_V1___.png',
    'https://m.media-amazon.com/images/I/71I-9NCsYVL._SY425_.jpg',
    'https://m.media-amazon.com/images/S/aplus-media-library-service-media/3a479912-4e72-43ae-982d-59cf50048a9e.__CR0,0,1080,1080_PT0_SX300_V1___.png'
  ],
  slug: 'lap-trinh-hien-dai-voi-javascript',
  publisher_id: 3,
  language: 2,
  authors: 'John Doe, Jane Smith',
  publisher_name: 'Nhà xuất bản Khoa Học',
  borrowed_count: 230,
  average_rating: 4.5,
  reviews: [
    {
      user: 'Nguyen Van A',
      rating: 5,
      comment: 'Sách rất hay và chi tiết. Phù hợp cho người học nâng cao.'
    },
    {
      user: 'Tran Thi B',
      rating: 4,
      comment: 'Một số phần hơi khó hiểu, nhưng tổng thể rất tốt.'
    }
  ]
}
const similarBook = [
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
]
export default function BookDetails() {
  const bookId = useParams()
  const similarBookRef = useRef(null)
  const [mainImg, setMainImg] = useState<string>(fakeBookData.images[0])
  const handleAddToCart = () => {
    console.log("Add to cart");

  }
  return (
    <Box padding='50px 155px' minHeight='100vh'>
      <Box width='full' maxWidth='container.md' mb={8}>
        <BreadcrumbRoot>
          <BreadcrumbLink href='/'>Home</BreadcrumbLink>
          <BreadcrumbLink href='#'>Books</BreadcrumbLink>
          <BreadcrumbCurrentLink>{fakeBookData.name}</BreadcrumbCurrentLink>
        </BreadcrumbRoot>
      </Box>
      <Flex mt={100} justifyContent='space-between'  width='100%' gap={20}>
        <Flex width='40%' direction='column'>
          <Flex justifyContent='center' alignItems='center'>
            <Image src={mainImg} width={400} height={400} objectFit='contain' />
          </Flex>
          <Flex mt={10} justifyContent='space-between' alignItems='center'>
            {fakeBookData.images.map((image) => (
              <Box onMouseOver={() => setMainImg(image)}>
                <Image src={image} width={90} height={90} objectFit='fill' />
              </Box>
            ))}
          </Flex>
        </Flex>
        {/* bên phải*/}
        <Flex
          flex={1}
          boxShadow='rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px'
          borderRadius='2xl'
          direction='column'
          
        >
          <Flex>
            <Text fontSize='36px' fontWeight='700'>
              {fakeBookData.name}
            </Text>
          </Flex>
          <Flex align='center' margin="20px 0">
            <Flex paddingRight={10} borderRight='1px solid #ccc'>
              <Rating
                colorPalette='yellow'
                readOnly
                allowHalf
                value={roundToNearestHalf(fakeBookData.average_rating)}
              />
              <Text ml='2' fontSize='sm'>
                ({fakeBookData.reviews.length})
              </Text>
            </Flex>
            <Text ml={10}>{`${fakeBookData.borrowed_count} đã mượn`}</Text>
          </Flex>
          {/* short desc  */}
          <Box>
            <Text color="gray.500">{fakeBookData.short_description}</Text>
          </Box>
          {/* input number */}
          <Flex margin="20px 0px">
            <StepperInput defaultValue='1' min={1} max={fakeBookData.quantity} />
            <Box ml={20}>
              <Text color="Highlight">{`Còn lại ${fakeBookData.quantity} cuốn `}</Text>
            </Box>
          </Flex>
          <Flex gap={50}>
            <Button backgroundColor="rgba(255, 69, 0, 0.7804)">Add To Cart</Button>
            <Button backgroundColor="#f44336">Add To Wishlist</Button>
          </Flex>
        </Flex>
      </Flex>

      {/* similar book  */}
      <Box mt={20}>
        <Text fontSize={24} fontWeight={500} >Sách tương tự</Text>
        <CustomSlider sliderRef={similarBookRef} settings={sliderSettings}>
            {similarBook.map((item) => (
              <div key={item.id}>
                <BookCard {...item} mode='default' onAddToCart={handleAddToCart} />
              </div>
            ))}
          </CustomSlider>
      </Box>
    </Box>
  )
}
