import { StaticImageData } from "next/image";

export type TrendingType = {
    img: StaticImageData;
    mask: StaticImageData;
    title: string;
    owner: string;
    description: string;
  };
  
  export type TrendingListType = TrendingType[];
  