import { Grid, VStack, Text, Image } from '@chakra-ui/react';
import React from 'react';

const BestAudioGear = () => {
  return (
    <Grid templateColumns="1fr 1fr" gap="20px" mx="70px" my="50px">
      <VStack spacing="20px" align="start" d="flex" flexDirection="column" justify="center">
        <Text textTransform="uppercase" fontWeight="bold" fontSize="40px">Bringing you the <Text d="inline" color="#D87D4A">best</Text> audio gear</Text>
        <Text fontSize="15px" fontWeight="medium">
          Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
        </Text>
      </VStack>

      <Image src="/assets/shared/desktop/image-best-gear.jpg" borderRadius="10px" />
    </Grid>
  );
};

export default BestAudioGear;
