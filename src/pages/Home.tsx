import React from 'react';
import { Link as ReactLink } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Box, Text, Image, VStack, Button, Flex, Grid, Link } from '@chakra-ui/react';
import Footer from '../components/Footer';
import BestAudioGear from '../components/BestAudioGear';
import CategoryLinks from '../components/CategoryLinks';
import { getProducts } from '../utils/getProducts';

const Home = () => {
  const products = getProducts()
  const newProduct = products.find((product) => product.slug === "xx99-mark-two-headphones")


  return (
    <Box>
      <Navbar />

      {newProduct && (
        <Box bgImage="/assets/home/desktop/image-hero.jpg" h="500px" w="100vw" maxW="100%" bgSize="contain" bgRepeat="none" textColor="#FFFFFF" px="60px" py="60px">
          <VStack align="start" spacing="15px" maxW="400px">
            <Text fontWeight="400" fontSize="14px" letterSpacing="10px">NEW PRODUCT</Text>
            <Text fontWeight="bold" fontSize="56px">XX99 MARK II HEADPHONES</Text>
            <Text fontWeight="medium" fontSize="15px">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</Text>
            <Link as={ReactLink} to={`/product/${newProduct.slug}`}>
              <Button bgColor="#D87D4A" fontWeight="bold" fontSize="13px" px="25px" py="15px" borderRadius="0px">SEE PRODUCT</Button>
            </Link>
          </VStack>
        </Box>
      )}

      <CategoryLinks />

      <Grid templateColumns="repeat(2, 1fr)" mx="70px" pt="100px" bgColor="#D87D4A" bgImage="/assets/home/desktop/pattern-circles.svg" bgSize="70%" bgRepeat="no-repeat" bgPosition="-100px -15px" borderRadius="10px">
        <Flex justify="center">
          <Image src="/assets/home/desktop/image-speaker-zx9.png" w="50%" clipPath="rect(0, 0, 20px, 0)" />
        </Flex>

        <VStack textColor="#FFFFFF" spacing="30px" align="start">
          <Text fontWeight="bold" fontSize="56px">ZX9 SPEAKER</Text>
          <Text fontWeight="medium" fontSize="15px">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</Text>
          <Button bgColor="#000000" fontWeight="bold" fontSize="13px" px="25px" py="15px" borderRadius="0px">SEE PRODUCT</Button>
        </VStack>

      </Grid>

      <Flex flexDirection="column" gap="20px" justify="center" bgImage="/assets/home/desktop/image-speaker-zx7.jpg" height="320px" mx="70px" my="50px" borderRadius="10px" px="70px">
        <Box>
          <Text fontWeight="bold" fontSize="28px">ZX7 SPEAKER</Text>
          <Button bgColor="transparent" fontWeight="bold" fontSize="13px" px="25px" py="15px" borderRadius="0px" border="1px" mt="30px">SEE PRODUCT</Button>
        </Box>
      </Flex>

      <Grid templateColumns="1fr 1fr" gap="20px" mx="70px">
        <Box bgImage="/assets/home/desktop/image-earphones-yx1.jpg" height="320px" borderRadius="10px" />
        <Flex direction="column" bgColor="#F1F1F1" borderRadius="10px" justify="center" align="start" px="100px">
          <Text fontWeight="bold" fontSize="28px">YX1 EARPHONES</Text>
          <Button bgColor="transparent" fontWeight="bold" fontSize="13px" px="25px" py="15px" borderRadius="0px" border="1px" mt="30px">SEE PRODUCT</Button>
        </Flex>
      </Grid>

      <BestAudioGear />

      <Footer />
    </Box>
  );
};

export default Home;
