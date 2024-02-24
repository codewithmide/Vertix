import wallet2 from "@/assets/svgs/wallet2.svg";
import create from "@/assets/svgs/create.svg";
import launch from "@/assets/svgs/launch.svg";
import add from "@/assets/svgs/add.svg";
import { StepType } from "@/types/steps.types";

export const steps: StepType[] = [
  {
    icon: wallet2,
    title: "Connect your wallet",
    description: "Start by connecting your wallet by clicking the wallet icon in the top right corner.",
  },
  {
    icon: create,
    title: "Create a community",
    description: `Click on "Create community" to set up your community. Add tasks, social links, description, banner image, and invite members.`,
  },
  {
    icon: add,
    title: "Add your cNFTs reward",
    description: `Upload your work (image, video, or 3D art), and customize your NFTs with properties, stats, and unlockable content.`,
  },
  {
    icon: launch,
    title: "Launch the Challenge!",
    description: `Invite participants, set start and end dates, track progress, and award cNFTs to winners`,
  },
];
