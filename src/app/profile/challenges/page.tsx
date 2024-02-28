"use client";

import { DashboardProfileLayout } from "@/app/components/DashboardLayout";
import classnames from "@/shared/classnames";
import { challenges } from "@/shared/mock/challenges";

const Task = () => {

  return (
    <DashboardProfileLayout path="Challenges">
      <main className="flex-col flex gap-6 p-2 overflow-x-hidden">
        <div className="w-full flex flex-wrap between gap-4">
          {challenges.map((challenge: any, index: number) => (
            <div
              key={index}
              className={classnames(
                "flex justify-between flex-col min-h-[13rem] p-4 w-[32%] rounded-md text-textColor",
                classnames
              )}
              style={{
                background: challenge.color,
                color: challenge.color === "#171714" ? "#ffffff" : "",
              }}
            >
              <div className="flex flex-col justify-between h-full">
                <small className="font-semibold text-md">
                  {challenge.title}
                </small>
                <p className="text-sm mt-3 text-[#121212]">{challenge.desc}</p>
              </div>
              <p className="text-md">Duration: {challenge.duration}</p>
            </div>
          ))}
        </div>
      </main>
    </DashboardProfileLayout>
  );
};

export default Task;
