import { useMemo } from "react";
import { IBasicFormProp } from "../../firststep/interface";


interface IPlanCardProps extends IBasicFormProp {
    id: string,
    title: string,
    list: Array<string>,
    original_cost?: number,
    cost: number,
    popular?: boolean,
    odd: boolean,
}

const PlanCard:React.FC<IPlanCardProps> = ({
    title,
    list,
    original_cost,
    cost,
    popular,
    odd,
    form,
    setForm
}) => {

    // check if selected
    const selected = useMemo(() => {
        return form.service === title
    }, [form.service])

    // handle on press
    const handle_press = ():void => {
        setForm({
            ...form,
            service: title,
            cost: cost
        })
    }

    return (
        <div className={`border ${odd ? "border-[#CACACA]":"border-pink"} relative lg:w-[32%] md:w-[70%] w-full rounded-[4px] mb-12 lg:mb-0 transition-all ${selected && "shadow-xl scale-105"}`}>

            {popular && (
                <div className="absolute w-[60%] text-center bg-sub text-white text-[#0.875] px-[14px] pt-[6px] rounded-t-[6px] left-[50%] translate-x-[-50%] bottom-[100%] ">
                {/* <div className="absolute bg-sub text-white text-[#0.875] px-[14px] pt-[12px] rounded-t-[6px]"> */}
                    MOST POPULAR
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

                <button onClick={handle_press} className={`w-full font-bold text-sub border border-sub rounded-[4px] py-3 hover:bg-sub hover:text-white active:scale-[99%] active:opacity-95 ${selected ? "bg-sub text-white":""}`}>
                    {selected ? "SELECTED!":"SELECT"}
                </button>
                

            </div>

        </div>
    )
}

export default PlanCard;