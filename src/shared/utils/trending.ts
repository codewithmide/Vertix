import wallet2 from "@/assets/svgs/wallet2.svg";
import Ecosystem from "../../../public/images/ecosystem.png";
import Mask from "../../../public/images/mask.png";
import Mask2 from "../../../public/images/mask2.png";
import Mask3 from "../../../public/images/mask3.png";
import Saga from "../../../public/images/saga.gif"
import Lenpost from "../../../public/images/lenpost.webp"
import { TrendingType } from "@/types/trending.types";

export const trending: TrendingType[] = [
  {
    img: Ecosystem,
    mask: Mask,
    title: "Solana Ecosystem Call: Feb (SEC24)",
    owner: "Solana",
    description:
      "This exclusive Ecosystem POAP symbolizes your active participation and contribution to the last Solana ecosystem call.",
  },
  {
    img: Lenpost,
    mask: Mask2,
    title: "Lenspost Access Pass (LPAP)",
    owner: "Souravwpap",
    description:
      "ETHEREALS are 12,345 hand drawn, randomly generated, interdimensional ghosts. Their traits are pulle...",
  },
  {
    img: Saga,
    mask: Mask3,
    title: "SAGABOX.io Community Drop",
    owner: "Frensware",
    description:
      "Avengaer are 12,345 hand drawn, randomly generated, interdimensional ghosts. Their traits are pulle...",
  },
];
