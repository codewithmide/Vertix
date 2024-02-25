"use client";

import { useState } from "react";
import { FileUpload, Input } from "../components/FormComponent";
import Navbar from "../components/Navbar";
import image from "next/image";
import Link from "next/link";
import { useWallet } from "@solana/wallet-adapter-react";
import Image from "next/image";
import walletIcon from "@/assets/svgs/wallet.svg";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import mask from "../../../public/images/Mask4.png"

interface FormData {
  name: string;
  images: string[];
}

const Create = () => {
  const { setVisible } = useWalletModal();
  const { disconnect, connected } = useWallet();

  const [formData, setFormData] = useState<FormData>({
    name: "",
    images: [],
  });

  const handleConnect = () => {
    setVisible(true);
  };

  const handleChange = (label: any, data: any) => {
    const newData = {
      ...formData,
      [label]: data,
    };

    setFormData(newData);
    console.log("Form Data", formData);
  };

  const handleFileChange = (e: any, imgIndex: number) => {
    const selectedFile = e.target.files[0];
  };

  return (
    <div className="flex items-center flex-col w-screen h-screen">
      <Navbar />
      <div className="w-11/12 flex items-center flex-col">
          <h3 className="font-medium text-[1.5rem] mt-10 mb-6">
            Create a community
          </h3>
          <div className="w-[30%] h-[150px] flex flex-col gap-5">
            <FileUpload handleFileChange={(e: any) => handleFileChange(e, 0)} />
            <Input
              onChange={(e) => handleChange("name", e.target.value)}
              value={formData.name}
              label="Community name"
              placeholder="Enter community name"
              classname="mb-6 text-[#484444]"
              type="text"
            />
            {connected ? (
              <Link
                href="/community"
                className="p-3 bg-green border-green border-2 hover:scale-95 duration-300 transition-all text-sm text-white center gap-3"
              >
                Create community
              </Link>
            ) : (
              <div
                onClick={handleConnect}
                className="center gap-2 bg-green text-white p-3 rounded-md text-[.9rem] hover:scale-95 duration-300 transition-all"
              >
                <p>Connect Wallet</p>
                <Image
                  src={walletIcon}
                  alt="walllet icon"
                  height={16}
                  width={16}
                />
              </div>
            )}
          </div>
        </div>
    </div>
  );
};

export default Create;
