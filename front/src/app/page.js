"use client";

import React from "react";

import { Flex } from "@chakra-ui/react";

import { useTheme } from '@/context/ThemeContext';
import Navbar from "@/components/walls/NavBar";
import Footer from "@/components/walls/Footer";
import Body from "@/app/body";




export default function Index() {

  const { theme } = useTheme();

  return (
     <Flex
      direction="column"
      minHeight="100vh"
      bg={theme.colors.background}
      color={theme.colors.onBackground}
    >
      <Navbar />
      <Body/>
      <Footer/>
    </Flex>
  );
}