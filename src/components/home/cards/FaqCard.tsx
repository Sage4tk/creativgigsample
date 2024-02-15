import { useState } from "react";

interface IFaqCardProps {
    title: string,
    description: string,
    bottom?: boolean
}

const FaqCard:React.FC<IFaqCardProps> = ({
    title,
    description,
    bottom
}) => {

    /** STATES **/
    const [openDescription, setOpenDescription] = useState<boolean>(false);

    return (
        <div className={`mb-[${(bottom || openDescription) ? "0":"20px"}] overflow-hidden`}>
            <button onClick={() => setOpenDescription(state => !state)} className={`flex flex-row items-center justify-between bg-[#F4EFFF] p-[20px] w-full`}>
                <p className="text-[1.375rem] text-main">{title}</p>

                <div>
                    <img src={openDescription ? "/img/icons/minus.svg":"/img/icons/plus.svg"} />
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