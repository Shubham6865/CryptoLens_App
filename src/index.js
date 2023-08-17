import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
// import ColorModeSwither from './ColorModeSwitcher';
import { ChakraProvider, theme } from '@chakra-ui/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
{/* <ColorModeSwither/> */}
    <App />
    </ChakraProvider>
  </React.StrictMode>
);

// export const server ='https://www.coingecko.com/api/v3';


export const server = `https://api.coingecko.com/api/v3`;
