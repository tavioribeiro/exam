"use client";

import React from "react";
import { Button } from "@chakra-ui/react";
import { useTheme } from '@/context/ThemeContext';


export default function ButtonType1 ({ children, ...rest }){

    const { theme } = useTheme();

    return (
        <Button
        bg={theme.colors.primary} 
        color={theme.colors.onPrimary}
        borderRadius="50px"
        size="sm" 
        {...rest} 
        >
        {children}
        </Button>
    );
};

