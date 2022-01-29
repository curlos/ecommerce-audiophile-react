import React from 'react';
import Navbar from '../components/Navbar';
import { Box, Text, Image, VStack, Button, Flex, Grid } from '@chakra-ui/react';

const Home = () => {
  return (
    <Box>
      <Navbar />

      <Box bgImage="/assets/home/desktop/image-hero.jpg" h="500px" w="100vw" maxW="100%" bgSize="contain" bgRepeat="none" textColor="#FFFFFF" px="60px" py="60px">
        <VStack align="start" spacing="15px" maxW="400px">
          <Text fontWeight="400" fontSize="14px" letterSpacing="10px">NEW PRODUCT</Text>
          <Text fontWeight="bold" fontSize="56px">XX99 MARK II HEADPHONES</Text>
          <Text fontWeight="medium" fontSize="15px">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</Text>
          <Button bgColor="#D87D4A" fontWeight="medium" fontSize="13px" px="25px" py="15px" borderRadius="0px">SEE PRODUCT</Button>
        </VStack>
      </Box>

      <Grid templateColumns="repeat(3, 1fr)" mx="70px" my="50px" gap="20px">
        <Box>
          <Image src="/assets/shared/desktop/image-category-thumbnail-headphones.png" height="185px" mb="-120px" ml="70px" />

          <Flex flexDirection="column" justify="flex-end" align="center" gap="15px" py="40px" w="350px" h="204px" bgColor="#F1F1F1">
            <Text fontWeight="bold" fontSize="18px">HEADPHONES</Text>
            <Flex align="center" gap="10px">
              <Text>SHOP</Text>
              <Image src="/assets/shared/desktop/icon-arrow-right.svg" h="10px" w="5px" />
            </Flex>
          </Flex>
        </Box>

        <Box>
          <Image src="/assets/shared/desktop/image-category-thumbnail-speakers.png" height="185px" mb="-120px" ml="70px" />

          <Flex flexDirection="column" justify="flex-end" align="center" gap="15px" py="40px" w="350px" h="204px" bgColor="#F1F1F1">
            <Text fontWeight="bold" fontSize="18px">SPEAKERS</Text>
            <Flex align="center" gap="10px">
              <Text>SHOP</Text>
              <Image src="/assets/shared/desktop/icon-arrow-right.svg" h="10px" w="5px" />
            </Flex>
          </Flex>
        </Box>

        <Box>
          <Image src="/assets/shared/desktop/image-category-thumbnail-earphones.png" height="185px" mb="-120px" ml="70px" />

          <Flex flexDirection="column" justify="flex-end" align="center" gap="15px" py="40px" w="350px" h="204px" bgColor="#F1F1F1">
            <Text fontWeight="bold" fontSize="18px">EARPHONES</Text>
            <Flex align="center" gap="10px">
              <Text>SHOP</Text>
              <Image src="/assets/shared/desktop/icon-arrow-right.svg" h="10px" w="5px" />
            </Flex>
          </Flex>
        </Box>

      </Grid>
    </Box>
  );
};

export default Home;
