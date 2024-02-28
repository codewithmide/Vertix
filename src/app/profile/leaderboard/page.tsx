import {DashboardProfileLayout} from "@/app/components/DashboardLayout";
import { LeaderboardTable } from "./components/LeaderboardTable";
import { topParticipants } from "@/shared/mock/dashboard";

const Task = () => {
  return (
    <DashboardProfileLayout path="Leaderboard">
      <main className=" flex gap-3 p-2 overflow-x-hidden">
        <LeaderboardTable classname="mt-8" data={topParticipants} />
      </main>
    </DashboardProfileLayout>
  );
};

export default Task;
