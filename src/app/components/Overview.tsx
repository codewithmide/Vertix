import classnames from "@/shared/classnames";

const Overview = ({ data, classname }: any) => {

    return (
        <>
            <div className="flex flex-wrap gap-4">
                {data.map((data: any, index: number) =>
                    <div key={index} className={classnames("flex justify-between h-48 w-[48%] rounded-md text-textColor", classname)} style={{ background: data.color, color: data.color === '#171714' ? "#ffffff" : "" }}>
                        <div className="flex flex-col justify-between h-full">
                            <small className="font-medium text-md">{data.name}</small>

                            <p className="text-xxl clash font-semibold mt-3 text-[#171714] font-inter" style={{ color: data.color === '#171714' ? "#ffffff" : "" }}>{data.number}</p>
                        </div>

                    </div>)}


            </div>
        </>
    );
}

export const OverviewLoading = () => {
    return (
        <>
            <div className="flex gap-4">
                {[...new Array(3).fill(0)].map((data: any, index: number) =>
                    <div key={index} className="w-1/3 rounded-md bg-slate-200 h-40 animate-pulse" style={{ backgroundColor: data.color }}>
                        <div>
                            <p className="text-2xl font-semibold mt-3 text-[#171714] font-inter">{data.number}</p>
                        </div>
                    </div>)}
            </div>
        </>
    );
}

export default Overview;