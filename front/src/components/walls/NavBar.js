"use client";

import React from 'react';
import { Flex, Text, Spacer, Box } from '@chakra-ui/react';
import { Button, Input, Popover, Portal } from "@chakra-ui/react"
import IconButtonType1 from '../bricks/IconButtonType1';
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
        <Popover.Root>
          <Popover.Trigger asChild>
            <IconButtonType1 aria-label="Naruto Form">
              <Text fontSize="sm" color={theme.colors.onPrimary}>N</Text>
            </IconButtonType1>
          </Popover.Trigger>
          <Portal >
            <Popover.Positioner>

              <Popover.Content borderRadius="15px" css={{ "--popover-bg": theme.colors.onSurface }}>
                <Popover.Arrow />
                <Popover.Body>
                  <Popover.Title 
                    fontFamily="'Inter Variable', sans-serif" 
                    fontWeight="medium">
                    Fazer Login
                  </Popover.Title>
                  
                </Popover.Body>
              </Popover.Content>
            </Popover.Positioner>
          </Portal>
        </Popover.Root>
      </Box>
    </Flex>
  );
}