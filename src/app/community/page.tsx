"use client";

import DashboardLayout from "../components/DashboardLayout";
import Overview, { OverviewLoading } from "@/app/components/Overview";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { overview } from "@/shared/mock/dashboard";
import { topParticipants } from "@/shared/mock/dashboard";
import Image from "next/image";

export default function Home() {
  const router = useRouter();
  const [topPersonnel, setTopPersonnel] = useState<any>({});

  return (
    <DashboardLayout path="Dashboard">
      <main className=" flex gap-3 p-2 overflow-x-hidden">
        <div className="w-2/3">
          <Overview data={overview} classname="p-4" details />
        </div>
        <div className="flex flex-col w-1/3 gap-8 bg-white p-3 px-4 rounded-lg">
          <div className="between w-full mt-3">
          <h3 className="font-bold text-md">Top participants</h3>
          <p className="text-sm">See all</p>
          </div>
          <div className="flex-col flex w-full gap-5">
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
      </main>
    </DashboardLayout>
  );
}
