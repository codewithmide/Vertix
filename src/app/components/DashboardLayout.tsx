"use client"

import SideNav from "@/app/components/SideNav";
import { Input } from "./FormComponent";
import searchIcon from '@/assets/svgs/search.svg'
import Image from "next/image";
import Logo from "./Logo";
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import CustomConnectButton from "./CustomConnectButton";



const DashboardLayout = ({ children, path, onSearch }: any) => {
    const router = useRouter();
    const pathName = usePathname();


    return (
        <main className="h-[100%] overflow-hidden flex flex-col text-dark relative">

            <div className="md:hidden h-full w-full absolute bg-white z-50 flex items-center justify-center">
                <div className="px-4">
                    <h1 className='text-xl lg:text-2xl font-bold text-action mb-2'>
                        Mobile Devices Not Supported for Dashboard
                    </h1>
                    <p className="text-base lg:text-xl max-w-xs">
                        For Best experience, use a desktop device
                    </p>
                </div>
            </div>

            <div className="flex items-center w-full px-5 pt-5 justify-start bg-white p-2">
                <div className="min-w-[15rem] px-4">
                    <Logo />
                </div>

                <div className="flex items-center w-full pr-5 justify-between">
                    <div className="flex items-center w-1/2">
                        <p className="font-semibold text-md mx-4 mr-8">{path}</p>
                        {path === "Dashboard" || path === "Profile" ? "" : (
                            <Input
                            type="mainSearch"
                            preIcon={searchIcon}
                            placeholder={`Search for ${path?.toLowerCase()}`}
                            onChange={(e: { target: { value: any; }; }) => onSearch(e.target.value)}
                            classname="w-full" />
                        )}
                    </div>

                    <CustomConnectButton />
                </div>

            </div>

            <main className="w-full bg-background flex flex-row" style={{ height: "calc(100vh - 90px" }}>
                <SideNav active={path} />
                <div className=" bg-secondary p-4 w-full overflow-scroll overflow-x-hidden">
                    {children}
                </div>
            </main>
        </main>
    );
}

export default DashboardLayout;