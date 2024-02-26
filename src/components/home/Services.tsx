import { useState } from "react";
import SERVICES from "../../data/services.json";
import ServicesCard from "./cards/ServicesCard";

const Services:React.FC = () => {

    const [more, setMore] = useState<boolean>(false); 

    return (
        <div className="flex flex-col items-center pb-[115px]">

            <div className="xl:w-[1200px] lg:w-[1000px] w-full flex flex-col items-center">

                <h2 className="lg:text-[2.8125rem] text-[1.8125rem] text-[#300390] font-bold lg:mb-[24px] mb-[32px] text-center">Our design services</h2>

                <div className="w-full grid grid-cols-2 lg:grid-cols-6 md:grid-cols-3 items-center  mb-[36px] gap-6 lg:px-0 md:px-8 px-[20px]">

                    {SERVICES.map((props, index) => <ServicesCard key={index} {...props} />)}
                    {more && SERVICES.map((props, index) => <ServicesCard key={index} {...props} />)}


                   
                </div>

                {!more && <button className="flex flex-row items-center border-b-[1px] border-pink" onClick={() => setMore(true)}>
                    <span className="text-[#303030] text-[1.125rem] mr-[8px]">See all services</span>
                    <img src="/img/icons/arrow.svg" />
                </button>}

            </div>

        </div>
    )
}

export default Services;