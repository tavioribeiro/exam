"use client";

import React from 'react';
import { Flex, Text, Spacer, Box } from '@chakra-ui/react';

import { useTheme } from '@/context/ThemeContext';

import TextP from "@/components/bricks/TextP";
import TextS from '@/components/bricks/TextS';
import ButtonType1 from "@/components/bricks/ButtonType1";


export default function Body() {

  const { theme, toggleTheme } = useTheme();

  return (
    <Flex
        direction="column"
        align="center"
        justify="center"
        flex="1"
        background={theme.colors.background}>

        <Flex 
            direction="column"
            align="center"
            justify="center"
            w={["95%", "70%", "40%"]}
            paddingY={15}
            paddingX={7}
            bg={theme.colors.surface}
            borderRadius="30px"
            color={theme.colors.onSurface}>

                <TextS color={theme.colors.onSurface}>
                    Bem-vindo ao EXAM.
                </TextS>

                <TextP
                    fontFamily="'Montserrat Variable', sans-serif"
                    color={theme.colors.onSurface}>
                        Digite o código da sua prova para começar.
                </TextP>
                
                <ButtonType1 onClick={toggleTheme} mt={4}>
                    Mudar Tema
                </ButtonType1>
            </Flex>
        </Flex>
    );
}