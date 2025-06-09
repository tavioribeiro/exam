"use client";

import React from "react";
import { Flex } from "@chakra-ui/react";
import { useTheme } from '@/context/ThemeContext';
import { IoPerson } from "react-icons/io5";



export default function IconButtonType1 ({ children, ...rest }){

    const { theme } = useTheme();

    return (
        <Flex
            as="button"
            bg={theme.colors.suface}
            color={theme.colors.onPrimary}
            borderRadius="50%"
            width="30px"
            height="30px"
            border="0px solid"
            borderColor={theme.colors.onSurface}
            outline="none"
            _hover={{
                bg: theme.colors.secondary,
                color: theme.colors.onSecondary,
                borderColor: theme.colors.secondary,
                border:"1px solid",
                borderColor:theme.colors.onSurface
            }}
            justify="center"
            align="center"
            {...rest}
        >
            <IoPerson size="20px" color={theme.colors.onSurface}/>
        </Flex>
    );
};

