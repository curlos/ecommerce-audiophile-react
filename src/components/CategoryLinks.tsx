import { Grid, Box, Image, Flex, Text } from '@chakra-ui/react';
import React from 'react';

const CategoryLinks = () => {
  return (
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
  );
};

export default CategoryLinks;
