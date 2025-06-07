"use client";

import React from 'react';
import { Flex, Text, Spacer, Box } from '@chakra-ui/react';
import { useTheme } from '@/context/ThemeContext';

export default function Navbar() {
  const { theme } = useTheme();

  return (
    <Flex
      as="nav" 
      width="100%"
      p={[3]} 
      bg={theme.colors.surface}
      align="center"
      justify="space-between"
    >
        <Box
            display="flex"
            justifyContent="center"
            marginLeft="20px"
            alignItems="center">
                
            <Text 
                fontSize={["26px", "30px", "34px"]} 
                fontWeight="extrabold" 
                color={theme.colors.onSurface}>
                <Text as="span" color={theme.colors.primary}> 
                    E
                </Text>
                    XAM
                </Text>
            </Box>
      <Spacer /> 
      <Box>

      </Box>
    </Flex>
  );
}