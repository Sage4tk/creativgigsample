import data from "../../data/howdata.json";
import BodyCard from "./cards/BodyCard";

const Body:React.FC = () => {
    return (
        <div className="flex flex-col items-center">

            <div id="main_body" className="xl:w-[1200px] lg:w-[1000px] w-full flex flex-col items-center relative pt-[100px] pb-[60px]">

                {data.map((item, index) => (
                    <BodyCard {...item} reversed={index % 2 === 0} />
                ))}
                
                <p className="text-center text-[#303030] text-[0.875rem] w-[70%] leading-7">Choose Creative Gig's Custom Business Card Design Service and unlock the potential of your brand. Let our team of skilled designers transform your ideas into captivating designs that set you apart from the competition. Contact us today to embark on the journey of creating extraordinary business cards that leave a lasting impression.</p>
            </div>
        </div>
    )
}

export default Body;