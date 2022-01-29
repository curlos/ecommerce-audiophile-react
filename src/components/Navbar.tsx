import React from 'react';
import { Link as ReactLink } from 'react-router-dom';
import { Box, Flex, Image, Text, Link, HStack } from '@chakra-ui/react';

const Navbar = () => {


  return (
    <Box bgColor="#101010" textColor="#ffffff">
      <Flex align="center" mx="60px" py="20px" borderBottom="1px" borderColor="#979797">
        <Image src="/assets/shared/desktop/logo.svg" />
        <Flex flexGrow="1" justify="center">
          <HStack spacing="30px">
            <Link as={ReactLink} to="/">HOME</Link>
            <Link as={ReactLink} to="/category/headphones">HEADPHONES</Link>
            <Link as={ReactLink} to="/category/speakers">SPEAKERS</Link>
            <Link as={ReactLink} to="/category/earphones">EARPHONES</Link>
          </HStack>
        </Flex>
        <Image src="/assets/shared/desktop/icon-cart.svg" />

      </Flex>
    </Box>
  );
};

export default Navbar;
