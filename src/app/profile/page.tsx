"use client";

import {DashboardProfileLayout} from "../components/DashboardLayout";
import Overview, { OverviewLoading } from "@/app/components/Overview";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { overview } from "@/shared/mock/dashboard";
import { topParticipants } from "@/shared/mock/dashboard";
import Image from "next/image";
import bannerNFT from "../../../public/images/bannerNft.png";
import { CopyToClipboard } from "../components/Copy&Paste";

export default function Home() {
  const router = useRouter();
  const [topPersonnel, setTopPersonnel] = useState<any>({});

  const referralLink: string | undefined = "https://vertix.com/community-name/id?=123748";

  return (
    <DashboardProfileLayout path="Dashboard">
      <main className=" flex flex-col gap-5 p-2 overflow-x-hidden">
        <div className="between px-3 w-full gap- bg-lightGreen text-green p-2 rounded-xl">
          <p
            className="text-ellipsis overflow-hidden whitespace-nowrap"
            id={referralLink}
          >
            {referralLink}
          </p>
          <div className="center gap-2">
            <CopyToClipboard targetId={String(referralLink)} />
          </div>
        </div>

        <div className="flex between w-full">
          <div
            className="w-2/3 h-[335px] rounded-lg flex justify-start items-end p-10"
            style={{
              backgroundImage: `url(/images/bannerNft.png)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="bg-[#d4d4d496] h-[65%] flex-col gap-5 flex text-white w-[70%] rounded-2xl p-5 border border-[#1B2262]">
              <div className="between">
                <div className="flex flex-col gap-1">
                  <p className="text-md font-bold">18h : 17m : 29s</p>
                  <p>Time remaining</p>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-md font-bold">185 SOL</p>
                  <p> </p>
                </div>
              </div>
              <div className="bg-[#1B2262] text-sm rounded-[1.8rem] text-center cursor-pointer hover:scale-95 transition-all duration-300 p-3">
                Rewards countdown
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[31%] gap-6 bg-white p-3 px-4 rounded-lg">
            <div className="between w-full mt-3">
              <h3 className="font-bold text-md">Top participants</h3>
              <p className="text-sm">See all</p>
            </div>
            <div className="flex-col flex w-full gap-3">
              {topParticipants.map((top: any, index: number) => (
                <div key={top.position} className="center gap-5 w-full">
                  <div className="font-semibold text-md">{top.position}.</div>
                  <div className="w-full flex gap-2">
                    <div className="rounded-full">
                      <Image
                        src={top.image}
                        alt="profile image"
                        width={40}
                        height={40}
                      />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-sm font-semibold">{top.fullName}</p>
                      <p className="text-[0.7rem]">@{top.username}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Overview data={overview} classname="p-4" details />
      </main>
    </DashboardProfileLayout>
  );
}
