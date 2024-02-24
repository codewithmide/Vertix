import React from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import toast from "react-hot-toast";
import walletIcon from "@/assets/svgs/wallet.svg";
import disconnectIcon from "@/assets/svgs/disconnect.svg";
import Image from "next/image";

const CustomConnectButton = () => {
  const { disconnect, connected } = useWallet();
  const { setVisible } = useWalletModal();

  const handleConnect = () => {
    setVisible(true);
  };

  const handleDisconnect = async () => {
    try {
      await disconnect();
    } catch (error) {
      toast.error("Failed to disconnect the wallet");
    }
  };

  return (
    <button onClick={connected ? handleDisconnect : handleConnect}>
      {connected ? (
        <div className="center gap-2 bg-red text-white p-3 rounded-md text-[.9rem] hover:scale-95 duration-300 transition-all">
          <p>Disconnect Wallet</p>
          <Image
            src={disconnectIcon}
            alt="disconnect icon"
            height={20}
            width={20}
          />
        </div>
      ) : (
        <div className="center gap-2 bg-green text-white p-3 rounded-md text-[.9rem] hover:scale-95 duration-300 transition-all">
          <p>Connect Wallet</p>
          <Image src={walletIcon} alt="walllet icon" height={16} width={16} />
        </div>
      )}
    </button>
  );
};

export default CustomConnectButton;
