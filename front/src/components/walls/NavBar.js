"use client";

import React from 'react';
import { Flex, Text, Spacer, Box } from '@chakra-ui/react';
import { Button, Field, Input, Popover, Portal } from "@chakra-ui/react"
import IconButtonType1 from '../bricks/IconButtonType1';
import TextP from '../bricks/TextP';
import TextN from '../bricks/TextN';
import { useTheme } from '@/context/ThemeContext';
import InputType1 from '../bricks/InputType1';

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
                    color={theme.colors.surface}
                    fontSize="16px"
                    textAlign="center"
                    fontWeight="600">
                    Fazer Login
                  </Popover.Title>
                  

                  <TextP
                    color={theme.colors.surface}
                    mt={6}
                    fontSize="14px">
                      Nome de usuário:
                  </TextP>

                  <Input
                    mt={2}
                    size="sm"
                    fontSize="14px"
                    w="100%"
                    borderRadius="10px"
                    color={theme.colors.surface}
                    bg={theme.colors.onSurface}
                    borderColor={theme.colors.surface}
                    placeholder="Digite seu nome de usuário"
                    _placeholder={{
                      color: theme.colors.surface,  
                      opacity: 1                      
                    }}
                  focusVisibleRing="outside"                // ou 'inside' / 'mixed'
  focusRingColor="blue.400"                 // cor do anel de foco
  focusRingWidth="2px"                      // largura do anel
  focusRingStyle="solid"                    // estilo do anel
                  />

                    <TextN
                      mt={2}
                      color={theme.colors.onSurface}>
                        
                    </TextN>









                    <TextP
                    color={theme.colors.surface}
                    mt={6}
                    fontSize="14px">
                      Senha:
                  </TextP>

                  <Input
                    mt={2}
                    size="sm"
                    fontSize="14px"
                    w="100%"
                    borderRadius="10px"
                    color={theme.colors.surface}
                    bg={theme.colors.onSurface}
                    borderColor={theme.colors.surface}
                    placeholder="Digite sua senha"
                    _placeholder={{
                      color: theme.colors.surface,  
                      opacity: 1                      
                    }}
                    
                  />

                    <TextN
                      mt={2}
                      color={theme.colors.onSurface}>
                        
                    </TextN>
                  
                </Popover.Body>
              </Popover.Content>
            </Popover.Positioner>
          </Portal>
        </Popover.Root>
      </Box>
    </Flex>
  );
}