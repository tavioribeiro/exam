"use client";

import React from "react";
import { Text } from "@chakra-ui/react";
import { useTheme } from '@/context/ThemeContext';
import '@fontsource-variable/inter';


export default function TextT({ children, ...rest }) {
    const { theme } = useTheme();

    return (
        <Text
            fontSize="30px"
            fontFamily="'Inter Variable', sans-serif"
            fontWeight="700"
            color={theme.colors.onSecondary}
            {...rest}
        >
            {children}
        </Text>
    );
}