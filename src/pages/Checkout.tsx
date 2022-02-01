import React, { useState } from 'react';
import { Link as ReactLink } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { Box, Text, Grid, Image, VStack, Flex, Input, FormLabel, RadioGroup, Radio, Link, Button } from '@chakra-ui/react';
import { getProducts } from '../utils/getProducts';

const Checkout = () => {
  const products = getProducts()

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

          </Box>
        </Grid>
      </Box>

      <Footer />
    </Box >
  );
};

export default Checkout;
