import React from 'react';
import { Link as ReactLink } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { useParams } from 'react-router-dom';
import { getProducts } from '../utils/getProducts';
import { Box, Text, Flex, Image, VStack, Button, Grid, Link } from '@chakra-ui/react';
import BestAudioGear from '../components/BestAudioGear';
import CategoryLinks from '../components/CategoryLinks';


const Category = () => {
  const { category } = useParams()
  const products = getProducts()
  const categoryProducts = products.filter((product) => product.category === category)
  categoryProducts.reverse()


  console.log(category)

  console.log(categoryProducts)

  return (
    <>
      <Navbar />
      <Flex justify="center" align="center" color="white" bgColor="#101010" py="50px">
        <Text fontSize="40px" fontWeight="bold">{category?.toUpperCase()}</Text>
      </Flex>

      <VStack spacing="40px" p="100px" align="start">
        {categoryProducts.map((product, i) => (
          i % 2 === 0 ? (
            <Grid templateColumns="1fr 1fr">
              <Image src={product.image.desktop.slice(1,)} alt={product.name} />

              <Flex justify="center" align="center" w="100%" px="60px">
                <VStack spacing="20px" align="start">
                  {i === 0 ? (
                    <Text fontSize="14px" color="#D87D4A" letterSpacing="10px" align="start">{'NEW PRODUCT'.toUpperCase()}</Text>
                  ) : null}
                  <Text fontSize="40px" fontWeight="bold">{product.name}</Text>
                  <Text fontSize="15px" fontWeight="medium">{product.description}</Text>
                  <Link as={ReactLink} to={`/product/${product.id}`}>
                    <Button bgColor="#D87D4A" color="#ffffff" fontWeight="bold" fontSize="13px" px="25px" py="15px" borderRadius="0px">SEE PRODUCT</Button>
                  </Link>
                </VStack>
              </Flex>
            </Grid>
          ) : (
            <Grid templateColumns="1fr 1fr">
              <Flex justify="center" align="center" w="100%" px="60px">
                <VStack spacing="20px" align="start">
                  {i === 0 ? (
                    <Text fontSize="14px" color="#D87D4A" letterSpacing="10px" align="start">{'NEW PRODUCT'.toUpperCase()}</Text>
                  ) : null}
                  <Text fontSize="40px" fontWeight="bold">{product.name}</Text>
                  <Text fontSize="15px" fontWeight="medium">{product.description}</Text>
                  <Button bgColor="#D87D4A" color="#ffffff" fontWeight="bold" fontSize="13px" px="25px" py="15px" borderRadius="0px">SEE PRODUCT</Button>
                </VStack>
              </Flex>

              <Image src={product.image.desktop.slice(1,)} alt={product.name} />
            </Grid>
          )
        ))}
      </VStack>

      <CategoryLinks />
      <BestAudioGear />


      <Footer />
    </>
  );
};

export default Category;
