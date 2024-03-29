import { useEffect, useState } from "react";

interface IFaqCardProps {
    title: string,
    description: string,
    bottom?: boolean
    opened?: boolean
}

const FaqCard:React.FC<IFaqCardProps> = ({
    title,
    description,
    bottom,
    opened
}) => {

    /** STATES **/
    const [openDescription, setOpenDescription] = useState<boolean>(false);

    // if opened is true then open it
    useEffect(() => {
        if (opened) {
            setOpenDescription(true);
        }
    }, []);

    return (
        <div className={`mb-[${(bottom || openDescription) ? "0":"20px"}] overflow-hidden`}>
            <button onClick={() => setOpenDescription(state => !state)} className={`flex flex-row items-center justify-between bg-[#F4EFFF] p-[20px] w-full`}>
                <p className="lg:text-[1.375rem] text-[1rem] text-main w-[85%] text-left">{title}</p>

                <div className="">
                    <img loading="lazy" className="" src={openDescription ? "/img/icons/minus.svg":"/img/icons/plus.svg"} />
                </div>
            </button>
            {openDescription && (
                <div className={`p-[20px] inset-x-0 duration-200 ease-out transition`}>
                    <p className="text-[#303030]">{description}</p>
                </div>
            )}
        
            {/* <div className={`${openDescription ? "relative top-0 h-auto":"absolute top-0 h-0"} p-[20px] duration-1000 ease-out transition`}>
                <p className="text-[#303030]">{description}</p>
            </div> */}

        </div>
    )
}

export default FaqCard;