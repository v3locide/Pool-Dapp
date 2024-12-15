"use client";
import "@rainbow-me/rainbowkit/styles.css";
import { ChakraProvider } from "@chakra-ui/react";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";

import { configureChains, createConfig, WagmiConfig } from "wagmi";

import { hardhat } from "wagmi/chains";

import { publicProvider } from "wagmi/providers/public";

const { chains, publicClient } = configureChains([hardhat], [publicProvider()]);

const { connectors } = getDefaultWallets({
  appName: process.env.APP_NAME || "",
  projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_ID || "",
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: false,
  connectors,
  publicClient,
});

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <WagmiConfig config={wagmiConfig}>
          <RainbowKitProvider chains={chains}>
            <ChakraProvider>{children}</ChakraProvider>
          </RainbowKitProvider>
        </WagmiConfig>
      </body>
    </html>
  );
}
