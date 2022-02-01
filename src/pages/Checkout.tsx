import React, { useState } from 'react';
import { Link as ReactLink } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { Box, Text, Grid, Image, VStack, Flex, Input, FormLabel, RadioGroup, Radio, Link, Button, useDisclosure } from '@chakra-ui/react';
import { getProducts } from '../utils/getProducts';
import CheckoutModal from '../components/CheckoutModal';

const Checkout = () => {
  const products = getProducts()
  const { isOpen, onOpen, onClose } = useDisclosure()

  const [paymentMethod, setPaymentMethod] = useState('')

  console.log(products)

  return (
    <Box bgColor="#F1F1F1">
      <Navbar />

      <Box p="100px" w="100%">
        <Text fontSize="15px" fontWeight="medium" mb="40px">Go Back</Text>

        <Grid templateColumns="5fr 2fr" gap="20px" fontSize="13px" fontWeight="bold" w="100%">
          <VStack spacing="50px" align="start" w="100%" bgColor="#ffffff" borderRadius="15px" p="40px">
            <Text fontWeight="bold" fontSize="32px">CHECKOUT</Text>

            <VStack spacing="20px" align="" w="100%">
              <Text color="#D87D4A">BILLING DETAILS</Text>
              <Grid templateColumns="1fr 1fr" gap="20px">
                <Box>
                  <FormLabel htmlFor='name' fontWeight="bold" fontSize="12px">Name</FormLabel>
                  <Input placeholder="Alexei Ward" p="25px" />
                </Box>

                <Box>
                  <FormLabel htmlFor='email' fontWeight="bold" fontSize="12px">Email Address</FormLabel>
                  <Input placeholder="alexei@mail.com" p="25px" />
                </Box>
              </Grid>

              <Grid templateColumns="1fr 1fr" gap="20px">
                <Box>
                  <FormLabel htmlFor='name' fontWeight="bold" fontSize="12px">Phone Number</FormLabel>
                  <Input placeholder="+1 202-555-0136" p="25px" />
                </Box>


              </Grid>
            </VStack>

            <VStack spacing="20px" align="" w="100%">
              <Text color="#D87D4A">SHIPPING INFO</Text>
              <Grid templateColumns="1fr" gap="20px">
                <Box>
                  <FormLabel htmlFor='address' fontWeight="bold" fontSize="12px">Address</FormLabel>
                  <Input placeholder="1137 Williams Avenue" p="25px" />
                </Box>
              </Grid>

              <Grid templateColumns="1fr 1fr" gap="20px">
                <Box>
                  <FormLabel htmlFor='name' fontWeight="bold" fontSize="12px">ZIP Code</FormLabel>
                  <Input placeholder="10001" p="25px" />
                </Box>

                <Box>
                  <FormLabel htmlFor='name' fontWeight="bold" fontSize="12px">City</FormLabel>
                  <Input placeholder="New York" p="25px" />
                </Box>
              </Grid>

              <Grid templateColumns="1fr 1fr" gap="20px">
                <Box>
                  <FormLabel htmlFor='name' fontWeight="bold" fontSize="12px">Country</FormLabel>
                  <Input placeholder="United States" p="25px" />
                </Box>
              </Grid>
            </VStack>


            <VStack spacing="20px" align="" w="100%">
              <Text color="#D87D4A">PAYMENT DETAILS</Text>
              <Grid templateColumns="1fr 1fr" gap="20px">
                <Box>
                  <FormLabel htmlFor='name' fontWeight="bold" fontSize="12px">Payment Method</FormLabel>
                </Box>

                <RadioGroup onChange={() => setPaymentMethod('')} value={paymentMethod}>
                  <VStack align="" spacing="20px">
                    <Box p="20px" border="1px" borderColor="gray.200" borderRadius="md">
                      <Radio value='' colorScheme="orange">e-Money</Radio>
                    </Box>

                    <Box p="20px" border="1px" borderColor="gray.200" borderRadius="md">
                      <Radio value='' colorScheme="orange">Cash on Delivery</Radio>
                    </Box>
                  </VStack>
                </RadioGroup>
              </Grid>

              <Grid templateColumns="1fr 1fr" gap="20px">
                <Box>
                  <FormLabel htmlFor='name' fontWeight="bold" fontSize="12px">e-Money Number</FormLabel>
                  <Input placeholder="238521993" p="25px" />
                </Box>

                <Box>
                  <FormLabel htmlFor='name' fontWeight="bold" fontSize="12px">e-Money PIN</FormLabel>
                  <Input placeholder="6891" p="25px" />
                </Box>
              </Grid>
            </VStack>

          </VStack>

          <Box>
            <VStack spacing="10px" align="" w="100%" bgColor="#ffffff" borderRadius="15px" p="40px">
              <Text fontWeight="bold" fontSize="18px">
                SUMMARY
              </Text>

              <VStack spacing="20px" align="">
                {products.map((product) => (
                  <Flex>
                    <Box>
                      <Image src={product.image.desktop.slice(1,)} alt="" maxW="64px" borderRadius="5px" />
                    </Box>

                    <Flex flexGrow="1" justify="space-between" p="10px">
                      <Box fontName="15px">
                        <Text>{product.name.split(' ')[0]}</Text>
                        <Text color="gray.500">${product.price}</Text>
                      </Box>

                      <Text color="gray.500">x1</Text>
                    </Flex>
                  </Flex>
                ))}
              </VStack>

              <Flex align="center" justify="space-between">
                <Text fontWeight="medium" fontSize="15px" color="gray.500">TOTAL</Text>
                <Text fontWeight="bold" fontSize="18px">$5,396</Text>
              </Flex>

              <Flex align="center" justify="space-between">
                <Text fontWeight="medium" fontSize="15px" color="gray.500">SHIPPING</Text>
                <Text fontWeight="bold" fontSize="18px">$50</Text>
              </Flex>

              <Flex align="center" justify="space-between">
                <Text fontWeight="medium" fontSize="15px" color="gray.500">VAT (INCLUDED)</Text>
                <Text fontWeight="bold" fontSize="18px">$1,079</Text>
              </Flex>

              <Flex align="center" justify="space-between">
                <Text fontWeight="medium" fontSize="15px" color="gray.500">GRAND TOTAL</Text>
                <Text fontWeight="bold" fontSize="18px" color="#D87D4A">$5,496</Text>
              </Flex>

              <Button bgColor="#D87D4A" color="#ffffff" fontWeight="bold" fontSize="13px" px="25px" py="15px" borderRadius="0px" w="100%" onClick={onOpen}>
                CONTINUE & PAY
              </Button>
            </VStack>
          </Box>
        </Grid>
      </Box>

      <CheckoutModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />

      <Footer />
    </Box >
  );
};

export default Checkout;
