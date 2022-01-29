import { Box, Flex, Grid, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';

const Footer = () => {
  return (
    <VStack spacing="20px" align="start" px="100px" py="50px" bgColor="#000000" color="#FFFFFF" w="100%">
      <Flex justify="space-between" w="100%">
        <Image src="/assets/shared/desktop/logo.svg" />

        <Flex gap="20px" fontSize="13px" fontWeight="bold" textTransform="uppercase">
          <Text>Home</Text>
          <Text>Headphones</Text>
          <Text>Speakers</Text>
          <Text>Earphones</Text>
        </Flex>
      </Flex>

      <Grid templateColumns="1fr 1fr" w="100%">
        <Text fontWeight="medium" fontSize="15px" color="#979797">
          Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.
        </Text>

        <Flex justify="flex-end" align="flex-end" color="#ffffff">
          <Image src="/assets/shared/desktop/icon-facebook.svg" h="24px" w="24px" />
          <Image src="/assets/shared/desktop/icon-twitter.svg" h="24px" w="24px" />
          <Image src="/assets/shared/desktop/icon-instagram.svg" h="24px" w="24px" />
        </Flex>
      </Grid>

      <Text fontWeight="bold" fontSize="15px" color="#979797">
        Copyright 2021. All Rights Reserved
      </Text>
    </VStack>
  );
};

export default Footer;
