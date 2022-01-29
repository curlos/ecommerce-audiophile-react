import React from 'react';
import Navbar from '../components/Navbar';
import { Box, Text, Image, VStack, Button, Flex, Grid } from '@chakra-ui/react';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <Box>
      <Navbar />

      <Box bgImage="/assets/home/desktop/image-hero.jpg" h="500px" w="100vw" maxW="100%" bgSize="contain" bgRepeat="none" textColor="#FFFFFF" px="60px" py="60px">
        <VStack align="start" spacing="15px" maxW="400px">
          <Text fontWeight="400" fontSize="14px" letterSpacing="10px">NEW PRODUCT</Text>
          <Text fontWeight="bold" fontSize="56px">XX99 MARK II HEADPHONES</Text>
          <Text fontWeight="medium" fontSize="15px">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</Text>
          <Button bgColor="#D87D4A" fontWeight="bold" fontSize="13px" px="25px" py="15px" borderRadius="0px">SEE PRODUCT</Button>
        </VStack>
      </Box>

      <Grid templateColumns="repeat(3, 1fr)" mx="70px" my="50px" gap="20px">
        <Box>
          <Image src="/assets/shared/desktop/image-category-thumbnail-headphones.png" height="185px" mb="-120px" ml="70px" />

          <Flex flexDirection="column" justify="flex-end" align="center" gap="15px" py="40px" w="350px" h="204px" bgColor="#F1F1F1" borderRadius="10px">
            <Text fontWeight="bold" fontSize="18px">HEADPHONES</Text>
            <Flex align="center" gap="10px">
              <Text>SHOP</Text>
              <Image src="/assets/shared/desktop/icon-arrow-right.svg" h="10px" w="5px" />
            </Flex>
          </Flex>
        </Box>

        <Box>
          <Image src="/assets/shared/desktop/image-category-thumbnail-speakers.png" height="185px" mb="-120px" ml="70px" />

          <Flex flexDirection="column" justify="flex-end" align="center" gap="15px" py="40px" w="350px" h="204px" bgColor="#F1F1F1" borderRadius="10px">
            <Text fontWeight="bold" fontSize="18px">SPEAKERS</Text>
            <Flex align="center" gap="10px">
              <Text>SHOP</Text>
              <Image src="/assets/shared/desktop/icon-arrow-right.svg" h="10px" w="5px" />
            </Flex>
          </Flex>
        </Box>

        <Box>
          <Image src="/assets/shared/desktop/image-category-thumbnail-earphones.png" height="185px" mb="-120px" ml="70px" />

          <Flex flexDirection="column" justify="flex-end" align="center" gap="15px" py="40px" w="350px" h="204px" bgColor="#F1F1F1" borderRadius="10px">
            <Text fontWeight="bold" fontSize="18px">EARPHONES</Text>
            <Flex align="center" gap="10px">
              <Text>SHOP</Text>
              <Image src="/assets/shared/desktop/icon-arrow-right.svg" h="10px" w="5px" />
            </Flex>
          </Flex>
        </Box>

      </Grid>

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

      <Grid templateColumns="1fr 1fr" gap="20px" mx="70px" my="50px">
        <VStack spacing="20px" align="start" d="flex" flexDirection="column" justify="center">
          <Text textTransform="uppercase" fontWeight="bold" fontSize="40px">Bringing you the <Text d="inline" color="#D87D4A">best</Text> audio gear</Text>
          <Text fontSize="15px" fontWeight="medium">
            Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
          </Text>
        </VStack>

        <Image src="/assets/shared/desktop/image-best-gear.jpg" borderRadius="10px" />
      </Grid>

      <Footer />
    </Box>
  );
};

export default Home;
