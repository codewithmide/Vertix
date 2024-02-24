"use client"

import Image from "next/image";
import qr from "../../../public/images/qr.png"
import appstore from "../../../public/images/AppStore.png"
import playstore from "../../../public/images/GooglePlay.png"

const Footer = () => {
    return (
        <footer className="bg-lightGreen w-full center gap-10 p-10 mt-16">
            <div className="flex flex-col w-1/4 gap-3">
                <h2 className="text-lg font-medium clash leading-none">Download the Vertix app to earn cNFTs</h2>
                <div className="flex gap-4">
                    <Image src={appstore} alt="appstore" className="object-contain" />
                    <Image src={playstore} alt="playstore" className="object-contain" />
                </div>
            </div>
            <div>
                <Image src={qr} alt="qr code" />
            </div>
            <div className="flex flex-col w-1/4 gap-3">
                <h2 className="text-lg font-medium clash leading-none">Download the Vertix app to earn cNFTs</h2>
                <div className="flex gap-4">
                    <Image src={appstore} alt="appstore" className="object-contain" />
                    <Image src={playstore} alt="playstore" className="object-contain" />
                </div>
            </div>
        </footer>
    );
}
 
export default Footer