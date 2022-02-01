import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import './App.css';
import { Box, useDisclosure } from "@chakra-ui/react"
import Home from './pages/Home';
import Checkout from './pages/Checkout';
import ProductDetail from './pages/ProductDetail';
import Category from './pages/Category';


function App() {
  return (
    <BrowserRouter>
      <Box minHeight="100vh">
        <Routes>
          <Route path="/category/:category" element={<Category />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/product/:id" element={<ProductDetail />} />

          <Route path="/" element={<Home />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
