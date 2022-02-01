import React, { useEffect, useState } from 'react';
import { Link as ReactLink } from 'react-router-dom';
import { useParams } from 'react-router';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { getProducts } from '../utils/getProducts';
import { Box, Grid, Text, Image, VStack, Link, Button, Flex } from '@chakra-ui/react';
import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import BestAudioGear from '../components/BestAudioGear';
import CategoryLinks from '../components/CategoryLinks';

const ProductDetail = () => {
  const { name } = useParams()
  const products = getProducts()
  const [product, setProduct] = useState(products.find((product) => product.slug === name))
  const featuresParagraphs = product && product.features.split(/\s+\s+/)
  const [quantity, setQuantity] = useState(1)

  console.log(product)
  console.log(products)

  useEffect(() => {
    // window.scrollTo(0, 0)
    setProduct(products.find((product) => product.slug === name))
  }, [name])

  return (
    <>
      <Navbar />

      {product && (
        <Box p="100px">
          <Text fontSize="15px" fontWeight="medium" mb="40px">Go Back</Text>

          <VStack align="start" spacing="100px">
            <Grid templateColumns="1fr 1fr">
              <Image src={product?.image.desktop.slice(1,)} alt={product.name} />

              <Flex justify="center" align="center" w="100%" px="60px">
                <VStack spacing="20px" align="start">
                  <Text fontSize="40px" fontWeight="bold">{product.name}</Text>
                  <Text fontSize="15px" fontWeight="medium">{product.description}</Text>
                  <Flex gap="20px">
                    <Flex justify="space-between" align="center" bgColor="#F1F1F1" px="15px" gap="25px" w="130px">
                      <MinusIcon fontWeight="bold" h="8px" color="gray.500" cursor="pointer" onClick={() => quantity > 1 ? setQuantity(quantity - 1) : null} />
                      <Text userSelect="none">{quantity}</Text>
                      <AddIcon fontWeight="bold" h="8px" color="gray.500" cursor="pointer" onClick={() => setQuantity(quantity + 1)} />
                    </Flex>
                    <Link as={ReactLink} to={`/product/${product.slug}`}>
                      <Button bgColor="#D87D4A" color="#ffffff" fontWeight="bold" fontSize="13px" px="25px" py="15px" borderRadius="0px">SEE PRODUCT</Button>
                    </Link>
                  </Flex>
                </VStack>
              </Flex>
            </Grid>

            <Grid templateColumns="3fr 2fr" gap="60px">
              <VStack spacing="20px" align="start">
                <Text fontWeight="bold" fontSize="32px">
                  {'FEATURES'.toUpperCase()}
                </Text>

                {featuresParagraphs?.map((paragraph) => (
                  <Text fontWeight="medium" fontSize="15px">{paragraph}</Text>
                ))}
              </VStack>

              <VStack spacing="20px" align="start">
                <Text fontWeight="bold" fontSize="32px">
                  {'IN THE BOX'.toUpperCase()}
                </Text>


                <VStack spacing="20px" align="start">
                  {product.includes.map((item) => (
                    <Flex gap="20px" align="center" fontSize="15px">
                      <Text fontWeight="bold" color="#D87D4A">{item.quantity}x</Text>
                      <Text fontWeight="medium">{item.item}</Text>
                    </Flex>
                  ))}
                </VStack>
              </VStack>
            </Grid>

            <Flex gap="20px" h="100%">
              <Flex flexDirection="column" justify="space-between" h="100%" gap="30px">
                <Box>
                  <Image src={product.gallery.first.desktop.slice(1,)} alt="" objectFit="cover" />
                </Box>
                <Box>
                  <Image src={product.gallery.second.desktop.slice(1,)} alt="" objectFit="cover" />
                </Box>
              </Flex>

              <Box h="100%">
                <Image src={product.gallery.third.desktop.slice(1,)} alt="" h="100%" />
              </Box>
            </Flex>

            <Box>
              <Text fontWeight="bold" fontSize="32px" mb="40px" align="center">YOU MAY ALSO LIKE</Text>

              <Grid templateColumns="repeat(3, 1fr)" gap="20px">
                {product.others.map((otherProduct) => (
                  <VStack spacing="20px">
                    <Image src={otherProduct.image.desktop.slice(1,)} />

                    <Text align="center" fontWeight="bold" fontSize="24px">{otherProduct.name}</Text>

                    <Link as={ReactLink} to={`/product/${otherProduct.slug}`}>
                      <Button bgColor="#D87D4A" color="#ffffff" fontWeight="bold" fontSize="13px" px="25px" py="15px" borderRadius="0px">SEE PRODUCT</Button>
                    </Link>
                  </VStack>
                ))}
              </Grid>
            </Box>

            <CategoryLinks />
            <BestAudioGear />
          </VStack>
        </Box>
      )}

      <Footer />
    </>
  );
};

export default ProductDetail;