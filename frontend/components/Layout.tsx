"use client";

// Components
import Header from "./Header";
import Footer from "./Footer";

// ChakraUI
import { Flex } from "@chakra-ui/react";

// Types
import { LayoutChildrenProps } from "@/types";

export const Layout = ({ children }: LayoutChildrenProps) => {
  return (
    <Flex
      height="100vh"
      direction="column"
      justifyContent="space-between"
      alignItems="center"
    >
      <Header />
      <Flex padding="2rem" direction="column" width="100%">
        {children}
      </Flex>
      <Footer />
    </Flex>
  );
};
