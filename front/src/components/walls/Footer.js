"use client";

import React from 'react';
import { Box, Flex, Text, CloseButton} from '@chakra-ui/react';
import { CiLight, CiDark } from "react-icons/ci";


import { useTheme } from '@/context/ThemeContext';

export default function Footer() {
  const { theme, currentThemeName, toggleTheme } = useTheme();

  const data = {
    nomeEmpresa: "",
    desenvolvedor: "Otávio Augusto",
    anoAtual: new Date().getFullYear(),
  };

  return (
    <Box
      as="footer"
      w="100%"
      mt="auto"
      bg={theme.colors.surface}
      color="white"
      py={{ base: 2, sm: 3 }}
      px={{ base: 3, sm: 4, lg: 8 }}
      display="flex"
      flexDirection={{ base: 'column', lg: 'row' }}
      justifyContent="space-between"
      alignItems="center"
    >
      {/* Seção Esquerda: Logo/Nome da Empresa */}
      <Box
        flex={{ base: 'unset', lg: 1 }}
        textAlign={{ base: 'center', lg: 'left' }}
        mb={{ base: 4, lg: 0 }}
      >
        <Text
          fontSize={{ base: "xl", sm: "3xl", md: "2xl" }}
          fontWeight="extrabold"
          color={theme.colors.onSurface}
        >
          EXAM
        </Text>
      </Box>

      {/* Seção Central: Desenvolvedor e Copyright */}
      <Flex
        flex={{ base: 'unset', lg: 5 }}
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        mb={{ base: 4, lg: 0 }}
      >
        <Flex
          flexDirection={{ base: 'column', sm: 'row' }}
          alignItems="center"
          mb={3}
        >
          <Text
            fontSize="xs"
            fontWeight="600"
            fontStyle="italic"
            fontFamily="'Montserrat', sans-serif"
            textAlign="center"
            color={theme.colors.onSurface}
          >
            Desenvolvido por
          </Text>
          <Text
            ml={{ base: 0, sm: 1 }}
            textAlign="center"
            fontSize="xs"
            fontWeight="600"
            fontStyle="italic"
            fontFamily="'Montserrat', sans-serif"
            bg="linear-gradient(to right, #4FCCFF, #FFB550)"
            bgClip="text"
          >
            {data.desenvolvedor}
          </Text>
        </Flex>

        <Text
          fontSize="sm"
          fontFamily="'Montserrat', sans-serif"
          textAlign="center"
          color={theme.colors.onSurface}
        >
          Copyright© {data.anoAtual}, {data.nomeEmpresa} - Todos os direitos reservados.
        </Text>
      </Flex>

      {/* Seção Direita: Placeholder para equilíbrio visual */}
      <Flex
      justifyContent="center"
      alignItems="center"
        flex={{ base: 'unset', lg: 1 }}>
            {currentThemeName === 'dark' ? (
              <CiLight size={24} color={theme.colors.onSurface} onClick={toggleTheme} />
            ) : (
              <CiDark size={24} color={theme.colors.onSurface} onClick={toggleTheme} />
            )}
        </Flex>

    </Box>
  );
}