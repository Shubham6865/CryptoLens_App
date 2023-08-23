import { Avatar, Box, Flex, IconButton, Stack, Text, VStack } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';



const Footer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  
  useEffect(() => {
    const handleNextSlide = () => {
      setCurrentIndex((currentIndex + 1) % 3);
    };
    const interval = setInterval(() => {
      handleNextSlide();
    }, 10000);
  
    return () => clearInterval(interval);
  }, [currentIndex]);
  // Include currentIndex in the dependency array
  

  const slides = [
    {
      heading: "About Us",
      text: "Welcome to our innovative Xcrypto app! At Xcrypto app, we are passionate about providing you with a seamless and secure platform to explore the world of cryptocurrencies.",
      
    },
    {
      heading: "About Us",
      text: "Our team of dedicated experts in blockchain technology and financial services has come together to create an app that simplifies crypto trading, investment, and management.",
      
    },
    {
      heading: "About Us",
      text: "Whether you're an experienced trader or just getting started in the world of digital assets, our app is designed to meet your needs. We offer a user-friendly interface, real-time market data, and a wide range of cryptocurrencies to choose from.",
     
    },
    {
      heading: "About Us",
      text: "Security is our top priority. We utilize advanced encryption and multi-factor authentication to ensure that your funds and personal information are always safe and protected.",
      
    },
    {
      heading: "About Us",
      text: "Xcrypto is not a financial advisor. Cryptocurrency investments are subject to market risk. Please do your own research before making any investment decisions.",
      
    },
  ];

  return (
    <Box bgColor="blackAlpha.900" color="whiteAlpha.700" minH="48" px="16" py={["8", "4"]}>
      <Stack direction={["column", "row"]} h="full" alignItems="center">
       
        <VStack flex={3}>
          <Avatar boxSize="28" mt={["4", "0"]} />
          <Text mb={0.1}>Our Founder</Text>
          <Text mt={0.1}>© 2023 — Xcrypto. All Rights Reserved.</Text>

          {/* Links */}
          <Box as="footer" mb={1} mt={1} borderTopWidth="1px" borderColor="gray.200">
      <Flex justify="center" align="center" p={4}>
        <Stack direction="row" spacing={4}>
        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/shubham_._sp_._" >
            <IconButton
              icon={<FaInstagram />}
              aria-label="Instagram"
              variant="ghost"
              color="gray.500"
              _hover={{ color: 'gray.700' }}
            />
          </a>
          
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/shubhamparade" ><IconButton
              icon={<FaLinkedin />}
              aria-label="LinkedIn"
              variant="ghost"
              color="gray.500"
              _hover={{ color: 'gray.700' }}
            /></a>
          
          <a target="_blank" rel="noreferrer" href="https://github.com/Shubham6865" >
            <IconButton
              icon={<FaGithub />}
              aria-label="Github"
              variant="ghost"
              color="gray.500"
              _hover={{ color: 'gray.700' }}
            />
          </a>
        </Stack>
      </Flex>
          </Box>
        </VStack>
       
      </Stack>
    </Box>
    
  );
};

export default Footer;
