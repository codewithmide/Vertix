"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./Button";
import dashboard1 from "@/assets/svgs/dashboard1.svg";
import dashboard2 from "@/assets/svgs/dashboard2.svg";
import task1 from "@/assets/svgs/task1.svg";
import task2 from "@/assets/svgs/task2.svg";
import reward1 from "@/assets/svgs/reward1.svg";
import reward2 from "@/assets/svgs/reward2.svg";
import leaderboard1 from "@/assets/svgs/leaderboard1.svg";
import leaderboard2 from "@/assets/svgs/leaderboard2.svg";
import logout from "@/assets/svgs/logout.svg";

const navLinks = [
  {
    name: "Dashboard",
    link: "/community",
    icon: dashboard1,
    activeIcon: dashboard2,
  },
  {
    name: "Challenges",
    link: "/community/challenges",
    icon: task1,
    activeIcon: task2,
  },
  {
    name: "Rewards",
    link: "/community/rewards",
    icon: reward1,
    activeIcon: reward2,
  },
  {
    name: "Leaderboard",
    link: "/community/leaderboard",
    icon: leaderboard1,
    activeIcon: leaderboard2,
  },
];

const SideNav = ({ classname, text, active }: any) => {
  const router = useRouter();

  const logoutAction = () => {
    router.push("/homepage");
  };

  return (
    <div className="min-w-[15rem] px-4 bg-white border-r-green border-r">
      <div className="sticky top-0 flex flex-col justify-between max-h-screen h-full pb-10 mt-10">
        <div className="">
          {navLinks?.map((item, index) => (
            <div
              key={index}
              onClick={() => router.push(item.link)}
              className={`px-4 py-3  cursor-pointer text-sm mb-4 flex items-center gap-2 rounded-md ${
                active === item.name
                  ? "bg-action text-white"
                  : "text-[#777373] bg-white hover:bg-lightGreen"
              }`}
            >
              <Image
                src={active === item.name ? item.activeIcon : item.icon}
                className="h-5 w-5"
                alt=""
              />
              <Link href={item.link}>{item.name}</Link>
            </div>
          ))}
        </div>

        <Button
          classname="text-red flex gap-2 items-center p-5 mt-16"
          link={logoutAction}
        >
          <Image src={logout} className="h-4 w-4 " alt="" />
          <small>Logout</small>
        </Button>
      </div>
    </div>
  );
};

export default SideNav;
