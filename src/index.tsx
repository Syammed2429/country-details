import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';

const theme = extendTheme({
  config: {
    initialColorMode: 'system',
    useSystemColorMode: true,
  },
  colors: {
    neutral: {
      darkBlue: 'hsl(209, 23%, 22%)',
      veryDarkBlue: 'hsl(207, 26%, 17%)',
      lightText: 'hsl(200, 15%, 8%)',
      darkGray: 'hsl(0, 0%, 52%)',
      veryLightGray: 'hsl(0, 0%, 98%)',
      white: 'hsl(0, 0%, 100%)',
    },
  },
  fonts: {
    body: "'Nunito Sans', sans-serif",
  },
  fontWeights: {
    normal: 300,
    medium: 600,
    bold: 800,
  },
  fontSizes: {
    homepageItems: '14px',
    detailPage: '16px',
  },
  styles: {
    global: (props: { colorMode: string; }) => ({
      body: {
        color: props.colorMode === 'dark' ? 'neutral.white' : 'neutral.lightText',
        bg: props.colorMode === 'dark' ? 'neutral.veryDarkBlue' : 'neutral.veryLightGray',
      },
      '::placeholder': {
        color: props.colorMode === 'dark' ? 'neutral.white' : 'neutral.veryDarkBlue',
        opacity: '1',
      },
    }),
  },

  components: {
    Input: {
      variants: {
        filled: (props: { colorMode: string; }) => ({
          field: {
            borderColor: props.colorMode === 'dark' ? 'neutral.white' : 'neutral.darkBlue',
          },
        }),
      },
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
