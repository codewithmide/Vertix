import {DashboardLayout} from "@/app/components/DashboardLayout";
import { rewards } from "@/shared/mock/rewards";

const Rewards = () => {
  const top5Rewards = [
    [rewards[0], rewards[1], rewards[2], rewards[3], rewards[4]], // 1st place
    [rewards[0], rewards[1], rewards[2], rewards[3]], // 2nd place
    [rewards[0], rewards[1], rewards[2]],
    [rewards[0], rewards[1]],
    [rewards[0]],
  ];

  return (
    <DashboardLayout path="Rewards">
      <main className="flex gap-3 p-2 overflow-x-hidden flex-col">
        <h2 className="text-2xl font-semibold mb-4">Top 5 Performer Rewards</h2>
        {top5Rewards.map((positionRewards, index) => (
          <div key={index} className="mb-3">
            <h3 className="font-semibold">Place {index + 1}</h3>
            <div className="flex gap-2">
              <h3 className="">Reward:</h3>
              <ul className="flex">
                {positionRewards.map((reward, i) => (
                  <li key={i} className="mr-1">
                    {reward.name},{" "}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </main>
    </DashboardLayout>
  );
};

export default Rewards;
