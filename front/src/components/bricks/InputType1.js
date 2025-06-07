"use client";

import React from "react";
import { Input } from "@chakra-ui/react";
import { useTheme } from '@/context/ThemeContext';
// Supports weights 100-900
import '@fontsource-variable/inter';


export default function InputType1({ children, ...rest }) {
    const { theme } = useTheme();

    return (
    
        <Input
            fontSize="16px"
            fontFamily="'Inter Variable', sans-serif"
            fontWeight="400"
            borderRadius="50px"
            w={["80%", "60%", "50%"]}
            color={theme.colors.onBackground}
            bg={theme.colors.background}
            borderColor={theme.colors.primary}
            _hover={{ borderColor: theme.colors.primaryHover }}
            _focus={{ borderColor: theme.colors.primaryFocus }}
            {...rest}
        >
            {children}
        </Input>
    );
}