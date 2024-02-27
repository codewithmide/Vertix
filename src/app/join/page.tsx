"use client";

import Navbar from "../components/Navbar";
import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { TrendingType } from "@/types/trending.types";
import { trending } from "@/shared/utils/trending";
import Image from "next/image";
import Link from "next/link";

const Create = () => {
  const { setVisible } = useWalletModal();
  const { disconnect, connected } = useWallet();

  const handleConnect = () => {
    setVisible(true);
  };

  return (
    <div className="flex items-center flex-col w-screen h-screen">
      <Navbar />
      {connected ? (
        <div className="w-11/12 flex items-start flex-col">
          <h3 className="text-[2rem] clash my-10 font-semibold w-full text-left">
            Join a community
          </h3>
          <div className="between gap-10 mb-3">
            {trending.map((trend: TrendingType, index: number) => (
              <Link href="/profile" key={index} className="w-1/3 flex-col items-start flex">
                <Image
                  src={trend.img}
                  alt={`Step ${index + 1}`}
                  className="rounded-lg"
                />
                <h3 className="mt-3 mb-4 text-md font-semibold ">
                  {trend.title}
                </h3>
                <p className="">{trend.description}</p>
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <div>Connect your wallet to continue</div>
      )}
    </div>
  );
};

export default Create;
