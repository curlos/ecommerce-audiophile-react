import React, { useState } from 'react';
import { Link as ReactLink } from 'react-router-dom';
import { useParams } from 'react-router';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { getProducts } from '../utils/getProducts';
import { Box, Grid, Text, Image, VStack, Link, Button, Flex } from '@chakra-ui/react';
import { AddIcon, MinusIcon } from '@chakra-ui/icons'

const ProductDetail = () => {
  const { id } = useParams()
  const products = getProducts()
  const product = products.find((product) => product.id === Number(id))
  const [quantity, setQuantity] = useState(1)

  console.log(products)
  console.log(product)

  return (
    <>
      <Navbar />

      {product && (
        <Box p="100px">
          <Text fontSize="15px" fontWeight="medium">Go Back</Text>

          <Grid templateColumns="1fr 1fr">
            <Image src={product?.image.desktop.slice(1,)} alt={product.name} />

            <Flex justify="center" align="center" w="100%" px="60px">
              <VStack spacing="20px" align="start">
                <Text fontSize="40px" fontWeight="bold">{product.name}</Text>
                <Text fontSize="15px" fontWeight="medium">{product.description}</Text>
                <Flex gap="20px">
                  <Flex justify="space-between" align="center" bgColor="#F1F1F1" px="15px" gap="25px">
                    <MinusIcon fontWeight="bold" h="8px" color="gray.500" cursor="pointer" />
                    <Text>{quantity}</Text>
                    <AddIcon fontWeight="bold" h="8px" color="gray.500" cursor="pointer" />
                  </Flex>
                  <Link as={ReactLink} to={`/product/${product.id}`}>
                    <Button bgColor="#D87D4A" color="#ffffff" fontWeight="bold" fontSize="13px" px="25px" py="15px" borderRadius="0px">SEE PRODUCT</Button>
                  </Link>
                </Flex>
              </VStack>
            </Flex>
          </Grid>
        </Box>
      )}

      <Footer />
    </>
  );
};

export default ProductDetail;
