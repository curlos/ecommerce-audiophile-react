import React from 'react';
import { Link as ReactLink } from 'react-router-dom';
import {
  Box,
  Text,
  Flex,
  Grid,
  Image,
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Link,
  VStack
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons'
import { getProducts } from '../utils/getProducts';

interface Props {
  isOpen: any,
  onOpen: any,
  onClose: any
}

const CheckoutModal = ({ isOpen, onOpen, onClose }: Props) => {

  const firstProduct = getProducts()[0]

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size="lg">
        <ModalOverlay />
        <ModalContent>
          <VStack align="" spacing="30px" p="35px">
            <Flex justify="center" align="center" as="span" bgColor="#D87D4A" p="10px" borderRadius="50%" h="64px" w="64px">
              <CheckIcon color="white" w="70%" h="70%" />
            </Flex>

            <Text fontWeight="bold" fontSize="32px">
              THANK YOU <br />
              FOR YOUR ORDER
            </Text>

            <Text color="gray.500" fontWeight="medium" fontSize="15px">You will receive an email confirmation shortly.</Text>

            <Grid templateColumns="5fr 4fr">
              <Box p="25px" bgColor="#F1F1F1" borderLeftRadius="10px">
                <Flex justify="space-between" gap="10px">
                  <Flex gap="10px">
                    <Image src={firstProduct.image.desktop.slice(1,)} alt="" maxW="50px" />
                    <Box fontSize="15px">
                      <Text fontWeight="bold">{firstProduct.name.split(' ')[0]}</Text>
                      <Text color="gray.500">${firstProduct.price}</Text>
                    </Box>
                  </Flex>

                  <Text>x1</Text>
                </Flex>

                <Flex justify="center" align="center" p="10px" borderTop="1px" borderColor="gray.300" color="gray.500">
                  and 2 other items(s)
                </Flex>
              </Box>

              <Flex flexDirection="column" justify="center" p="25px" bgColor="#000000" borderRightRadius="10px">
                <Text color="gray.500" fontWeight="medium" fontSize="15px">GRAND TOTAL</Text>
                <Text color="#ffffff" fontWeight="bold">$5,446</Text>
              </Flex>
            </Grid>

            <Link as={ReactLink} to={`/`}>
              <Button bgColor="#D87D4A" color="#ffffff" fontWeight="bold" fontSize="13px" px="25px" py="15px" borderRadius="0px" w="100%">BACK TO HOME</Button>
            </Link>
          </VStack>


        </ModalContent>
      </Modal>
    </>
  );
};

export default CheckoutModal;
