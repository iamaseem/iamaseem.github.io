import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Hero from "./components/Hero"

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Hero />
    </ChakraProvider>
  );
}

export default App;
