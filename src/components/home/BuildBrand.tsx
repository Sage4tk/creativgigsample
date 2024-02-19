import brand_data from "../../data/brand.json";
import BuildBrandCard from "./cards/BuildBrandCard";

const BuildBrand:React.FC = () => {
    return (
        <div className="flex flex-col items-center pt-[102px] pb-[125px] bg-[#FFF8FF]">
 
            <div className="xl:w-[1200px] lg:w-[1000px] w-full flex flex-col items-center">

                <h3 className="lg:text-[2.8125rem] text-center text-[1.8125rem] text-main font-bold mb-[33px]">Build a brand your customers love</h3>

                <div className="flex lg:flex-row flex-col flex-wrap items-center">

                   {brand_data.map(props => <BuildBrandCard key={props.title} {...props} />)}

                </div>

            </div>

        </div>
    )
}

export default BuildBrand;