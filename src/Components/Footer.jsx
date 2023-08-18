import { Avatar, Box, Stack, Text, VStack } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import image1 from '../Assets/5.png';

const Footer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextSlide = () => {
    setCurrentIndex((currentIndex + 1) % 3);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextSlide();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const slides = [
    {
      heading: "About Us",
      text: "In the world of decentralized possibilities, crypto leads the way.",
      image: image1,
    },
    {
      heading: "About Us",
      text: "Unlocking the future with every encrypted transaction.",
      image: image1,
    },
    {
      heading: "About Us",
      text: "Where code meets currency, innovation knows no bounds.",
      image: image1,
    },
  ];

  return (
    <Box bgColor="blackAlpha.900" color="whiteAlpha.700" minH="48" px="16" py={["16", "8"]}>
      <Stack direction={["column", "row"]} h="full" alignItems="center">
        <VStack w="full" alignItems={["center", "flex-start"]} flex={7}>
          <Carousel infiniteLoop autoPlay showStatus={false} showArrows={true} interval={10000} showThumbs={false} selectedItem={currentIndex}>
            {slides.map((slide, index) => (
              <div key={index}>
                <Text fontSize="lg" fontWeight="bold">{slide.heading}</Text>
                <Text pb={1}>{slide.text}</Text>
                {slide.image && (
                  <img
                    style={{
                      maxWidth: '250px',
                      height: 'auto',
                      marginBottom: '1rem',
                    }}
                    src={slide.image}
                    alt={`Slide ${index + 1}`}
                    filter={"grayscale(1)"}
                  />
                )}
              </div>
            ))}
          </Carousel>
        </VStack>
        <VStack flex={3}>
          <Avatar boxSize="28" mt={["4", "0"]} />
          <Text>Our Founder</Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
