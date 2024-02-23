interface IPlanCardProps {
    id: string,
    title: string,
    list: Array<string>,
    original_cost?: number,
    cost: number,
    popular?: boolean,
    odd: boolean
}

const PlanCard:React.FC<IPlanCardProps> = ({
    title,
    list,
    original_cost,
    cost,
    popular,
    odd
}) => {
    console.log(original_cost);

    return (
        <div className={`border ${odd ? "border-[#CACACA]":"border-pink"} relative md:w-[32%] w-full rounded-[4px] overflow-hidden`}>

            {popular && (
                <div className="absolute">
                </div>                
            )}

            <div className={`${odd ? "bg-sub":"bg-pink"} rounded-[4px]`}>
                <h3 className="text-white text-[1.875rem] font-bold py-[16px] text-center">{title}</h3>
            </div>

            <div className="px-[17px] py-[20px]">

                <div>
                    {list.map((item, index) => (
                        <p className="text-[#545454] mb-1" key={index}>{item}</p>
                    ))}
                </div>

                <div className="h-[1px] bg-[#CACACA] w-[95%] mx-auto my-5"></div>

                <div className="flex flex-row items-center mb-3">
                    {original_cost && <span className="mr-2 text-pink font-bold line-through">US${original_cost}</span>}

                    <span className="text-[#545454] font-bold text-[1.25rem]">US${cost}</span>
                </div>

                <button className="w-full font-bold text-sub border border-sub rounded-[4px] py-3 hover:bg-sub hover:text-white active:scale-[99%] active:opacity-95">
                    SELECT
                </button>
                

            </div>

        </div>
    )
}

export default PlanCard;