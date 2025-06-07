"use client";

import React from "react";
import { Text } from "@chakra-ui/react";
import { useTheme } from '@/context/ThemeContext';
// Supports weights 100-900
import '@fontsource-variable/inter';


export default function TextN({ children, ...rest }) {
    const { theme } = useTheme();

    return (
        <Text
            fontSize="12px"
            fontFamily="'Inter Variable', sans-serif"
            fontWeight="300"
            color={theme.colors.onSecondary}
            {...rest}
        >
            {children}
        </Text>
    );
}