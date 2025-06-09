"use client";

import React from "react";
import { Text } from "@chakra-ui/react";
import { useTheme } from '@/context/ThemeContext';
import '@fontsource-variable/inter';


export default function TextST({ children, ...rest }) {
    const { theme } = useTheme();

    return (
        <Text
            fontSize="24px"
            fontFamily="'Inter Variable', sans-serif"
            fontWeight="600"
            color={theme.colors.onSecondary}
            {...rest}
        >
            {children}
        </Text>
    );
}