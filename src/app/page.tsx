"use client"

import React, { FC, useMemo } from 'react';
import { ConnectionProvider, WalletProvider, useWallet } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { PhantomWalletAdapter, SolflareWalletAdapter, UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import Navbar from './components/Navbar';
import { clusterApiUrl } from '@solana/web3.js';
import CustomConnectButton from './components/CustomConnectButton';
import Homepage from './homepage/page';

// Default styles that can be overridden by your app
require('@solana/wallet-adapter-react-ui/styles.css');


export default function Home() {
      const network = WalletAdapterNetwork.Devnet;

      const endpoint = useMemo(() => clusterApiUrl(network), [network]);
  
      const wallets = useMemo(() => [
        new PhantomWalletAdapter(),
        new SolflareWalletAdapter({ network }),
    ], [network]);

  
      return (
          <ConnectionProvider endpoint={endpoint}>
              <WalletProvider wallets={wallets} autoConnect>
                  <WalletModalProvider>
                      <Homepage />
                  </WalletModalProvider>
              </WalletProvider>
          </ConnectionProvider>
      );
}
