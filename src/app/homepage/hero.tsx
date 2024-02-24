"use client";

import { Button } from "../components/Button";
import Image from "next/image";
import Join from "@/assets/svgs/join.svg";
import Build from "@/assets/svgs/build.svg";
import { steps } from "@/shared/utils/steps";
import { StepType } from "@/types/steps.types";
import { TrendingType } from "@/types/trending.types";
import { trending } from "@/shared/utils/trending";


const Hero = () => {
  return (
    <div className="w-11/12 flex-col gap-10 center">
      <div className="flex-col center w-11/12 mt-10">
        <h1 className="text-xxxl clash font-black">
          Learn. <span className="text-green">Challenge.</span> Earn.
        </h1>
        <p className="text-center w-11/12">
          Learning doesn't have to be boring. Vertix makes it fun, engaging, and
          rewarding with gamified tasks, clear goals, and rewards. Vertix
          leverages the power of the{" "}
          <span className="text-green font-bold">Solana blockchain</span> and{" "}
          <span className="text-green font-bold">cNFTs</span> to reimagine
          learning and reward achievement.
        </p>
        <div className="between gap-6 mt-6">
          <Button
            link="#"
            classname="bg-green border-green border-2 hover:scale-95 duration-300 transition-all rounded-lg text-white center gap-3"
          >
            <p>Join community</p>
            <Image src={Join} alt="join icon" width={20} height={20} />
          </Button>
          <Button
            link="#"
            classname="bg-white rounded-lg text-green border-green border-2 center hover:scale-95 duration-300 transition-all flex gap-2"
          >
            <p>Create community</p>
            <Image src={Build} alt="join icon" width={20} height={20} />
          </Button>
        </div>
      </div>
      <div className="w-full center">
        <img src="images/hero.png" alt="hero" />
      </div>
      <h2 className="text-[2rem] clash mt-16 font-semibold w-full text-left ">
        Create <span className="text-green">community</span> and reward members
        with <span className="text-green">cNFTs</span>
      </h2>
      <div className="between gap-10 my-8">
        {steps.map((step: StepType, index: number) => (
          <div key={index} className="w-1/4 h-[150px] flex-col items-start flex">
            <Image
              src={step.icon}
              alt={`Step ${index + 1}`}
              className="step-icon"
            />
            <h3 className="mt-3 mb-4 font-semibold ">{step.title}</h3>
            <p className="text-sm">{step.description}</p>
          </div>
        ))}
      </div>
      <h2 className="text-[2rem] clash mt-16 font-semibold w-full text-left">
        Trending <span className="text-green">community</span> 
      </h2>
      <div className="between gap-10 mb-3">
        {trending.map((trend: TrendingType, index: number) => (
          <div key={index} className="w-1/3 flex-col items-start flex">
            <Image
              src={trend.img}
              alt={`Step ${index + 1}`}
              className="rounded-lg"
            />
            <h3 className="mt-3 mb-4 text-md font-semibold ">{trend.title}</h3>
            <p className="">{trend.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
