import { Avatar, Box, Flex, IconButton, Stack, Text, VStack } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';

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
  

  

  return (
    <Box bgColor="blackAlpha.900" color="whiteAlpha.700" minH="48" px="16" py={["8", "4"]}>
      <Stack direction={["column", "row"]} h="full" alignItems="center">
       
        <VStack flex={3}>
          <Avatar boxSize="28" mt={["4", "0"]} />
          <Text mb={0.1}>Our Founder</Text>
          <Text mt={0.1} textAlign={'center'}>© 2023 — Xcrypto. All Rights Reserved.</Text>

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