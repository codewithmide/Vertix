"use client"

import React, { useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { PhantomWalletAdapter, SolflareWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
    WalletModalProvider
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';


// Default styles that can be overridden by your app
require('@solana/wallet-adapter-react-ui/styles.css');


export default function SolanaProvider({
    children,
  }: {
    children: React.ReactNode
  }) {
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
                    <div className="poppins">
                        {children}
                    </div>
                  </WalletModalProvider>
              </WalletProvider>
          </ConnectionProvider>
      );
}