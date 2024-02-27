import classnames from "@/shared/classnames";
import { CiMenuKebab } from "react-icons/ci";
import Image from "next/image";

export const LeaderboardTable = ({ data, classname }: any) => {
  return (
    <table
      className={classnames(
        "min-w-full divide-background divide-y-4 text-dark",
        classname
      )}
    >
      <thead>
        <tr>
          <th className="px-6 py-3 pl-10 bg-white text-left text-sm leading-4 font-semibold text-[#171714] ">
            Full name
          </th>
          <th className="px-6 py-3 bg-white text-left text-sm leading-4 font-semibold text-[#171714] ">
            Username
          </th>
          <th className="px-6 py-3 bg-white text-sm leading-4 font-semibold text-[#171714] max-w-xs text-center">
            Points
          </th>
          <th className="px-6 py-3 bg-white text-sm leading-4 font-semibold text-[#171714] max-w-xs text-center">
            Action
          </th>
        </tr>
      </thead>

      <tbody className="bg-white text-dark">
        {data?.map((item: any, index: any) => (
          <tr key={index} className="hover:bg-background cursor-pointer my-4">
            <td className=" px-4 whitespace-no-wrap text-base leading-5 font-medium my-4">
              <div className="flex gap-4 items-center">
              <Image
                        src={item.image}
                        alt="profile image"
                        width={40}
                        height={40}
                      />
                {item.fullName}
              </div>
            </td>
            <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
              {item.username}
            </td>
            <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 item-center text-center">
              {item.point}
            </td>
            <td className="px-4 py-4 whitespace-no-wrap text-sm leading-5 center">
              <CiMenuKebab />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
